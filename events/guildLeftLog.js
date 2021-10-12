const client = require("../index");
const { MessageEmbed, WebhookClient } = require('discord.js');
const mySecret = process.env['leftLogWebHook'];


client.on('guildDelete', async guild => {

  const webHook = new WebhookClient({
    id: '890104952679186493',
    token: mySecret
  })  

  const totalMember = client.guilds.cache.reduce((users, value) => users + value.memberCount, 0);


  let embed = new MessageEmbed()
    .setTitle('Left')
    .setColor('ff0000')
    .setThumbnail(guild.iconURL())
    .setDescription(`Now i'm in **${client.guilds.cache.size} Servers** with **${totalMember} Members**`)
    .addFields(
      {
        name: '```Server Name```',
        value: `${guild.name}`,
      },
      {
        name: '```Server ID :```',
        value: `${guild.id}`,
      },
      {
        name: '```Server Owner :```',
        value: `${(await guild.fetchOwner()).user.tag }`,
      },
      {
        name: '```Server Owner ID :```',
        value: `${guild.ownerId}`,
      },
      {
        name: '```Member Count :```',
        value: `${guild.memberCount}`,
      }
    )

  webHook.send({
    username: (await guild.fetchOwner()).user.tag,
    avatarURL: (await guild.fetchOwner()).user.displayAvatarURL(),
    embeds: [embed]
  })  
})