/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function Provider({ children }) {
  let AppError;
  const navigate = useNavigate();
  const [successLogin, setSuccessLogin] = useState(false);
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
      console.log(response.data); // log the successful response
      Cookies.set("jwt", response.data.data.token); // set token as cookie in frontend and only when user login is successful
      // localStorage.setItem("token", response.data.data.token);
      // console.log(response.data.data.token);
      console.log(Cookies.get("jwt"));
      if (Cookies.get("jwt")) navigate("/");
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

  const forgotPassword = async (email) => {
    try {
      const data = {
        email,
      };
      await axios.post("http://localhost:3000/api/users/forgotPassword", data, {
        withCredentials: true,
      });
    } catch (error) {
      if (error.response) {
        AppError = error.response.data.message;
      } else {
        console.error("Error submitting the form:", error);
      }
    }
  };

  const resetPassword = async (password, passwordConfirm, token) => {
    try {
      const data = {
        password,
        passwordConfirm,
      };
      console.log(data);
      const res = await axios.patch(
        `http://localhost:3000/api/users/resetPassword/${token}`,
        data,
        {
          withCredentials: true,
        }
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const valueToShare = {
    Login,
    SignUp,
    LogOut,
    AppError,
    Me,
    forgotPassword,
    resetPassword,
    successLogin,
  };

  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
}

export { Provider };
export default AuthContext;
