import React from "react";
import { Title } from "../../StyledComponents/Title";
import { Wrapper } from "../../StyledComponents/Wrapper";

const Loading = ({error}) => {
  return (
    <Wrapper flex="flex" width="100%" height="fit-content">
      <img src="https://media.giphy.com/media/WQZpXz8Y8eKgGIxrSP/giphy.gif" alt="Loading..." />
      <Title bground="transparent">{error || "Loading..."}</Title>
    </Wrapper>
  );
};

export default Loading;