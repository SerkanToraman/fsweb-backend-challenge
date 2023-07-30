//Outsource JS library
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";


//Internal JS
import TweetCard from "./TweetCard";
import { getTweetsActionCreator } from "../../store/actions/tweetAction";

function HomePageFirstPage() {
  const SOCKET_URL = "http://localhost:9000";
  let socket = io(SOCKET_URL);
  socket.on('message',()=>{dispatch(getTweetsActionCreator())})
   

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
