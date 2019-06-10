import ActiveLink from "./ActiveLink"

const NavBar = () => (
  <nav className="navbar">
    <ActiveLink href="/">NextConnect</ActiveLink>

    <div className="d-flex">
      <span>
        <ActiveLink href="/profile">Profile</ActiveLink>
      </span>

      <span className="ml-2">
        <ActiveLink href="/signin">Signin</ActiveLink>
      </span>
    </div>
  </nav>
)

export default NavBar
