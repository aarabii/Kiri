const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch');

module.exports = {
  name: 'wekipedia',
  aliases: ['weki'],
  run: async(client, message, args) => {
     
     const search = args.join('_');

     if(!search)
       return message.reply({
         embeds: [
           new MessageEmbed()
             .setTitle('weki')
             .setColor('#ff0000')
             .setDescription('PLease provide something to search \n **Example :**```.weki Youtube```')
             .setFooter('This message will disappear in 10 seconds')
         ]
       }).then(m => {
         setTimeout(() => {
           m.delete()
         }, 10000)
       })

        const searchword = encodeURI(search)

        const res = await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + searchword);
        const data = await res.json();

        const title = data.title;
        const text = data.extract || "Couldn't retrieve any result. Try searching case sensitively.";

        let thumbnail = data.originalimage ? data.originalimage.source : null 
        let url = data.content_urls ? data.content_urls.desktop.page : null

        const embed = new MessageEmbed()
            .setColor(`#00b140`)
            .setTitle(title)
            .setURL(url)
            .setThumbnail(thumbnail)
            .setDescription(text)
            .setFooter("Powered by Wikipedia", "https://i.ibb.co/VWvCzg1/wikipedia.png")

            message.reply({ embeds: [embed] })
  }
}