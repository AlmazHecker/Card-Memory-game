import React from "react";
import Game from "../components/Game";
import { styled } from "../styles/stitches.config";

const MainLayout = () => {
  return (
    <Container>
      <Title>Card-Memory Game</Title>
      <Game />
    </Container>
  );
};

export default MainLayout;

MainLayout.propTypes = {};
MainLayout.defaultProps = {};

const Container = styled("div", {
  width: "620px",
  textAlign: "center",
  marginX: "auto",
});

const Title = styled("h1", {
  fontFamily: "$Roboto",
  fontWeight: "lighter",
  margin: 0,
});
