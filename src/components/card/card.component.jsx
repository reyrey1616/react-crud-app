import React from "react";
import {
  CardWrapper,
  CardContainer,
  CardImage,
  TextContainer,
} from "./card.styles";

const Card = ({
  data: { firstName, middleName, lastName, email, age, id },
}) => (
  <CardWrapper>
    <CardContainer>
      <CardImage imageUrl={`https://robohash.org/${id}?200x200`} />
      <TextContainer>
        <p className="big-text"> {email} </p>
        <p className="normal-text">
          {" "}
          {`${firstName} ${middleName} ${lastName}`}
        </p>
        <p className="normal-text"> {`${age}`} </p>
      </TextContainer>
    </CardContainer>
  </CardWrapper>
);

export default Card;
