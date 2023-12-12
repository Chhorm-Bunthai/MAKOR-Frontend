import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { useEffect } from "react";
import Signup from "./pages/signup/SignUp";
import LogIn from "./pages/login/login";
import Main from "./pages/mainpage/Main";
import Logout from "./pages/logout/Logout";
import Navbar from "./component/Nav";
import ForgotPassword from "./pages/login/ForgotPassword";
import ResetPassword from "./pages/login/ResetPassword";
import Cookies from "js-cookie";
import { Provider } from "./context/authContext";

import "./App.css";
// import useAuthContext from "./hooks/useAuth";

function App() {
  const token = Cookies.get("jwt");
  return (
    <BrowserRouter>
      <Provider>
        <Navbar />

        <div className="">
          <Routes>
            <Route
              path="/"
              element={token ? <Main /> : <Navigate to="/login" />}
            />
            <Route path="/forgotPass" element={<ForgotPassword />} />
            <Route path="/resetPassword/:token" element={<ResetPassword />} />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/login"
              element={!token ? <LogIn /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!token ? <Signup /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}
export default App;
