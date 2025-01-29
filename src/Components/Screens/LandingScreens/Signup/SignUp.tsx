import React, { useState } from "react";
import "./SignUp.css";

type SignupModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SignupModal: React.FC<SignupModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const validateEmail = (value: string): string => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return "Email is required";
    if (!emailRegex.test(value)) return "Please enter a valid email";
    return "";
  };

  const validatePassword = (value: string): string => {
    if (!value) return "Password is required";
    if (value.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const validateConfirmPassword = (value: string): string => {
    if (!value) return "Please confirm your password";
    if (value !== password) return "Passwords do not match";
    return "";
  };

  const validateUsername = (value: string): string => {
    if (!value) return "Username is required";
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>, 
    validator: (value: string) => string,
    field: string
  ) => {
    const value = e.target.value;
    setter(value);
    if (formSubmitted) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: validator(value),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(confirmPassword);
    const usernameError = validateUsername(username);

    if (emailError || passwordError || confirmPasswordError || usernameError) {
      setErrors({ email: emailError, password: passwordError, confirmPassword: confirmPasswordError, username: usernameError });
      return;
    }

    alert(`Signup successful! Username: ${username}, Email: ${email}`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username:</label>
            <input type="text" value={username} placeholder="Enter your username" onChange={(e) => handleChange(e, setUsername, validateUsername, "username")} />
            {errors.username && <p className="error-message">{errors.username}</p>}
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input type="email" value={email} placeholder="Enter your email" onChange={(e) => handleChange(e, setEmail, validateEmail, "email")} />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input type="password" value={password} placeholder="Enter your password" onChange={(e) => handleChange(e, setPassword, validatePassword, "password")} />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <div className="input-group">
            <label>Confirm Password:</label>
            <input type="password" value={confirmPassword} placeholder="Confirm your password" onChange={(e) => handleChange(e, setConfirmPassword, validateConfirmPassword, "confirmPassword")} />
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
          </div>
          <div className="login-redirect">
            <p>Already have an account? <a href="/login" className="login-link">Log in</a></p>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;