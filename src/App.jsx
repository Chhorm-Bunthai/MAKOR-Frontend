import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { useEffect } from "react";
import Signup from "./pages/signup/SignUp";
import LogIn from "./pages/login/login";
import Main from "./pages/mainpage/Main";
import Logout from "./pages/logout/Logout";

import ForgotPassword from "./pages/login/ForgotPassword";
import ResetPassword from "./pages/login/ResetPassword";
import PrivateRoutes from "./utils/PrivateRoute";

import "./App.css";
// import useAuthContext from "./hooks/useAuth";

function App() {
  // const token = Cookies.get("jwt");
  return (
    <Routes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route index element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Route>
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}
export default App;
