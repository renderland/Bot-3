import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const serverChannels = pgTable("server_channels", {
  id: serial("id").primaryKey(),
  serverId: text("server_id").notNull().unique(),
  serverName: text("server_name").notNull(),
  welcomeChannel: text("welcome_channel"),
  goodbyeChannel: text("goodbye_channel"),
  welcomeMessage: text("welcome_message"),
  goodbyeMessage: text("goodbye_message"),
  settings: jsonb("settings"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertServerChannelsSchema = createInsertSchema(serverChannels).pick({
  serverId: true,
  serverName: true,
  welcomeChannel: true,
  goodbyeChannel: true,
  welcomeMessage: true,
  goodbyeMessage: true,
  settings: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertServerChannels = z.infer<typeof insertServerChannelsSchema>;
export type ServerChannels = typeof serverChannels.$inferSelect;

// Extend the Express Request interface to include DiscordJS Client
declare global {
  namespace Express {
    interface Request {
      discordClient?: any;
    }
  }
}

// Extend DiscordJS Client to include commands collection
declare module "discord.js" {
  export interface Client {
    commands: Collection<string, any>;
  }
}
