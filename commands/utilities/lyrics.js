const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'lyrics',
  run: async(client, message, args) => {

    const song = args.join(" ")
    
    if(!song){
      let embed1 = new Discord.MessageEmbed()
        .setTitle('**📄 Lyrics**')
        .setColor('#ffffff')
        .setDescription('```Please provide a song to search for!```\n\n```Example :```\n```.lyrics Never gonna give you up```')
        .setTimestamp()

      return message.reply({ embeds: [embed1] })  
    }

    const json = await fetch(`https://api.popcat.xyz/lyrics?song=${encodeURIComponent(song)}`)
      .then(r => r.json())

    if(json.error){
      let embed2 = new Discord.MessageEmbed()
        .setTitle('**📄 Lyrics**')
        .setColor('#ffffff')
        .setDescription('```Song not found!```')
        .setTimestamp()      

      return message.reply({ embeds: [embed2] })
    }

    const url = `${song.replace(" ", "+")}`;
    
    let lyrics = json.lyrics;

    if(lyrics.length > 4096){
      let embed3 = new Discord.MessageEmbed()
        .setTitle('**📄 Lyrics**')
        .setColor('#ffffff')
        .setDescription(`\`\`\`\yaml\nTo long to show\`\`\`\n[Click Here for lyrics](https://popcat.xyz/lyrics/${url})`)
        .setTimestamp()       

      return message.reply({ embeds: [embed3] })  
    }

    const finalEmbed = new Discord.MessageEmbed()
      .setTitle(json.full_title === "none" ? json.title : json.full_title)
      .setURL(json.url)
      .setThumbnail(json.image)
      .addField("Artist", json.artist)
      .setDescription("Lyrics:\n\n" + lyrics)
      .setColor("ffc0cb")

    message.reply({ embeds: [finalEmbed] })
  }
}