import { Router } from "express";
import { body } from "express-validator";
import MatchController from "../controller/match-controller";
import validate from "../middleware/validate";

const router = Router();
const controller = new MatchController();

router.post(
  "/",
  body("date").notEmpty(),
  body("place").notEmpty(),
  body("score").notEmpty(),
  body("homeTeam").notEmpty(),
  body("visitTeam").notEmpty(),
  validate,
  controller.create
);

router.put(
  "/",
  body("id", "id is required").notEmpty(),
  body("date").notEmpty(),
  body("place").notEmpty(),
  body("score").notEmpty(),
  body("homeTeam").notEmpty(),
  body("visitTeam").notEmpty(),
  validate,
  controller.update
);

router.delete("/:id", controller.delete);

router.get("/", controller.list);

router.get("/:id", controller.getById);

router.post("/:id/finish", controller.finish);

export default router;
