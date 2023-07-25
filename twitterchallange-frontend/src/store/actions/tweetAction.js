//Outsource JS library
import React from "react";

//Internal JS
import axiosWithAuth from "../../endpoints/AxiosAuth";

//Action Creators

export const tweetActions = {
  getTweets: "GET_TWEETS",
  getSubTweets: "GET_SUBTWEETS",
  getSubTweetsSubs: "GET_SUBTWEETSSUBS",
};

export const getTweetsActionCreator = () => (dispatch) => {
  axiosWithAuth()
    .get("/api/tweets/mainpage")
    .then((res) => {
      dispatch({
        type: tweetActions.getTweets,
        payload: res.data,
      });
      console.log(res.data);
    });
};
export const sendTweetsActionCreator = (data) => (dispatch) => {
  axiosWithAuth()
    .post("/api/tweets/newtweet", data)
    .then((res) => {
      dispatch(getTweetsActionCreator());
    });
};
export const deleteTweetsActionCreator = (data) => (dispatch) => {
  axiosWithAuth()
    .post("/api/tweets", data)
    .then((res) => {
      dispatch(getTweetsActionCreator());
    });
};

export const getSubTweetsActionCreator = (tweetid) => (dispatch) => {
  axiosWithAuth()
    .get("/api/tweets/" + tweetid + "/c")
    .then((res) => {
      dispatch({
        type: tweetActions.getSubTweets,
        payload: res.data,
      });
      console.log(res.data);
    });
};

export const getSubTweetsofSubsActionCreator = (tweetid) => (dispatch) => {
  axiosWithAuth()
    .get("/api/tweets/" + tweetid)
    .then((res) => {
      dispatch({
        type: tweetActions.getSubTweetsSubs,
        payload: res.data,
      });
      console.log(res.data);
    });
};

export const homePageResetIncrease = "RESET_SCREEN_INCREASE";
export const homePageResetDecrease = "RESET_SCREEN_DECREASE";
export const setHomePageResetIncrease = () => ({
  type: homePageResetIncrease,
});
export const setHomePageResetDecrease = () => ({
  type: homePageResetDecrease,
});
