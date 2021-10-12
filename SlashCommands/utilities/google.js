const { MessageEmbed } = require('discord.js');

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

    let query = Query.split(" ").join("+")

    let embed = new MessageEmbed()
      .setTitle('**Google**')
      .setDescription(`\`\`\`yaml\nHere is your search result for \n\`\`\`: [${Query}](https://www.google.com/search?q=${query})`)
      .setThumbnail('https://media.tenor.com/images/f97eeae3a7e0fd67d6813cfcdf875873/tenor.gif')
      .setColor('#4c8bf5')

    interaction.followUp({
      embeds: [embed]
    })  
  }
}