const Discord = require('discord.js');
const { Intents, Collection } = require("discord.js");

const client = new Discord.Client({ intents: 32767 })
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.snipes = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);

client.login(process.env.token);
