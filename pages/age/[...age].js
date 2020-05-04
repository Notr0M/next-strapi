import React from "react";

export default function Age(prop) {
  console.log(prop);
  return <>age</>;
}
export async function getStaticprops(params) {
  console.log(params);
  return {
    params,
  };
}
