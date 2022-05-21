import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

// Generated interface type from "quicktype.io"
interface User {
  userId: number;
  id: number;
  title: string;
}

function App(): JSX.Element {
  const [employees, setEmployees] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => setEmployees(res.data));
  }, []);

  return (
    <div className="App">
      <h1>COB Summary</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Job Summary</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 &&
            employees.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.title}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
