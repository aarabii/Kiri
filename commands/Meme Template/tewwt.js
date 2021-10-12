const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
module.exports = {
    name: "tweet",
    description: "tweet something on twitter!",
    category: "fun",
    usage: "tweet <txt>",
    run: async(client, message, args) => {

      const text = message.content.split(' ').slice(1).join(' ');

    if(!text)
      return message.reply({
        embeds: [
            new MessageEmbed()
              .setTitle('**Tweet**')
              .setDescription('```yaml\nError: Please provide some text```')
              .addFields(
                {
                  name: '```Example :```',
                  value: '.tweet tweet tweet.'
                }
              )
              .setColor('#ff0000')
        ]
      })

        fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${message.author.username}&text=${text}`)
        .then((res) => res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setTitle("<:twitter:890252878780977243> Tweeted!")
            .setImage(`${data.message}`)
            .setColor('BLUE')
            .setTimestamp()
            message.channel.send({embeds: [embed]})
        })
    }
}