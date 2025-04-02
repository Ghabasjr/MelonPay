import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import DashBoard from "./Pages/DashBoard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
