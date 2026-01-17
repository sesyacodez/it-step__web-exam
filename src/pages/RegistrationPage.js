import { useState } from "react";

function RegistrationPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="RegistrationPage">
      <h1>Registration</h1>
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
      <button>Sign Up</button>
    </div>
  );
}

export default RegistrationPage;
