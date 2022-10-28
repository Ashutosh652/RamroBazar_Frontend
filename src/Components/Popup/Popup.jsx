import React, { useState } from "react";
import {
  PopupBackground,
  PopupCard,
  CloseButton,
  InputRow,
  InputTitle,
  InputField,
  UpdateButton,
  UpdateButtonWrapper,
} from "./PopupElements";
import { GrClose } from "react-icons/gr";
import { axiosInstance } from "../../axios";

const Popup = ({
  triggerValue,
  editOf,
  setTriggerValue,
  userData,
  setUserData,
}) => {
  const [firstName, setFirstName] = useState(userData.first_name);
  const [lastName, setLastName] = useState(userData.last_name);
  const [address, setAddress] = useState(userData.address);
  const [dateOfBirth, setDateOfBirth] = useState(userData.date_of_birth);
  const [contactNumber, setContactNumber] = useState(userData.contact_number);
  const [email, setEmail] = useState(userData.email);
  const [profilePic, setProfilePic] = useState(null);
  let formData = new FormData();

  const handleChange = (event) => {
    if (editOf === "name") {
      if (event.target.name === "first_name") {
        setFirstName(event.target.value.trim());
      }
      if (event.target.name === "last_name") {
        setLastName(event.target.value.trim());
      }
    }
    if (editOf === "address") {
      setAddress(event.target.value.trim());
    }
    if (editOf === "dateOfBirth") {
      setDateOfBirth(new Date(event.target.value));
    }
    if (editOf === "contactNumber") {
      setContactNumber(event.target.value.trim());
    }
    if (editOf === "email") {
      setEmail(event.target.value.trim());
    }
    if (editOf === "profilePic") {
      setProfilePic(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosInstance.defaults.headers["Content-Type"] = "multipart/form-data";
    if (editOf === "name") {
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      axiosInstance
        .patch(`/user/update/${userData.id}/`, formData)
        .then((response) => {
          const updatedUserData = userData;
          updatedUserData.first_name = response.data.first_name;
          updatedUserData.last_name = response.data.last_name;
          setUserData(updatedUserData);
          setTriggerValue(false);
        });
    }
    if (editOf === "address") {
      formData.append("address", address);
      axiosInstance
        .patch(`/user/update/${userData.id}/`, formData)
        .then((response) => {
          const updatedUserData = userData;
          updatedUserData.address = response.data.address;
          setUserData(updatedUserData);
          setTriggerValue(false);
        });
    }
    if (editOf === "dateOfBirth") {
      formData.append(
        "date_of_birth",
        new Date(dateOfBirth).toISOString().split("T")[0]
      );
      axiosInstance
        .patch(`/user/update/${userData.id}/`, formData)
        .then((response) => {
          const updatedUserData = userData;
          updatedUserData.date_of_birth = response.data.date_of_birth;
          setUserData(updatedUserData);
          setTriggerValue(false);
        });
    }
    if (editOf === "contactNumber") {
      formData.append("contact_number", contactNumber);
      axiosInstance
        .patch(`/user/update/${userData.id}/`, formData)
        .then((response) => {
          const updatedUserData = userData;
          updatedUserData.contact_number = response.data.contact_number;
          setUserData(updatedUserData);
          setTriggerValue(false);
        });
    }
    if (editOf === "email") {
      formData.append("email", email);
      axiosInstance
        .patch(`/user/update/${userData.id}/`, formData)
        .then((response) => {
          const updatedUserData = userData;
          updatedUserData.email = response.data.email;
          setUserData(updatedUserData);
          setTriggerValue(false);
        });
    }
    if (editOf === "profilePic") {
      formData.append("profile_pic", profilePic);
      axiosInstance
        .patch(`/user/update/${userData.id}/`, formData)
        .then((response) => {
          const updatedUserData = userData;
          updatedUserData.profile_pic = response.data.profile_pic;
          setUserData(updatedUserData);
          setTriggerValue(false);
        });
    }
  };

  return (
    <>
      {triggerValue ? (
        <PopupBackground>
          <PopupCard>
            <form>
              {editOf === "name" && (
                <InputRow>
                  <InputTitle>First Name : </InputTitle>
                  <InputField
                    defaultValue={userData.first_name}
                    name="first_name"
                    onChange={handleChange}
                  />
                  <InputTitle>Last Name : </InputTitle>
                  <InputField
                    defaultValue={userData.last_name}
                    name="last_name"
                    onChange={handleChange}
                  />
                </InputRow>
              )}
              {editOf === "address" && (
                <InputRow>
                  <InputTitle>Address : </InputTitle>
                  <InputField
                    defaultValue={userData.address}
                    onChange={handleChange}
                    name="address"
                  />
                </InputRow>
              )}
              {editOf === "dateOfBirth" && (
                <InputRow>
                  <InputTitle>Date of Birth : </InputTitle>
                  <InputField
                    type="date"
                    defaultValue={userData.date_of_birth}
                    onChange={handleChange}
                    name="dateOfBirth"
                  />
                </InputRow>
              )}
              {editOf === "contactNumber" && (
                <InputRow>
                  <InputTitle>Contact Number : </InputTitle>
                  <InputField
                    defaultValue={userData.contact_number}
                    onChange={handleChange}
                    name="contactNumber"
                  />
                </InputRow>
              )}
              {editOf === "email" && (
                <InputRow>
                  <InputTitle>Email : </InputTitle>
                  <InputField
                    defaultValue={userData.email}
                    onChange={handleChange}
                    name="email"
                  />
                </InputRow>
              )}
              {editOf === "profilePic" && (
                <InputRow>
                  <InputTitle>Upload a Profile Picture</InputTitle>
                  <InputField
                    type="file"
                    onChange={handleChange}
                    name="profilePic"
                  />
                </InputRow>
              )}
              <CloseButton
                type="button"
                onClick={() => {
                  setTriggerValue(false);
                }}
              >
                <GrClose />
              </CloseButton>
              <UpdateButtonWrapper>
                <UpdateButton onClick={handleSubmit}>Update</UpdateButton>
              </UpdateButtonWrapper>
            </form>
          </PopupCard>
        </PopupBackground>
      ) : (
        ""
      )}
    </>
  );
};

export default Popup;
