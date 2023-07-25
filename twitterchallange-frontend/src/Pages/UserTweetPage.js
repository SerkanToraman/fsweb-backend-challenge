//Outsource JS library
import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

//Internal JS
import { AuthContext } from "../context/AuthContext";
import { DropDownContext } from "../context/DropDownButton";

function HomePage() {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  const { dropDown, setDropDown } = useContext(DropDownContext);

  return (
    <section
      id="homePageContainer"
      onClick={() => {
        setDropDown(false);
      }}
    >
      <section id="homePageleftNavBar">
        {/* <h2>{userWelcome}</h2> */}
        <nav id="homePageleftNavBarMainBtns">
          <button
            id="homePageleftNavBarBtn"
            onClick={() => {
              navigate("/home");
            }}
          >
            Home Page
          </button>
          {/* <button id="homePageleftNavBarBtn" onClick={() => {}}>
            Profile
          </button> */}
        </nav>
        <nav id="homePageleftNavBarPersonalBtns">
          {/* <button id="homePageleftNavBarBtn">Settings</button> */}
          <button
            id="logoutBtn"
            onClick={() => {
              logOut();
              navigate("/");
            }}
          >
            Logout
          </button>
        </nav>
      </section>
      <section id="userPageMainSection">
        <Outlet />
      </section>
    </section>
  );
}

export default HomePage;
