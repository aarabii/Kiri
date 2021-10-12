const { MessageEmbed } = require('discord.js');
const fetch  = require('node-fetch')

module.exports = {
  name: 'instagram',
  aliases: ['insta','ig'],
  run: async(client, message, args) => {

    const username = args.join(' ');

    if(!username)
      return message.reply({
        embeds: [
          new MessageEmbed()
            .setTitle('**Instagram**')
            .setColor('#ff0000')
            .setDescription('Please provide a username \n**Example :**```.Instagram discord```')
            .setFooter('This message will disappear in 10 seconds.')
        ]
      }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })

    await fetch(`https://api.popcat.xyz/instagram?user=${username}`)
      .then(res => res.json())
      .then(json => {

        let embed = new MessageEmbed()
          .setAuthor(`${json.full_name}'S Instagram`)
          .setTitle(json.username)
          .setURL(`https://instagram.com/${username}`)
          .setThumbnail(json.profile_pic)
          .setColor('#ffffff')
          .setTimestamp()
          .addFields(
            {
              name: 'Username',
              value: json.username,
              inline: true
            },
            {
              name: 'Full Name',
              value: json.full_name,
              inline: true
            },
            {
              name: 'Biography',
              value: json.biography
            },
            {
              name: 'Post',
              value: `\`\`\`${json.posts}\`\`\``,
              inline: true
            },
            {
              name: 'Followers',
              value: `\`\`\`${json.followers}\`\`\``,
              inline: true
            },
            {
              name: 'Following',
              value: `\`\`\`${json.following}\`\`\``,
              inline: true
            },
            {
              name: 'Reels',
              value: `\`\`\`${json.reels}\`\`\``,
              inline: true
            },
            {
              name: 'Private',
              value: `\`\`\`${json.private}\`\`\``,
              inline: true
            },
            {
              name: 'Verified',
              value: `\`\`\`${json.verified}\`\`\``,
              inline: true
            }
          )

        message.reply({ embeds: [embed] })        
      })
      .catch((err) => {
        message.reply({
          embeds: [
            new MessageEmbed()
              .setTitle('Instagram')
              .setDescription(`Unable to find user : \`\`\`${username}\`\`\` `)
              .setColor('#ff0000')
              .setFooter('This message will disappear in 10 seconds!')
          ]
        }).then(m => {
          setTimeout(() => {
            m.delete()
          }, 10000)
        })
      })


    
  }
}