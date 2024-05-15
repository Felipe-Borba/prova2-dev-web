import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

export default class PlayerController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const data = request.body;
      const player = await prisma.player.create({ data });

      return response.json(player);
    } catch (error) {
      return next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const { id, ...data } = request.body;
      const player = await prisma.player.update({
        where: { id },
        data,
      });

      return response.json(player);
    } catch (error) {
      return next(error);
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;
      const player = await prisma.player.delete({
        where: { id },
      });

      return response.status(204).json({});
    } catch (error) {
      return next(error);
    }
  }

  async list(request: Request, response: Response, next: NextFunction) {
    try {
      const players = await prisma.player.findMany({
        orderBy: { name: "asc" },
      });

      return response.json(players);
    } catch (error) {
      return next(error);
    }
  }

  async getById(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;
      const player = await prisma.player.findUnique({
        where: { id },
      });

      return response.json(player);
    } catch (error) {
      return next(error);
    }
  }
}
