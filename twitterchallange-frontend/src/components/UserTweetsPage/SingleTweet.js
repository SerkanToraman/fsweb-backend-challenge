//Outsource JS Library
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";

//Internal JS
// import { getTweetByIdActionCreator } from "../../store/actions/tweetAction";
import useAxios, { REQ_TYPES } from "../../endpoints/UseAxios";

function SingleTweet() {
  const { tweetid } = useParams();
  // const dispatch = useDispatch();
  // const tweetById = useSelector((store) => store.tweetReducer.singleTweet);
  // useEffect(() => {
  //     dispatch(getTweetByIdActionCreator(tweetid));
  // }, []);

  const [getTweetById, tweetById, loading, error] = useAxios([]);
  useEffect(() => {
    getTweetById({
      endpoint: "/api/tweets/" + tweetid,
      reqType: REQ_TYPES.GET,
    });
  }, [tweetid]);

  return (
    <section id="tweetCardContainer" key={tweetById?.tweet_id}>
      <div id="tweetCardImg">
        <i className="fa-solid fa-user fa-xl"></i>
      </div>
      <div id="tweetContainer">
        <div id="tweetContainerTop">
          <h3 id="tweetContainerTopName">{tweetById?.name}</h3>
          <h3 id="tweetContainerTopUserName">@{tweetById?.userName}</h3>
          <div id="tweetContainerTopIconWrapper">
            <p id="tweetContainerTopTime">
              {moment(tweetById?.created_at).fromNow()}
            </p>
            <button id="tweetContainerTopIcon">
              <i
                id="tweetContainerIcons"
                className="fa-solid fa-ellipsis fa-xl"
              ></i>
            </button>
          </div>
        </div>
        <div id="tweetContainerMid"> {tweetById?.tweet} </div>
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
