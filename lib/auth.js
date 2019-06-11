import axios from "axios"
import Router from "next/router"

axios.defaults.withCredentials = true

export const getServersideToken = req => {
  const { signedCookies = {} } = req

  if (!signedCookies || !signedCookies.token) {
    return {}
  }
  return { user: signedCookies.token }
}

export const getClientSideToken = () => {
  if (typeof window !== "undefined") {
    const user = window[WINDOW_USER_SCRIPT_VAR] || {}
    return { user }
  }

  return { user: {} }
}

const WINDOW_USER_SCRIPT_VAR = "__USER__"

export const getUserScript = user => {
  return `${WINDOW_USER_SCRIPT_VAR} = ${JSON.stringify(user)}`
}

export const authInitialProps = isProtectedRoute => ({ req, res }) => {
  const auth = req ? getServersideToken(req) : getClientSideToken(req)
  const currentPath = req ? res.url : window.location.pathname
  const user = auth.user
  const isAnonymous = !user || user.type !== "authenticated"
  if (isProtectedRoute && isAnonymous && currentPath !== "/signin") {
    return redirectUser(res, "/signin")
  }
  return { auth }
}

export const redirectUser = (res, path) => {
  if (res) {
    res.redirect(302, path)
    res.finished = true
    return {}
  }

  Router.replace(path)
  return {}
}

export const loginUser = async ({ email, password }) => {
  const { data } = await axios.post("/api/signin", { email, password })

  if (typeof window !== "undefined") {
    window[WINDOW_USER_SCRIPT_VAR] = data || {}
  }
}

export const logoutUser = async () => {
  if (typeof window !== "undefined") {
    window[WINDOW_USER_SCRIPT_VAR] = {}
  }
  await axios.post("/api/signout")
  Router.push("/signin")
}

export const getUserProfile = async () => {
  const { data } = await axios.get("/api/profile")
  return data
}
