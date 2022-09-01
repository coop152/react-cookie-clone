import { useState } from 'react';
import './App.css';
import Clicker from './Clicker';
import useAnimationFrame from './useAnimationFrame';

function App() {
  const [startTime, setStartTime] = useState(0);
  const [previousTime, setPreviousTime] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [clicksPerSecond, setClicksPerSecond] = useState(0);

  // Main update function - runs every render (every frame and maybe more often than that)
  // so treat it like a "main loop" function.
  function update() {
    const elapsedSeconds = (frameTime - previousTime) / 1000;
    setClicks(clicks + (elapsedSeconds * clicksPerSecond));
    setPreviousTime(frameTime);
  }

  const frameTime = useAnimationFrame(update);
  const secondsOnPage = Math.floor((frameTime - startTime) / 1000);
 

  const incrementClicks = () => setClicks(clicks + 1);

  const submitDebugCPS = (e) => {
    e.preventDefault();
    setClicksPerSecond(document.getElementById("DebugCPS").value);
  }

  return (
    <div className="App">
      <h1>Time: <code>{secondsOnPage}</code></h1>
      <h1>XP: <code>{Math.floor(clicks)}</code></h1>
      <h3>Click!</h3>
      <Clicker incrementClicks={incrementClicks}></Clicker>
      <form onSubmit={submitDebugCPS}>
        <input type="number" name="DebugCPS" id="DebugCPS" defaultValue={0} />
        <input type="submit" value="Set Clicks per Second"></input>
      </form>
    </div>
  );
}

export default App;