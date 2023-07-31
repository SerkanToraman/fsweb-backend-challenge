//Outsource JS library
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";

//Internal JS
import TweetCard from "../HomePage/TweetCard";
import { getUserTweetsofSubsActionCreator } from "../../store/actions/tweetAction";
import { SOCKET_URL } from "../../endpoints/AxiosAuth";

function UserTweetsList() {
  const { userName } = useParams();
  const dispatch = useDispatch();
  let socket = io(SOCKET_URL);
  socket.on("message", (msg) => {
    dispatch(getUserTweetsofSubsActionCreator(userName));
    //console.log(msg);
  });
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
