import React, { useState } from "react";
import Parcel from "single-spa-react/parcel";
import { v4 as uuid } from "uuid";
import { emitEvent } from "@org-demo/utils";

const App = ({ name }) => {
  const [task, updateTask] = useState("");

  const handleChange = (event) => {
    updateTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("emitindo evento", task);
    emitEvent("@org-demo/react-route/todo/add-task", {
      id: uuid(),
      describe: task,
      password: "123456",
    });
    updateTask("");
  };

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} />
        <button>Add</button>
      </form>
      <Parcel config={() => System.import("@org-demo/react-parcel")} />
    </>
  );
};

export default App;
