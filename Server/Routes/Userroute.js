const express = require("express");
const router = express.Router();
const {createForm}=require("../Controller/UserContorller")


router.route("/create").post(createForm);


module.exports= router