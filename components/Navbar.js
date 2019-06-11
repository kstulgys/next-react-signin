import ActiveLink from "./ActiveLink"
import { logoutUser } from "../lib/auth"

export default function NavBar({ auth }) {
  const { user = {} } = auth || {}
  return (
    <nav className="navbar py-5 container">
      <span>
        <h4 className="m-0">
          Welcome,{" "}
          <span className="font-weight-bold">{user.name || "Guest"}</span>
        </h4>
      </span>
      <div className="d-flex">
        <span>
          <ActiveLink href="/">Home</ActiveLink>
        </span>
        {user.name ? (
          <>
            <span className="ml-3">
              <ActiveLink href="/profile">Profile</ActiveLink>
            </span>
            <span className="ml-2">
              <button className="btn font-weight-bold" onClick={logoutUser}>
                Signout
              </button>
            </span>
          </>
        ) : (
          <span className="ml-3">
            <ActiveLink href="/signin">Signin</ActiveLink>
          </span>
        )}
      </div>
    </nav>
  )
}
