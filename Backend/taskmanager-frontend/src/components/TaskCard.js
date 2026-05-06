function TaskCard({ task }) {

  return (

    <div
      style={{
        background: "white",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 5px rgba(0,0,0,0.2)"
      }}
    >

      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>Status: {task.status}</p>

      <p>Due: {task.dueDate}</p>

    </div>
  );
}

export default TaskCard;