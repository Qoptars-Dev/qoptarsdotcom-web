const asyncHandler = require("express-async-handler");
const User = require("../modal/Usermodal")

const createForm = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const { name, email,phone, desc} = req.body;
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mandatory !");
    }
    const form = await User.create({
      name,
      email,
      phone,
    });
  
    res.status(201).json(form);
  });
  module.exports = {createForm};