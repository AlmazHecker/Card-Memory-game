import React, { FC } from "react";
import { styled } from "../../styles/stitches.config";

interface CardProps {
  icon?: string;
}

const Card: FC<CardProps> = ({ icon }) => {
  return (
    <Container>
      <Value>
        <img src={icon} alt="card-icon" />
      </Value>
    </Container>
  );
};

export default Card;

Card.propTypes = {};
Card.defaultProps = {};

const Container = styled("div", {
  background: "$not-active",
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  position: "relative",
});

const Value = styled("div", {
  display: "grid",
  placeItems: "center",
  height: "100%",
  width: "100%",
});
