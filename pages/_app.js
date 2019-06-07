import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import React from "react";
import App, { Container } from "next/app";
import Navbar from "../components/Navbar";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <div className="bg-light min-vh-100 w-100">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </Container>
    );
  }
}

export default MyApp;
