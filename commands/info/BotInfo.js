const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const moment = require('moment');

module.exports = {
  name: 'botinfo',
  aliases: ['bot-info','bi'],
  run: async(client, message, args) => {

    const Servers = client.guilds.cache.size.toLocaleString();
    const Members = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString();

    const Creation = moment(client.user.createdAt).format('MMMM Do YYYY, h:mm:ss a');
    const Runtime = moment(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

  const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setLabel('Invite KirI')
        .setStyle('LINK')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=890100719930179655&permissions=8&scope=bot%20applications.commands')
    )    

    const embed = new MessageEmbed()
      .setAuthor(client.user.tag, client.user.displayAvatarURL())
      .setURL(client.web)
      .setTitle('Bot Informat!on')
      .setColor('GREEN')
      .setDescription('```yaml\nMy complete informat!on```')
      .setTimestamp()
      .setThumbnail(client.user.displayAvatarURL())
      .addFields(
        {
          name: 'Client name :',
          value: `\`\`\`${client.user.tag}\`\`\``,
          inline: true
        },
        {
          name: 'Client Id :',
          value: `\`\`\`${client.user.id}\`\`\``,
          inline: true
        },
        {
          name: 'Client Version :',
          value: `\`\`\`0.1.18\`\`\``,
          inline: true
        },
        {
          name: 'NodeJs Version :',
          value: `\`\`\`${process.version}\`\`\``,
          inline: true
        },
        {
          name: 'DiscordJs Version',
          value: `\`\`\`13.1.0\`\`\``,
          inline: true
        },
        {
          name: 'Ping :',
          value: `\`\`\`${client.ws.ping} Ms\`\`\``,
          inline: true
        },
        {
          name: 'Commands :',
          value: `\`\`\`${client.commands.size} Commands\`\`\``,
          inline: true
        },
        {
          name: 'Platform :',
          value: `\`\`\`${process.platform}\`\`\``,
          inline: true
        },
        {
          name: 'Memory',
          value: `\`\`\`${process.memoryUsage().heapUsed / 1024 / 1024} Bytes\`\`\``,
          inline: true
        },
        {
          name: 'Runtime :',
          value: `\`\`\`yaml\n${Runtime} Ms\n\`\`\``,
        },
        {
          name: 'Serving :',
          value: `\`\`\`yaml\n${Servers} Servers with ${Members} Members\n\`\`\``,
        },
        {
          name: 'Created at :',
          value: `\`\`\`yaml\n${Creation}\n\`\`\``,
        },
      )
      .setFooter('OwnerId : <@854005586177687552>')

    message.reply({ embeds: [embed], components: [row] })  
  }
}