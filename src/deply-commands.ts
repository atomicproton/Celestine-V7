import {Command, getCommands} from "./commands";
import { REST, Routes} from "discord.js";
import {config} from "./client/config";

const commands = getCommands();
const commandsJSON = Object.values(commands).map((command: Command) => command.data.toJSON())

const rest = new REST().setToken(config.token);

(async () => {
  try {
    console.log(`Started refreshing ${commandsJSON.length} application (/) commands.`);

    // The put method is used to fully refresh all commands in the guild with the current set
    const data = await rest.put(
      Routes.applicationCommands(config.client_id),
      { body: commandsJSON },
    ) as Array<Object>;

    console.log(`Successfully reloaded ${data.length} application (/) commands.`);
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();
