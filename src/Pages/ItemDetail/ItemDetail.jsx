import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Container } from "./ItemDetailElements";
import DetailCard from "../../Components/DetailCard/DetailCard";
import CommentsCard from "../../Components/CommentsCard/CommentsCard";
import { axiosInstance } from "../../axios";

const ItemDetail = () => {
  const { slug } = useParams();
  const [itemDetail, setItemDetail] = useState(null);
  const [sellerDetail, setSellerDetail] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/items/${slug}`).then((response) => {
      setItemDetail(response.data);
    });
  }, []);

  useEffect(() => {
    if (itemDetail) {
      axiosInstance.get(`/users/${itemDetail.seller}`).then((response) => {
        setSellerDetail(response.data);
      });
    }
  }, [itemDetail]);

  return (
    <Container>
      <DetailCard itemDetail={itemDetail} sellerDetail={sellerDetail} />
      <CommentsCard itemDetail={itemDetail} />
    </Container>
  );
};

export default ItemDetail;
