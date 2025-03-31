import { log } from '../../vite';

export const name = 'messageCreate';
export const once = false;

export function execute(message, client) {
  // Most message handling is done in the events/index.ts file
  // This is just for additional message processing if needed
  
  // Log direct mentions of the bot
  if (message.mentions.has(client.user)) {
    log(`Bot ${message.author.tag} tarafından ${message.guild?.name || 'DM'} içinde etiketlendi`);
    
    // Optional: Respond to direct mentions with help information
    const prefix = process.env.PREFIX || '?';
    message.reply(`Merhaba! Komut önEkim \`${prefix}\`. Komutlarımı görmek için \`${prefix}yardım\` yazabilirsiniz.`)
      .catch(error => log(`Etiketlemeye yanıt verirken hata: ${error}`));
  }
}
