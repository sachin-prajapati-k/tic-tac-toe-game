import "./App.css";
import Game from "./components/game/Square_Buttons";
import "bootstrap/dist/css/bootstrap.min.css";
import Boardt from "./components/with-typescript/Board";
function App() {
  return (
    <div className="App">
      {/* <Game /> */}
      <Boardt />
    </div>
  );
}

export default App;
