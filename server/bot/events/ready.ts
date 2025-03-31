import { ActivityType } from 'discord.js';
import { log } from '../../vite';

export const name = 'ready';
export const once = true;

export function execute(client) {
  const prefix = process.env.PREFIX || '?';
  log(`Hoş Geldin Botu aktif!`);
  log(`${client.user.tag} olarak giriş yapıldı`);
  log(`Komut öneki: ${prefix}`);
  log(`Bot yeni üyeleri karşılamaya hazır!`);
  
  // Set bot activity
  client.user.setActivity(`${prefix}yardım`, { type: ActivityType.Listening });
  
  // Display some stats
  log(`Bot ${client.guilds.cache.size} sunucuya hizmet veriyor`);
  const totalMembers = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);
  log(`Toplam ${totalMembers} üyeye hizmet veriliyor`);
}
