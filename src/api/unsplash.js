import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID cU2YcF9xZHf3BqO0Z93b_MjDGqPJiobaDnNn5R9mRb0",
  },
});
