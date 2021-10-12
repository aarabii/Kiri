const client = require("../index");
const chatBOT = require('../models/chatBOT');
const fetch = require('node-fetch');
const mySecret = process.env['chatBOT_Token'];


client.on('message',async message => {
  if(!message.guild || message.author.bot) return;
  
  chatBOT.findOne({ guildId: message.guild.id }, async (err, Data) => {

    if(!Data) return;
    
    if(message.channel.id === Data.channelId){
      fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&key=${mySecret}`)
        .then(res => res.json())
        .then(data => {
          message.channel.sendTyping().then(m => {
            setTimeout(() => {
              message.reply(data.response)
            }, 400)
          })
        })
        .catch(() => {
          message.channel.send({
            content: "ERROR: Couldn't fetch responce! Please try again"
          })
        })
    }
    

  })  
})