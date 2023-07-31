import axios from "axios";


const axiosWithAuth = () => {
  
  const user = localStorage.getItem("user");
  //console.log("ENV", process.env);
  // let URL =
  //   "https://serkantoraman-twitterproject.onrender.com" ||
  //   "http://localhost:9000";
  //https://serkantoraman-twitterproject-socket-io.onrender.com
  return axios.create({
    baseURL: "https://serkantoraman-twitterproject-socket-io.onrender.com",
    headers: {
      Authorization: JSON.parse(user).token,
    },
  });
};

export default axiosWithAuth;

//"https://serkantoraman-twitterproject.onrender.com"
//"http://localhost:9000"


export const SOCKET_URL = "https://serkantoraman-twitterproject-socket-io.onrender.com";