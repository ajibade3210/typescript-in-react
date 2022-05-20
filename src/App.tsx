import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <Employee message="To Typescript In React" />
    </>
  );
}

// change "Employee" component
function Employee({ message }: { message: string }) {
  return (
    <>
      <h1>Welcome {message}</h1>
    </>
  );
}

export default App;
