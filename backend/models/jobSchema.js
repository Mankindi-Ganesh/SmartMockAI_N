import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  jobType: {
    type: String,
    enum: ["Full-time", "Part-time", "Contract", "Internship"],
  },

  location: {
    type: String,
    required: true,
  },

  companyName: {
    type: String,
    required: true,
  },

  introduction: String,

  responsibilities: String,
  qualifications: String,
  offers: String,

  salary: String,

  hiringMultipleCandidates: {
    type: String,
    enum: ["Yes", "No"],
    default: "No",
  },

  personalWebsite: {
    title: String,
    url: String,
  },

  jobNiche: String,

  newsLettersSent: {
    type: Boolean,
    default: false,
  },

  jobPostedOn: {
    type: Date,
    default: Date.now,
  },

  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },

  // 🔥 HYBRID FIELDS
  source: {
    type: String,
    enum: ["internal", "external"],
    required: true,
  },

  externalId: {
    type: String,
    unique: true,
    sparse: true, // Allows multiple nulls for internal jobs
  },

  externalUrl: String,
});

export const Job = mongoose.model("Job", jobSchema);
