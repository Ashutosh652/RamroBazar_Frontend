import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import {
  UserProfileCard,
  UserInfo,
  ProfilePic,
  Pic,
  UserDetails,
  UserDetail,
  EditIcon,
  InfoNotGiven,
} from "./ProfileCardElements";
import Popup from "../Popup/Popup";

const ProfileCard = ({ userData, canEdit, setUserData }) => {
  const [triggerValue, setTriggerValue] = useState(false);
  const [editOf, setEditOf] = useState("");

  const handleEditClick = (editOf) => {
    setTriggerValue(true);
    setEditOf(editOf);
  };
  return (
    <>
      <UserProfileCard>
        <UserInfo>
          <ProfilePic>
            <Pic src={userData.profile_pic} alt="Profile Pic" />
            <br />
            {canEdit && (
              <EditIcon
                onClick={() => {
                  handleEditClick("profilePic");
                }}
              >
                <AiOutlineEdit />
              </EditIcon>
            )}
          </ProfilePic>
          <UserDetails>
            <UserDetail>
              Name: {userData.first_name} {userData.last_name}
              {canEdit && (
                <EditIcon
                  onClick={() => {
                    handleEditClick("name");
                  }}
                >
                  <AiOutlineEdit />
                </EditIcon>
              )}
            </UserDetail>
            <UserDetail>
              Address:{" "}
              {userData.address ? (
                <>
                  {userData.address}
                  {canEdit && (
                    <EditIcon
                      onClick={() => {
                        handleEditClick("address");
                      }}
                    >
                      <AiOutlineEdit />
                    </EditIcon>
                  )}
                </>
              ) : (
                <InfoNotGiven>
                  No Address
                  {canEdit && (
                    <EditIcon
                      onClick={() => {
                        handleEditClick("address");
                      }}
                    >
                      <AiOutlineEdit />
                    </EditIcon>
                  )}
                </InfoNotGiven>
              )}
            </UserDetail>
            <UserDetail>
              Date of Birth:{" "}
              {userData.date_of_birth ? (
                <>
                  {userData.date_of_birth}
                  {canEdit && (
                    <EditIcon
                      onClick={() => {
                        handleEditClick("dateOfBirth");
                      }}
                    >
                      <AiOutlineEdit />
                    </EditIcon>
                  )}
                </>
              ) : (
                <InfoNotGiven>
                  No Date of Birth
                  {canEdit && (
                    <EditIcon
                      onClick={() => {
                        handleEditClick("dateOfBirth");
                      }}
                    >
                      <AiOutlineEdit />
                    </EditIcon>
                  )}
                </InfoNotGiven>
              )}
            </UserDetail>
            <UserDetail>
              Contact Number:{" "}
              {userData.contact_number ? (
                <>
                  {userData.contact_number}
                  {canEdit && (
                    <EditIcon
                      onClick={() => {
                        handleEditClick("contactNumber");
                      }}
                    >
                      <AiOutlineEdit />
                    </EditIcon>
                  )}
                </>
              ) : (
                <InfoNotGiven>
                  No Contact Number
                  {canEdit && (
                    <EditIcon
                      onClick={() => {
                        handleEditClick("contactNumber");
                      }}
                    >
                      <AiOutlineEdit />
                    </EditIcon>
                  )}
                </InfoNotGiven>
              )}
            </UserDetail>
            <UserDetail>
              Email:{" "}
              {userData.email ? (
                <>
                  {userData.email}
                  {canEdit && (
                    <EditIcon
                      onClick={() => {
                        handleEditClick("email");
                      }}
                    >
                      <AiOutlineEdit />
                    </EditIcon>
                  )}
                </>
              ) : (
                <InfoNotGiven>
                  No Email
                  {canEdit && (
                    <EditIcon
                      onClick={() => {
                        handleEditClick("email");
                      }}
                    >
                      <AiOutlineEdit />
                    </EditIcon>
                  )}
                </InfoNotGiven>
              )}
            </UserDetail>
          </UserDetails>
        </UserInfo>
      </UserProfileCard>
      <Popup
        triggerValue={triggerValue}
        editOf={editOf}
        setTriggerValue={setTriggerValue}
        userData={userData}
        setUserData={setUserData}
      />
    </>
  );
};

export default ProfileCard;
