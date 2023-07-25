//Outsource JS Library
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Internal JS
import SingleTweet from "./SingleTweet";
import TweetCard from "../HomePage/TweetCard";
import SendChildTweet from "./SendChildTweet";
import { getSubTweetsActionCreator } from "../../store/actions/tweetAction";

function SingleTweetPage() {
  const dispatch = useDispatch();
  const { tweetid } = useParams();
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
