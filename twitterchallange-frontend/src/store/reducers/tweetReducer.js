import { tweetActions, homePageResetIncrease } from "../actions/tweetAction";

const initialState = {
  mainPage: [],
  subPage: [],
  userPage: [],
  singleTweet: [],
  likeCount: [],
};

export function tweetReducer(state = initialState, action) {
  switch (action.type) {
    case tweetActions.getTweets:
      console.log([...action.payload]);
      return { mainPage: [...action.payload] };
    case tweetActions.getSubTweets:
      return { subPage: [...action.payload] };
    case tweetActions.getUserTweets:
      return { userPage: [...action.payload] };
    case tweetActions.getSingleTweet:
      return { singleTweet: action.payload };
    default:
      return state;
  }
}
