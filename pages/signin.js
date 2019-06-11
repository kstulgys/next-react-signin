import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import SignIn from "../components/SignIn"
import Layout from "../components/Layout"
import { authInitialProps } from "../lib/auth"

export default function SignInPage(props) {
  return (
    <Layout {...props}>
      <SignIn />
    </Layout>
  )
}

SignInPage.getInitialProps = authInitialProps()
