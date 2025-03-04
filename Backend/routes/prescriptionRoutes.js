const express = require("express");
const authMiddlewares = require("../middlewares/authMiddlewares");
const roleMiddlewares = require("../middlewares/roleMiddlewares");
const prescriptionControllers = require("../controllers/prescriptionControllers");


const router = express.Router();

///doctor add prescription

router.post("/", authMiddlewares, roleMiddlewares("doctor"), prescriptionControllers.createPrescription);


/// patients get prescription

router.get("/my-prescriptions", authMiddlewares, roleMiddlewares("patient"), prescriptionControllers.myPrescriptions);

///doctor get prescriptions

router.get("/doctor-prescriptions", authMiddlewares, roleMiddlewares("doctor"), prescriptionControllers.doctorPrescriptions);

///dispense prescription

router.put("/:id/dispense", authMiddlewares, roleMiddlewares("pharmacy"), prescriptionControllers.dispensePrescription);


module.exports = router;