import Link from "next/link"
import Router from "next/router"
import { useState } from "react"
import { loginUser } from "../lib/auth"

export default function SignIn() {
  const [email, setEmail] = useState("Shanna@melissa.tv")
  const [password, setPwd] = useState("anastasia.net")
  const [errorMessage, setError] = useState("")
  const [isLoading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setLoading(true)
    loginUser({ email, password })
      .then(() => {
        Router.push("/profile")
      })
      .catch(err => {
        const error = (err.response && err.response.data) || err.message
        setError(error)
        setLoading(false)
      })
  }

  return (
    <form className="min-vh-100" onSubmit={handleSubmit}>
      <div class="row mt-5">
        <div class="col-12 col-md-8 col-lg-7 col-xl-5 text-left">
          <p>{errorMessage}</p>
          <div class="row">
            <div class="col">
              <h1 className="font-weight-bold">Sign In</h1>
              <p class="lead">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.{" "}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col mt-4">
              <input
                onChange={e => setEmail(e.target.value)}
                type="text"
                class="form-control"
                placeholder="Email"
                value={email}
              />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                onChange={e => setPwd(e.target.value)}
                value={password}
              />
            </div>
          </div>
          <div className="mt-2 d-flex">
            <a className="" href="#">
              forgot your password?
            </a>
          </div>
          <div class="row mt-4">
            <div class="col">
              <button class="btn btn-dark" type="submit" disabled={isLoading}>
                <span className="font-weight-bold">
                  {isLoading ? "Sending..." : "Submit"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
