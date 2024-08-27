import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "0b15214e6df545b0936f1061b1fd0326",
  },
});
