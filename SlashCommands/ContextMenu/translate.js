const{ ContextMenuInteraction, MessageEmbed, MessageActionRow,MessageSelectMenu } = require('discord.js');
const translate = require('@iamtraction/google-translate')

module.exports = {
  name: 'Translate',
  type: 'MESSAGE',
  run: async(client, interaction) => {
    
    const Message = await interaction.channel.messages.fetch(
      interaction.targetId
    );

    let row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('menu')
          .setPlaceholder('Please select a language.')
          .addOptions(
            [
              {
                label: 'Arabic',
                value: 'ar',
                emoji: '🇦🇪'
              },
              {
                label: 'Chinese Simplified',
                value: 'zhcn',
                emoji: '🇨🇳'
              },
              {
                label: 'English',
                value: 'en',
                emoji: '🇺🇸'
              },
              {
                label: 'French',
                value: 'fr',
                emoji: '🇫🇷'
              },
              {
                label: 'German',
                value: 'de',
                emoji: '🇩🇪'
              },
              {
                label: 'Hindi',
                value: 'hi',
                emoji: '🇮🇳'
              },
              {
                label: 'Indonesian',
                value: 'id',
                emoji: '🇮🇩'
              },
              {
                label: 'Japanese',
                value: 'ja',
                emoji: '🇯🇵' 
              },
              {
                label: 'Portuguese',
                value: 'pt',
                emoji: '🇵🇹'
              },
              {
                label: 'Spanish',
                value: 'es',
                emoji: '🇪🇸'
              }
            ]
          )
      )

      let embed = new MessageEmbed()
        .setTitle('Translation...')
        .setColor('#66ff66')
        .addFields(
          {
            name: 'Text',
            value: `\`\`\`${Message}\`\`\``
          },
          {
            name: 'Translate to :',
            value: 'Choose the language from the menu down below ⬇️'
          }
        )

      interaction.followUp({
        embeds: [embed],
        components: [row]
      });

    

    const wait = require('util').promisify(setTimeout);

    const filter = (Interaction) =>
      Interaction.isSelectMenu() &&
      Interaction.user.id === interaction.user.id;

    const collector = interaction.channel.createMessageComponentCollector({
      filter,
      max: 14,
    });

    collector.on('collect', async (collected) => {
      const value = collected.values[0];

      let FinalEmbed = new MessageEmbed()
        .setColor('#66ff66')
        .setDescription(`[Click here to view original message in this channel](${Message.url})`)
        .addField('Original Text :', `\`\`\`${Message}\`\`\``, )
        .setTimestamp()

      const arLang = await translate(Message, { to: 'ar' });
      const zhcnLang = await translate(Message, { to: 'zh-cn' }); 
      const enLang = await translate(Message, { to: 'en' }); 
      const frLang = await translate(Message, { to: 'fr' }); 
      const deLang = await translate(Message, { to: 'de' }); 
      const hiLang = await translate(Message, { to: 'hi' }); 
      const idLang = await translate(Message, { to: 'id' }); 
      const jaLang = await translate(Message, { to: 'ja' }); 
      const ptLang = await translate(Message, { to: 'pt' }); 
      const esLang = await translate(Message, { to: 'es' }); 

    try {

	    if(value === 'ar') {
        await collected.deferUpdate();
		    await wait(400);
		    await collected.update({
          embeds: [FinalEmbed.setTitle('Translated... to Arabic').addField('Translated Text :', `${arLang.text}`)],
          components: []
        })
	    }

      if(value === 'zhcn') {
        await collected.deferUpdate();
		    await wait(400);
		    await collected.update({
          embeds: [FinalEmbed.setTitle('Translated... to Chinese Simplified').addField('Translated Text :', `${zhcnLang.text}`)],
          components: []
        })
	    }

      if(value === 'en') {
        await collected.deferUpdate();
		    await wait(400);
		    await collected.update({
          embeds: [FinalEmbed.setTitle('Translated... to English').addField('Translated Text :', `${enLang.text}`)],
          components: []
        })
	    }

      if(value === 'fr') {
        await collected.deferUpdate();
		    await wait(400);
		    await collected.update({
          embeds: [FinalEmbed.setTitle('Translated... to French').addField('Translated Text :', `${frLang.text}`)],
          components: []
        })
	    }

      if(value === 'de') {
        await collected.deferUpdate();
		    await wait(400);
		    await collected.update({
          embeds: [FinalEmbed.setTitle('Translated... to German').addField('Translated Text :', `${deLang.text}`)],
          components: []
        })
	    }

      if(value === 'hi') {
        await collected.deferUpdate();
		    await wait(400);
		    await collected.update({
          embeds: [FinalEmbed.setTitle('Translated... to Hindi').addField('Translated Text :', `${hiLang.text}`)],
          components: []
        })
	    }

      if(value === 'id') {
        await collected.deferUpdate();
		    await wait(400);
		    await collected.update({
          embeds: [FinalEmbed.setTitle('Translated... to Indonesian').addField('Translated Text :', `${idLang.text}`)],
          components: []
        })
	    }

      if(value === 'ja') {
        await collected.deferUpdate();
		    await wait(400);
		    await collected.update({
          embeds: [FinalEmbed.setTitle('Translated... to Japanese').addField('Translated Text :', `${jaLang.text}`)],
          components: []
        })
	    }

      if(value === 'pt') {
        await collected.deferUpdate();
		    await wait(400);
		    await collected.update({
          embeds: [FinalEmbed.setTitle('Translated... to Portuguese').addField('Translated Text :', `${ptLang.text}`)],
          components: []
        })
	    }

      if(value === 'es') {
        await collected.deferUpdate();
		    await wait(400);
		    await collected.update({
          embeds: [FinalEmbed.setTitle('Translated... to Spanish').addField('Translated Text :', `${esLang.text}`)],
          components: []
        })
	    }

    } catch(err) {
      interaction.followUp({
        embeds: [
          new MessageEmbed()
            .setTitle('Error')
            .setColor('#ff0000')
            .setDescription('Something went wrong plese try again...')
            .addField('err', `${err}`)
        ]
      })
    }
      
    });   

  }
}