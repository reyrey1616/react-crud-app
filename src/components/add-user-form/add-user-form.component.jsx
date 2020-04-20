import React, { useState } from "react";
import { FormContainer, ButtonContainer } from "./add-user-form.styles";
import { addNewUser } from "../../firebase/firebase.utils";
import ImageGenerator from "../image-generator/image-generator.component";
const AddFriendForm = () => {
  const [data, setData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
    imageUrl: `https://robohash.org/${Math.floor(
      Math.random() * 1000
    )}?200x200`,
  });
  const {
    firstName,
    middleName,
    lastName,
    age,
    email,
    password,
    confirmPassword,
    imageUrl,
  } = data;

  const generateImage = () => {
    setData({
      ...data,
      imageUrl: `https://robohash.org/${Math.floor(
        Math.random() * 1000
      )}?200x200`,
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password not match");
      return;
    }
    const userRef = await addNewUser({
      firstName,
      middleName,
      lastName,
      email,
      age,
      password,
      imageUrl,
    });
    const { data, status } = await userRef;
    if (status) {
      setData({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
        imageUrl: `https://robohash.org/${Math.floor(
          Math.random() * 1000
        )}?200x200`,
      });
    }
    console.log(data);
  };

  return (
    <FormContainer>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field-container">
          <label className="input-label"> Firstname: </label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="input-field-container">
          <label className="input-label"> Middlename: </label>
          <input
            type="text"
            name="middleName"
            value={middleName}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="input-field-container">
          <label className="input-label"> Lastname: </label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="input-field-container">
          <label className="input-label"> Age: </label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="input-field-container">
          <label className="input-label"> Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="input-field-container">
          <label className="input-label"> Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="input-field-container">
          <label className="input-label"> Confirm Password: </label>
          <input
            onChange={handleChange}
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            className="input-field"
            required
          />
        </div>

        <div>
          <ImageGenerator data={data} generateImage={generateImage} />
        </div>

        <ButtonContainer>
          <button type="submit" className="default-button">
            {" "}
            SIGN UP
          </button>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default AddFriendForm;
