import { useState } from "react";
import { booksTexts } from "../data/texts";
import { GameStatus } from "../interface/GameStatus";
import { initialStats, TypeStats } from "../interface/TypeStats";
import Stats from "./Stats";
import Typer from "./Typer";

function randomBookQuote() {
  return booksTexts[~~(Math.random() / booksTexts.length)];
}

export default function Game() {
  const [gameStatus, setGameStatus] = useState<GameStatus>(
    GameStatus.AwaitingInput
  );
  const [stats, setStats] = useState<TypeStats>(initialStats);
  const [startTime, setStartTime] = useState<number>(0);
  const [text, setText] = useState(randomBookQuote());

  const handleComplete = (numberOfMistakes: number) => {
    setGameStatus(GameStatus.Complete);
    setStats({
      numberOfWords: text.split(" ").length,
      numberOfChars: text.length,
      numberOfMistakes,
      startTime,
      completeTime: Math.floor(new Date().getTime() / 1000),
    });
  };

  const handleStart = () => {
    setGameStatus(GameStatus.Started);
    setStats(initialStats);
    setStartTime(Math.floor(new Date().getTime() / 1000));
  };

  const handleNewGame = () => {
    setText(randomBookQuote());
    setGameStatus(GameStatus.AwaitingInput);
  };

  return (
    <>
      {gameStatus !== GameStatus.Complete ? (
        <Typer
          text={text}
          onComplete={handleComplete}
          onStart={handleStart}
        />
      ) : (
        <Stats {...stats} onNewGame={handleNewGame} />
      )}
    </>
  );
}
