module.exports = {
  async execute(interaction, client) {
    try {
      if (interaction.isChatInputCommand()) {
        const command = client.commands.get(interaction.commandName);
        if (command) await command.execute(interaction);
      }
    } catch (error) {
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content: 'There was an error.', ephemeral: true });
      } else {
        await interaction.reply({ content: 'Something went wrong.', ephemeral: true });
      }
    }
  }
};