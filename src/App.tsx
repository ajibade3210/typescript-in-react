import React, { useState } from "react";
import "./App.css";

interface IProps {
  staff: string;
  message: string;
}

interface IState {
  position: string;
  experience: number;
}

function App() {
  return (
    <>
      <Employee message="Good Morning" staff="Ryan" />
    </>
  );
}

function Employee({ staff, message }: IProps) {
  let [state, setState] = useState<IState>({
    position: "Software Engineer",
    experience: 17,
  });
  return (
    <div className="App">
      <h2>
        {message} {staff}
      </h2>
      <ul>
        <li>
          <span>Position:</span> {state.position}
        </li>
        <li>
          <span>Year Of Experience:</span> {state.experience}
        </li>
      </ul>
    </div>
  );
}

export default App;
