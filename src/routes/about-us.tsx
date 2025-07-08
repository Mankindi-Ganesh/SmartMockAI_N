
const AboutUsPage = () => {
  return (
    <div className="about-us-container p-6 md:p-10 lg:p-12 bg-white text-gray-900 min-h-screen">
      <div className="max-w-3xl w-full space-y-8 m-auto">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          About Us
        </h1>
        <p className="text-gray-700 text-center text-lg sm:text-xl">
          We are the AC07 Project Group, a team of dedicated students from GRIET, specializing in AIML. We developed the AI-Powered Mock Interview System as our minor project. Our mission is to empower job seekers with the tools and resources they need to excel in interviews and achieve their career goals.
        </p>

        <div className="team-info space-y-6 bg-gray-100 border border-gray-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Our Team</h2>
          <p className="text-gray-700">
            We are a group of passionate AIML students from GRIET, committed to creating innovative solutions. This project is a testament to our skills and dedication.
          </p>

          <div className="space-y-4">
            {/* G.Siddartha */}
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-indigo-600">Name: G.Siddartha</h3>
              <p className="text-gray-700">
                <strong>PinNo:</strong> 23245A6614
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> siddarthagunjala@gmail.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91 8639353175
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> AIML-C GRIET
              </p>
              <p className="text-gray-700">
                <strong>Role:</strong> Project Lead
              </p>
            </div>

            {/* N.Maneeth Reddy */}
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-indigo-600">Name: N.Maneeth Reddy</h3>
              <p className="text-gray-700">
                <strong>PinNo:</strong> 23245A6618
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> cmmaneethreddy@gmail.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91 9110543081
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> AIML-C GRIET
              </p>
              <p className="text-gray-700">
                <strong>Role:</strong> Tech Lead
              </p>
            </div>

            {/* K.Pavan Kalyan */}
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-indigo-600">Name: K.Pavan Kalyan</h3>
              <p className="text-gray-700">
                <strong>PinNo:</strong> 22241A66F6
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> Kethavathpavankalyan4096@gmail.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91 7075011480
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> AIML-C GRIET
              </p>
              <p className="text-gray-700">
                 <strong>Role:</strong> UI/UX Designer
              </p>
            </div>
          </div>
        </div>

        <div className="project-details space-y-6">
            <h2 className="text-2xl font-semibold text-blue-600">Project Overview</h2>
            <p className="text-gray-700">
                The AI-Powered Mock Interview System is a web application designed to simulate real-world job interviews.  It leverages artificial intelligence to provide candidates with personalized feedback, identify areas for improvement, and ultimately increase their confidence and success in actual interviews.
            </p>
            <p className="text-gray-700">
               Our goal is to make interview preparation more accessible, effective, and less stressful for everyone.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
