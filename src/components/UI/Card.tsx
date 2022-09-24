import React from "react";
import { styled } from "../../styles/stitches.config";

const Card = () => {
  return <Container>Card</Container>;
};

export default Card;

Card.propTypes = {};
Card.defaultProps = {};

const Container = styled("div", {
  background: "$background",
});
