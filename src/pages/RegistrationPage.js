import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./RegistrationPage.module.css";

function RegistrationPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isFormValid = fullName.trim() && email.trim() && password.trim();

  const handleClose = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo(0, 0);
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <div className={classes.registrationPage}>
      <div className={classes.leftPanel}>
        <button className={classes.closeButton} onClick={handleClose}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
        </button>

        <div className={classes.content}>
          <h1 className={classes.title}>Sign up</h1>
          <p className={classes.subtitle}>
            Create a free account with your email.
          </p>

          <form className={classes.form} onSubmit={handleCreateAccount}>
            <div className={classes.inputGroup}>
              <input
                type="text"
                placeholder="Full Name"
                className={classes.input}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className={classes.inputGroup}>
              <input
                type="email"
                placeholder="Email"
                className={classes.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={classes.inputGroup}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={classes.input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className={classes.showPasswordButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg viewBox="0 0 24 24" width="20" height="20">
                  {showPassword ? (
                    <path
                      fill="currentColor"
                      d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
                    />
                  ) : (
                    <path
                      fill="currentColor"
                      d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                    />
                  )}
                </svg>
              </button>
            </div>

            <button
              type="submit"
              className={classes.submitButton}
              disabled={!isFormValid}
            >
              Create your free account
            </button>
          </form>

          <p className={classes.signInLink}>
            Already have an account? <a onClick={handleSignIn}>Sign in</a>
          </p>
        </div>

        <p className={classes.terms}>
          By continuing, you agree to our <a href="#">Terms of Service</a>. Read
          our <a href="#">Privacy Policy</a>.
        </p>
      </div>

      <div className={classes.rightPanel}>
        <img
          src="/img/bg.png"
          alt="Colorful gradient"
          className={classes.bgImage}
        />
      </div>
    </div>
  );
}

export default RegistrationPage;
