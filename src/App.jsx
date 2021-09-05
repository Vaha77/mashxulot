import React, { Component } from "react";
import { Container, NavbarStyle, SidbarStyle } from "./asos";
import Body from "./asosi/body/body.jsx";
import Navbar from "./asosi/navbar/navbar.jsx";
import Sidbar from "./asosi/sidbar/sidbar.jsx";

export default class App extends Component {
  render() {
    return (
      <Container>
        <Sidbar />
        <Navbar />
      </Container>
    );
  }
}
