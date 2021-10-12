const {
    Client,
    Message,
    MessageEmbed,
    Invite
} = require('discord.js');
const fetch = require('node-fetch')

module.exports = {
    name: 'youtubetogether',
    aliases: ['ytt'],
    categories: 'minigames',
    description: 'Watch Youtube in Discord Voice Channel',
    usage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {

        const channel = message.member.voice.channel;

        if (!channel){
            return message.reply({
                embeds: [
                    new MessageEmbed()
                    .setTitle('**YouTube-Together**')
                    .setDescription('You must be connected to a voice channel to use this command.')
                    .setColor('#ff0000')
                    .setTimestamp()
                    .setFooter('| This message will disappear in 10 seconds |')
                ]
            }).then(m => {
                setTimeout(() => {
                    m.delete()
                }, 10000)
            });
        }
           
        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(invite => {
            if (!invite.code)
              return message.channel.send({
                embeds: [
                  new MessageEmbed()
                    .setTitle('**YouTube-Together**')
                    .setDescription('Unable to start youTube together session.')
                    .setColor('#ff0000')
                    .setTimestamp()
                    .setFooter('| This message will disappear in 10 seconds |')
                  ]
              }).then(m => {
                setTimeout(() => {
                  m.delete()
                }, 10000)
              })


            message.channel.send({
              embeds: [
                new MessageEmbed()
                  .setTitle('**YouTube-Together**')
                  .setColor('#ffffff')
                  .setDescription('Click here to start your youTube-Together session')
                  .setTimestamp()
              ],
              content: `https://discord.com/invite/${invite.code}`
            })
        })
    }
}