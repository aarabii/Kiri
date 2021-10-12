const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'announcment',
  description: 'Create a announcment in a channel',
  userPermissions: ['MANAGE_CHANNELS'],
  options: [
    {
      name: 'channel',
      type: 'CHANNEL',
      description: 'Channel you want to send announcment message',
      required: true
    },
    {
      name: 'role',
      type: 'ROLE',
      description: 'Role you want to ping',
      required: true
    },
    {
      name: 'title',
      type: 'STRING',
      description: 'Title of your announcment',
      required: true
    },
    {
      name: 'description',
      type: 'STRING',
      description: 'Description of your announcment',
      required: true
    },
    {
      type: "STRING",
      name: "color",
      description: "Thats's a nice title! now what color do you want?",
      required: true,
      choices: [
        {
          name: "Random",
          value: "RANDOM"
        },
        {
          name: "Red",
          value: "RED"
        },
        {
          name: "Aqua",
          value: "AQUA"
        },
        {
          name: "Dark Aqua",
          value: "DARK_AQUA"
        },
        {
          name: "Green",
          value: "GREEN"
        },
        {
          name: "Dark Green",
          value: "DARK_GREEN"
        },
        {
          name: "Blue",
          value: "BLUE"
        },
        {
          name: "Dark Blue",
          value: "DARK_BLUE"
        },
        {
          name: "Purple",
          value: "PURPLE"
        },
        {
          name: "Dark Purple",
          value: "DARK_PURPLE"
        },
        {
          name: "Luminous Vivid Pink",
          value: "LUMINOUS_VIVID_PINK"
        },
        {
          name: "Dark Vivid Pink",
          value: "DARK_VIVID_PINK"
        },
        {
          name: "Gold",
          value: "GOLD"
        },
        {
          name: "Dark Gold",
          value: "DARK_GOLD"
        },
        {
          name: "Orange",
          value: "ORANGE"
        },
        {
          name: "Dark Orange",
          value: "DARK_ORANGE"
        },
        {
          name: "Dark Red",
          value: "DARK_RED"
        },
        {
          name: "Grey",
          value: "GREY"
        },
        {
          name: "Dark Grey",
          value: "DARK_GREY"
        },
        {
          name: "Darker Grey",
          value: "DARKER_GREY"
        },
        {
          name: "Light Grey",
          value: "LIGHT_GREY"
        },
        {
          name: "Navy",
          value: "NAVY"
        },
        {
          name: "Dark Navy",
          value: "DARK_NAVY"
        },
        {
          name: "Yellow",
          value: "YELLOW"
        },
        {
          name: "White",
          value: "WHITE"
        }
      ]
    },
    {
      name: 'footer',
      description: 'Announcment Footer',
      type: 'STRING',
      required: false
    },
  ],
  run: (client, interaction) => {

    const Channel = interaction.options.getChannel('channel');
    const Role = interaction.options.getRole('role');
    const Title = interaction.options.getString('title');
    const Description = interaction.options.getString("description");
    const Color = interaction.options.getString("color");
    const Footer = interaction.options.getString("footer") || `Announcment by ${interaction.user.username}`


    const guildChannel = interaction.guild.channels.cache.get(Channel.id)

    const embed1 = new MessageEmbed()
      .setTitle(Title)
      .setColor(Color)
      .setDescription(Description)
      .setFooter(Footer)
      .setTimestamp()

    const embed2 = new MessageEmbed()
      .setTitle('**📢 Announcment**')
      .setDescription(`The announcment has been sent in <#${Channel.id}>`)
      .setColor('#ffffff')
  

    guildChannel.send({
      content: `${Role}`,
      embeds: [embed1]
    })
    interaction.followUp({ embeds: [embed2] })
  }
}