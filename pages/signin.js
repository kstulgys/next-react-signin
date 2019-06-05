import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import SignIn from "../components/SignIn"
import Link from "next/link"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"
// export default () => (
//   <div>
// <SignIn />
//   </div>
// );

export default function SignInPage() {
  return (
    <Layout>
      <SignIn />
    </Layout>
  )
}
