import Game from "./components/Game";
import logo from "./logo.png";

function App() {
  return (
    <div className="h-screen bg-gray-900">
      <div className="container mx-auto ">
        <header className="py-4">
          <h1 className="text-lg mb-8 text-white">
            <img src={logo} className="inline-block mr-4" />
            perne - simple typing game
          </h1>
        </header>

        <Game />
      </div>
    </div>
  );
}

export default App;
