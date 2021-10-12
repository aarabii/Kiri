const { Client, Message, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')

module.exports = {
    name: 'meme',
    description: 'Get a random meme from reddit',
    usage: '',
    category: 'fun',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        
        await fetch('http://meme-api.herokuapp.com/gimme/memes')
        .then(response => response.json())
        .then(async(r) => {
            const embed = new MessageEmbed()
            .setImage(`${r.url}`)
            .setTitle(`${r.title}`)
            .setURL(`${r.postLink}`)
            .setColor('#e9eef7')
            .setFooter(`🔼 ${r.ups} | Author: ${r.author}`)

            const send = await message.reply({embeds: [embed]})
            send.react('🔼')
            send.react('🔽')
        }) 
    }
}