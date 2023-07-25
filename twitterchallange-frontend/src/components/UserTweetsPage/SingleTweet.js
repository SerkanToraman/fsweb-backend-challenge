//Outsource JS Library
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";

//Internal JS
import { getSubTweetsofSubsActionCreator } from "../../store/actions/tweetAction";

function SingleTweet() {
  const dispatch = useDispatch();
  const { tweetid } = useParams();
  const tweetById = useSelector((store) => store.tweetReducer);

  useEffect(() => {
    dispatch(getSubTweetsofSubsActionCreator(tweetid));
  }, []);

  return (
    <section id="tweetCardContainer" key={tweetById.tweet_id}>
      <div id="tweetCardImg">
        <i className="fa-solid fa-user fa-xl"></i>
      </div>
      <div id="tweetContainer">
        <div id="tweetContainerTop">
          <h3 id="tweetContainerTopName">{tweetById.name}</h3>
          <h3 id="tweetContainerTopUserName">@{tweetById.userName}</h3>
          <div id="tweetContainerTopIconWrapper">
            <p id="tweetContainerTopTime">
              {moment(tweetById.created_at).fromNow()}
            </p>
            <button id="tweetContainerTopIcon">
              <i
                id="tweetContainerIcons"
                className="fa-solid fa-ellipsis fa-xl"
              ></i>
            </button>
          </div>
        </div>
        <div id="tweetContainerMid"> {tweetById.tweet} </div>
        <div id="tweetContainerBottom">
          <button id="tweetContainerBottomMessageIcon_Wrapper">
            <div id="tweetContainerMessageIcon">
              <i
                id="tweetContainerIcons"
                className="fa-regular fa-comment fa-xl"
              ></i>
            </div>
          </button>
          <div id="tweetContainerBottomIcons">
            <button id="tweetContainerRetweetIcon">
              <i
                id="tweetContainerIcons"
                className="fa-solid fa-retweet fa-xl"
              ></i>
            </button>
          </div>
          <div id="tweetContainerBottomIcons">
            <button id="tweetContainerLikeIcon">
              <i
                id="tweetContainerIcons"
                className="fa-solid fa-heart fa-xl"
              ></i>
            </button>
          </div>
          <div id="tweetContainerBottomIcons">
            <button id="tweetContainerCountIcon">
              <i
                id="tweetContainerIcons"
                className="fa-solid fa-chart-simple fa-xl"
              ></i>
            </button>
          </div>
          <div id="tweetContainerBottomIcons">
            <button id="tweetContainerForwardIcon">
              <i
                id="tweetContainerIcons"
                className="fa-regular fa-share-from-square fa-xl"
              ></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleTweet;
