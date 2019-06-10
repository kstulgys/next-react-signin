import axios from "axios"

axios.defaults.withCredentials = true

export const loginUser = async ({ email, password }) => {
  const { data } = await axios.post("/api/signin", { email, password })
  console.log(data)
}

export const getUserProfile = async () => {
  const { data } = await axios.get("/api/profile")
  console.log(data)
  return data
}
