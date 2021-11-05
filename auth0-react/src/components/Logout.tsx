import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Button = styled.button`
  padding: 1rem 1.5rem;
  width: 6rem;
  border: none;
  border-radius: 4px;
  color: black;
  background-color: #c4c2b2;
  &:hover {
    opacity: 0.8;
    transition: 0.3s ease;
  }
`;

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
