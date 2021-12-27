import styled from "styled-components";

export const LandingContainer = styled.div`
  backdrop-filter: blur(10px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Hero = styled.div`
  background: url("https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")
    no-repeat fixed;
  background-size: cover;
  margin: 0 100px;
  border-radius: 25px;
  height: 65%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Media = styled.iframe``;
