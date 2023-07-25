import { createContext, useState } from "react";
import React from "react";
import axios from "axios";
import axiosWithAuth from "../endpoints/AxiosAuth";
import useLocalStorage from "../localHook/UseLocalStorage";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loginData, setLoginData] = useLocalStorage("user", {});
  const [errorReponse, setErrorResponse] = useState();

  let isLoggedIn = loginData && loginData.token;

  // this Context goes to LoginForm
  const loginHandleSubmitContext = (user) => {
    //axiosWithAuth creates the baseURL
    // console.log("user",user)
    axiosWithAuth()
      .post("/api/auth/login", user)
      .then((res) => {
        res.data && setLoginData(res.data);
      })
      .catch((err) => setErrorResponse(err.response.data.message));
  };

  const logOut = () => {
    // axiosWithAuth()
    //   .get("/api/auth/logout")
    //   .then(()=>{
    setLoginData({});
    //   }).catch((err) =>
    // setErrorResponse(err.response.data.message)
    // );
  };

  return (
    <AuthContext.Provider
      value={{
        loginHandleSubmitContext,
        isLoggedIn,
        logOut,
        loginData,
        errorReponse,
        setErrorResponse,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
