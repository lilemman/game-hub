import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "e7e8942886034e55bbe12aecbc83844b",
  },
});
