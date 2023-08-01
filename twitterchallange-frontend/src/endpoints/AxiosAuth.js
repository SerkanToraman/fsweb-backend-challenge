import axios from "axios";
import io from "socket.io-client";

const axiosWithAuth = () => {
  const user = localStorage.getItem("user");

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
//"https://serkantoraman-twitterproject-socket-io.onrender.com"
export const SOCKET_URL =
  "https://serkantoraman-twitterproject-socket-io.onrender.com";
export let socket = io(SOCKET_URL);
