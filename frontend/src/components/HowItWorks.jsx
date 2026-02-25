import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <LuUserPlus />,
      title: "Create an Account",
      desc: "Sign up for a free account as a job seeker or employer. Set up your profile in minutes and highlight your skills or job requirements.",
    },
    {
      id: 2,
      icon: <VscTasklist />,
      title: "Post or Browse Jobs",
      desc: "Employers can post detailed job descriptions, while job seekers browse positions and use filters to find matching opportunities.",
    },
    {
      id: 3,
      icon: <BiSolidLike />,
      title: "Hire or Get Hired",
      desc: "Employers shortlist candidates and extend offers. Job seekers review and accept positions aligned with their career goals.",
    },
  ];

  return (
    <section className="how-works">
      <div className="how-works-container">

        <div className="section-header">
          <h2>How It Works</h2>
          <p>Simple steps to connect talent with opportunities</p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.id}>
              <div className="step-number">{step.id}</div>

              <div className="step-icon">
                {step.icon}
              </div>

              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;