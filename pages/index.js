import RestaurantList from "../components/RestaurantList";
import React from "react";
import fetch from "node-fetch";

import {
  Alert,
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
} from "reactstrap";

class Index extends React.Component {
  constructor(props) {
    super(props);
    //query state will be passed to RestaurantList for the filter query
    this.state = {
      query: "",
    };
  }
  onChange(e) {
    //set the state = to the input typed in the search Input Component
    //this.state.query gets passed into RestaurantList to filter the results
    this.setState({ query: e.target.value.toLowerCase() });
  }
  render() {
    return (
      <div className="container-fluid">
        <h4>TEST</h4>
        <Row>
          <Col>
            <div className="search">
              <InputGroup>
                <InputGroupAddon addonType="append"> Search </InputGroupAddon>
                <Input onChange={this.onChange.bind(this)} />
              </InputGroup>
            </div>
            <RestaurantList
              restaurants={this.props.restaurants}
              search={this.state.query}
            />
          </Col>
        </Row>
        <style jsx>
          {`
            .search {
              margin: 20px;
              width: 500px;
            }
          `}
        </style>
      </div>
    );
  }
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/restaurants");
  const restaurants = await res.json();
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      restaurants,
    },
  };
}

export default Index;
