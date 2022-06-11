import { useState } from "react";
import Game from "./components/Game";
import Typer from "./components/Typer";
import { booksTexts } from "./data/texts";
import { GameStatus } from "./interface/GameStatus";

function App() {
  return (
    <div className="h-screen bg-gray-900">
      <div className="container mx-auto ">
        <header className="py-4">
          <h1 className="text-lg mb-8 text-white">
            perne - simple typing game
          </h1>
        </header>

        <Game />
      </div>
    </div>
  );
}

export default App;
