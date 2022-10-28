import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  FormCard,
  FormHeader,
  InputRow,
  InfoTitle,
  InfoInput,
} from "./UpdateProfileFormElements";
import { axiosInstance } from "../../axios";
import AuthContext from "../Login/AuthContext";

const UpdateProfileForm = () => {
  const [userDetail, setUserDetail] = useState(null);
  const { loggedInUser } = useContext(AuthContext);
  const initialFormData =
    userDetail &&
    Object.freeze({
      first_name: userDetail.first_name,
      last_name: userDetail.last_name,
      contact_number: userDetail.contact_number,
      email: userDetail.email,
      address: userDetail.address,
      date_of_birth: userDetail.date_of_birth,
    });
  const [formData, updateFormData] = useState(initialFormData);
  console.log("loggedInUser:");
  console.log(loggedInUser);

  const handleChange = (event) => {
    updateFormData({
      ...formData,
      //Trimming any whitespaces
      [event.target.name]: event.target.value.trim(),
    });
    console.log(event.target.value);
  };

  useEffect(() => {
    loggedInUser &&
      axiosInstance.get(`/users/${loggedInUser.user_id}`).then((response) => {
        setUserDetail(response.data);
        console.log("userDetail:");
        console.log(response.data);
      });
  }, [loggedInUser]);

  // useEffect(() => {
  //   userDetail &&
  //     updateFormData({ ...formData, first_name: userDetail.first_name });
  // }, [userDetail]);

  return (
    <Container>
      <FormCard>
        <FormHeader>Update Profile Information</FormHeader>
        {userDetail ? (
          <InputRow>
            <InfoTitle>First Name</InfoTitle>
            <InfoInput
              // value={initialFormData.first_name}
              placeholder={initialFormData.first_name}
              name="first_name"
              onChange={handleChange}
            />
          </InputRow>
        ) : (
          <span>Loading...</span>
        )}
      </FormCard>
    </Container>
  );
};

export default UpdateProfileForm;
