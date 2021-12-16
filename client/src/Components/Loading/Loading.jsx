import React from "react";
import { Title } from "../../StyledComponents/Title";
import { Wrapper } from "../../StyledComponents/Wrapper";

const Loading = () => {
  return (
    <Wrapper flex="flex" widith="100vw" height="fit-content">
      <img src="https://media.giphy.com/media/WQZpXz8Y8eKgGIxrSP/giphy.gif" alt="Loading..." />
      <Title bground="transparent" padding="20px">
        Loading...
      </Title>
    </Wrapper>
  );
};

export default Loading;