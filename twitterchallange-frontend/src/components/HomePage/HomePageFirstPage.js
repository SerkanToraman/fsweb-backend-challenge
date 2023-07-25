//Outsource JS library
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//Internal JS
import TweetCard from "./TweetCard";
import { getTweetsActionCreator } from "../../store/actions/tweetAction";

function HomePageFirstPage() {
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
