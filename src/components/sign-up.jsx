import { useState } from 'react';

import '../App.css';

const defaultFormFields = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, displayName, email, password, confirmPassword } =
    formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    try {
      const test = () =>
        alert(`some asynchronous sign-up magic happens for ${email}`);
      await setTimeout(test, 1000);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        // update error codes to match backend api
/*         case 'display-name-already-in-use':
          alert('Cannot create user, display name already in use');
          break;
        case 'email-already-in-use':
          alert('Cannot create user, email already in use');
          break; */
        default:
          console.log('error encountered during user creation', error);
      }
    }
  };
  return (
    <div className="sign-up-container comp">
      <p>this is the sign-up container</p>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <input
          label="First Name"
          type="text"
          required
          name="firstName"
          placeholder="first name"
          value={firstName}
          onChange={handleChange}
        />
        <input
          label="Last Name"
          type="text"
          required
          name="lastName"
          placeholder="last name"
          value={lastName}
          onChange={handleChange}
        />
        <input
          label="Display Name"
          type="text"
          required
          name="displayName"
          placeholder="display name"
          value={displayName}
          onChange={handleChange}
        />
        <input
          label="Email"
          type="email"
          required
          name="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
        <input
          label="Password"
          type="password"
          required
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        <input
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
