const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'eval',
  run: async(client, message, args) => {

    if(!message.author.id === "854005586177687552"){
      let embed = new MessageEmbed()
        .setTitle("**DEVs Commands**")
        .setColor('#ff0000')
        .setDescription("```yaml\nThis commands is limited to the bot's DEVs only!```")
        .setFooter('This message will disappears in 10 seconds.')
        .setThumbnail(message.author.displayAvatarURL())

      return message.reply({ embeds: [embed] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })  
    } try {
      const code = args.join(" ");

      if(!code){
        let embed2 = new MessageEmbed()
          .setTitle("**DEVs Commands**")
          .setColor('#ffffff')
          .setThumbnail(message.author.displayAvatarURL())
          .setDescription("```yaml\nWhat do you want to evaluate?```")
          .setTimestamp()

        return message.reply({ embeds: [embed2] })  
      }

      let evaled = eval(code);

      if(typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      let finalEmbed = new MessageEmbed()
        .setTitle("**DEVs Commands**")
        .setAuthor("EVAL", message.author.displayAvatarURL())
        .addFields(
          {
            name: 'Input',
            value: `\`\`\`js\n${code}\`\`\``
          },
          {
            name: 'Output',
            value: `\`\`\`${evaled}\`\`\``
          }
        )
        .setColor('GREEN')
        .setTimestamp()

      message.reply({ embeds: [finalEmbed] })  
    } catch (err) {
      let errEmbed = new MessageEmbed()
        .setTitle('**DEVs Commands**')
        .setAuthor("EVAL", message.author.displayAvatarURL())
        .addFields(
          {
            name: "ERROR",
            value: `\`\`\`yaml\n${err}\`\`\``
          }
        )
        .setColor('ff0000')
      message.channel.send({ embeds: [errEmbed] });
    }
  }
}