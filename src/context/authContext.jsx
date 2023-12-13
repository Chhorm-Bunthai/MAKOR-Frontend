import { createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

function Provider({ children }) {
  let AppError;
  const Login = async (email, password) => {
    const val = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        val,
        {
          withCredentials: true,
        }
      );
      console.log(response); // log the successful response

      return response.data.data.token;

      // localStorage.setItem("token", response.data.data.token);
      // console.log(response.data.data.token);
    } catch (error) {
      if (error.response) {
        AppError = error.response.data.message;
      } else {
        console.error("Error submitting the form:", error);
      }
    }
  };

  const SignUp = async (name, email, password, passwordConfirm) => {
    const val = {
      name,
      email,
      password,
      passwordConfirm,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signup",
        val,
        {
          withCredentials: true,
        }
      );
      console.log(response.data); // log the successful response
    } catch (error) {
      if (error.response) {
        AppError = error.response.data.message;
      } else {
        console.error("Error submitting the form:", error);
      }
    }
  };

  const LogOut = async () => {
    // can also use Cookie.remove cuz we already have
    try {
      await axios.get("http://localhost:3000/api/users/logout", {
        withCredentials: true,
      });
      console.log("logged out");
    } catch (err) {
      console.log(err);
    }
  };

  // query me from backend
  const Me = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/users/me", {
        withCredentials: true,
      });
      console.log(response.data);
      return response.data; // destructuring data
    } catch (err) {
      console.log(err);
    }
  };
  const valueToShare = { Login, SignUp, LogOut, AppError, Me };

  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
}
export { Provider };
export default AuthContext;
