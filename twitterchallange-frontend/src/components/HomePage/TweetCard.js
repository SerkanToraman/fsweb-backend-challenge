//Outsource JS library
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment-timezone";
import { useDispatch } from "react-redux";

//Internal JS
import useAxios, { REQ_TYPES } from "../../endpoints/UseAxios";
import { AuthContext } from "../../context/AuthContext";
import DropDownMenu from "./DropDownMenu";
import { DropDownContext } from "../../context/DropDownButton";
import {
  sendDislikeCreator,
  sendLikesCreator,
  sendSubLikesofTweetsCreator,
  sendSubDislikeofTweetsCreator,
  sendSubLikesofUserCreator,
  sendSubDislikesofUserCreator,
  getSubTweetsActionCreator,
} from "../../store/actions/tweetAction";

function TweetCard({ tweet }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userName, tweetid } = useParams();
  const { loginData } = useContext(AuthContext);
  const [like, setLike] = useState(false);
  const { dropDown, setDropDown } = useContext(DropDownContext);
  const [dropDownUnique, setDropDownUnique] = useState(false);

  useEffect(() => {
    if (dropDown === false) return setDropDownUnique(false);
  }, [dropDown]);

  useEffect(() => {
    setLike(
      tweet.likes.find((item) => item.user_id === loginData.id) ? true : false
    );
  }, [tweet]);

  const tweetLikeSubmit = (data) => {
    if (!like) {
      !userName
        ? dispatch(sendLikesCreator(data))
        : tweetid
        ? dispatch(sendSubLikesofTweetsCreator({ data, tweetid }))
        : dispatch(sendSubLikesofUserCreator({ data, userName }));
      setLike(true);
    } else if (like) {
      !userName
        ? dispatch(sendDislikeCreator(data))
        : tweetid
        ? dispatch(sendSubDislikeofTweetsCreator({ data, tweetid }))
        : dispatch(sendSubDislikesofUserCreator({ data, userName }));
    }
    setLike(false);
  };

  return (
    <section
      id="tweetCardContainer"
      key={tweet.tweet_id}
      onClick={() => {
        navigate("/" + tweet.userName + "/" + tweet.tweet_id);
        window.location.reload();
      }}
    >
      <div id="tweetCardImg">
        <i className="fa-solid fa-user fa-xl"></i>
      </div>
      <div id="tweetContainer">
        <div id="tweetContainerTop">
          <h3
            id="tweetContainerTopName"
            onMouseDown={() => {
              navigate("/" + tweet.userName + "/t");
            }}
          >
            {tweet.name}
          </h3>
          <h3 id="tweetContainerTopUserName">@{tweet.userName}</h3>
          <div id="tweetContainerTopIconWrapper">
            <p id="tweetContainerTopTime">
              {moment(tweet.created_at).fromNow()}
            </p>
            <button
              id="tweetContainerTopIcon"
              onClick={(e) => {
                e.stopPropagation();
                setDropDown(true);
                setDropDownUnique(!dropDownUnique);
              }}
            >
              <i
                id="tweetContainerIcons"
                className="fa-solid fa-ellipsis fa-xl"
              ></i>
            </button>
            {dropDown && dropDownUnique && (
              <DropDownMenu
                tweet={tweet}
                setDropDownUnique={setDropDownUnique}
              />
            )}
          </div>
        </div>
        <div id="tweetContainerMid"> {tweet.tweet} </div>
        <div id="tweetContainerBottom">
          <button id="tweetContainerBottomMessageIcon_Wrapper">
            <div id="tweetContainerMessageIcon">
              <i
                id="tweetContainerIcons"
                className="fa-regular fa-comment fa-xl"
              ></i>
            </div>
            <p id="tweetContainerBottomText">
              {tweet.replies.length === 0 ? "" : tweet.replies.length}
            </p>
          </button>
          <div id="tweetContainerBottomIcons">
            <button id="tweetContainerRetweetIcon">
              <i
                id="tweetContainerIcons"
                className="fa-solid fa-retweet fa-xl"
              ></i>
            </button>
          </div>
          <button
            id={
              like === false
                ? "tweetContainerBottomLikeIcons_Wrapper"
                : "tweetContainerBottomLikeIcons_Wrapper_Liked"
            }
            onClick={(e) => {
              e.stopPropagation();
              tweetLikeSubmit({
                user_id: loginData.id,
                tweet_id: tweet.tweet_id,
              });
            }}
          >
            <div id="tweetContainerLikeIcon">
              <i
                id="tweetContainerIcons"
                className="fa-solid fa-heart fa-xl"
              ></i>
            </div>
            <p id="tweetContainerLikeCountText">
              {tweet.likes.length === 0 ? "" : tweet.likes.length}
            </p>
          </button>
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

export default TweetCard;
