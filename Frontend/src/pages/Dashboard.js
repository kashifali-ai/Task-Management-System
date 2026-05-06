import { useEffect, useState } from "react";

import API from "../services/api";

import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";

function Dashboard() {

  const [tasks, setTasks] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    API.get("/tasks/project?projectId=1")
      .then((res) => {
        setTasks(res.data);
      });

  }, []);

  return (

    <div style={{ display: "flex" }}>

      <Sidebar role={user.role} />

      <div
        style={{
          flex: 1,
          padding: "20px",
          background: "#f3f4f6",
          minHeight: "100vh"
        }}
      >

        <h1>Dashboard</h1>

        {/* ADMIN ONLY */}
        {user.role === "ADMIN" && (
          <TaskForm />
        )}

        {tasks.map((task) => (

          <TaskCard key={task.id} task={task} />

        ))}

      </div>
    </div>
  );
}

export default Dashboard;