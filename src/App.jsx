import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
// import Test from "./components/Test";
import SignUpPage1 from "./Pages/SignUpPage1";
import SignUpPage from "./Pages/SignUpPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={SignInPage} />
        {/* <Route path="/" Component={Test} /> */}
        <Route path="/" Component={SignUpPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
