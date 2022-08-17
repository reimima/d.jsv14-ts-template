import { Client } from 'discord.js';
import { config } from 'dotenv';

config();

const client = new Client({ intents: ['Guilds'] });

client.login(process.env['DISCORD_TOKEN']).catch(e => console.error(e));
