const express = require("express");
const authMiddlewares = require("../middlewares/authMiddlewares");
const roleMiddlewares = require("../middlewares/roleMiddlewares");
const medicalRecordControllers = require("../controllers/medicalRecordControllers");

const 
router = express.Router();


/// create medical record

router.post("/", authMiddlewares, roleMiddlewares("doctor"), medicalRecordControllers.createMedicalRecord);


/// get medical records patient

router.get("/my-medical-records", authMiddlewares, roleMiddlewares("patient"), medicalRecordControllers.getMedicalRecords);

/// update medical record (nurse)

router.put("/:id", authMiddlewares, roleMiddlewares("nurse"), medicalRecordControllers.updateMedicalRecord);

module.exports = router;