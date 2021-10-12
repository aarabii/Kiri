const client = require("../index");
const { MessageEmbed } = require('discord.js')

client.on("interactionCreate", async (interaction) => {
    // Slash Command Handling
    if (interaction.isCommand({ ephemeral: false })) {
        await interaction.deferReply().catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd)
            return interaction.followUp({ content: "An error has occured " });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);
        
        if(!interaction.member.permissions.has(cmd.userPermissions || []))
          return interaction.followUp({
            embeds: [
              new MessageEmbed()
                .setDescription(`❌ You don't have permission to use this command!\n**Missing Permission :** \`\`\`yaml\n${cmd.userPermissions}\`\`\` `)
            ],
            ephemeral: true
          });

        cmd.run(client, interaction, args);
    }
    

    // Context Menu Handling
    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: false });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }
});
