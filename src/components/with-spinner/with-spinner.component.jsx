import React from "react";
import SpinnerComponent from "../spinner/spinner.component";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    console.log(isLoading);
    return isLoading ? (
      <SpinnerComponent />
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return Spinner;
};

export default WithSpinner;
