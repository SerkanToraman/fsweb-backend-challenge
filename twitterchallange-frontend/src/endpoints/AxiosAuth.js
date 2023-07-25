import axios from "axios";

const axiosWithAuth = () => {
  const user = localStorage.getItem("user");
  //console.log("ENV", process.env);
  let URL =
    "https://serkantoraman-twitterproject.onrender.com" ||
    "http://localhost:9000";
  return axios.create({
    baseURL: "https://serkantoraman-twitterproject.onrender.com",
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
