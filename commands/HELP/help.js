const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const moment = require('moment');

module.exports = {
  name: 'help',
  run: async(client, message, args) => {

    const Runtime = moment(client.uptime).format('h.mm.ss');
    const Footer = 'Use the reactions below for navigation.';
    const Description = '```yaml\nUse each of command with your server prefix to know your prefix mention me <3```';
    const Color = '#ffffff'

  //buttons
    let back = new MessageButton()
      .setLabel('Back')
      .setStyle('SECONDARY')
      .setCustomId('back')
      .setEmoji('◀️')

  //dropDown menu 
    let menu = new MessageSelectMenu()
      .setCustomId('menu')
      .setPlaceholder('Which command category do you want to see?')
      .addOptions([
        {
          label: 'Gimmicks',
          value: '1st_option',
          emoji: '🪀',
        },
        {
          label: 'Utilities',
          value: '2nd_option',
          emoji: '⚙️'
        },
        {
          label: 'Moderation',
          value: '3rd_option',
          emoji: '👮‍♂️'
        },
        {
          label: 'Information',
          value: '4th_option',
          emoji: 'ℹ️'
        },
        {
          label: 'Games',
          value: '5th_option',
          emoji: '🎰'
        },
        {
          label: 'Role play',
          value: '6th_option',
          emoji: '🕺'
        },
        {
          label: 'Images',
          value: '7th_option',
          emoji: '🖼️'
        }
      ])

    let row1 = new MessageActionRow()
      .addComponents(menu)

    let row2 = new MessageActionRow()  
      .addComponents(back)

    const help = new MessageEmbed()
      .setTitle('**Touka Kirishima**')
      .setURL('https://discord.com/api/oauth2/authorize?client_id=890100719930179655&permissions=8&scope=bot%20applications.commands')
      .setColor('#ffff00')
      .setThumbnail('https://cdn.discordapp.com/attachments/890100498508697620/890100558315266089/93a25b5ab6e55d00de1fc024cc4163fd.jpg')
      .setDescription('```Please use the Select Menu below to explore the corresponding category```\n`Note: The nsfw category is only available in nsfw channels`')
      .addFields(
        {
          name: 'Hi! Thanks for inviting me to your lovely server! ❤️',
          value: '• To contact with DEVs : `.support` or `/support`\n• By support command you can request for some features too\n• To add KirI in your sever you can click on the Title of this embed or [click here](https://discord.com/api/oauth2/authorize?client_id=890100719930179655&permissions=8&scope=bot%20applications.commands)\n• Many more commands are comming <3'
        },
        {
          name: 'Ping',
          value: `\`\`\`${client.ws.ping} Ms\`\`\``,
          inline: true
        },
        {
          name: 'UpTime',
          value: `\`\`\`${Runtime}\`\`\``,
          inline: true
        },
        {
          name: 'Commands',
          value: `\`\`\`${client.commands.size} Commands\`\`\``,
          inline: true
        }
      )
      .setTimestamp()
      .setImage('https://cdn.discordapp.com/attachments/890100498508697620/890234037376004136/PicsArt_09-22-07.21.46.jpg')
      .setFooter(`${message.author.tag}`)


  //option embeds

  const gimmickEmbed = new MessageEmbed()
    .setTitle('**H E L P >> Gimmicks**')
    .setFooter(Footer)
    .setColor(Color)
    .setDescription(Description)
    .addFields(
      { name: 'F U N :', value: '`Fortun`, `Gayrate`, `Pp`, `Roast`, `Roll`, `Topic`', },
      { name: 'Image Manuplation', value: '`Affect`, `Beautifull`, `Blur`, `Burn`, `Circle`, `Delete`, `Faceplam`, `Greyscale`, `Hitler`, `Invert`, `Jail`, `Joke-over-head`, `PixelLate`, `Rainbow`, `Rip`, `Sepia`, `Sharpen`, `Ship`, `Shit`, `Trash`, `Trigger`, `Wanted`', },
      { name: 'Meme Template', value: '`AkwardMonkey`, `Biden`, `ChangeMyMind`, `Drake`, `Fakereply`, `LiasStage`, `Presidental`, `SpongeBob`, `Tweet` `Worthless`', },
    )
    .setTimestamp()

  const utilitiesEmbed = new MessageEmbed()
    .setTitle('**H E L P >> Utilities**')
    .setFooter(Footer)
    .setDescription(Description)
    .setColor(Color)
    .addFields(
      { name: 'Utilities non-slash command', value: '`Avatar`, `GitHub`, `Lyrics`, `Meme`, `NSFW`, `SetPrefix`, `Snipe`, `Weather`', },
      { name: 'Slash command Utilities', value: '`Activities`, `AFK`, `Announcment`, `Google`, `NSFW`', },
    )
    .setTimestamp()

  const moderationEmbed = new MessageEmbed()
    .setTitle('**H E L P >> Moderation**')
    .setDescription(Description)
    .setColor(Color)
    .setFooter(Footer)
    .addFields(
      { name: 'Non-Slash Commands', value: '`Clear`, `Slowmode`', },
      { name: 'Slash Commands', value: '`Ban`, `Clear`, `Kick`, `RemoveWarn`, `UnBan`, `Warn`, `Warnings`', },
    )
    .setTimestamp()

  const infoEmbed = new MessageEmbed()
    .setTitle('**H E L P >> Information**')
    .setColor(Color)
    .setFooter(Footer)
    .setDescription(Description)
    .addFields(
      { name: 'Non-Slash Commands', value: '`BotInfo`, `Ping`, `Prefix`,  `ServerInfo`, `UserInfo`, `New`, `FirstMessage`', },
      { name: 'Slash Command', value: '`invite-Bot`, `Ping`', },
    )
    .setTimestamp()

  const gameEmbed = new MessageEmbed()
    .setTitle('**H E L P >> Games**')
    .setColor(Color)
    .setFooter(Footer)
    .setDescription(Description)
    .addFields(
      { name: 'GAMES (non-slash command)', value: '`Dare`, `Neve-have-i-ever`, `Truth`, `WouldYouRather`', },
      { name: 'Activities', value: '`Betrayal.Io`, `Chess-in-the-park`, `Chess-in-the-park-developent`, `Fishington.Io`, `PokerNight`, `Youtube Together`', },
      { name: 'Slash Command', value: '`Activities`', },
    )
    .setTimestamp()

  const rpEmbed = new MessageEmbed()
    .setTitle('**H E L P >> Role-Play**')
    .setColor(Color)
    .setFooter(Footer)
    .setDescription(Description)
    .addFields(
      { name: 'S F W', value: '`Baka`, `Blush`, `Cry`, `Cuddle`, `Hug`, `Kiss`, `Lick`, `Nom`, `Pat`, `Poke`, `Pout`, `Punch`, `Slap`, `Sleep`, `Smug`, `Tickkle`', },
      { name: 'N S F W', value: '`BlowJob`, `Cum`, `FeetJob`, `Spank`, `Fuck`, `YaoiFuck`, `YuriFuck`', },
    )
    .setTimestamp()

  const imgEmbed = new MessageEmbed()
    .setTitle('**H E L P >> Images**')
    .setColor(Color)
    .setFooter(Footer)
    .setDescription(Description)
    .addFields(
      { name: 'S F W', value: '`Pfp`, `Neko`, `Waifu`, `Walpaper`', },
      { name: 'N S F W', value: '`Bondage`, `Boobs`, `Hentai`, `Trap`', },
    )
    .setTimestamp()

  //Functions

  message.channel.send({
    embeds: [help],
    components: [row1]
  })

  const wait = require('util').promisify(setTimeout);

  const Filter = i => 
      i.customId === 'back' &&
      i.user.id === message.author.id;

  const Collector = message.channel.createMessageComponentCollector({ Filter, time: 15000 });

  Collector.on('collect', async i => {

	  if (i.customId === 'back') {
		  await i.update({ embeds: [help], components: [row1] });
	  }
  });

  const filter = (interaction) =>
      interaction.isSelectMenu() &&
      interaction.user.id === message.author.id;

  const collector = message.channel.createMessageComponentCollector({
    filter,
    max: 14,
  });

  collector.on('collect', async (collected) => {
    const value = collected.values[0];

    if(value === '1st_option'){
      await collected.deferUpdate();
		  await wait(400);
		  await collected.editReply({ embeds: [gimmickEmbed], components: [row1, row2] });
    };

    if(value === '2nd_option'){
      await collected.deferUpdate();
		  await wait(400);
		  await collected.editReply({ embeds: [utilitiesEmbed], components: [row1, row2] });
    };

    if(value === '3rd_option'){
      await collected.deferUpdate();
		  await wait(400);
		  await collected.editReply({ embeds: [moderationEmbed], components: [row1, row2] });
    };

    if(value === '4th_option'){
      await collected.deferUpdate();
		  await wait(400);
		  await collected.editReply({ embeds: [infoEmbed], components: [row1, row2] });
    };

    if(value === '5th_option'){
      await collected.deferUpdate();
		  await wait(400);
		  await collected.editReply({ embeds: [gameEmbed], components: [row1, row2] });
    };

    if(value === '6th_option'){
      await collected.deferUpdate();
		  await wait(400);
		  await collected.editReply({ embeds: [rpEmbed], components: [row1, row2] });
    };

    if(value === '7th_option'){
      await collected.deferUpdate();
		  await wait(400);
		  await collected.editReply({ embeds: [imgEmbed], components: [row1, row2] });
    };
  })
    
  }
}
