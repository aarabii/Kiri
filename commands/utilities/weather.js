const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const mySecret = process.env['weatherKey'];

module.exports = {
  name: 'weather',
  run: async(client, message, args) => {

    const location = message.content.split(' ').slice(1).join(' ');

    if(!location)
      return message.reply({
        embeds: [
          new MessageEmbed()
            .setTitle('**🌥️ Weather**')
            .setColor('#ffffff')
            .setDescription('Please provide a location!')
            .setFooter('| This message will disappear in 10 seconds')
        ]
      }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      });

    await fetch(`http://api.weatherapi.com/v1/current.json?key=${mySecret}&q=${location}`)
      .then(res => res.json())
      .then(json => {

        let embed1 = new MessageEmbed()
          .setTitle('**🌥️ Weather**')
          .setColor('#ffff00')
          .addFields(
            {
              name: 'Location Data',
              value: `**Location :** ${json.location.name}\n**Country :** ${json.location.country}\n**Region :** ${json.location.region}`,
              inline: true
            },
            {
              name: 'Current Condation',
              value: `**Condation :** ${json.current.condition.text}\n**Humidity :** ${json.current.humidity}`,
              inline: true
            },
            {
              name: 'Current Temperature',
              value: `**(°C) :** ${json.current.temp_c}\n**(°F) :** ${json.current.temp_f}`,
              inline: true
            },
            {
              name: 'Wind rate',
              value: `**KPH :** ${json.current.wind_kph}\n**MPH :** ${json.current.wind_mph}`,
              inline: true
            },
            {
              name: 'Feels Like',
              value: `**(°C) :** ${json.current.feelslike_c}\n**(°F) :** ${json.current.feelslike_f}`,
              inline: true
            }
          )

        message.reply({ embeds: [embed1] })  
      })
      .catch((err) => {
        let embed2 = new MessageEmbed()
          .setTitle('**🌥️ Weather**')
          .setColor('ff0000')
          .setDescription(`**Unable to find**\`\`\`yaml\n${location}\n\`\`\``)
          .setFooter('| This message will disappear in 10 seconds |')
          .setTimestamp()

        message.reply({ embeds: [embed2] }).then(m => {
          setTimeout(() => {
            m.delete()
          }, 10000)
        });
      })


  }
}