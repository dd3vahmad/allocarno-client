import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landingPage/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import GenerateTimeTable from "./pages/dashboard/pages/generate-timetable/GenerateTimeTable";
import FileUpload from "./pages/dashboard/pages/upload-file/FileUpload";
import SaveDraft from "./pages/dashboard/pages/saved-drafts/SaveDraft";
import Onboarding from "./pages/on-boarding/Onboarding";
import StudentSignup from "./pages/signup/student/StudentSignup";
import LecturerSignup from "./pages/signup/lecturer/LecturerSignup";
import StudentLogin from "./pages/login/studentLogin/StudentLogin";
import LandingPage from "./pages/landingPage/LandingPage";
import StudentDashboard from "./pages/dashboard/student/StudentDashboard";
import TimeTable from "./pages/dashboard/student/pages/timetable/TimeTable";
import Complain from "./pages/dashboard/student/pages/complaint/Complain";
function App() {

  return (
    < BrowserRouter >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* lecturer dashboard */}
        <Route path="/dashboard/student" element={<StudentDashboard />} /> {/* Student dashboard */}
        <Route path="/dashboard/student/timetable" element={<TimeTable />} /> {/* Student dashboard */}
        <Route path="/dashboard/student/complain" element={<Complain />} /> {/* Student dashboard */}
        <Route path="/dashboard/student/registration" element={<StudentDashboard />} /> {/* Student dashboard */}
        {/* lecturer */}
        <Route path="/dashboard/generate-timetable" element={<GenerateTimeTable />} />
        <Route path="/dashboard/upload" element={<FileUpload />} />
        <Route path="/dashboard/saved-drafts" element={<SaveDraft />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/onboarding/s/signup" element={<StudentSignup />} />
        <Route path="/onboarding/s/login" element={<StudentLogin />} />
        <Route path="/onboarding/l/signup" element={<LecturerSignup />} />
        {/* handle other pages */}
        <Route path="/*" element={<LandingPage />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter >


  )
}

export default App
