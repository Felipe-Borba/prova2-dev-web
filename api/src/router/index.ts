import { Request, Response, Router } from "express";
import playerRoutes from "./player.routes";
import soccerTeamRoutes from "./soccerTeam.routes";

const routes = Router();

routes.use("/player", playerRoutes);
routes.use("/soccerTeam", soccerTeamRoutes);

routes.get("/", (request: Request, response: Response) => {
  response.json({ message: "Hello World!" });
});

export default routes;
