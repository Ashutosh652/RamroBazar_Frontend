import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../axios";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import "./UserProfile.css";

const UserProfile = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axiosInstance.get(`users/${userId}`).then((response) => {
      setUserData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="container">
      {userData ? (
        <div className="user-profile">
          <div className="user-info">
            <div className="profile-pic">
              <img
                src={userData.profile_pic}
                alt="Profile Pic"
                className="pic"
              />
            </div>
            <div className="user-details">
              <div className="user-detail">
                Name: {userData.first_name} {userData.last_name}
              </div>
              {userData.address ? <p>Address: {userData.address}</p> : null}
              {userData.date_of_birth ? (
                <div className="user-detail">
                  Date of Birth: {userData.date_of_birth}
                </div>
              ) : null}
              {userData.email ? (
                <div className="user-detail">
                  Email: {userData.email}
                  {userData.is_email_verified ? (
                    <span>
                      {" "}
                      <TiTick style={{ color: "green" }} size={15} />
                    </span>
                  ) : (
                    <span>
                      {" "}
                      <ImCross style={{ color: "red" }} size={10} />
                    </span>
                  )}
                </div>
              ) : null}
              <div className="user-detail">
                Number of items sold: {userData.no_sold_items}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <span>Sorry, User Data Not Found</span>
      )}
      <div className="lower">
        <div className="sale-items">
          <div className="title-head">
            <span>Items On Sale</span>
          </div>
          <div className="items">
            {userData.items_for_sale.map((item, index) => {
              return <p key={index}>{item.name}</p>;
            })}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default UserProfile;
