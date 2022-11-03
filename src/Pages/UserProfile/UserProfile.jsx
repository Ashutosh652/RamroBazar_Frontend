import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../axios";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import SmallItemsCard from "../../Components/SmallItemsCard/SmallItemsCard";
import { Container, Lower } from "./UserProfileElements";
import AuthContext from "../Login/AuthContext";

const UserProfile = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const { loggedInUser } = useContext(AuthContext);
  const canEdit = userData ? userData.id === loggedInUser.user_id : false;

  useEffect(() => {
    axiosInstance.get(`users/${userId}`).then((response) => {
      setUserData(response.data);
    });
  }, []);

  return (
    <Container>
      {userData ? (
        <ProfileCard
          userData={userData}
          canEdit={canEdit}
          setUserData={setUserData}
        />
      ) : (
        <span>Loading...</span>
      )}
      {userData ? (
        <Lower>
          <SmallItemsCard userData={userData} title="Items On Sale" />
          <SmallItemsCard userData={userData} title="Items Sold" />
          {canEdit && <SmallItemsCard userData={userData} title="Invisible Items" />}
          {canEdit && <SmallItemsCard userData={userData} title="WishList" />}
        </Lower>
      ) : (
        <span>Loading...</span>
      )}
    </Container>
  );
};

export default UserProfile;
