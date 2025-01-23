import "./App.css";
import { AlphabetExample } from "./components/Alphabet";
import { Card } from "./components/Card";
import ColorfulBoxesExample from "./components/ColorfulBoxes/ColorfulBoxes";
import { HorizontalParallaxExample } from "./components/HorizontalParallax";
import { RocketExample } from "./components/Rocket";
import { TrailExample } from "./components/TextAppear";

function App() {
  return (
    <div className="App">
      <h1>Примеры анимаций</h1>
      <Card>
        <TrailExample />
      </Card>
      <Card>
        <ColorfulBoxesExample />
      </Card>
      <Card>
        <RocketExample />
      </Card>
      <Card>
        <AlphabetExample />
      </Card>
      <Card>
        <HorizontalParallaxExample />
      </Card>
    </div>
  );
}

export default App;
