import axios from 'axios';

const axiosWithAuth=()=>{
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: "https://serkantoraman-twitterproject.onrender.com",
    headers: {
      Authorization: token
    }
})
}

export default axiosWithAuth;
