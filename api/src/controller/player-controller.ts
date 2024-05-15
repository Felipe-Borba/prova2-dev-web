import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

export default class PlayerController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      // const { name,  } = request.body;
      // const player = await prisma.player.create({
      // });
      // return response.json(player);
    } catch (error) {
      return next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      // const { name, email, id } = request.body;
      // const user = await prisma.user.update({
      //   where: { id },
      //   data: { name, email },
      // });
      // return response.json(user);
    } catch (error) {
      return next(error);
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      // const { id } = request.params;
      // const user = await prisma.user.delete({
      //   where: { id },
      // });
      // return response.status(204).json({});
    } catch (error) {
      return next(error);
    }
  }

  async list(request: Request, response: Response, next: NextFunction) {
    try {
      // const user = await prisma.user.findMany({ orderBy: { email: "asc" } });
      // return response.json(
      //   user.map((a) => ({ id: a.id, name: a.name, email: a.email }))
      // );
    } catch (error) {
      return next(error);
    }
  }

  async getById(request: Request, response: Response, next: NextFunction) {
    try {
      // const { id } = request.params;
      // const user = await prisma.user.findUnique({
      //   where: { id },
      // });
      // return response.json(user);
    } catch (error) {
      return next(error);
    }
  }
}
