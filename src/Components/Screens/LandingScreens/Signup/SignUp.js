import React, { useState } from "react";
import "./SignUp.css";

const SignupModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!isOpen) return null;

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      return "Email is required";
    } else if (!emailRegex.test(value)) {
      return "Please enter a valid email";
    }
    return "";
  };

  const validatePassword = (value) => {
    if (!value) {
      return "Password is required";
    } else if (value.length < 6) {
      return "Password must be at least 6 characters";
    }
    return "";
  };

  const validateConfirmPassword = (value) => {
    if (!value) {
      return "Please confirm your password";
    } else if (value !== password) {
      return "Passwords do not match";
    }
    return "";
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (formSubmitted) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: validateEmail(value),
      }));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (formSubmitted) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: validatePassword(value),
      }));
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (formSubmitted) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: validateConfirmPassword(value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);

    if (emailError || passwordError || confirmPasswordError) {
      setErrors({
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
      return;
    }

    alert(`Signup successful! Email: ${email}`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" value={email} placeholder="Enter your email" onChange={handleEmailChange} />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={handlePasswordChange}
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>
          <div className="input-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              placeholder="Confirm your password"
              onChange={handleConfirmPasswordChange}
            />
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="login-redirect">
            <p>
              Already have an account?{" "}
              <a href="/login" className="login-link">
                Log in
              </a>
            </p>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
