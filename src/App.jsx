import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/SignUp";
import LogIn from "./pages/login/login";
import Main from "./pages/mainpage/Main";
import "./App.css";
function App() {
  return (
    <Router>
      <>
        <Main />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </>
    </Router>
  );
}
export default App;
