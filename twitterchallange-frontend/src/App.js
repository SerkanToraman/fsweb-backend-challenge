import { Route, Routes } from "react-router-dom";
import React from "react";

//Component Imports
import HomePage from "./Pages/HomePage";
import EntryPage from "./Pages/EntryPage";
import PrivateRoute from "./context/PrivateRoute";
import EntryPageProvider from "./context/EntryPageNavContext";
import HomePageSearchPage from "./components/HomePage/HomePageSearchPage";
import HomePageProvider from "./context/HomePageNavContext";
import UserTweetPage from "./Pages/UserTweetPage";
import SingleTweetPage from "./components/UserTweetsPage/SingleTweetPage";
import UserTweetsList from "./components/UserTweetsPage/UserTweetsList";

//CSS Imports
import "./scss/style.css";

function App() {
  return (
    <div id="appContainer">
      <Routes>
        <Route
          path="/"
          element={
            <EntryPageProvider>
              <EntryPage />
            </EntryPageProvider>
          }
        ></Route>

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePageProvider>
                <HomePage />
              </HomePageProvider>
            </PrivateRoute>
          }
        >
          <Route path="b" element={<HomePageSearchPage />} />
        </Route>
        <Route
          path="/:userName"
          element={
            <PrivateRoute>
              <UserTweetPage />
            </PrivateRoute>
          }
        >
          <Route path="t" element={<UserTweetsList />} />
          <Route path=":tweetid" element={<SingleTweetPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
