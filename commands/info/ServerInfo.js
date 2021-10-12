const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
  name: 'serverinfo',
  aliases: ['si','server-info'],
  run: async(client, message, args) => {
    
    
    const Server = message.guild;
    const Owner = await message.guild.fetchOwner();

    const Tmember = Server.members.cache.size;
    const User = Server.members.cache.filter(member => !member.user.bot).size;
    const Bots = Server.members.cache.filter(member => member.user.bot).size;

    
    const Text = Server.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').size;
    const Voice = Server.channels.cache.filter(channel => channel.type === 'GUILD_VOICE').size;
    const Category = Server.channels.cache.filter(channel => channel.type === 'GUILD_CATEGORY').size;
    const Stage = Server.channels.cache.filter(channel => channel.type === 'GUILD_STAGE_VOICE').size;
    const Tchannel = Text + Voice + Category + Stage

    const Emoji = Server.emojis.cache.size;

    const Roles = Server.roles.cache.size;

    let ServerRoles = Server.roles.cache.map(r => r).join(' | ').replace("@everyone", " ");
    if(ServerRoles.length > 1024){
      ServerRoles = '```Total length of roles in this server in more than 1024```'
    };
    if(ServerRoles.length < 1){
      ServerRoles = '```No Role has been found.```'
    };

    const pngAv = Server.iconURL({ format: 'png', size: 1024 });
    const jpgAv = Server.iconURL({ format: 'jpg', size: 1024 });
    const dynaAv = Server.iconURL({ size: 1024, dynamic: true });
    const webpAv = Server.iconURL({ format: 'webp', size: 1024 });

    let embed1 = new MessageEmbed()
      .setAuthor(Server.name, Server.iconURL({ dynamics: true }))
      .setTitle('**Server Information**')
      .setColor('#ffffff')
      .setDescription(`**Server Icon Link :** [PNG](${pngAv}) | [JPG](${jpgAv}) | [DYNAMIC](${dynaAv}) | [WEBP](${webpAv})`)
      .setThumbnail(Server.iconURL())
      .addFields(
        {
          name: 'Name :',
          value: `\`\`\`yaml\n${Server.name}\n\`\`\``,
          inline: true
        },
        {
          name: 'Server Id :',
          value: `\`\`\`yaml\n${Server.id}\n\`\`\``,
          inline: true
        },
        {
          name: 'Owner :',
          value: `\`\`\`yaml\n${Owner.user.tag}\n\`\`\``,
          inline: true
        },
        {
          name: 'Boost :',
          value: `No. of boost : **${Server.premiumSubscriptionCount}** (Level : **${Server.premiumTier}**)`,
        },
        {
          name: 'Total Members :',
          value: `**${Tmember}** (**${User}** User & **${Bots}** Bots)`,
        },
        {
          name: 'Totla Channels :',
          value: `**${Tchannel}** (**${Text}** Text channels, **${Voice}** Voice channels, **${Category}** Category & **${Stage}** Stage)`,
        },
        {
          name: 'Total emojis :',
          value: `**${Emoji}** Emojis`,
        },
        {
          name: 'Total Roles :',
          value: `**${Roles}** Roles`
        },
        {
          name: 'Server Creation date :',
          value: `\`\`\`yaml\n${moment(Server.createdAt).format('MMMM Do YYYY, h:mm:ss a')}\n\`\`\``,
        },
        {
          name: 'Roles :',
          value: `${ServerRoles}`
        }
      )

    message.reply({ embeds: [embed1] })  
  }
}