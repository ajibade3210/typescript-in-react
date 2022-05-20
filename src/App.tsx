import React from "react";
import "./App.css";

//type declaration
interface MessageProps {
  message: string;
}

function App() {
  return (
    <>
      <Employee message="To Typescript In React" />
    </>
  );
}

// "Employee" component
function Employee({ message }: MessageProps) {
  return (
    <>
      <h1>Welcome {message}</h1>
    </>
  );
}

export default App;
