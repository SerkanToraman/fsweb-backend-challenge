//Outsource JS library
import React from "react";
import io from "socket.io-client";

//Internal JS
import axiosWithAuth from "../../endpoints/AxiosAuth";
import { SOCKET_URL } from "../../endpoints/AxiosAuth";

//Action Creators

export const tweetActions = {
  getTweets: "GET_TWEETS",
  getSubTweets: "GET_SUBTWEETS",
  getUserTweets: "GET_SUBTWEETSSUBS",
  sendSubTweets: "SEND_SUBTWEETS",
  getSingleTweet: "GET_SINGLETWEET",
  likeTweet: "LIKE_TWEET",
  dislikeTweet: "DISLIKE_TWEET",
};

let socket = io(SOCKET_URL);
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
      socket.emit("newTweet", "deneme");
    });
};
export const deleteTweetsActionCreator = (data) => (dispatch) => {
  console.log(data);
  axiosWithAuth()
    .post("/api/tweets", data)
    .then((res) => {
      dispatch(getTweetsActionCreator());
      socket.emit("newTweet", "deneme");
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
export const sendSubTweetsActionCreator = (dataSet) => (dispatch) => {
  const { data, tweetid } = dataSet;
  console.log(tweetid);
  axiosWithAuth()
    .post("/api/tweets/newtweet", data)
    .then((res) => {
      dispatch(getSubTweetsActionCreator(tweetid));
      socket.emit("newTweet", "deneme");
    });
};
export const deleteSubTweetsActionCreator = (dataSet) => (dispatch) => {
  const { data, tweetid } = dataSet;
  axiosWithAuth()
    .post("/api/tweets", data)
    .then((res) => {
      dispatch(getSubTweetsActionCreator(tweetid));
      socket.emit("newTweet", "deneme");
    });
};
export const getUserTweetsofSubsActionCreator = (userName) => (dispatch) => {
  axiosWithAuth()
    .get("/api/tweets/mainpage/" + userName)
    .then((res) => {
      dispatch({
        type: tweetActions.getUserTweets,
        payload: res.data,
      });
      console.log(res.data);
    });
};
export const getTweetByIdActionCreator = (tweetid) => (dispatch) => {
  axiosWithAuth()
    .get("/api/tweets/" + tweetid)
    .then((res) => {
      dispatch({
        type: tweetActions.getSingleTweet,
        payload: res.data,
      });
    });
};
export const sendLikesCreator = (data) => (dispatch) => {
  console.log("likeData", data);
  axiosWithAuth()
    .post("/api/likes/like", data)
    .then((res) => {
      dispatch(getTweetsActionCreator());
      socket.emit("newTweet", "deneme");
    });
};
export const sendDislikeCreator = (data) => (dispatch) => {
  axiosWithAuth()
    .post("/api/likes/likes", data)
    .then((res) => {
      dispatch(getTweetsActionCreator());
      socket.emit("newTweet", "deneme");
    });
};
export const sendSubLikesofTweetsCreator = (dataSet) => (dispatch) => {
  const { data, tweetid } = dataSet;
  console.log("likeData", data);
  axiosWithAuth()
    .post("/api/likes/like", data)
    .then((res) => {
      dispatch(getSubTweetsActionCreator(tweetid));
      socket.emit("newTweet", "deneme");
    });
};
export const sendSubDislikeofTweetsCreator = (dataSet) => (dispatch) => {
  const { data, tweetid } = dataSet;
  axiosWithAuth()
    .post("/api/likes/likes", data)
    .then((res) => {
      dispatch(getSubTweetsActionCreator(tweetid));
      socket.emit("newTweet", "deneme");
    });
};

export const sendSubLikesofUserCreator = (dataSet) => (dispatch) => {
  const { data, userName } = dataSet;
  console.log("likeData", data);
  axiosWithAuth()
    .post("/api/likes/like", data)
    .then((res) => {
      dispatch(getUserTweetsofSubsActionCreator(userName));
      socket.emit("newTweet", "deneme");
    });
};
export const sendSubDislikesofUserCreator = (dataSet) => (dispatch) => {
  const { data, userName } = dataSet;
  axiosWithAuth()
    .post("/api/likes/likes", data)
    .then((res) => {
      dispatch(getUserTweetsofSubsActionCreator(userName));
      socket.emit("newTweet", "deneme");
    });
};
