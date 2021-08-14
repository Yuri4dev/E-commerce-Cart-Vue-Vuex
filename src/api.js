import axios from "axios";

export const api = axios.create({
  baseURL: "https://test-2f356-default-rtdb.firebaseio.com/.json",
});
