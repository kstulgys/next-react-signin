import Navbar from "./Navbar"

export default function Layout({ children, auth }) {
  return (
    <div>
      <Navbar auth={auth} />
      <div className="container min-vh-100">{children}</div>
    </div>
  )
}
