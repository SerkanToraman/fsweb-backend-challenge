//Outsource JS library
import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

//Internal JS
import useAxios, {REQ_TYPES} from '../../endpoints/UseAxios';
import TweetCard from '../HomePage/TweetCard';

function UserTweetsList() {

const {tweetid,userName} = useParams();

const [getTweets, tweets, loading, error] = useAxios([]);
//const button =useSelector((store) => store.tweetReducer.buttonCount);


useEffect(() => {
  getTweets({ endpoint: "/api/tweets/mainpage/"+userName, reqType: REQ_TYPES.GET });
  //console.log('buttonsingke',button)
}, [tweets]);



  return (
    <div id='tweetCardsMainContainer'>
     {tweets.map((tweetitem,i)=>(<TweetCard
        tweet={tweetitem}
        key={i}
        />
      ))}
    </div>
  )
}

export default UserTweetsList