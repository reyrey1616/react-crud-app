import React from "react";
import UserCard from "../user-profile/user-card.component";
import { ImageGeneratorContainer, HeaderText } from "./image-generator.styles";
const ImageGenerator = ({ data, generateImage }) => {
  return (
    <ImageGeneratorContainer>
      <HeaderText>Profile Preview</HeaderText>
      <UserCard data={data} style={{ width: "100%" }} />
      <button type="button" className="default-button" onClick={generateImage}>
        GENERATE NEW IMAGE
      </button>
    </ImageGeneratorContainer>
  );
};

export default ImageGenerator;
