import { Route,Routes } from 'react-router-dom';
import React from 'react';



//Component Imports
import HomePage from './Pages/HomePage';
import EntryPage from './Pages/EntryPage';
import PrivateRoute from './context/PrivateRoute'
import EntryPageProvider from './context/EntryPageNavContext';
import HomePageSearchPage from './components/HomePage/HomePageSearchPage';
import SendTweetPage from './components/HomePage/SendTweetPage';
import HomePageProvider from './context/HomePageNavContext';
import UserTweetPage from './Pages/UserTweetPage';
import SingleTweet from './components/UserTweetsPage/SingleTweet';



//CSS Imports
import './scss/style.css'

function App() {


  return (
    <div id='appContainer'>
      <Routes>
          <Route path='/' element={
              <EntryPageProvider>
                 <EntryPage/>
              </EntryPageProvider> 
            }>
          </Route>
    
          <Route path="/home" 
            element={
              <PrivateRoute>
                <HomePageProvider>
                  <HomePage/>
                </HomePageProvider>
              </PrivateRoute>
            }
          >
           <Route path="b" element={<HomePageSearchPage/>}/>
           <Route path="c" element={<SendTweetPage/>}/>
          </Route>
          <Route path="/:userid" element={
            <PrivateRoute>
              <UserTweetPage/>
            </PrivateRoute>
          }>
          <Route path=":tweetid" element={<SingleTweet/>}/>
            
          </Route>      
     </Routes>
    </div>
  )
}

export default App;
