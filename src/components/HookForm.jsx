import React, { useState } from "react";
import "./HookForm.css";
import { v4 as uuid4 } from "uuid";

const HookForm = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...userFormData, id: uuid4() };
    setUsers([...users, newUser]);
    console.log("form submitted", users);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={userFormData.username}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={userFormData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={userFormData.password}
            onChange={handleInputChange}
          />
          <button>Register</button>
        </form>
      </div>

      {users.length > 0 && (
        <div className="result">
          {users.map(({ id, username, email }) => (
            <div key={id}>
              <p>{id}</p>
              <p>{username}</p>
              <p>{email}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default HookForm;
