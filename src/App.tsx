import React, { useEffect, useState } from "react";
import axios from "axios";
import { User } from "./model/user";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);

  // The type "User" Is Generated From quicktype and Import here
  useEffect(() => {
    function getUsers(): Promise<User[]> {
      return axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          console.log(res.data);
          setEmployees(res.data);
          return res.data as User[];
        });
    }
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>Make A Promises with Typescript. ❤</h1>

      <div className="">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Employee Email</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody className="">
            {employees.length > 0 &&
              employees.map((employee: User) => {
                return (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.email}</td>
                    <td>{employee.website}</td>
                    <td>{employee.company.name}</td>
                  </tr>
                );
              })}
          </tbody>
          <caption>Employee Data Summary</caption>
        </table>
      </div>
    </div>
  );
}

export default App;
