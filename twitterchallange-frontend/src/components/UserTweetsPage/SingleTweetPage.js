//Outsource JS Library
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";

//Internal JS
import SingleTweet from "./SingleTweet";
import TweetCard from "../HomePage/TweetCard";
import SendChildTweet from "./SendChildTweet";
import { getSubTweetsActionCreator } from "../../store/actions/tweetAction";
import { SOCKET_URL } from "../../endpoints/AxiosAuth";

function SingleTweetPage() {
  const dispatch = useDispatch();
  const { tweetid } = useParams();
  let socket = io(SOCKET_URL);
  socket.on("message", (msg) => {
    dispatch(getSubTweetsActionCreator(tweetid));
    //console.log(msg);
  });
  const childTweetById = useSelector((store) => store.tweetReducer.subPage);
  useEffect(() => {
    dispatch(getSubTweetsActionCreator(tweetid));
  }, [tweetid]);

  return (
    <>
      <SingleTweet />
      <SendChildTweet />
      <div id="SingleTweetChildTweetsWrapper">
        {childTweetById?.map((tweetitem, i) => (
          <TweetCard tweet={tweetitem} key={i} />
        ))}
      </div>
    </>
  );
}

export default SingleTweetPage;
