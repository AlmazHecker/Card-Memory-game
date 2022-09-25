import React, { FC } from "react";
import { styled } from "../../styles/stitches.config";
import { Icard } from "../../utils/data";

interface CardProps extends Icard {
  onClick(): void;
}

const Card: FC<CardProps> = ({ icon, isActive, isFound, onClick }) => {
  if (isFound) {
    return (
      <Container>
        <Front css={{ background: "$found" }}>
          <img src={icon} alt="card-icon" />
        </Front>
      </Container>
    );
  }

  return (
    <Container
      onClick={onClick}
      css={{
        transform: isActive ? "rotateY(180deg)" : "",
      }}
    >
      <Front css={{ background: "$not-active" }}>
        <img
          src="https://img.icons8.com/ios/50/000000/question-mark--v1.png"
          alt="question-icon"
        />
      </Front>
      <Back css={{ background: "$active" }}>
        {isActive && <img src={icon} alt="card-icon" />}
      </Back>
    </Container>
  );
};

export default Card;

Card.propTypes = {};
Card.defaultProps = {};

const Container = styled("div", {
  width: "100%",
  height: "100%",

  borderRadius: "10px",
  position: "relative",

  cursor: "pointer",

  transformStyle: "preserve-3d",
  transition: "transform 0.5s linear",
});

const Front = styled("div", {
  display: "grid",
  placeItems: "center",
  height: "inherit",
  width: "inherit",
  borderRadius: "10px",

  position: "absolute",
});

const Back = styled("div", {
  transform: "translateZ(-0.1px) rotateY(180deg)",
  borderRadius: "10px",
  height: "inherit",
  width: "inherit",

  display: "grid",
  placeItems: "center",
});
