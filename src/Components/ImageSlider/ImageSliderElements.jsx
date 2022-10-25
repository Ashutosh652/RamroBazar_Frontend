import styled from "styled-components";

export const Image = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) =>
    props.image
      ? props.image.image
      : "https://res.cloudinary.com/db5bsjxia/image/upload/v1/media/default_item.png"});
  background-position: center;
  border-radius: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  //   -webkit-background-size: cover;
`;

export const Slider = styled.div`
  height: 100%;
  position: relative;
`;

export const LeftArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 0;
  font-size: 45px;
  color: #000;
  z-index: 1;
  cursor: pointer;
`;

export const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 0;
  font-size: 45px;
  color: #000;
  z-index: 1;
  cursor: pointer;
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1%;
`;

export const Dot = styled.div`
  margin: 0 0.5%;
  cursor: pointer;
  font-size: 10px;
`;
