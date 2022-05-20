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

// change "Employee" component
const Employee: React.FC<MessageProps> = ({ message }) => {
  return (
    <>
      <h1>Welcome {message}</h1>
    </>
  );
};

export default App;
