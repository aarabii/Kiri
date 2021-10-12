const { MessageAttachment, MessageEmbed } = require('discord.js');
const { Canvas } = require('canvacord');

module.exports = {
  name: 'fakereply',
  aliases: ['fr','fake-reply'],
  run: async(client, message, args) => {

    const replyArgs = message.content.split(" ").slice(1).join(" ").split("\n").join("").split(" | ");

    const member1 = message.mentions.users.first(5)[0];
    const member2 = message.mentions.users.first(5)[1];

    const msg1 = replyArgs[2];
    const msg2 = replyArgs[3];
    
    let embed1 = new MessageEmbed()
      .setTitle('**Fake-Reply**')
      .setDescription('```yaml\nPlease mention a user (User1).```')
      .addFields(
        {
          name: 'Uses :',
          value: '```.fr @user1 | @user2 | Main text (Text by user2) | Replied text (text by user1)```'
        },
        {
          name: 'Example :',
          value: `\`\`\`.fr @x | y | Wanna try new Meme template! | Sure, why not\`\`\``
        }
      )
      .setColor('#ffffff')
      .setFooter('| This message will disappear in 10 seconds. |')
      .setTimestamp()

    let embed2 = new MessageEmbed()
      .setTitle('**Fake-Reply**')
      .setDescription('```yaml\nPlease mention a user (User2).```')
      .addFields(
        {
          name: 'Uses :',
          value: '```.fr @user1 | @user2 | Main text (Text by user2) | Replied text (text by user1)```'
        },
        {
          name: 'Example :',
          value: `\`\`\`.fr @x | y | Wanna try new Meme template! | Sure, why not\`\`\``
        }
      )
      .setColor('#ffffff')
      .setFooter('| This message will disappear in 10 seconds. |')
      .setTimestamp() 

    let embed3 = new MessageEmbed()
      .setTitle('**Fake-Reply**')
      .setDescription('```yaml\nPlease give a text (Main Text).```')
      .addFields(
        {
          name: 'Uses :',
          value: '```.fr @user1 | @user2 | Main text (Text by user2) | Replied text (text by user1)```'
        },
        {
          name: 'Example :',
          value: `\`\`\`.fr @x | y | Wanna try new Meme template! | Sure, why not\`\`\``
        }
      )
      .setColor('#ffffff')
      .setFooter('| This message will disappear in 10 seconds. |')
      .setTimestamp()   

    let embed4 = new MessageEmbed()
      .setTitle('**Fake-Reply**')
      .setDescription('```yaml\nPlease givve a text (Replied Text).```')
      .addFields(
        {
          name: 'Uses :',
          value: '```.fr @user1 | @user2 | Main text (Text by user2) | Replied text (text by user1)```'
        },
        {
          name: 'Example :',
          value: `\`\`\`.fr @x | y | Wanna try new Meme template! | Sure, why not\`\`\``
        }
      )
      .setColor('#ffffff')
      .setFooter('| This message will disappear in 10 seconds. |')
      .setTimestamp()

    if(!member1)
      return message.reply({ embeds: [embed1] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      });

    if(!member2)
      return message.reply({ embeds: [embed2] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      });

    if(!msg1)
      return message.reply({ embeds: [embed3] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      });

    if(!msg2)
      return message.reply({ embeds: [embed4] }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      });

    const img1 = member1.displayAvatarURL({ format: "png" });
    const img2 = member2.displayAvatarURL({ format: "png" });      

    let canvasReply = await Canvas.reply({
      avatar1: img1,
      avatar2: img2,
      user1: member1.username,
      user2: member2.username,
      hex1: member1.displayHexColor,
      hex2: member2.displayHexColor,
      mainText: msg1,
      replyText: msg2
    });

    const attachment = new MessageAttachment(canvasReply, 'Fake-Reply.png');

    message.reply({
      files: [
        attachment
      ]
    })
  }
}