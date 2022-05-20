import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// Generated interface type from "quicktype"
interface User {
  userId: number;
  id: number;
  title: string;
}

interface IState {
  loading: boolean;
  users: User[];
  errorMessage: string;
}

function App(): JSX.Element {
  return (
    <>
      <JobLog />
    </>
  );
}

function JobLog() {
  const [state, setState] = useState<IState>({
    loading: false,
    users: [] as User[],
    errorMessage: "",
  });

  useEffect(() => {
    setState({ ...state, loading: true });
    UserService.getAllUsers()
      .then((res) => {
        setState({
          ...state,
          loading: false,
          users: res.data,
        });
      })
      .catch((err) => {
        setState({
          ...state,
          loading: false,
          errorMessage: err.message,
        });
      });
  }, []);

  return (
    <div className="App">
      <h1>COB Summary</h1>
      <div className="">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Created By User</th>
              <th>Job Summary</th>
            </tr>
          </thead>
          <tbody className="">
            {state.users.length > 0 &&
              state.users.map((user) => {
                return (
                  <tr key={user.id} style={{ border: "2px solid black" }}>
                    <td>{user.id}</td>
                    <td>{user.userId}</td>
                    <td>{user.title}</td>
                  </tr>
                );
              })}
          </tbody>
          <caption>Employee Job Log Summary</caption>
        </table>
      </div>
    </div>
  );
}

//Fetching API Using Axios
export class UserService {
  private static serverURL: string = `https://jsonplaceholder.typicode.com`;

  public static getAllUsers() {
    let dataURL: string = `${this.serverURL}/albums`;
    return axios.get(dataURL);
  }
}

export default App;
