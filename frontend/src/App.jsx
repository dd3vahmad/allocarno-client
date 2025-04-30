import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landingPage/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import GenerateTimeTable from "./pages/dashboard/pages/generate-timetable/GenerateTimeTable";
function App() {

  return (
    < BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/generate-timetable" element={<GenerateTimeTable />} />
        {/* handle other pages */}
        <Route path="/*" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter >


  )
}

export default App
