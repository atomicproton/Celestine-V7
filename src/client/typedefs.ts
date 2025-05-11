import {Client} from "discord.js";
import {Command} from "../commands";

export type CelestineClient = Client & { commands: Record<string, Command> };
