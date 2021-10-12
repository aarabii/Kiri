const { glob } = require("glob");
const { promisify } = require("util");
const { Client, MessageEmbed } = require("discord.js");
const mongoose = require("mongoose");

const globPromise = promisify(glob);

/**
 * @param {Client} client
 */
module.exports = async (client) => {
    // Commands
    const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.commands.set(file.name, properties);
        }
    });

    // Events
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));

    // Slash Commands
    const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommands/*/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
    });

    //client.on("ready", async () => {
    //  await client.application.commands.set(arrayOfSlashCommands)
    //})

    //timeout

    setTimeout(() => {
      client.guilds.cache.forEach(async (guild) => {
        await guild.commands.set(arrayOfSlashCommands).then(async () => {
          const {
            username,
            discriminator
          } = (await guild.fetchOwner({
            force: true,
            cache: true
          })).user

          const Channel = client.channels.cache.get('891162693396996107')

          Channel.send({
            embeds: [
              new MessageEmbed()
                .setTitle('Rate-limited...')
                .setDescription(`${guild.name} (${guild.id} - ${username + '#' + discriminator}) - No perms for Slash!\nOr too many slash commands set today. Limit reached 200`)
                .setColor('#ff0000')
                .setTimestamp()
                .setFooter('This message will disappear in 5 seconds')
            ]
          }).then(m => {
            setTimeout(() => {
              m.delete()
            }, 500)
          })
        })
      })
    }, 5000)

    // mongoose
    require('dotenv').config();
    const { mongooseConnectionString } = process.env['mongooseConnectionString']
    if (!mongooseConnectionString) return;

    mongoose.connect(mongooseConnectionString).then(() => console.log('Connected to mongodb'));
  

};