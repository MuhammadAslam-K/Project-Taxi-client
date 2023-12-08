import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


import UserRoutes from "./routes/user/routes";
import { Toaster } from "react-hot-toast";

import './App.css'
import DriverRoutes from "./routes/driver/routes";


function App() {


  return (
    <>
      <Toaster />
      <Router>
        <Routes>

          <Route path="/*" element={<UserRoutes />} />
          <Route path="/driver/*" element={<DriverRoutes />} />

        </Routes>
      </Router >
    </>
  )
}

export default App
