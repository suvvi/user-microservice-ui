import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleCreateUser = () => {
    axios.post('http://localhost:8080/users', { name, email })
      .then(response => {
        alert(`User created with ID: ${response.data.insertedId}`);
        setName('');
        setEmail('');
      })
      .catch(error => {
        console.error('There was an error creating the user!', error);
      });
  };

  return (
    <div>
      <h2>Create User</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <button onClick={handleCreateUser}>Create User</button>
    </div>
  );
};

export default CreateUser;
