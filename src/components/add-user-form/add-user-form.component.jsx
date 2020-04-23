import React, { useState } from "react";
import { connect } from "react-redux";
import { FormContainer, ButtonContainer } from "./add-user-form.styles";
import { addNewUserStart } from "../../redux/users/user.actions";
import ImageGenerator from "../image-generator/image-generator.component";
const AddUserForm = ({ addNewUserStart }) => {
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
    email,
    age,
    password,
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

    if (password !== data.confirmPassword) {
      alert("Password not match");
      return;
    }
    addNewUserStart({
      firstName,
      middleName,
      lastName,
      email,
      password,
      age,
      imageUrl,
    });
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
            value={data.confirmPassword}
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

const mapDispatchToProps = (dispatch) => ({
  addNewUserStart: (user) => dispatch(addNewUserStart(user)),
});

export default connect(null, mapDispatchToProps)(AddUserForm);
