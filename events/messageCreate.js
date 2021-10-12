const Discord = require('discord.js')
const client = require("../index");
const prefix = '.' || `${client.user.id}`;

client.on("messageCreate", async (message) => {

    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(prefix.length)
        .trim()
        .split(" ");

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(client, message, args);

    process.setMaxListeners(0);
    process.on("unhandledRejection",async(reason,promise)=>{
      let ch
      try {
        ch = client.channels.cache.get('887731502291492914')
          return ch.send({
            embeds: [
              new Discord.MessageEmbed()
                .setTitle('**unhandledRejection**')
                .setColor('GREEN')
                .addFields(
                  {
                    name: 'Error :',
                    value: `\`\`\`yaml\n${Promise.resolve(promise)}\n\`\`\``,
                  },
                  {
                    name: 'Reason :',
                    value: `\`\`\`js\n${reason.stack || reason}\n\`\`\``,
                  }
                )
                .setTimestamp()
            ]
          })
      } catch {
        return ch.send({
          embeds: [
            new Discord.MessageEmbed()
              .setTitle('**unhandledRejection**')
              .setColor('#ff0000')
              .setDescription(`\`\`\`js\n${reason}\n\`\`\``)
              .setTimestamp()
          ]
        })
      }
    })
});
