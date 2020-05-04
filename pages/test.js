import React, { useEffect, useState } from "react";
import Link from "next/link";
import fetch from "node-fetch";

import { Container, Row, Col } from "reactstrap";

export default function Test() {
  const [person, setPerson] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("called");
    async function fetchData() {
      const res = await fetch("https://randomuser.me/api/");
      const data = (await res.json()).results[0];
      setPerson(data);
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h4>This a test page</h4>
      <Link href="/">
        <a>back to home</a>
      </Link>
      <Container>
        <Row>
          <Col className="tar-col" sm="12" md={{ size: 6, offset: 3 }}>
            {loading ? (
              <p>loading</p>
            ) : (
              <div>
                phone: {person.phone} <br />
                email: {person.email} <br />
                gender: {person.gender} <br />
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <style jsx>
        {`
          .all-col {
            background-color: red;
            color: red;
          }
        `}
      </style>
    </div>
  );
}

/*export async function getServerSideProps(ctx) {
  const res = await fetch(`http://localhost:1337/restaurants`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}*/
