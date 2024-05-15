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
      });

      return response.json(soccerTeam);
    } catch (error) {
      return next(error);
    }
  }
}
