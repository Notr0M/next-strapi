import Layout from "../components/Layout";
import withData from "../lib/apollo";

import React from "react";
//import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";

function MyApp(props) {
  const { Component, pageProps, apollo } = props;

  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <style jsx global>
        {`
          body {
            margin-top: 100px;
          }
          header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: #fff;
            z-index: 1000;
          }
          a {
            color: white !important;
          }
          a:link {
            text-decoration: none !important;
            color: white !important;
          }
          a:hover {
            color: white;
          }
          .card {
            display: inline-flex;
          }
          .card-columns {
            column-count: 3;
          }
          .tar-col {
            background-color: #e5edf5;
            height: 200px;
          }
        `}
      </style>
    </div>
  );
}
// Wraps all components in the tree with the data provider
export default withData(MyApp);

/*
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 1000;
}*/
