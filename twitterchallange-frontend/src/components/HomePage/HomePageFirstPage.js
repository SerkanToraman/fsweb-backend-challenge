//Outsource JS library
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//Internal JS
import TweetCard from "./TweetCard";
import { getTweetsActionCreator } from "../../store/actions/tweetAction";
import { socket } from "../../endpoints/AxiosAuth";

function HomePageFirstPage() {
  socket.on("message", (msg) => {
    dispatch(getTweetsActionCreator());
    socket.off("message");
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
