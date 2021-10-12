const { ContextMenuInteraction, MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
  name: 'User Information',
  type: 'USER',
  run: async(client, interaction) => {

    const Target = await interaction.guild.members.fetch(interaction.targetId);

    const Member = interaction.guild.members.cache.get(Target.id);

    let MemberRoles = Member.roles.cache.map(r => r).join(' | ').replace("@everyone", " ");
    if(MemberRoles.length > 1024){
      MemberRoles = '```Total length of roles in this server in more than 1024```'
    };
    if(MemberRoles < 1){
      MemberRoles = '```No roles has been found!```'
    }

    const Runtime = moment(Target.uptime).format("L");
    
    const DefaultAv = 'https://cdn.discordapp.com/attachments/890100498508697620/892646489761918986/images.png'
    const pngAv = Target.user.avatarURL({ format: 'png', size: 1024 }) || DefaultAv;
    const jpgAv = Target.user.avatarURL({ format: 'jpg', size: 1024 }) || DefaultAv;
    const dynaAv = Target.user.avatarURL({ size: 1024, dynamic: true }) || DefaultAv;
    const webpAv = Target.user.avatarURL({ format: 'webp', size: 1024 }) || DefaultAv; 

    let Flags = Target.user.flags.toArray().join(' ');
    if(!Flags){
      Flags = 'No badge found'
    }
    Flags = Flags.replace('HOUSE_BRAVERY', '<:bravery:892614758539341864>');
    Flags = Flags.replace('EARLY_SUPPORTER', '<:earlysupporter:892632519764234250>');
    Flags = Flags.replace('VERIFIED_DEVELOPER', '<:verified:891615196131500062>');
    Flags = Flags.replace('EARLY_VERIFIED_DEVELOPER', '<:verified:891615196131500062>');
    Flags = Flags.replace('HOUSE_BRILLIANCE', '<:brilliance:892633671151022080>');
    Flags = Flags.replace('HOUSE_BALANCE', '<:balance:892634519734202368>');
    Flags = Flags.replace('DISCORD_PARTNER', '<:partner:892635584114360341>');
    Flags = Flags.replace('HYPESQUAD_EVENTS', '<:events:892636104136749108>');
    Flags = Flags.replace('DISCORD_CLASSIC', '<:nitro:892636741620617296>');
    Flags = Flags.replace('VERIFIED_BOT', '<:bot:892642557635465238>');

    const userInfoEmbed = new MessageEmbed()
      .setTitle('**User Information**')
      .setAuthor(`${Target.user.tag}`, Target.user.avatarURL({dynamic: true}) || DefaultAv)
      .setColor(Target.user.displayHexColor)
      .setThumbnail(Target.user.avatarURL({ size: 1024, dynamic: true }) || DefaultAv)
      .setDescription(`**Avatar Link :** [PNG](${pngAv}) | [JPG](${jpgAv}) | [DYNAMIC](${dynaAv}) | [WEBP](${webpAv})`)
      .addFields(
        {
          name: 'Name :',
          value: `\`\`\`yaml\n${Target.user.username}\n\`\`\``,
          inline: true
        },
        {
          name: 'Discriminator :',
          value: `\`\`\`yaml\n${Target.user.discriminator}\n\`\`\``,
          inline: true
        },
        {
          name: 'Id :',
          value: `\`\`\`yaml\n${Target.id}\n\`\`\``,
          inline: true
        },
        {
          name: 'Badges :',
          value: `${Flags}`,
          inline: true
        },
        {
          name: `Is ${Target.user.username} a bot?`,
          value: `\`\`\`yaml\n${Target.user.bot? 'YES' : 'NO' }\n\`\`\``,
          inline: true
        },
        {
          name: 'Runtime :',
          value: `\`\`\`yaml\n${Runtime}\n\`\`\``,
          inline: true
        },
        {
          name: 'Server joined at :',
          value: `\`\`\`yaml\n${moment(Member.joinedAt).format('MMMM Do YYYY, h:mm:ss a')} UTC\n\`\`\``,
        },
        {
          name: 'Discord account creation time :',
          value: `\`\`\`yaml\n${moment(Member.user.createdAt).format('MMMM Do YYYY, h:mm:ss a')} UTC\n\`\`\``,
        },
        {
          name: 'Roles :',
          value: `${MemberRoles}`
        },
      )
      .setFooter('|| Try tagging your friends while running this command! ||')
      .setTimestamp()

    interaction.followUp({ embeds: [userInfoEmbed] })  
    
  }
}