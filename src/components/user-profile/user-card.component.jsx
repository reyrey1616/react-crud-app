import React from "react";
import { connect } from "react-redux";
import { deleteUserStart } from "../../redux/users/user.actions";
import {
  CardWrapper,
  CardContainer,
  CardImage,
  TextContainer,
  ActionsContainer,
} from "./user-card.styles";
import { NavLink } from "react-router-dom";
const Card = ({
  data: { firstName, middleName, lastName, email, age, imageUrl },
  deleteUser,
  ...otherProps
}) => (
  <CardWrapper {...otherProps}>
    <CardContainer>
      <CardImage imageUrl={imageUrl} />
      <TextContainer>
        <p className="big-text"> {email} </p>
        <p className="normal-text">
          {" "}
          {`${firstName} ${middleName} ${lastName}`}
        </p>
        <p className="normal-text"> {`${age}`} </p>
      </TextContainer>

      <ActionsContainer>
        <NavLink className="default-button" to={`/edit-user/${email}`}>
          Edit
        </NavLink>
        <button
          className="default-button"
          onClick={() =>
            deleteUser({
              firstName,
              middleName,
              lastName,
              email,
              age,
              imageUrl,
            })
          }
        >
          Delete
        </button>
      </ActionsContainer>
    </CardContainer>
  </CardWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (user) => dispatch(deleteUserStart(user)),
});

export default connect(null, mapDispatchToProps)(React.memo(Card));
