import { useState } from "react";
import API from "../services/api";

function TaskForm() {

  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: ""
  });

  const createTask = async () => {

    // VALIDATION
    if (!task.title || !task.dueDate) {
      alert("Title and Due Date required");
      return;
    }

    try {

      await API.post(
        "/tasks/create?projectId=1&userId=1",
        task
      );

      alert("Task Created");

      window.location.reload();

    } catch (error) {

      alert("Error creating task");
    }
  };

  return (

    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px"
      }}
    >

      <h2>Create Task</h2>

      <input
        placeholder="Title"
        onChange={(e) =>
          setTask({ ...task, title: e.target.value })
        }
      />

      <br /><br />

      <textarea
        placeholder="Description"
        onChange={(e) =>
          setTask({ ...task, description: e.target.value })
        }
      />

      <br /><br />

      <input
        type="date"
        onChange={(e) =>
          setTask({ ...task, dueDate: e.target.value })
        }
      />

      <br /><br />

      <button onClick={createTask}>
        Create
      </button>

    </div>
  );
}

export default TaskForm;