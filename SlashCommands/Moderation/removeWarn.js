const warnModel = require('../../models/warnModel');
const {
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'remove-warn',
    description: "remove a warn using an id",
    userPermissions: ["MANAGE_MESSAGES"],
    options: [{
        name: 'warnid',
        description: "warnId that you want to remove",
        type: "STRING",
        required: true,
    }, ],
    run: async (client, interaction) => {

      const errchannel = client.channels.cache.get('887731502291492914');

        const warnId = interaction.options.getString('warnid');

        try {
            const data = await warnModel.findById(warnId);

            if (!data)
                return interaction.followUp({
                    content: `\`\`\`yaml\n${warnId}\n\`\`\`\n **is not a valid id**`,
                    ephemeral: true
                });

            data.delete();

            const user = interaction.guild.members.cache.get(data.userId);
            user.send({
                embeds: [
                    new MessageEmbed()
                    .setTitle('**Warnings...**')
                    .setColor('#ffff00')
                    .setThumbnail(interaction.user.displayAvatarURL())
                    .setDescription('1 on you warning has been removed')
                    .addFields({
                        name: 'In Server :',
                        value: `\`\`\`yaml\n${interaction.guild.name}\n\`\`\``,
                    }, {
                        name: 'By moderator :',
                        value: `\`\`\`yaml\n${interaction.user.tag}\n\`\`\``,
                    })
                    .setTimestamp()
                ]
            }).catch(console.log)
            return interaction.followUp({
                embeds: [
                    new MessageEmbed()
                    .setTitle('**Warnings...**')
                    .setDescription(`Removed 1 of **${user}'s** warning!`)
                    .setColor('#ff0000')
                    .setTimestamp()
                    .addFields({
                        name: 'Moderator :',
                        value: `\`\`\`yaml\n${interaction.user.tag}\n\`\`\``,
                    }, )
                ]
            });
        } catch (err) {
            errchannel.send({
                content: `\`\`\`js\n${err}\n\`\`\`in guild ${interaction.guild.name}\n guild id ${interaction.guildId}`
            })
            interaction.followUp({
              content: `\`\`\`yaml\n${warnId}\n\`\`\`\n **is not a valid id**`,
              ephemeral: true
            })
        }
    }
}