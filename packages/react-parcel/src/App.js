import React, { useState, useEffect } from "react";
import { listenEvent } from "@org-demo/utils";

const App = () => {
  const [tasks, updateTasks] = useState([]);

  useEffect(() => {
    listenEvent("@org-demo/react-route/todo/add-task", (event) => {
      console.log("evento disparado", event);
      updateTasks((oldTasks) => [...oldTasks, event.detail]);
    });
  }, []);

  return (
    <>
      <h1>@org-demo/react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
