import React from "react";
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
        <button className="default-button">Delete</button>
      </ActionsContainer>
    </CardContainer>
  </CardWrapper>
);

export default React.memo(Card);
