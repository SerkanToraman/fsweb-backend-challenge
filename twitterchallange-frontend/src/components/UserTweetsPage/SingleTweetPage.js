//Outsource JS Library
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Internal JS
import SingleTweet from "./SingleTweet";
import TweetCard from "../HomePage/TweetCard";
import SendChildTweet from "./SendChildTweet";
import { getSubTweetsActionCreator } from "../../store/actions/tweetAction";
import { socket } from "../../endpoints/AxiosAuth";

function SingleTweetPage() {
  const dispatch = useDispatch();
  const { tweetid } = useParams();

  socket.on("message", (msg) => {
    dispatch(getSubTweetsActionCreator(tweetid));
    socket.off("message");
    //console.log(msg);
  });
  const childTweetById = useSelector((store) => store.tweetReducer.subPage);

  useEffect(() => {
    dispatch(getSubTweetsActionCreator(tweetid));
  }, []);

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
