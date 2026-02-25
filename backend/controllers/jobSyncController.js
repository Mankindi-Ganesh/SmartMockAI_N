import axios from "axios";
import { Job } from "../models/jobSchema.js";

export const fetchAdzunaJobs = async () => {
  try {
    const response = await axios.get(
      "https://api.adzuna.com/v1/api/jobs/in/search/1",
      {
        params: {
          app_id: process.env.ADZUNA_APP_ID,
          app_key: process.env.ADZUNA_APP_KEY,
          results_per_page: 20,
          what: "fresher",
          where: "india",
          sort_by: "date",
        },
      }
    );

    const jobs = response.data.results;

    const formattedJobs = jobs.map((job) => ({
      updateOne: {
        filter: { externalId: job.id },
        update: {
          $setOnInsert: {
            title: job.title,
            jobType:
              job.contract_time === "full_time"
                ? "Full-time"
                : job.contract_time === "part_time"
                ? "Part-time"
                : "Full-time",
            location: job.location?.display_name || "Not specified",
            companyName: job.company?.display_name || "Unknown",
            introduction: job.description || "",
            responsibilities: job.description || "",
            qualifications: job.description || "",
            offers: "",
            salary: job.salary_min
              ? `${job.salary_min} - ${job.salary_max}`
              : "Not specified",
            hiringMultipleCandidates: "No",
            jobNiche: job.category?.label || "General",
            source: "external",
            externalId: job.id,
            externalUrl: job.redirect_url,
            jobPostedOn: job.created
              ? new Date(job.created)
              : Date.now(),
          },
        },
        upsert: true,
      },
    }));

    await Job.bulkWrite(formattedJobs);

    console.log("✅ Adzuna jobs synced successfully");
  } catch (error) {
    console.error("❌ Error fetching Adzuna jobs:", error.message);
  }
};