import { Client, GatewayIntentBits, Collection } from 'discord.js';
import fs from 'fs';
import path from 'path';
import { log } from '../vite';
import { loadEvents } from './events';
import { loadCommands } from './commands';

// Create a new Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences
  ]
});

// Initialize collections for commands
client.commands = new Collection();

export async function initializeBot() {
  try {
    const token = process.env.BOT_TOKEN;
    if (!token) {
      throw new Error('BOT_TOKEN çevre değişkeni ayarlanmamış');
    }

    // Load command handler
    await loadCommands(client);
    
    // Load event handler
    await loadEvents(client);

    // Login to Discord with token
    await client.login(token);
    
    return true;
  } catch (error) {
    log(`Bot başlatılırken hata oluştu: ${error}`);
    throw error;
  }
}

export async function getBotStatus() {
  if (!client) {
    return { online: false, message: "Bot başlatılmamış" };
  }

  try {
    return {
      online: client.isReady(),
      username: client.user?.username || "Bilinmiyor",
      status: client.user?.presence?.status || "çevrimdışı",
      servers: client.guilds.cache.size,
      memberCount: client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)
    };
  } catch (error) {
    log(`Bot durumu alınırken hata oluştu: ${error}`);
    return { online: false, error: String(error) };
  }
}

// Make the client available for other modules
export { client };
