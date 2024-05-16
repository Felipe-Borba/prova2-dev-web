import { Request, Response, Router } from "express";
import playerRoutes from "./player.routes";
import soccerTeamRoutes from "./soccerTeam.routes";
import matchRoutes from "./match.routes";

const routes = Router();

routes.use("/player", playerRoutes);
routes.use("/soccerTeam", soccerTeamRoutes);
routes.use("/match", matchRoutes);

routes.get("/", (request: Request, response: Response) => {
  response.json({ message: "Hello World!" });
});

export default routes;
