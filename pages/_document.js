import Document, { Html, Head, Main, NextScript } from "next/document"
import { getServersideToken, getUserScript } from "../lib/auth"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const userData = await getServersideToken(ctx.req)

    return { ...initialProps, ...userData }
  }

  render() {
    const { user = {} } = this.props

    return (
      <Html>
        <Head />
        <body>
          <Main />
          <script dangerouslySetInnerHTML={{ __html: getUserScript(user) }} />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
