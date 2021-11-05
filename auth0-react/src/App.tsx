import React from "react";
import "./App.css";
import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";
import Profile from "./components/Profile";
import styled from "styled-components";

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 2rem;
  margin-top: 5rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;

function App() {
  return (
    <>
      <Buttons>
        <LoginButton />
        <LogoutButton />
      </Buttons>
      <Wrapper>
        <Profile />
      </Wrapper>
    </>
  );
}

export default App;
