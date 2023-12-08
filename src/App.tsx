import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


import UserRoutes from "./routes/user/routes";
import { Toaster } from "react-hot-toast";

import './App.css'


function App() {


  return (
    <>
      <Toaster />
      <Router>
        <Routes>

          <Route path="/*" element={<UserRoutes />} />

        </Routes>
      </Router >
    </>
  )
}

export default App
