import React from "react";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import { styled } from "../styles/stitches.config";
import { CARDS, Icard } from "../utils/data";
import { shuffleArray } from "../utils/shuffleArray";

const MainLayout = () => {
  const randomizedCards = shuffleArray<Icard>(CARDS);
  return (
    <Container>
      <Title>Card-Memory Game</Title>
      <Toolbar>
        <div>
          <img src="https://img.icons8.com/fluency/25/000000/star.png" />
          <img src="https://img.icons8.com/fluency/25/000000/star.png" />
          <img src="https://img.icons8.com/fluency/25/000000/star.png" />
        </div>
        <Button>
          <img
            src="https://img.icons8.com/ios/20/000000/restart--v2.svg"
            alt="reload"
          />
        </Button>
      </Toolbar>
      <CardContainer>
        {randomizedCards.map((card, i) => {
          return <Card key={i} {...card} />;
        })}
      </CardContainer>
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

const CardContainer = styled("div", {
  height: "590px",
  width: "590px",

  padding: "20px",
  fontFamily: "$Roboto",
  borderRadius: "10px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "repeat(4, 1fr)",
  justifyContent: "center",
  gap: "20px",
  background: "$background",
});

const Title = styled("h1", {
  fontFamily: "$Roboto",
  fontWeight: "lighter",
  margin: 0,
});

const Toolbar = styled("div", {
  width: "45%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
});
