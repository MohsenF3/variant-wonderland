import React from "react";
import StickyCursor from "./StickyCursor";

interface WithStickyCursorProps {}

const WithStickyCursor = <T extends WithStickyCursorProps>(
  WrappedComponent: React.ComponentType<T>
) => {
  const EnhancedComponent: React.FC<T> = (props) => {
    return (
      <React.Fragment>
        <StickyCursor />
        <WrappedComponent {...props} />
      </React.Fragment>
    );
  };

  return EnhancedComponent;
};

export default WithStickyCursor;
