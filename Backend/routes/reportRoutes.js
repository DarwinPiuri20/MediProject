const express = require("express");
const authMiddlewares = require("../middlewares/authMiddlewares");
const roleMiddlewares = require("../middlewares/roleMiddlewares");
const reportControllers = require("../controllers/reportControllers");

const router = express.Router();

///general reports only admin

router.get("/users-by-role", authMiddlewares, roleMiddlewares("administrator"), reportControllers.getTotalUsersByRole);
router.get("/dates-by-states", authMiddlewares, roleMiddlewares("administrator"), reportControllers.totalDatesByState);
router.get("/prescription-by-state", authMiddlewares, roleMiddlewares("administrator"), reportControllers.totalPrescriptionsByState);
router.get("/most-prescribed-medications", authMiddlewares, roleMiddlewares("administrator"), reportControllers.mostPrescribedMedications);


//// medic reports only medic

router.get("/doctor-dates", authMiddlewares, roleMiddlewares("doctor"), reportControllers.datesPerDoctor);
router.get("/prescription-history/:patientId", authMiddlewares, roleMiddlewares("doctor"), reportControllers.patientPrescriptions);


module.exports = router;