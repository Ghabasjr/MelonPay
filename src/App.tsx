import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
