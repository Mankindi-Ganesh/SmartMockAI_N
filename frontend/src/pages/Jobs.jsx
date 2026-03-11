import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearAllJobErrors, fetchJobs } from "../store/slices/jobSlice";
import Spinner from "../components/Spinner";
import { FaSearch } from "react-icons/fa";

const Jobs = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const { jobs, loading, error } = useSelector((state) => state.jobs);

  const dispatch = useDispatch();

  // Fetch jobs once
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }

    dispatch(fetchJobs("", "", ""));
  }, [dispatch, error]);

  // Filter jobs by title
  const filteredJobs = jobs?.filter((job) =>
  (job.title + job.companyName + job.location)
    .toLowerCase()
    .includes(searchKeyword.toLowerCase())
);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="jobs-page">
          <div className="jobs-container">

            {/* SEARCH BAR */}
            <div className="jobs-search">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search jobs, companies..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
            </div>

            {/* JOBS GRID */}
            <div className="jobs-grid">
              {filteredJobs &&
                filteredJobs.map((element) => {

                  const applyLink =
                    element.personalWebsite?.url ||
                    element.externalUrl ||
                    element.redirect_url ||
                    element.url;

                  return (
                    <div
                      className="job-card"
                      key={element._id || element.externalId}
                    >
                      {element.hiringMultipleCandidates === "Yes" ? (
                        <p className="badge multiple">
                          Hiring Multiple Candidates
                        </p>
                      ) : (
                        <p className="badge single">Hiring</p>
                      )}

                      <h3>{element.title}</h3>

                      <p className="company">{element.companyName}</p>

                      <p className="location">{element.location}</p>

                      <p className="salary">
                        <span>Salary:</span> ₹
                        {element.salary || "Not specified"}
                      </p>

                      <p className="posted">
                        <span>Posted On:</span>{" "}
                        {element.jobPostedOn
                          ? element.jobPostedOn.substring(0, 10)
                          : "Recently"}
                      </p>

                      {applyLink && (
                        <a
                          className="apply-btn"
                          href={applyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Apply Now
                        </a>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Jobs;