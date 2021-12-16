import React from "react";
import { Wrapper } from "../../StyledComponents/Wrapper";

const Loading = () => {
  return (
    <Wrapper flex="flex" width="100%" height="fit-content">
      <img src="https://media.giphy.com/media/WQZpXz8Y8eKgGIxrSP/giphy.gif" alt="Loading..." />
    </Wrapper>
  );
};

export default Loading;