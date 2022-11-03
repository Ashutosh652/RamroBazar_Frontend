import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsChatDots } from "react-icons/bs";
import { TbJewishStar } from "react-icons/tb";
import {
  AiOutlineEdit,
  AiOutlineStar,
  AiFillStar,
  AiFillDelete,
} from "react-icons/ai";
import {
  Card,
  ItemInfo,
  ImageContainer,
  ItemTitle,
  SellerInfo,
  ProfilePic,
  ProfileInfo,
  SellerName,
  Contact,
  ChatButton,
  PipeDivider,
  ChatAdd,
  AddWishList,
  Description,
  DescriptionTitle,
  DescrptionContent,
  Details,
  DetailTitle,
  DetailKey,
  DetailValue,
  DetailRow,
  Specifications,
  NoSpecifications,
  EditIcon,
  AddSpecificationButtonWrapper,
  AddSpecificationButton,
  SpecificationRemoveIcon,
} from "./DetailCardElements";
import ImageSlider from "../ImageSlider/ImageSlider";
import { timeSince } from "../../Services/formatDate";
import Popup from "../Popup/Popup";
import AuthContext from "../../Pages/Login/AuthContext";
import { axiosInstance } from "../../axios";

const DetailCard = ({ itemDetail, setItemDetail, sellerDetail }) => {
  const navigate = useNavigate();
  const [triggerValue, setTriggerValue] = useState(false);
  const { loggedInUser } = useContext(AuthContext);
  const canEdit = sellerDetail
    ? sellerDetail.id === loggedInUser.user_id
    : false;
  const [editOf, setEditOf] = useState("");

  const handleEditClick = (editOf) => {
    setTriggerValue(true);
    setEditOf(editOf);
  };

  const removeSpecification = (specificationId) => {
    axiosInstance
      .delete(`item/specification/remove/${specificationId}`)
      .then(() => {
        axiosInstance
          .patch(`/item/update/${itemDetail.slug}/`, {
            updated_at: new Date().toISOString().split("T")[0],
          })
          .then((response) => {
            setItemDetail({
              ...itemDetail,
              updated_at: response.data.updated_at,
              specifications: itemDetail.specifications.filter(
                (spec) => spec.id !== specificationId
              ),
            });
          });
      });
  };

  const handleWishList = (event) => {
    if (event.target.id === "addwishlist") {
      axiosInstance.patch(`items/${itemDetail.slug}/wishlist_add/`).then(() => {
        setItemDetail((prevDetail) => ({
          ...prevDetail,
          users_wishlist: [...prevDetail.users_wishlist, sellerDetail.id],
        }));
      });
    }
    if (event.target.id === "removewishlist") {
      axiosInstance
        .patch(`items/${itemDetail.slug}/wishlist_remove/`)
        .then(() => {
          setItemDetail((prevDetail) => ({
            ...prevDetail,
            users_wishlist: prevDetail.users_wishlist.filter(
              (id) => id !== sellerDetail.id
            ),
          }));
        });
    }
  };

  return (
    <>
      <Card>
        {itemDetail ? (
          <>
            <ImageContainer>
              <ImageSlider images={itemDetail.media} />
            </ImageContainer>
            <ItemInfo>
              <ItemTitle>
                {itemDetail.name ? (
                  <>{itemDetail.name}</>
                ) : (
                  <div style={{ color: "#665566" }}>Item Title Not Found</div>
                )}
                {canEdit && (
                  <EditIcon
                    onClick={() => {
                      handleEditClick("itemTitle");
                    }}
                  >
                    <AiOutlineEdit />
                  </EditIcon>
                )}
              </ItemTitle>
              {sellerDetail ? (
                <SellerInfo>
                  <ProfilePic
                    src={sellerDetail.profile_pic}
                    onClick={() => {
                      navigate(`/user/${sellerDetail.id}`);
                    }}
                  />
                  <ProfileInfo>
                    <SellerName
                      onClick={() => {
                        navigate(`/user/${sellerDetail.id}`);
                      }}
                    >
                      {sellerDetail.first_name} {sellerDetail.last_name}
                    </SellerName>
                    <br />
                    <Contact>
                      {sellerDetail.contact_number}
                      <PipeDivider>|</PipeDivider>
                      {sellerDetail.email ? (
                        sellerDetail.email
                      ) : (
                        <span style={{ color: "#665566" }}>
                          Email Not Set Up
                        </span>
                      )}
                    </Contact>
                    <br />
                    <ChatAdd>
                      <ChatButton>
                        <BsChatDots /> Chat Now
                      </ChatButton>
                      <PipeDivider>|</PipeDivider>
                      {itemDetail.users_wishlist.includes(sellerDetail.id) ? (
                        <AddWishList
                          onClick={handleWishList}
                          id="removewishlist"
                        >
                          <AiFillStar /> Remove From WishList
                        </AddWishList>
                      ) : (
                        <AddWishList onClick={handleWishList} id="addwishlist">
                          <AiOutlineStar /> Add To WishList
                        </AddWishList>
                      )}
                    </ChatAdd>
                  </ProfileInfo>
                </SellerInfo>
              ) : (
                <span>Loading...</span>
              )}

              <Description>
                <DescriptionTitle>
                  Description
                  {canEdit && (
                    <EditIcon
                      onClick={() => {
                        handleEditClick("description");
                      }}
                    >
                      <AiOutlineEdit />
                    </EditIcon>
                  )}
                </DescriptionTitle>
                <DescrptionContent>
                  {itemDetail.description ? (
                    itemDetail.description
                  ) : (
                    <span style={{ color: "#665566", fontSize: "smaller" }}>
                      Description Not Available
                    </span>
                  )}
                </DescrptionContent>
              </Description>
              <Details>
                <DetailTitle>Details</DetailTitle>
                {itemDetail.created_at ? (
                  <DetailRow>
                    <DetailKey>Ad Created On</DetailKey>
                    <DetailValue>
                      {timeSince(new Date(itemDetail.created_at))} ago
                    </DetailValue>
                  </DetailRow>
                ) : null}
                {itemDetail.updated_at ? (
                  <DetailRow>
                    <DetailKey>Ad Last Updated On</DetailKey>
                    <DetailValue>
                      {timeSince(new Date(itemDetail.updated_at))} ago
                    </DetailValue>
                  </DetailRow>
                ) : null}
                {itemDetail.location ? (
                  <DetailRow>
                    <DetailKey>Available At</DetailKey>
                    <DetailValue>
                      {itemDetail.location}
                      {canEdit && (
                        <EditIcon
                          onClick={() => {
                            handleEditClick("location");
                          }}
                        >
                          <AiOutlineEdit />
                        </EditIcon>
                      )}
                    </DetailValue>
                  </DetailRow>
                ) : null}
                {itemDetail.brand ? (
                  <DetailRow>
                    <DetailKey>Brand</DetailKey>
                    <DetailValue>
                      {itemDetail.brand.name}
                      {canEdit && (
                        <EditIcon
                          onClick={() => {
                            handleEditClick("brand");
                          }}
                        >
                          <AiOutlineEdit />
                        </EditIcon>
                      )}
                    </DetailValue>
                  </DetailRow>
                ) : null}
                {itemDetail.category ? (
                  <DetailRow>
                    <DetailKey>Categories</DetailKey>
                    <DetailValue>
                      {itemDetail.category.map((cat, index) => {
                        return <span key={index}>{cat.name}, </span>;
                      })}
                      {canEdit && (
                        <EditIcon
                          onClick={() => {
                            handleEditClick("category");
                          }}
                        >
                          <AiOutlineEdit />
                        </EditIcon>
                      )}
                    </DetailValue>
                  </DetailRow>
                ) : null}
                {itemDetail.show_price ? (
                  <DetailRow>
                    <DetailKey>Price</DetailKey>
                    <DetailValue>
                      Rs. {itemDetail.show_price}
                      {canEdit && (
                        <EditIcon
                          onClick={() => {
                            handleEditClick("price");
                          }}
                        >
                          <AiOutlineEdit />
                        </EditIcon>
                      )}
                    </DetailValue>
                  </DetailRow>
                ) : null}
                {canEdit && (
                  <DetailRow>
                    <DetailKey>Visibility</DetailKey>
                    <DetailValue>
                      {itemDetail.is_visible === true ? <>Yes</> : <>No</>}
                      <EditIcon
                        onClick={() => {
                          handleEditClick("isVisible");
                        }}
                      >
                        <AiOutlineEdit />
                      </EditIcon>
                    </DetailValue>
                  </DetailRow>
                )}
                {canEdit && (
                  <DetailRow>
                    <DetailKey>Sold Status</DetailKey>
                    <DetailValue>
                      {itemDetail.is_sold === true ? <>Sold</> : <>Not Sold</>}
                      <EditIcon
                        onClick={() => {
                          handleEditClick("isSold");
                        }}
                      >
                        <AiOutlineEdit />
                      </EditIcon>
                    </DetailValue>
                  </DetailRow>
                )}
              </Details>
              <Specifications>
                <DetailTitle>Specifications</DetailTitle>
                <AddSpecificationButtonWrapper>
                  {canEdit && (
                    <AddSpecificationButton
                      type="button"
                      onClick={() => {
                        handleEditClick("specification");
                      }}
                    >
                      Add
                    </AddSpecificationButton>
                  )}
                </AddSpecificationButtonWrapper>
                {itemDetail.specifications.length ? (
                  <>
                    {itemDetail.specifications.map((specification) => {
                      return (
                        <DetailRow key={specification.id}>
                          <DetailKey>{specification.key}</DetailKey>
                          <DetailValue>{specification.value}</DetailValue>
                          {canEdit && (
                            <SpecificationRemoveIcon
                              onClick={() => {
                                removeSpecification(specification.id);
                              }}
                            >
                              <AiFillDelete />
                            </SpecificationRemoveIcon>
                          )}
                        </DetailRow>
                      );
                    })}
                  </>
                ) : (
                  <DetailRow>
                    <NoSpecifications>
                      No Specifications Provided
                    </NoSpecifications>
                  </DetailRow>
                )}
              </Specifications>
            </ItemInfo>
          </>
        ) : (
          <span>Loading...</span>
        )}
      </Card>
      <Popup
        triggerValue={triggerValue}
        editOf={editOf}
        setTriggerValue={setTriggerValue}
        itemDetail={itemDetail}
        setItemDetail={setItemDetail}
      />
    </>
  );
};

export default DetailCard;
