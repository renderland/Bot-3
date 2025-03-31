import { Collection } from 'discord.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { log } from '../../vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function loadCommands(client) {
  const commandsPath = __dirname;
  const commandFiles = fs.readdirSync(commandsPath).filter(file => 
    file.endsWith('.ts') && file !== 'index.ts'
  );

  for (const file of commandFiles) {
    try {
      const filePath = path.join(commandsPath, file);
      const command = await import(filePath);
      
      // Set a new item in the Collection with the key as the command name and the value as the exported module
      if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
        log(`Komut yüklendi: ${command.data.name}`);
      } else {
        log(`[UYARI] ${filePath} konumundaki komutta gerekli "data" veya "execute" özelliği eksik.`);
      }
    } catch (error) {
      log(`[HATA] ${file} dosyasından komut yüklenirken hata: ${error}`);
    }
  }
}

export function handleCommand(client, message, commandName, args) {
  const command = client.commands.get(commandName);
  
  if (!command) return;
  
  try {
    command.execute(message, args);
  } catch (error) {
    log(`${commandName} komutu yürütülürken hata oluştu: ${error}`);
    message.reply('Bu komutu yürütürken bir hata oluştu.').catch(console.error);
  }
}
