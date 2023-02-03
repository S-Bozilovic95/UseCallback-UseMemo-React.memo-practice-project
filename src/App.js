import React, { useCallback, useMemo, useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const [items, setItems] = useState([23, 44, 1, 2, 6, 3, 11, 32]);

  // useCallback cuva funkciju u react memoriji i react je nece
  // koristiti kao novu funkciju svaki put kad se komponenta rerenderuje
  // to mi omogucava da mogu da koristim react.memo() i na komponentama
  // koje kao props primaju funkciju
  // ponasa se slicno kao useEffect i prima dependecy na isti nacin
  // ukoliko koristim bilo kakav state ili vrednost osim setState funkcije
  // za koju react garantuje da se nikad ne menja
  // potrebno je da prosledim tu vrednost kao dependency
  // potpuno isto kao kod useEffecta
  const toggleParahraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* takodje da bih sprecio da se pravi nov niz svaki put i izaziva rerender
    koristim useMemo i na taj nacin ni funkcija u demoOutput komponenti nece stalno da se 
    ponavlja */}
      <DemoOutput show={showParagraph} items={useMemo(() => items, [items])} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParahraphHandler}>Show Paragraph</Button>
    </div>
  );
}

export default App;
