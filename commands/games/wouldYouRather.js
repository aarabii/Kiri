const { MessageEmbed, MessageButton, MessageActionRow} = require('discord.js');
const questions = require('../../Data/TextData/would-you-rather.json')


module.exports = {
  name: 'wyr',
  aliases: ['wouldyourather'],
  run: async(client, message, args) => {

    const Target = message.mentions.users.first() || message.author;

    var messagetext =  questions[Math.floor(Math.random() * questions.length)];
    var question = messagetext.split("Would you rather ")[1];
    var Option1 = question.split(" or ")[0];
    var Option2 = question.split(" or ")[1];

    let embed1 = new MessageEmbed()
      .setTitle('Would-You-Rather')
      .setDescription(`${Target.username} what will you choose between :\n\n**Option 🅰️ :** ${Option1} \n**Option 🅱️ :** ${Option2}`)
      .setColor('#ffffff')
      .setTimestamp()
      .setFooter(`You have only 15 seconds to choose ${Target.tag}`)

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel('Option')
          .setEmoji('🅰️')
          .setStyle('PRIMARY')
          .setCustomId('one')
      ) 
      .addComponents(
        new MessageButton()
          .setLabel('Option')
          .setEmoji('🅱️')
          .setStyle('PRIMARY')
          .setCustomId('two')
      )

    message.reply({ embeds: [embed1], components: [row] });

    const wait = require('util').promisify(setTimeout);

    const filter = i => 
      i.customId === 'one' &&
      i.user.id === Target.id;

    const collector = message.channel.createMessageComponentCollector({ filter, time: 15000 });

    collector.on('collect', async i => {

	    if (i.customId === 'one') {
		    await i.deferUpdate();
		    await wait(400);
		    await i.editReply({
          embeds: [
            new MessageEmbed()
              .setTitle('Whould-You-Rather')
              .setDescription(`***${Target.username}*** choosed ***${Option1}*** from\n\n *${Option1}* and *${Option2}* `)
              .setColor('#ffffff')
              .setTimestamp()
          ],
          components: [],
        });
	    }

    });

    const Filter = i => 
      i.customId === 'two' &&
      i.user.id === Target.id;

    const Collector = message.channel.createMessageComponentCollector({ Filter, time: 15000 });

    Collector.on('collect', async i => {

	    if (i.customId === 'two') {
		    await i.deferUpdate();
		    await wait(400);
		    await i.editReply({
          embeds: [
            new MessageEmbed()
              .setTitle('Whould-You-Rather')
              .setDescription(`***${Target.username}*** choosed ***${Option2}*** from\n\n *${Option1}* and *${Option2}* `)
              .setColor('#ffffff')
              .setTimestamp()
          ],
          components: [],
        });
	    }

    });     
  }
}