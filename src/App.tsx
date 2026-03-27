 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicLayout } from "./layouts/public-layout";
// import { MainLayout } from "@/layouts/main-layout"; // remove if not needed

import HomePage from "./routes/home";
import { Dashboard } from "./routes/dashboard";
import { Generate } from "./components/generate";
import { CreateEditPage } from "./routes/create-edit-page";
import { MockLoadPage } from "./routes/mock-load-page";
import { MockInterviewPage } from "./routes/mock-interview-page";
import { Feedback } from "./routes/feedback";
import ContactUs from "./routes/contact-us";
import AboutUsPage from "./routes/about-us";
import ServicesPage from "./routes/services";

const App = () => (
  <Router>
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route element={<Generate />} path="/generate">
          <Route index element={<Dashboard />} />
          <Route path=":interviewId" element={<CreateEditPage />} />
          <Route path="interview/:interviewId" element={<MockLoadPage />} />
          <Route path="interview/:interviewId/start" element={<MockInterviewPage />} />
          <Route path="feedback/:interviewId" element={<Feedback />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default App;