import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleContinueWithEmail = () => {
    navigate("/registration");
  };

  return (
    <div className="LoginPage">
      <h1>Login</h1>
      <form>
        <div>
          <label>Email: </label>
          <input type="email" />
        </div>
        <div>
          <label>Password: </label>
          <input type={showPassword ? "text" : "password"} />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </form>
      <button onClick={handleContinueWithEmail}>Continue with email</button>
    </div>
  );
}

export default LoginPage;
