//External JS
import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";

//Internal JS
import { AuthContext } from "../../context/AuthContext";
import { deleteTweetsActionCreator } from "../../store/actions/tweetAction";

function DropDownMenu({ tweet, setDropDownUnique }) {
  const dispatch = useDispatch();
  const { loginData } = useContext(AuthContext);
  const deleteTweetSubmit = async (data) => {
    dispatch(deleteTweetsActionCreator(data));
    setDropDownUnique(false);
  };
  return (
    <nav id="dropDownNav">
      <button
        id="item1"
        disabled={
          loginData.roleName === "Admin" || loginData.id === tweet.user_id
            ? false
            : true
        }
        onClick={(e) => {
          e.stopPropagation();
          deleteTweetSubmit({
            user_id: loginData.id,
            tweet_id: tweet.tweet_id,
          });
        }}
      >
        Delete
      </button>
    </nav>
  );
}
export default DropDownMenu;
