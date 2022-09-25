import React, { useEffect, useState } from "react";
import Card from "../components/UI/Card";
import { styled } from "../styles/stitches.config";
import { CARDS, Icard } from "../utils/data";
import { shuffleArray } from "../utils/shuffleArray";
import Toolbar from "./UI/Toolbar";

interface ISelectedCard extends Icard {
  index: number;
}

interface selectedCardState {
  first: ISelectedCard | null;
  second: ISelectedCard | null;
}

const Game = () => {
  const [count, setCount] = useState({ attempts: 0, correct: 0 });
  const [cards, setCards] = useState(shuffleArray<Icard>(CARDS));
  const [selectedCards, setSelectedCards] = useState<selectedCardState>({
    first: null,
    second: null,
  });

  const onSelectCard = (card: Icard, index: number) => {
    if (selectedCards.first?.index === index) return;

    const newCards = [...cards];
    if (!selectedCards.first) {
      newCards[index].isActive = true;
      setCards(newCards);
      return setSelectedCards({ ...selectedCards, first: { ...card, index } });
    }
    if (!selectedCards.second) {
      newCards[index].isActive = true;
      setCards(newCards);
      setCount({ ...count, attempts: count.attempts + 1 });
      return setSelectedCards({ ...selectedCards, second: { ...card, index } });
    }
  };

  const resetCards = () => {
    setSelectedCards({ first: null, second: null });
    const newCards = cards.map(({ icon }) => {
      return { icon, isActive: false, isFound: false };
    });
    setCount({ correct: 0, attempts: 0 });
    setCards(shuffleArray(newCards));
    alert("Reset done!!!");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const newCards = [...cards];

      if (selectedCards.first && selectedCards.second) {
        const indexOfFirst = selectedCards.first.index;
        const indexOfSecond = selectedCards.second.index;
        if (selectedCards.first.icon === selectedCards.second.icon) {
          newCards[indexOfFirst].isActive = false;
          newCards[indexOfFirst].isFound = true;

          newCards[indexOfSecond].isActive = false;
          newCards[indexOfSecond].isFound = true;
          setCount({
            correct: count.correct + 1,
            attempts: count.attempts + 1,
          });
          setSelectedCards({ first: null, second: null });
          setCards(newCards);
          if (count.correct + 1 === 8) {
            alert(
              `OMG You have passed this game with ${
                count.attempts + 1
              } attempts!!!`
            );
          }
          return;
        }
        newCards[indexOfFirst].isActive = false;
        newCards[indexOfSecond].isActive = false;

        setCards(newCards);
        setSelectedCards({ first: null, second: null });
      }
    }, 800);
    return () => clearTimeout(timer);
  }, [cards, selectedCards]);

  return (
    <>
      <Toolbar onReset={resetCards} attempts={count.attempts} />
      <CardContainer>
        {cards.map((card, i) => {
          return (
            <Card key={i} onClick={() => onSelectCard(card, i)} {...card} />
          );
        })}
      </CardContainer>
    </>
  );
};

export default Game;

Game.propTypes = {};
Game.defaultProps = {};

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
