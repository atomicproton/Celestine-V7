import {Client, Events, MessageFlags} from 'discord.js'
import {getCommands} from "./commands";
import {CelestineClient} from "./client/typedefs";
import {config} from "./client/config";

const client = new Client({intents: []}) as CelestineClient;
client.commands = getCommands();

client.once(Events.ClientReady, readyClient => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands[interaction.commandName];

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({
        content: 'There was an error while executing this command!',
        flags: MessageFlags.Ephemeral
      });
    } else {
      await interaction.reply({
        content: 'There was an error while executing this command!',
        flags: MessageFlags.Ephemeral
      });
    }
  }
});

client.login(config.token).then(r => {
});
