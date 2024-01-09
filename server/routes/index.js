const express = require("express");
const router = express.Router();
const authJwt = require("../middlewares/authJWT");
const refresh = require("../controller/refresh");
const functionController = require("../controller/function");
const pharmacistController = require("../controller/pharmacist");
const prescriptionController = require("../controller/prescription");
const qrcodeController = require("../controller/qrcode");
const authController = require("../controller/user_auth");
// 회원가입
router.post("/signup", authController.postSignup);
router.post("/signin", authController.postSignin);

// function
router.get("/checkqr", functionController.getCheckQR);
router.get("/kdcode", functionController.getKDcode);
router.get("/mediname", functionController.getMediName);

// pharmacist
router.post("/pharmacist", pharmacistController.postPharmacist);
router.patch("/pharmacist", pharmacistController.patchPharmacist);
router.delete("/pharmacist", pharmacistController.deletePharmacist);
router.get("/pharmacist", pharmacistController.getPharmacist);

// Prescription
router.post("/prescription", prescriptionController.patchPrescription);
router.patch("/prescription", prescriptionController.patchPrescription);
router.delete("/prescription", prescriptionController.deletePrescription);
router.get("/prescriptionlist", prescriptionController.getListPrescription);
router.get("/prescriptiondetail", prescriptionController.getDetailPrescription);

// QRcode
router.post("/qrcode", qrcodeController.postUserQR);
router.delete("/qrcode", qrcodeController.deleteUserQR);
router.get("qrcodelist", qrcodeController.getUserQRList);
router.get("/qrcodedetail", qrcodeController.getUserQRDetail);

// Test용 getUser
router.get("/getuser", authJwt, authController.getUser);

router.get("./refresh", refresh);
module.exports = router;
