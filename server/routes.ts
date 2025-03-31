import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getBotStatus } from "./bot";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for bot status
  app.get("/api/bot/status", async (req, res) => {
    try {
      const status = await getBotStatus();
      res.json(status);
    } catch (error) {
      res.status(500).json({ error: "Bot durumu alınamadı" });
    }
  });

  // Get server channels
  app.get("/api/bot/servers", async (req, res) => {
    try {
      const servers = await storage.getServerChannels();
      res.json(servers);
    } catch (error) {
      res.status(500).json({ error: "Sunucu kanalları alınamadı" });
    }
  });

  const httpServer = createServer(app);
  
  return httpServer;
}
