import axios from "axios";


const axiosWithAuth = () => {
  const SOCKET_URL = "http://localhost:9000";
  
   
  
  
  const user = localStorage.getItem("user");
  //console.log("ENV", process.env);
  // let URL =
  //   "https://serkantoraman-twitterproject.onrender.com" ||
  //   "http://localhost:9000";
  //https://serkantoraman-twitterproject-socket-io.onrender.com
  return axios.create({
    baseURL: "http://localhost:9000",
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
