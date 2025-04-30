import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/landingPage/Home";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {

  return (
    < BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter >


  )
}

export default App
