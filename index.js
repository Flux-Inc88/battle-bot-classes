const fs = require('fs');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const config = require('./config.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
}

const interactionHandler = require('./events/interactionCreate');
client.on('interactionCreate', interaction => interactionHandler.execute(interaction, client));

client.once('ready', () => console.log(`Bot online as ${client.user.tag}`));
client.login(config.token);