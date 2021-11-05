import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const StyledProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <p>User !isAuthenticated</p>;
  }

  return (
    isAuthenticated && (
      <StyledProfile>
        <p>User isAuthenticated</p>
        <Avatar src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </StyledProfile>
    )
  );
};

export default Profile;
