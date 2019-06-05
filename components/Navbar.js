import ActiveLink from "./ActiveLink"

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ActiveLink href="/">NextConnect</ActiveLink>
    <div className="d-flex">
      <ActiveLink href="/profile">Profile</ActiveLink>
      <ActiveLink href="/signin">Signin</ActiveLink>
    </div>
  </nav>
)

export default NavBar
