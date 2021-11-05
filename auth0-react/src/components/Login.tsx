import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Button = styled.button`
  padding: 1rem 1.5rem;
  width: 6rem;
  border: none;
  border-radius: 4px;
  color: black;
  background-color: #acb8c0;
  &:hover {
    opacity: 0.8;
    transition: 0.3s ease;
  }
`;

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;
