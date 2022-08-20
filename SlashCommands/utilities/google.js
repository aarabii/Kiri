const { MessageEmbed, MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'google',
  description: 'Search from google',
  options: [
    {
      name: 'query',
      description: 'what you want to search',
      type: 'STRING',
      required: true
    }
  ],
  run: async(client, interaction) => {

    const Query = interaction.options.getString('query');

    let query = Query.split(" ").join("+");
    const URL = `https://www.google.com/search?q=${query}`;
    const site = /^(https?:\/\/)/i.test(URL) ? URL : `http://${URL}`;
    const { body } = await fetch(`https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`);

    const attachment = new MessageAttachment(body, 'screenshot.png')

  try {
        let embed = new MessageEmbed()
          .setTitle('**Google**')
          .setDescription(`\`\`\`yaml\nHere is your search result for \n\`\`\`: [${Query}](${URL})`)
          .setThumbnail('https://media.tenor.com/images/f97eeae3a7e0fd67d6813cfcdf875873/tenor.gif')
          .setColor('#4c8bf5')

        interaction.followUp({
          embeds: [embed]
        }).then(m => {
          setTimeout(() => {
            interaction.channel.send({
              files: [attachment]
            })
          }, 100)
        })
    } catch (err) {

    let errEmberd = new MessageEmbed()
      .setTitle('ERROR')
      .setColor('RED')
      .setDescription(`\`\`\`yaml\nSomething went wrong...\n\`\`\`\n\`\`\`\js\n${err}\`\`\``)
    
    message.followUp({
      embed: [errEmberd]
    })
    }
  }
}