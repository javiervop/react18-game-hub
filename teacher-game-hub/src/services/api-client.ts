import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0aaee87e77cb41db8353f9600c892480",
  },
});
