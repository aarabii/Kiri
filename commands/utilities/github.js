const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const moment = require('moment');

module.exports = {
  name: 'github',
  aliases: ['git'],
  run: async(client, message, args) => {

    if(!args[0])
      return message.reply({
        embeds: [
          new MessageEmbed()
            .setTitle('**Git-Hub**')
            .setColor('#ff0000')
            .setDescription('Please provide a username!')
            .setTimestamp()
            .setFooter('| This message will disappear in 10 seconds |')
        ]
      }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      });
    
    const username = args.join(' ')
    const gitSearch = args.join(' - ')

    await fetch(`https://api.github.com/users/${gitSearch}`)
      .then(res => res.json())
      .then(body => {
        
        if(body.message)
          return message.reply({
            embeds: [
              new MessageEmbed()
                .setTitle('**Git-Hub**')
                .setColor('#ff0000')
                .setTimestamp()
                .setDescription('User not found...')
                .setFooter('| This message will disappear in 10 seconds |')
            ]
          }).then(m => {
            setTimeout(() => {
              m.delete()
            }, 10000)
          });


        let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, bio } = body;

        const embed = new MessageEmbed()
            .setAuthor(`${login} Information!`, avatar_url)
            .setTitle(`**${username}**'s GitHub`)
            .setURL(`https://github.com/${gitSearch}`)
            .setColor(`#211F1F`)
            .setThumbnail(`${avatar_url}`)
            .addField(`Username`, `${login}`)
            .addField(`ID`, `${id}`)
            .addField(`Bio`, `${bio || "No Bio"}`)
            .addField(`Public Repositories`, `${public_repos || "None"}`, true)
            .addField(`Followers`, `${followers}`, true)
            .addField(`Following`, `${following}`, true)
            .addField(`Location`, `${location || "No Location"}`)
            .addField(`Account Created`, moment.utc(created_at).format("dddd, MMMM, Do YYYY"))
            .setFooter(`Requested by: ${message.author.username}`)  

        message.reply({ embeds: [embed] })   
      })
      
  }
}