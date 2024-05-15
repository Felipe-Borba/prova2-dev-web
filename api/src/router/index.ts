import { Request, Response, Router } from "express";
import playerRoutes from "./player.routes";

const routes = Router();

routes.use("/player", playerRoutes);

routes.get("/", (request: Request, response: Response) => {
  response.json({ message: "Hello World!" });
});

export default routes;
