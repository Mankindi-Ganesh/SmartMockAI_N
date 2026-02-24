import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Name must contain at least 3 characters."],
    maxLength: [30, "Name cannot exceed 30 characters."],
  },

  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide valid email."],
  },

  phone: {
    type: Number,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  niches: {
    firstNiche: String,
    secondNiche: String,
    thirdNiche: String,
  },

  password: {
    type: String,
    required: true,
    minLength: [8, "Password must contain at least 8 characters."],
    maxLength: [32, "Password cannot exceed 32 characters."],
    select: false, // hide password by default
  },

  resume: {
    public_id: String,
    url: String,
  },

  coverLetter: {
    type: String,
  },

  role: {
    type: String,
    required: true,
    enum: ["Job Seeker", "Employer"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});


/* ================= HASH PASSWORD BEFORE SAVE ================= */
userSchema.pre("save", async function (next) {
  // if password not modified → skip hashing
  if (!this.isModified("password")) {
    return next(); // VERY IMPORTANT
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});


/* ================= COMPARE PASSWORD ================= */
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


/* ================= GENERATE JWT TOKEN ================= */
userSchema.methods.getJWTToken = function () {
  return jwt.sign(
    { id: this._id },
    process.env.JWT_SECRET_KEY,
    { expiresIn: process.env.JWT_EXPIRE }
  );
};


export const User = mongoose.model("User", userSchema);