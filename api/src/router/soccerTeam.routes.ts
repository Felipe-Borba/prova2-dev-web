import { Router } from "express";
import { body } from "express-validator";
import SoccerTeamController from "../controller/soccerTeam-controller";
import validate from "../middleware/validate";

const router = Router();
const controller = new SoccerTeamController();

router.post(
  "/",
  body("name").notEmpty(),
  body("foundation").notEmpty(),
  body("country").notEmpty(),
  body("coach").notEmpty(),
  validate,
  controller.create
);

router.put(
  "/",
  body("id", "id is required").notEmpty(),
  body("name").notEmpty(),
  body("foundation").notEmpty(),
  body("country").notEmpty(),
  body("coach").notEmpty(),
  validate,
  controller.update
);

router.delete("/:id", controller.delete);

router.get("/", controller.list);

router.get("/:id", controller.getById);

router.post("/:soccerTeamId/add-player/:playerId", controller.addPlayer);
export default router;
