import React, { useState, useContext } from "react";
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
import BrandContext from "../../Pages/AddItemForm/BrandContext";
import CategoryContext from "../SideBar/CategoryContext";
import CategorySelector from "../../Pages/AddItemForm/CategorySelector";

const Popup = ({
  triggerValue,
  editOf,
  setTriggerValue,
  userData,
  setUserData,
  itemDetail,
  setItemDetail,
}) => {
  const { brands } = useContext(BrandContext);
  const { categories } = useContext(CategoryContext);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [address, setAddress] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [contactNumber, setContactNumber] = useState(null);
  const [showContactNumber, setShowContactNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [currentPassword, setCurrentPassword] = useState(null);
  const [newPassword1, setNewPassword1] = useState(null);
  const [newPassword2, setNewPassword2] = useState(null);
  const [itemTitle, setItemTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [location, setLocation] = useState(null);
  const [brand, setBrand] = useState(null);
  const [newCategories, setNewCategories] = useState(
    categories ? categories.results : null
  );
  const [price, setPrice] = useState(null);
  const [isVisible, setIsVisible] = useState(
    itemDetail ? itemDetail.is_visible : null
  );
  const [isSold, setIsSold] = useState(itemDetail ? itemDetail.is_sold : null);
  const [specification, setSpecification] = useState(null);
  const [updatedDate, setUpdatedDate] = useState(null);
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
    if (editOf === "showContactNumber") {
      if (event.target.checked) {
        setShowContactNumber(true);
      } else {
        setShowContactNumber(false);
      }
    }
    if (editOf === "email") {
      setEmail(event.target.value.trim());
    }
    if (editOf === "profilePic") {
      setProfilePic(event.target.files[0]);
    }
    if (editOf === "changePassword") {
      if (event.target.name === "newPassword1") {
        setNewPassword1(event.target.value.trim());
      }
      if (event.target.name === "newPassword2") {
        setNewPassword2(event.target.value.trim());
      }
      if (event.target.name === "currentPassword") {
        setCurrentPassword(event.target.value.trim());
      }
    }
    if (editOf === "itemTitle") {
      setItemTitle(event.target.value.trim());
    }
    if (editOf === "description") {
      setDescription(event.target.value.trim());
    }
    if (editOf === "location") {
      setLocation(event.target.value.trim());
    }
    if (editOf === "brand") {
      setBrand(event.target.value);
    }
    if (editOf === "price") {
      setPrice(event.target.value.trim());
    }
    if (editOf === "isVisible") {
      if (event.target.checked) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    if (editOf === "isSold") {
      if (event.target.checked) {
        setIsSold(true);
      } else {
        setIsSold(false);
      }
    }
    if (editOf === "specification") {
      let newSpecification = specification
        ? specification
        : { item: itemDetail.id, key: "", value: "" };
      newSpecification[event.target.name] = event.target.value.trim();
      setSpecification(newSpecification);
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
    if (editOf === "showContactNumber") {
      formData.append("show_contact_number", showContactNumber);
      axiosInstance
        .patch(`/user/update/${userData.id}/`, formData)
        .then((response) => {
          console.log(response.data);
          let updatedUserData = userData;
          updatedUserData["show_contact_number"] =
            response.data.show_contact_number;
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
    if (editOf === "changePassword") {
      if (newPassword1 !== newPassword2) {
        console.log("Passwords do not match");
        return;
      }
      axiosInstance
        .patch(`/user/update-password/${userData.id}/`, {
          current_password: currentPassword,
          new_password1: newPassword1,
          new_password2: newPassword2,
        })
        .then((response) => {
          console.log(response);
          setTriggerValue(false);
        });
    }
    if (editOf === "itemTitle") {
      axiosInstance
        .patch(`/item/update/${itemDetail.slug}/`, {
          name: itemTitle,
          updated_at: new Date().toISOString().split("T")[0],
        })
        .then((response) => {
          let updatedItemDetail = itemDetail;
          updatedItemDetail["name"] = response.data.name;
          updatedItemDetail["updated_at"] = response.data.updated_at;
          setItemDetail(updatedItemDetail);
          setTriggerValue(false);
        });
    }
    if (editOf === "description") {
      axiosInstance
        .patch(`/item/update/${itemDetail.slug}/`, {
          description: description,
          updated_at: new Date().toISOString().split("T")[0],
        })
        .then((response) => {
          let updatedItemDetail = itemDetail;
          updatedItemDetail["description"] = response.data.description;
          updatedItemDetail["updated_at"] = response.data.updated_at;
          setItemDetail(updatedItemDetail);
          setTriggerValue(false);
        });
    }
    if (editOf === "location") {
      axiosInstance
        .patch(`/item/update/${itemDetail.slug}/`, {
          location: location,
          updated_at: new Date().toISOString().split("T")[0],
        })
        .then((response) => {
          let updatedItemDetail = itemDetail;
          updatedItemDetail["location"] = response.data.location;
          updatedItemDetail["updated_at"] = response.data.updated_at;
          setItemDetail(updatedItemDetail);
          setTriggerValue(false);
        });
    }
    if (editOf === "brand") {
      axiosInstance
        .patch(`/item/update/${itemDetail.slug}/`, {
          brand: brand,
          updated_at: new Date().toISOString().split("T")[0],
        })
        .then((response) => {
          let updatedItemDetail = itemDetail;
          updatedItemDetail["updated_at"] = response.data.updated_at;
          updatedItemDetail["brand"] = response.data.brand;
          setItemDetail(updatedItemDetail);
          setTriggerValue(false);
        });
    }
    if (editOf === "category") {
      axiosInstance
        .patch(`/item/update/${itemDetail.slug}/`, {
          category: newCategories,
          updated_at: new Date().toISOString().split("T")[0],
        })
        .then((response) => {
          let updatedItemDetail = itemDetail;
          updatedItemDetail["category"] = response.data.category;
          updatedItemDetail["updated_at"] = response.data.updated_at;
          setItemDetail(updatedItemDetail);
          setTriggerValue(false);
        });
    }
    if (editOf === "price") {
      axiosInstance
        .patch(`/item/update/${itemDetail.slug}/`, {
          show_price: price,
          updated_at: new Date().toISOString().split("T")[0],
        })
        .then((response) => {
          let updatedItemDetail = itemDetail;
          updatedItemDetail["show_price"] = response.data.price;
          updatedItemDetail["updated_at"] = response.data.updated_at;
          setItemDetail(updatedItemDetail);
          setTriggerValue(false);
        });
    }
    if (editOf === "isVisible") {
      axiosInstance
        .patch(`/item/update/${itemDetail.slug}/`, {
          is_visible: isVisible,
          updated_at: new Date().toISOString().split("T")[0],
        })
        .then((response) => {
          let updatedItemDetail = itemDetail;
          updatedItemDetail["is_visible"] = response.data.is_visibile;
          updatedItemDetail["updated_at"] = response.data.updated_at;
          setItemDetail(updatedItemDetail);
          setTriggerValue(false);
        });
    }
    if (editOf === "isSold") {
      axiosInstance
        .patch(`/item/update/${itemDetail.slug}/`, {
          is_sold: isSold,
          updated_at: new Date().toISOString().split("T")[0],
        })
        .then((response) => {
          let updatedItemDetail = itemDetail;
          updatedItemDetail["is_sold"] = response.data.is_sold;
          updatedItemDetail["updated_at"] = response.data.updated_at;
          setItemDetail(updatedItemDetail);
          setTriggerValue(false);
        });
    }
    if (editOf === "specification") {
      axiosInstance
        .post(`/item/specification/add/`, specification)
        .then((response) => {
          setItemDetail({
            ...itemDetail,
            specifications: itemDetail.specifications.push(response.data),
          });
          axiosInstance
            .patch(`/item/update/${itemDetail.slug}/`, {
              updated_at: new Date().toISOString().split("T")[0],
            })
            .then((response) => {
              setItemDetail({
                ...itemDetail,
                updated_at: response.data.updated_at,
              });
            });
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
              {editOf === "showContactNumber" && (
                <InputRow>
                  <InputTitle>
                    Show Contact Number to other users? :{" "}
                  </InputTitle>
                  <InputField
                    type="checkbox"
                    onChange={handleChange}
                    name="showContactNumber"
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
              {editOf === "changePassword" && (
                <InputRow>
                  <InputTitle>Current Password : </InputTitle>
                  <InputField onChange={handleChange} name="currentPassword" />
                  <InputTitle>New Password : </InputTitle>
                  <InputField onChange={handleChange} name="newPassword1" />
                  <InputTitle>Confirm New Password : </InputTitle>
                  <InputField onChange={handleChange} name="newPassword2" />
                </InputRow>
              )}
              {editOf === "itemTitle" && (
                <InputRow>
                  <InputTitle>Title : </InputTitle>
                  <InputField
                    defaultValue={itemDetail.name}
                    onChange={handleChange}
                    name="itemTitle"
                  />
                </InputRow>
              )}
              {editOf === "description" && (
                <InputRow>
                  <InputTitle>Description : </InputTitle>
                  <InputField
                    defaultValue={itemDetail.description}
                    onChange={handleChange}
                    name="description"
                  />
                </InputRow>
              )}
              {editOf === "location" && (
                <InputRow>
                  <InputTitle>Available At : </InputTitle>
                  <InputField
                    defaultValue={itemDetail.location}
                    onChange={handleChange}
                    name="location"
                  />
                </InputRow>
              )}
              {editOf === "brand" && (
                <InputRow>
                  <InputTitle>Brand : </InputTitle>
                  <select name="brand" onChange={handleChange}>
                    {brands.length > 0 &&
                      brands.map((brand, index) => {
                        return (
                          <option key={index} value={brand.id}>
                            {brand.name}
                          </option>
                        );
                      })}
                  </select>
                </InputRow>
              )}
              {editOf === "category" && (
                <InputRow>
                  <InputTitle>Categories : </InputTitle>
                  {categories.results.map((category, index) => {
                    return (
                      <CategorySelector
                        key={index}
                        category={category}
                        selectedCategories={newCategories}
                        setSelectedCategories={setNewCategories}
                      />
                    );
                  })}
                </InputRow>
              )}
              {editOf === "price" && (
                <InputRow>
                  <InputTitle>Price : </InputTitle>
                  <InputField
                    defaultValue={itemDetail.show_price}
                    onChange={handleChange}
                    name="price"
                  />
                </InputRow>
              )}
              {editOf === "isVisible" && (
                <InputRow>
                  <InputTitle>Visibility : </InputTitle>
                  <InputField
                    type="checkbox"
                    onChange={handleChange}
                    name="isVisible"
                  />
                </InputRow>
              )}
              {editOf === "isSold" && (
                <InputRow>
                  <InputTitle>Sold Status : </InputTitle>
                  <InputField
                    type="checkbox"
                    onChange={handleChange}
                    name="isSold"
                  />
                </InputRow>
              )}
              {editOf === "specification" && (
                <InputRow>
                  <InputTitle>Add Specification : </InputTitle>
                  <InputField
                    placeholder="Title"
                    onChange={handleChange}
                    name="key"
                  />
                  <InputField
                    placeholder="Value"
                    onChange={handleChange}
                    name="value"
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
