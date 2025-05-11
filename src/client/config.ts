import * as dotenv from 'dotenv';
import * as path from "node:path";

dotenv.config({path: path.resolve(__dirname, '../../.env')});

function getEnvVariable(name: string): string {
  const env = process.env[name];
  if (!env) {
    throw new Error(`Environment variable "${name}" not found`);
  }
  return env;
}

export const config = {
  token: getEnvVariable('DISCORD_TOKEN'),
  client_id: getEnvVariable('DISCORD_CLIENT_ID'),
};
