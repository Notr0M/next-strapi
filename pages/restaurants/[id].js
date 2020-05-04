import React from "react";
import Layout from "../../components/Layout";
import fetch from "node-fetch";
import { useRouter } from "next/router";

export default function DynamicPage(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return <div>test</div>;
}

export async function getStaticPaths() {
  console.log("get path");
  const res = await fetch("http://localhost:1337/restaurants");
  const restaurants = await res.json();

  const paths = restaurants.map(
    (restaurant) => `/restaurants/${restaurant._id}`
  );

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}

export async function getStaticProps(arg) {
  console.log("get static");
  //console.log(arg);
  const res = await fetch(`http://localhost:1337/restaurants/${arg.params.id}`);
  const restaurant = await res.json();

  // Pass post data to the page via props
  return { props: { restaurant } };
}
