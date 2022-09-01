import { useState } from 'react';
import '../App.css';

const defaultSignInFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [signInFormFields, setSignInFormFields] = useState(
    defaultSignInFormFields
  );
  const { email, password } = signInFormFields;

  const resetFormFields = () => {
    setSignInFormFields(defaultSignInFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignInFormFields({ ...signInFormFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const test = () => alert(
        `some asynchronous authentication happens for ${email}`
      );
      await setTimeout(test, 1000)
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        // update error codes to match backend api
/*         case 'wrong-password':
          alert('incorrect password for email');
          break;
        case 'user not found':
          alert('no user associated with this email.');
          break; */
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-container comp">
      <p>this is the sign-in container</p>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
