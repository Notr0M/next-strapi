import React from "react";
import Head from "next/head";
import Link from "next/link";

import { Container, Nav, NavItem } from "reactstrap";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;
    const title = "Welcome to Nextjs";
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
        </Head>
        <header>
          <Nav className="navbar navbar-dark bg-dark">
            <NavItem>
              <Link href="/">
                <a className="navbar-brand">Home</a>
              </Link>
            </NavItem>

            <NavItem className="ml-auto">
              <Link href="/signin">
                <a className="nav-link">Sign In</a>
              </Link>
            </NavItem>

            <NavItem>
              <Link href="/signup">
                <a className="nav-link"> Sign Up</a>
              </Link>
            </NavItem>

            <NavItem>
              <Link
                href="/my/name/[names]/setting"
                as="/my/name/pooria/setting"
              >
                <a className="nav-link"> setting</a>
              </Link>
            </NavItem>

            <NavItem>
              <Link href="/test">
                <a className="nav-link"> test</a>
              </Link>
            </NavItem>
          </Nav>
        </header>
        <Container>{children}</Container>
      </div>
    );
  }
}

export default Layout;
