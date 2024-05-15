import { Router } from "express";
import { body } from "express-validator";
import PlayerController from "../controller/player-controller";
import validate from "../middleware/validate";

const router = Router();
const controller = new PlayerController();

router.post(
  "/",
  body("name").notEmpty(),
  body("age").notEmpty(),
  body("position").notEmpty(),
  body("nationality").notEmpty(),
  validate,
  controller.create
);

router.put(
  "/",
  body("id", "id is required").notEmpty(),
  body("name").notEmpty(),
  body("age").notEmpty(),
  body("position").notEmpty(),
  body("nationality").notEmpty(),
  validate,
  controller.update
);

router.delete("/:id", controller.delete);

router.get("/", controller.list);

router.get("/:id", controller.getById);

export default router;
