import axios from "axios";
import io from "socket.io-client";

const axiosWithAuth = () => {
  let socket = io();
  const SOCKET_URL = "https://serkantoraman-twitterproject.onrender.com";
  socket.on("connect", () => {
    console.log("Conntected to server");
  });
  const user = localStorage.getItem("user");
  //console.log("ENV", process.env);
  // let URL =
  //   "https://serkantoraman-twitterproject.onrender.com" ||
  //   "http://localhost:9000";
  return axios.create({
    baseURL: SOCKET_URL,
    headers: {
      Authorization: JSON.parse(user).token,
    },
  });
};

export default axiosWithAuth;

//"https://serkantoraman-twitterproject.onrender.com"
//"http://localhost:9000"

// export let API = axiosWithAuth();

// export const renewToken = (user)=>{
//     localStorage.setItem("user",user);
//     API = axiosWithAuth();
// }
