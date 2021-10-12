const Discord = require('discord.js');

module.exports = {
  name: 'clear',
  description: 'Deletes a specific amount of messages',
  userPermissions: ["MANAGE_MESSAGES"],
  options: [
    {
      name: "ammount",
      description: "provide the ammount of message you want to delete.",
      type: "NUMBER",
      required: true
    },
    {
      name: "target",
      description: "Select a user to clear their message.",
      type: "USER",
      required: false
    },
  ],
  run: async(client, interaction, args) => {
    
    const Ammount = interaction.options.getNumber("ammount");
    const Target = interaction.options.getMember("target");
    const Channel = interaction.channel;
    const Messages = Channel.messages.fetch();

    if(Ammount > 100)
      return interaction.followUp({
        embeds: [
          new Discord.MessageEmbed()
            .setTitle("🗑️ Clear Message")
            .setDescription("You can't delete more than 100 message at a time!")
            .setColor('#f2f2f2')
            .setFooter('This message will disappear in 10 seconds!')
        ]
      }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })

    if(Target){
      const targetMessages = (await Messages).filter((m) => m.author.id === Target.id); 
      await Channel.bulkDelete(targetMessages, true);
      interaction.followUp({
        embeds: [
          new Discord.MessageEmbed()
            .setTitle("🗑️ Clear Message")
            .setDescription(`Sucessfully! Delleted **${Ammount} messages** sent by ${Target}`)
            .setColor('#f2f2f2')
            .setFooter('This message will disappear in 10 seconds!')
        ]
      }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })
      
    } else {
      
      Channel.bulkDelete(Ammount, true)
      interaction.followUp({
        embeds: [
          new Discord.MessageEmbed()
            .setTitle("**🗑️ Clear Message**")
            .setDescription(`Sucessfully! Delleted **${Ammount} messages** in ${Channel}`) 
            .setColor('#f2f2f2')
            .setFooter('This message will disappear in 10 seconds!')
        ]
      }).then(m => {
        setTimeout(() => {
          m.delete()
        }, 10000)
      })
    }


  }
}