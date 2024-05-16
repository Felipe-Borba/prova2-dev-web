import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

export default class MatchController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const { date, homeTeam, place, score, visitTeam } = request.body;
      const match = await prisma.match.create({
        data: {
          date: new Date(date),
          ended: false,
          homeTeam,
          place,
          score,
          visitTeam,
        },
      });

      return response.json(match);
    } catch (error) {
      return next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const { id, date, homeTeam, place, score, visitTeam } = request.body;
      const match = await prisma.match.update({
        where: { id },
        data: {
          date: new Date(date),
          homeTeam,
          place,
          score,
          visitTeam,
        },
      });

      return response.json(match);
    } catch (error) {
      return next(error);
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;
      const match = await prisma.match.delete({
        where: { id },
      });

      return response.status(204).json({});
    } catch (error) {
      return next(error);
    }
  }

  async list(request: Request, response: Response, next: NextFunction) {
    try {
      const match = await prisma.match.findMany({
        orderBy: { date: "asc" },
      });

      return response.json(match);
    } catch (error) {
      return next(error);
    }
  }

  async getById(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;
      const match = await prisma.match.findUnique({
        where: { id },
      });

      return response.json(match);
    } catch (error) {
      return next(error);
    }
  }

  async finish(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;
      const match = await prisma.match.update({
        where: { id },
        data: {
          ended: true,
        },
      });

      return response.status(204).json({});
    } catch (error) {
      return next(error);
    }
  }
}
