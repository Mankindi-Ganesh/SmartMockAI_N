
import {
    Cpu,  // For AI, Machine Learning
    Users,       // For personalized  // For speech analysis
    FileText,    // For resume
    Briefcase,   // For job matching
    TrendingUp,    // For progress tracking
    MessageSquare, // For feedback
   // For learning resources
    Code2,
    Languages
} from 'lucide-react';

const ServicesPage = () => {
    return (
        <div className="services-page-container p-6 md:p-10 lg:p-12 bg-white text-gray-900 min-h-screen">
            <div className="max-w-4xl w-full space-y-8 m-auto">
                <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    Our Services
                </h1>
                <p className="text-gray-700 text-center text-lg sm:text-xl">
                    We offer a suite of AI-powered services to help you ace your interviews and boost your career prospects.
                </p>

                <div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* AI-Powered Interview Simulation */}
                    <div className="service-card bg-gray-100 border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <Cpu className="w-10 h-10 text-blue-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">AI-Powered Interview Simulation</h2>
                        <p className="text-gray-700">
                            Experience realistic mock interviews with AI-generated questions and detailed performance analysis.
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>Detailed feedback on your answers</li>
                            <li>Analysis of speaking pace, tone, and filler words</li>
                            <li>Personalized suggestions for improvement</li>
                        </ul>
                    </div>

                    {/* Personalized Interview Training */}
                    <div className="service-card bg-gray-100 border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <Users className="w-10 h-10 text-green-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Personalized Interview Training</h2>
                        <p className="text-gray-700">
                            Tailored mock interviews based on your specific job role, industry, and experience level.
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>Customized questions relevant to your target position</li>
                            <li>Role-specific scenarios and simulations</li>
                            <li>Personalized difficulty adjustment</li>
                        </ul>
                    </div>

                    {/* Behavioral Interview Analysis */}
                    <div className="service-card bg-gray-100 border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <MessageSquare className="w-10 h-10 text-purple-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Behavioral Interview Analysis</h2>
                        <p className="text-gray-700">
                            In-depth analysis of your responses to behavioral questions to assess your soft skills.
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>Evaluation of leadership, teamwork, and problem-solving skills</li>
                            <li>Guidance on the STAR method</li>
                            <li>Feedback on clarity, conciseness, and impact</li>
                        </ul>
                    </div>

                    {/* Resume Enhancement */}
                    <div className="service-card bg-gray-100 border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <FileText className="w-10 h-10 text-yellow-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Resume Enhancement</h2>
                        <p className="text-gray-700">
                            Optimize your resume to make a strong first impression.
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>Resume analysis and feedback</li>
                            <li>Keyword optimization</li>
                            <li>ATS compliance checks</li>
                        </ul>
                    </div>

                    {/* Job Matching */}
                    <div className="service-card bg-gray-100 border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <Briefcase className="w-10 h-10 text-indigo-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Job Matching</h2>
                        <p className="text-gray-700">
                            Get matched with relevant job openings based on your profile and interview performance.
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>Personalized job recommendations</li>
                            <li>Targeted job search assistance</li>
                            <li>Connections to potential employers</li>
                        </ul>
                    </div>

                    {/* Progress Tracking */}
                    <div className="service-card bg-gray-100 border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <TrendingUp className="w-10 h-10 text-pink-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Progress Tracking</h2>
                        <p className="text-gray-700">
                            Track your interview skills development over time.
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>View past interview performance</li>
                            <li>Identify areas of improvement</li>
                            <li>Track your skill growth</li>
                        </ul>
                    </div>
                    {/* Technical Interview Support */}
                    <div className="service-card bg-gray-100 border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <Code2 className="w-10 h-10 text-orange-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Technical Interview Support</h2>
                        <p className="text-gray-700">
                            Ace your technical interviews with coding challenges and performance analysis.
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>Support for multiple programming languages</li>
                            <li>Real-time code evaluation and feedback</li>
                            <li>Assessment of code quality and efficiency</li>
                        </ul>
                    </div>

                    {/* Multi-language Support */}
                    <div className="service-card bg-gray-100 border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <Languages className="w-10 h-10 text-cyan-500 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Multi-language Support</h2>
                        <p className="text-gray-700">
                            Practice your interview skills in multiple languages.
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2">
                            <li>Mock interviews in multiple languages</li>
                            <li>Support for diverse linguistic backgrounds</li>
                            <li>Culturally relevant interview scenarios</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
