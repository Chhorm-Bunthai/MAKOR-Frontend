import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/SignUp";
import LogIn from "./pages/login/login";
import Main from "./pages/mainpage/Main";
import Logout from "./pages/logout/Logout";
import Navbar from "./component/Nav";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
