import React, { useState } from 'react';

const SendSMSForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fromNumber, setFromNumber] = useState('');
  const [toNumber, setToNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // API URL with placeholders for variables
    // const apiUrl = `https://www.smsstriker.com/API/sms.php?username=${username}&password=${password}&from=${fromNumber}&to=${toNumber}&msg=${message}&type=1`;
 const apiUrl = `https://www.smsstriker.com/API/sms.php?username=${username}&password=${password}&from=${fromNumber}&to=${toNumber}&msg=${message}&type=1&template_id=1407168967467983613`;
    // Call the function to send the SMS
    sendSMS(apiUrl);
  };

  const sendSMS = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text();
      console.log('API Response:', data);
      // Handle the API response as needed
      // For example, show a success message or update state
    } catch (error) {
      console.error('Error sending SMS:', error);
      // Handle errors here, show error message or update state
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        From Number:
        <input
          type='text'
          value={fromNumber}
          onChange={(e) => setFromNumber(e.target.value)}
        />
      </label>
      <label>
        To Number:
        <input
          type='text'
          value={toNumber}
          onChange={(e) => setToNumber(e.target.value)}
        />
      </label>
      <label>
        Message:
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button type='submit' aria-label='Send Sms'>Send SMS</button>
    </form>
  );
};

export default SendSMSForm;
