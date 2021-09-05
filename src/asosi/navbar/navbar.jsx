import React, { Component } from "react";
import { ContainerBody } from "../body/body";
import { Container, Navbar } from "./navbarStyle";

export default class navbar extends Component {
  render() {
    return (
      <Container>
        <Navbar>Navbar</Navbar>
        <ContainerBody>ss</ContainerBody>
      </Container>
    );
  }
}
