import Profile from "../components/Profile"
import Layout from "../components/Layout"
import { authInitialProps, getUserProfile } from "../lib/auth"

export default function ProfilePage(props) {
  return (
    <Layout {...props}>
      <Profile />
    </Layout>
  )
}

ProfilePage.getInitialProps = authInitialProps(true)
