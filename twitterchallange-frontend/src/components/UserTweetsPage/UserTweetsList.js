//Outsource JS library
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//Internal JS
import TweetCard from "../HomePage/TweetCard";
import { getUserTweetsofSubsActionCreator } from "../../store/actions/tweetAction";

function UserTweetsList() {
  const { userName } = useParams();
  const dispatch = useDispatch();
  const tweets = useSelector((store) => store.tweetReducer.userPage);
  useEffect(() => {
    dispatch(getUserTweetsofSubsActionCreator(userName));
  }, []);

  return (
    <div id="tweetCardsMainContainer">
      {tweets?.map((tweetitem, i) => (
        <TweetCard tweet={tweetitem} key={i} />
      ))}
    </div>
  );
}

export default UserTweetsList;
