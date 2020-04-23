import React from "react";
import {
  CardWrapper,
  CardContainer,
  CardImage,
  TextContainer,
} from "./user-card.styles";

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
    </CardContainer>
  </CardWrapper>
);

export default React.memo(Card);
