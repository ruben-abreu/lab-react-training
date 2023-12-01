import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleNationality = (e) => {
    setNationality(e.target.value);
  };

  const getGreetingMessage = () => {
    switch (nationality) {
      case 'en':
        return 'Hello';
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      default:
        return '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="e-mail"
          value={email}
          onChange={handleEmail}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <label htmlFor="nationality">Nationality</label>
        <select
          name="nationality"
          id="nationality"
          onChange={handleNationality}
          value={nationality}
        >
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>

        <button type="submit">Sign up</button>
      </form>

      {submitted && (
        <div>
          <p>{getGreetingMessage()} </p>
          <p>Your email is {email}</p>
        </div>
      )}
    </div>
  );
}

export default SignupPage;
