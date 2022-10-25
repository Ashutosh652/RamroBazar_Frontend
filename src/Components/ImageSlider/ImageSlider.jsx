import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsCircle, BsCircleFill } from "react-icons/bs";
import {
  Image,
  Slider,
  LeftArrow,
  RightArrow,
  DotContainer,
  Dot,
} from "./ImageSliderElements";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToImage = (imageIndex) => {
    setCurrentIndex(imageIndex);
  };

  return (
    <Slider>
      <LeftArrow onClick={goToPrevious}>
        <AiOutlineLeft />
      </LeftArrow>
      <RightArrow onClick={goToNext}>
        <AiOutlineRight />
      </RightArrow>
      <Image image={images[currentIndex]} />
      <DotContainer>
        {images.map((image, index) => {
          if (index === currentIndex) {
            return (
              <Dot key={index}>
                <BsCircleFill />
              </Dot>
            );
          } else {
            return (
              <Dot key={index} onClick={() => goToImage(index)}>
                <BsCircle />
              </Dot>
            );
          }
        })}
      </DotContainer>
    </Slider>
  );
};

export default ImageSlider;
