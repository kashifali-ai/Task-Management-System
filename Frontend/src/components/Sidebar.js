function Sidebar({ role }) {

  return (

    <div
      style={{
        width: "250px",
        background: "#111827",
        color: "white",
        height: "100vh",
        padding: "20px"
      }}
    >

      <h2>Task Manager</h2>

      <hr />

      <p>Dashboard</p>

      {role === "ADMIN" && (
        <p>Create Task</p>
      )}

      <p>Assigned Tasks</p>

      <p>Completed</p>

    </div>
  );
}

export default Sidebar;