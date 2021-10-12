const { MessageEmbed, Message } = require("discord.js");
const moment = require('moment');
const image = require('../../Data/MediaData/ping.json')

module.exports = {
  name: "ping",
  description: "returns websocket ping",
  run: async (client, interaction, args) => {

    const Loading = 'https://cdn.discordapp.com/attachments/890100498508697620/892787033083346944/a5a8318c9abc50a09f836028a41c6985.gif';
    const Ping = client.ws.ping;
    const Runtime = moment(client.uptime).format('LTS');
    const Images = image[Math.floor(Math.random() * image.length)]

    let Color;
    if(Ping <= 300){
      Color = '#00ff00'
    };
    if(Ping > 300 && Ping < 600){
      Color = '#ffff00'
    };
    if(Ping >= 600 && Ping < 900){
      Color = '#ffa500'
    }
    if(Ping >= 900){
      Color = '#ff0000'
    };

    interaction.channel.send({
      embeds: [
        new MessageEmbed()
          .setTitle('🏓 Pong')
          .setDescription('***Loading Data...***')
          .setThumbnail(Loading)
          .setColor('#ffffff')
      ]
    }).then(m => {
      setTimeout(() => {
        m.delete()
        interaction.followUp({
          embeds: [
            new MessageEmbed()
              .setTitle('🏓 Pong')
              .setColor(Color)
              .addFields(
                {
                  name: 'Websocket heartbeat',
                  value: `\`\`\`yaml\n${Ping} Ms\`\`\``,
                  inline: true
                },
                {
                  name: 'Roundtrip latency',
                  value: `\`\`\`yaml\n${m.createdTimestamp - interaction.createdTimestamp} Ms\`\`\``,
                  inline: true
                },
                {
                  name: 'Run-Time',
                  value: `\`\`\`yaml\n${Runtime} UTC\`\`\``,
                  inline: true
                }
              )
              .setTimestamp()
              .setThumbnail(Images)
          ]
        })
      }, 1000)
    })
  },
};
