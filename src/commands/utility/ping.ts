import {CommandInteraction, SlashCommandBuilder} from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with Pong!");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Pong!");
}

// import {CommandInteraction, SlashCommandBuilder} from "discord.js";
//
// module.exports = {
//   data: new SlashCommandBuilder()
//     .setName('ping')
//     .setDescription('Replies with Pong!'),
//   async execute(interaction: CommandInteraction) {
//     await interaction.reply('Pong!');
//   },
// };
