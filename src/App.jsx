import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Signup from "./pages/signup/SignUp";
import LogIn from "./pages/login/login";
import Main from "./pages/mainpage/Main";
import Logout from "./pages/logout/Logout";
import Navbar from "./component/Nav";
import ForgotPassword from "./pages/login/ForgotPassword";
import ResetPassword from "./pages/login/ResetPassword";
import Cookies from "js-cookie";

import "./App.css";
import useAuthContext from "./hooks/useAuth";

function App() {
  const { Me } = useAuthContext();
  // const token = localStorage.getItem("token");
  // console.log("App.js", token);
  const token = Cookies.get("jwt");

  useEffect(() => {
    const fetchData = async () => {
      const userData = await Me();
      console.log(userData);
    };

    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />

      <div className="">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/forgotPass" element={<ForgotPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
