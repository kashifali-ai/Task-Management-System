import { useState } from "react";

import API from "../services/api";

import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [data, setData] = useState({

    name: "",
    email: "",
    password: "",
    role: "MEMBER"
  });

  const handleSignup = async () => {

    // VALIDATION
    if (
      !data.name ||
      !data.email ||
      !data.password
    ) {

      alert("All fields required");

      return;
    }

    try {

      const response = await API.post(
        "/auth/signup",
        data
      );

      console.log(response.data);

      alert("Signup Successful");

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Signup Failed");
    }
  };

  return (

    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111827"
      }}
    >

      <div
        style={{
          background: "white",
          padding: "40px",
          width: "350px",
          borderRadius: "10px"
        }}
      >

        <h1>Create Account</h1>

        <input
          placeholder="Name"
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
          onChange={(e) =>
            setData({
              ...data,
              name: e.target.value
            })
          }
        />

        <input
          placeholder="Email"
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
          onChange={(e) =>
            setData({
              ...data,
              email: e.target.value
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
          onChange={(e) =>
            setData({
              ...data,
              password: e.target.value
            })
          }
        />

        <select
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
          onChange={(e) =>
            setData({
              ...data,
              role: e.target.value
            })
          }
        >

          <option value="ADMIN">
            ADMIN
          </option>

          <option value="MEMBER">
            MEMBER
          </option>

        </select>

        <button
          onClick={handleSignup}
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none"
          }}
        >

          Signup

        </button>

      </div>
    </div>
  );
}

export default Signup;