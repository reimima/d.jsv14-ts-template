import { Client } from 'discord.js';
import { config } from 'dotenv';

config();

const client = new Client({ intents: ['Guilds', 'GuildIntegrations'] });

client.once('ready', () => console.log('Bot has beed ready!'));

client.login(process.env['DISCORD_TOKEN']);
