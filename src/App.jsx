import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const [alerts, setAlerts] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const [focusState, setFocusState] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFocus = (name) => {
    setFocusState((prevFocusState) => ({ ...prevFocusState, [name]: true }));
  };

  const handleBlur = (name) => {
    setFocusState((prevFocusState) => ({ ...prevFocusState, [name]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAlerts = {};

    // Validate first name
    if (formData.firstName === '') {
      newAlerts.firstName = 'Please enter your first name';
    } else {
      newAlerts.firstName = '';
    }

    if (formData.lastName === '') {
      newAlerts.lastName = 'Please enter your last name';
    } else {
      newAlerts.lastName = '';
    }

    if (formData.email === '') {
      newAlerts.email = 'Please enter your email';
    } else {
      newAlerts.email = '';
    }

    if (formData.phoneNumber === '') {
      newAlerts.phoneNumber = 'Please enter your phone number';
    } else {
      newAlerts.phoneNumber = '';
    }

    setAlerts(newAlerts);

    if (
      newAlerts.firstName === '' &&
      newAlerts.lastName === '' &&
      newAlerts.email === '' &&
      newAlerts.phoneNumber === ''
    ) {
      setRegistrationSuccess(true);
      
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <div className="App">
      {registrationSuccess && (
        <div
          style={{
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px',
            marginTop: '10px',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          Registration Successful!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onFocus={() => handleFocus('firstName')}
            onBlur={() => handleBlur('firstName')}
            placeholder="Enter your first name"
            style={{
              borderColor: focusState.firstName ? 'navy' : '#ccc',
            }}
          />
          <div className="alert">{alerts.firstName}</div>
        </label>
        <br />
        <label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onFocus={() => handleFocus('lastName')}
            onBlur={() => handleBlur('lastName')}
            placeholder="Enter your last name"
            style={{
              borderColor: focusState.lastName ? 'navy' : '#ccc',
            }}
          />
          <div className="alert">{alerts.lastName}</div>
        </label>
        <br />
        <label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => handleFocus('email')}
            onBlur={() => handleBlur('email')}
            placeholder="Enter your email"
            style={{
              borderColor: focusState.email ? 'navy' : '#ccc',
            }}
          />
          <div className="alert">{alerts.email}</div>
        </label>
        <br />
        <label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            onFocus={() => handleFocus('phoneNumber')}
            onBlur={() => handleBlur('phoneNumber')}
            placeholder="Enter your phone number"
            style={{
              borderColor: focusState.phoneNumber ? 'navy' : '#ccc',
            }}
          />
          <div className="alert">{alerts.phoneNumber}</div>
        </label>
        <br />
        <button
          type="submit"
          style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
