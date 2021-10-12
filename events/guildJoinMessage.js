const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const client = require("../index");

client.on('guildCreate', async guild => {

  const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setLabel('Invite KirI')
        .setStyle('LINK')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=890100719930179655&permissions=8&scope=bot%20applications.commands')
    )

  let ChannelTOSend;

    guild.channels.cache.forEach(channel => {

      if(
          channel.type === 'GUILD_TEXT' &&
          !ChannelTOSend &&
          channel.permissionsFor(guild.me).has('SEND_MESSAGES')
      )

      ChannelTOSend = channel;

    })

    if(!ChannelTOSend)
      return;

    ChannelTOSend.send({
      embeds: [
        new MessageEmbed()
          .setAuthor('Touka Kirishima', client.user.displayAvatarURL())
          .setColor('#ffff1a')
          .setTitle('**Hi! Thanks for inviting me to your lovely server! ❤️**')
          .setThumbnail('https://cdn.discordapp.com/attachments/890100498508697620/890100534982348830/3a142da56e6d3a5bacb1c81d395df506.jpg')
          .setTimestamp()
          .setFooter('Created by <@854005586177687552>')
          .setDescription('*No dashboard is required! You can set up every function within your Discord client by running the corresponding command.*\n• Just write `.help` or `/help` to get an overview of all my commands and features\n• You can report a bug or request for a feature just use `.support` or `/support`\n• As Kiri supports Application Commands (or slash commands) so most of the usefull and moderation commands can be access with `/`\n• Try `/` to find all the slash command or check `.help`')
          .setImage('https://cdn.discordapp.com/attachments/890100498508697620/890109677818490890/63c71f34943af1aa4a6ee0db6da4d6cf.jpg')
      ],
      components: [row]
    })  
})
