const { SlashCommandBuilder } = require('discord.js');
const Database = require('better-sqlite3');
const db = new Database('./battle.db');

db.prepare("CREATE TABLE IF NOT EXISTS players (userId TEXT PRIMARY KEY, class TEXT)").run();

module.exports = {
  data: new SlashCommandBuilder()
    .setName('choose_class')
    .setDescription('Choose your battle class')
    .addStringOption(option =>
      option.setName('class')
        .setDescription('The class to choose')
        .setRequired(true)
        .addChoices(
          { name: 'Tank', value: 'Tank' },
          { name: 'Mage', value: 'Mage' },
          { name: 'Rogue', value: 'Rogue' },
          { name: 'Healer', value: 'Healer' },
          { name: 'Ranger', value: 'Ranger' }
        )
    ),
  async execute(interaction) {
    const userId = interaction.user.id;
    const chosenClass = interaction.options.getString('class');
    db.prepare("INSERT OR REPLACE INTO players (userId, class) VALUES (?, ?)").run(userId, chosenClass);
    await interaction.reply(`You are now a **${chosenClass}**!`);
  }
};