const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'biden-tweet',
  aliases: ['biden'],
  run: async(client, message, args) => {

    const tweet = message.content.split(" ").slice(1)

    if(!tweet)
      return message.reply({
        embeds: [
            new MessageEmbed()
              .setTitle('**Biden Tweet**')
              .setDescription('```yaml\nError: Please provide some text```')
              .addFields(
                {
                  name: '```Example :```',
                  value: '.biden Trump sucks.'
                }
              )
              .setColor('#ff0000')
        ]
      }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })

    let embed = new MessageEmbed()
      .setImage(`https://api.popcat.xyz/biden?text=${tweet}`)
    
    message.reply({
      embeds: [embed]
    })
        
  }
}