import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

export default class SoccerTeamController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const { coach, country, foundation, name } = request.body;
      const soccerTeam = await prisma.soccerTeam.create({
        data: { coach, country, foundation: new Date(foundation), name },
      });

      return response.json(soccerTeam);
    } catch (error) {
      return next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const { id, coach, country, foundation, name } = request.body;
      const soccerTeam = await prisma.soccerTeam.update({
        where: { id },
        data: { coach, country, foundation: new Date(foundation), name },
      });

      return response.json(soccerTeam);
    } catch (error) {
      return next(error);
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;
      const soccerTeam = await prisma.soccerTeam.delete({
        where: { id },
      });

      return response.status(204).json({});
    } catch (error) {
      return next(error);
    }
  }

  async list(request: Request, response: Response, next: NextFunction) {
    try {
      const soccerTeams = await prisma.soccerTeam.findMany({
        orderBy: { name: "asc" },
      });

      return response.json(soccerTeams);
    } catch (error) {
      return next(error);
    }
  }

  async getById(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;
      const soccerTeam = await prisma.soccerTeam.findUnique({
        where: { id },
        include: { Players: { orderBy: { name: "asc" } } },
      });

      return response.json(soccerTeam);
    } catch (error) {
      return next(error);
    }
  }

  async addPlayer(request: Request, response: Response, next: NextFunction) {
    try {
      const { soccerTeamId, playerId } = request.params;
      const player = await prisma.player.findUniqueOrThrow({
        where: { id: playerId },
        include: { soccerTeams: { orderBy: { foundation: "asc" } } },
      });

      if (player.soccerTeams.length >= 1) {
        throw new Error(
          "this player can not be in more then one soccer team at the same time"
        );
      }

      const soccerTeam = await prisma.soccerTeam.update({
        where: { id: soccerTeamId },
        data: { Players: { connect: { id: playerId } } },
      });

      return response.json(soccerTeam);
    } catch (error) {
      return next(error);
    }
  }
}
