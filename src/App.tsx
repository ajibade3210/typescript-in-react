import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const pickEvenNumber = new Promise<number>((resolve, reject) => {
      const isEvenNumber = Math.floor(Math.random() * 20);
      if (isEvenNumber % 2 === 0) {
        resolve(isEvenNumber);
        return;
      }
      reject(isEvenNumber);
    });
    pickEvenNumber
      .then((res) => console.log("Resolved: Even Number " + res))
      .catch((err) => console.log("Rejected: Not Even Number", err));
  }, []);

  return (
    <div className="App">
      <h1>Make A Promises with Typescript. ❤</h1>
    </div>
  );
}

export default App;
