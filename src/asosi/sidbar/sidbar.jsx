import React, { Component } from "react";
import {
  Body,
  Bord,
  Container,
  SidbarImg,
  Title,
  TitleWrapper,
} from "./SibBarStyle";
import avatar from "../img/sidbar.svg";

export default class sidbar extends Component {
  render() {
    return (
      <Container>
        <Title>SaS KiT</Title>
        <hr />
        <TitleWrapper>
          <SidbarImg src={avatar} />
        </TitleWrapper>
      </Container>
    );
  }
}
