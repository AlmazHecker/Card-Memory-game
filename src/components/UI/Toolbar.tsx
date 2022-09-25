import React, { FC } from "react";
import { styled } from "../../styles/stitches.config";
import Button from "./Button";

interface ToolbarProps {
  onReset(): void;
  attempts: number;
}

const Toolbar: FC<ToolbarProps> = ({ onReset, attempts }) => {
  const getStars = () => {
    const stars = [1, 2, 3].map((item) => {
      return (
        <img
          key={item}
          src="https://img.icons8.com/fluency/25/000000/star.png"
          alt="star"
        />
      );
    });

    if (attempts > 10) stars.pop();

    return stars;
  };
  return (
    <Container>
      <div>{getStars()}</div>
      <Button onClick={onReset}>
        <img
          src="https://img.icons8.com/ios/20/000000/restart--v2.svg"
          alt="reload"
        />
      </Button>
    </Container>
  );
};

export default Toolbar;

Toolbar.propTypes = {};
Toolbar.defaultProps = {};

const Container = styled("div", {
  width: "45%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
});
