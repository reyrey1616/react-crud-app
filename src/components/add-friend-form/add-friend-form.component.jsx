import React, { useState } from "react";
import { FormContainer, ButtonContainer } from "./add-friend-form.styles";
const AddFriendForm = () => {
  const [data, setData] = useState({
    fname: "",
    mname: "",
    lname: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };
  const { fname, mname, lname, age, email, password, confirmPassword } = data;
  return (
    <FormContainer>
      <h1>Create your account</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field-container">
          <label className="input-label"> Firstname: </label>
          <input
            type="text"
            name="fname"
            value={fname}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="input-field-container">
          <label className="input-label"> Middlename: </label>
          <input
            type="text"
            name="mname"
            value={mname}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className="input-field-container">
          <label className="input-label"> Lastname: </label>
          <input
            type="text"
            name="lname"
            value={lname}
            onChange={handleChange}
            className="input-field"
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
          />
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
