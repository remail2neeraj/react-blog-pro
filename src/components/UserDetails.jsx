import React, { useState } from "react";
import { validateUserForm } from "../utils/validation";

const UserDetails = ({ user, onClose, onUpdateUser }) => {
  const [error, setError] = useState("");

  if (!user) {
    return null;
  }

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);



  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {error && <p>{error}</p>}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      ) : (
        <h2>{user.name}</h2>
      )}
      <strong>Username:</strong> {user.username}
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
      <p>
        <strong>Catch Phrase:</strong> {user.company.catchPhrase}
      </p>
      <p>
        <strong>Business:</strong> {user.company.bs}
      </p>
      <p>
        <strong>City:</strong> {user.address.city}
      </p>
      <p>
        <strong>Street:</strong> {user.address.street}
      </p>
      <p>
        <strong>Suite:</strong> {user.address.suite}
      </p>
      <p>
        <strong>ZIP Code:</strong> {user.address.zipcode}
      </p>
      <p>
        <strong>Latitude:</strong> {user.address.geo.lat}
      </p>
      <p>
        <strong>Longitude:</strong> {user.address.geo.lng}
      </p>
      <button onClick={() => setIsEditing(true)}> Edit</button> &nbsp;
      <button
        onClick={() => {
          const errorMessage = validateUserForm(formData);

          if (errorMessage) {
            setError(errorMessage);
            return;
          }

          setError("");

          const updatedUser = {
            ...user,
            ...formData,
          };

          onUpdateUser(updatedUser);
          setIsEditing(false);
        }}
      >
        Save
      </button>
      &nbsp;
      <button
        onClick={() => {
          setFormData({
            name: user.name,
            email: user.email,
            phone: user.phone,
          });

          setIsEditing(false);
        }}
      >
        Cancel
      </button>
      &nbsp;
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default UserDetails;
