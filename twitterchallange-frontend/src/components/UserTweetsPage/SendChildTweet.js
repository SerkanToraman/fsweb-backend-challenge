//Outsource JS Library
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

//Outsource JS Library
import { AuthContext } from "../../context/AuthContext";
import { setHomePageResetIncrease } from "../../store/actions/tweetAction";
import { sendSubTweetsActionCreator } from "../../store/actions/tweetAction";
import { getSubTweetsActionCreator } from "../../store/actions/tweetAction";

function SendChildTweet() {
  const dispatch = useDispatch();
  const { tweetid, userName } = useParams();
  const { loginData } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      parent_id: tweetid,
      user_id: loginData.id,
      tweet: "",
    },
  });

  const tweetHandleSubmit = (data) => {
    dispatch(sendSubTweetsActionCreator({ data, tweetid }));
    reset();
  };

  return (
    <section id="sendChildTweetMainContainer">
      <form id="sendChildTweetForm" onSubmit={handleSubmit(tweetHandleSubmit)}>
        <label id="sendChildTweetLabel">Replying to ${userName}</label>
        <textarea
          id="sendChildTweetInput"
          data-cy="sendChildTweetInputTest"
          type="text"
          placeholder="Tweet your reply!"
          maxLength="128"
          {...register("tweet")}
        />
        <div id="sendChildTweetButtonWrapper">
          <button data-cy="sendChildTweetSbmtBtn" type="submit">
            Reply
          </button>
        </div>
      </form>
    </section>
  );
}

export default SendChildTweet;
