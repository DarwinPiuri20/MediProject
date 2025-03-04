const express = require("express");
const authMiddlewares = require("../middlewares/authMiddlewares");
const roleMiddlewares = require("../middlewares/roleMiddlewares");
const dateControllers = require("../controllers/dateControllers");

const router = express.Router();

///add date patient

router.post("/", authMiddlewares, roleMiddlewares("patient"), dateControllers.addDate);

///get patient dates

router.get("/my-dates", authMiddlewares, roleMiddlewares("patient"), dateControllers.myDates);

///get doctor dates

router.get("/doctor-dates", authMiddlewares, roleMiddlewares("doctor"), dateControllers.doctorDates);

///accept date

router.put("/:id/accept", authMiddlewares, roleMiddlewares("doctor"), dateControllers.acceptDate);

///reject date

router.put("/:id/reject", authMiddlewares, dateControllers.rejectDate);

module.exports = router;
