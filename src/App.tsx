import React, { useState } from "react";
import "./App.css";

interface IProps {}

interface IUser {
  username: string;
  password: string;
}

interface IState {
  user: IUser;
}

function App() {
  return (
    <>
      <LoginForm />
    </>
  );
}

function LoginForm() {
  const [state, setState] = useState<IState>({
    user: { username: "", password: "" },
  });

  let updateInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  let login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state.user);
  };

  return (
    <div className="App">
      <h2>Login Employee</h2>
      <form onSubmit={login}>
        <div>
          <input
            name="username"
            value={state.user.username}
            onChange={updateInput}
            type="text"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            name="password"
            value={state.user.password}
            onChange={updateInput}
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default App;
