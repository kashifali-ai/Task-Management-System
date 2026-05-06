import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // LOGIN FUNCTION
  const handleLogin = async () => {

    try {

      const response = await API.post(
        `/auth/login?email=${email}&password=${password}`
      );

      console.log(response.data);

      // SAVE USER IN LOCAL STORAGE
      localStorage.setItem("user", JSON.stringify(response.data));

      alert("Login Successful");

      // ROLE BASED REDIRECT
      if (response.data.role === "ADMIN") {

        navigate("/dashboard");

      } else {

        navigate("/member");
      }

    } catch (error) {

      console.log(error);

      alert("Login Failed");
    }
  };

  return (

    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #1e3c72, #2a5298)"
      }}
    >

      <div
        style={{
          width: "350px",
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0px 0px 20px rgba(0,0,0,0.3)"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#1e3c72"
          }}
        >
          Team Task Manager
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "15px"
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "15px"
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold"
          }}
        >
          Login
        </button>

        <br /><br />

        <button
          onClick={() => navigate("/signup")}
          style={{
            width: "100%",
            padding: "12px",
            background: "#111827",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold"
          }}
        >
          Create Account
        </button>

      </div>
    </div>
  );
}

export default Login;