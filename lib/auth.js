import axios from "axios";

export const loginUser = async ({ email, password }) => {
  console.log("got the data");
  const { data } = await axios.post("/api/login", { email, password });
  console.log(data);
};
