import styled from "styled-components";

export const UserProfileCard = styled.div`
  width: 100%;
`;

export const UserInfo = styled.div`
  width: 90%;
  //   border: 2px solid red;
  margin: 5vh auto;
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const ProfilePic = styled.div`
  height: auto;
  width: auto;
  //   border: 1px solid red;
`;

export const Pic = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  margin-top: 0.5em;
  //   margin-bottom: auto;
  margin-left: 0.25em;
`;

export const UserDetails = styled.div`
  margin-left: 1em;
  margin-top: auto;
  margin-bottom: auto;
`;

export const UserDetail = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const EditIcon = styled.span`
  margin-left: 1em;
  color: #665566;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: #000;
  }
`;

export const InfoNotGiven = styled.span`
  font-size: small;
  color: #665566;
`;

export const AddItemButton = styled.button`
  height: 3em;
  margin-left: 4em;
  margin-top: 1em;
  padding: 0.5em;
`;
