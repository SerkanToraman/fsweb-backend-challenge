//Outsource JS library
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";

//Internal JS
import TweetCard from "./TweetCard";
import { getTweetsActionCreator } from "../../store/actions/tweetAction";
import { SOCKET_URL } from "../../endpoints/AxiosAuth";

function HomePageFirstPage() {
  let socket = io(SOCKET_URL);
  socket.on("message", (msg) => {
    dispatch(getTweetsActionCreator());
    console.log(msg);
  });

  const dispatch = useDispatch();
  const tweets = useSelector((store) => store.tweetReducer.mainPage);

  useEffect(() => {
    dispatch(getTweetsActionCreator());
  }, []);

  return (
    <div id="tweetCardsMainContainer">
      {tweets?.map((tweetitem, i) => (
        <TweetCard tweet={tweetitem} key={i} />
      ))}
    </div>
  );
}

export default HomePageFirstPage;
