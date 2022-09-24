import React from "react";
import Card from "../components/UI/Card";
import { styled } from "../styles/stitches.config";
import { CARDS, Icard } from "../utils/data";
import { shuffleArray } from "../utils/shuffleArray";

const MainLayout = () => {
  const randomizedCards = shuffleArray<Icard>(CARDS);
  return (
    <Container>
      <Title>Card-Memory Game</Title>
      <CardContainer>
        {randomizedCards.map((card) => {
          return <Card key={card.icon} icon={card.icon} />;
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

const Title = styled("h2", {
  fontFamily: "$Roboto",
  fontWeight: "lighter",
});
