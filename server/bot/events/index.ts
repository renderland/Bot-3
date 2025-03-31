import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { log } from '../../vite';
import { handleCommand } from '../commands';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadEvents(client) {
  const eventsPath = __dirname;
  const eventFiles = fs.readdirSync(eventsPath).filter(file => 
    file.endsWith('.ts') && file !== 'index.ts'
  );

  for (const file of eventFiles) {
    try {
      const filePath = path.join(eventsPath, file);
      const event = await import(filePath);
      
      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
      } else {
        client.on(event.name, (...args) => event.execute(...args, client));
      }
      
      log(`Olay yüklendi: ${event.name}`);
    } catch (error) {
      log(`[HATA] ${file} dosyasından olay yüklenirken hata: ${error}`);
    }
  }

  // Set up command handler from message events
  client.on('messageCreate', message => {
    const prefix = process.env.PREFIX || '?';
    
    // Ignore bot messages and messages that don't start with the prefix
    if (message.author.bot || !message.content.startsWith(prefix)) return;
    
    // Extract command name and arguments from message
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    handleCommand(client, message, commandName, args);
  });
}
