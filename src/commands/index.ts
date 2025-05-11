import * as ping from "./utility/ping";
import {CommandInteraction, InteractionResponse, SlashCommandBuilder} from "discord.js";

const commands: Command[] = [
  ping,
];

export type Command = {
  data: SlashCommandBuilder,
  execute(interaction: CommandInteraction): Promise<InteractionResponse>
}

export function getCommands(): Record<string, Command> {
  const result: Record<string, Command> = {};
  for (const command of commands) {
    result[command.data.name] = command;
  }
  return result;
}
