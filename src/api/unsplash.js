import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID -Vk8jpJuj88eWOmPRpOqQIQNT8m2gGs4TjDYN_M1Z6s",
  },
});
