import Layout from "../components/Layout"
import { authInitialProps } from "../lib/auth"

export default function IndexPage(props) {
  const { user = {} } = props.auth || {}

  return (
    <Layout {...props}>
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <h1>This is the Index Page</h1>
        {!user.name && (
          <h1>
            Please <span className="font-weight-bold">SignIn</span>
          </h1>
        )}
      </div>
    </Layout>
  )
}

IndexPage.getInitialProps = authInitialProps()
