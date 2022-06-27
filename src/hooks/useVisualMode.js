const { useState } = require("react");

export default function useVisualMode(initialMode) {
  const [mode, setMode] = useState(initialMode);
  const [history, setHistory] = useState([initialMode]);

  // Method for setting new mode and history states
  function transition(newMode, replace = false) {
    if (replace) {
      //Remove most recent mode and replace it
      const copyOfHistory = [...history];
      copyOfHistory.pop();
      setHistory([...copyOfHistory, newMode]);
    } else {
      setHistory([...history, newMode]);
    }
    setMode(newMode);
  }

  // Method for going back in history of modes states
  function back() {
    if (history.length > 1) {
      const copyOfHistory = [...history];
      copyOfHistory.pop();
      setHistory([...copyOfHistory]);
      setMode(copyOfHistory[copyOfHistory.length - 1]);
    } else {
      setMode(...history[0]);
    }
  }

  return { mode, transition, back };
}
