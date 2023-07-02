import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

function RegisterComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const authContext = useAuth();

  function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function handleSubmit() {
    if (await authContext?.register(username, password)) {
      navigate(`/login`);
    } else {
      setShowErrorMessage(true);
    }
  }

  return (
    <div className="Register">
      <h1>Time to Register!</h1>
      {showSuccessMessage && (
        <div className="successMessage">
          Registration Successfully! Redirecting to login...
        </div>
      )}
      {showErrorMessage && (
        <div className="errorMessage">
          Registration Failed. Please check your details and try again.
        </div>
      )}
      <div className="LoginForm">
        <div>
          <label>User Name:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="button" name="register" onClick={handleSubmit}>
            register
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterComponent;
