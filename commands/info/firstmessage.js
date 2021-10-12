const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'firstmessage',
  aliases: ['1stmessage','firstmsg','1stmsg'],
  run: async(client, message, args) => {

    const FetchMessage = await message.channel.messages.fetch({
      after: 1,
      limit: 1
    });

    const msg = FetchMessage.first();

    let embed = new MessageEmbed()
      .setTitle('**First-Message**')
      .setDescription(`[Click here to view FIrst message in this channel](${msg.url})`)
      .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
      .addFields(
        {
          name: 'Created by',
          value: `${msg.author}`,
          inline: true
        },
        {
          name: 'Message Id',
          value: `${msg.id}`,
          inline: true
        },
        {
          name: 'Created At',
          value: `${msg.createdAt.toLocaleDateString()}`,
          inline: true
        }
      )
      .setTimestamp()
      .setColor('#ffffff')

    message.reply({ embeds: [embed] })  
  }
}