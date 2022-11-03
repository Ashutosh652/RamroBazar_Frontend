import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../axios";
import CategoryContext from "../../Components/SideBar/CategoryContext";
import AuthContext from "../../Pages/Login/AuthContext";
import BrandContext from "./BrandContext";
import CategorySelector from "./CategorySelector";
import {
  Container,
  InfoFormContainer,
  InfoFormCard,
  FormHeader,
  InputRow,
  InputLabel,
  InputField,
  AddButtonWrapper,
  AddButton,
  ImageFormContainer,
  ImageFormCard,
  ImageFormTitle,
  ImageInputLabel,
  ImageInput,
  ImageInputWrapper,
  Images,
  Image,
  DeleteImageButton,
  SpecificationFormContainer,
  SpecificationFormCard,
  SpecificationFormTitle,
  SpecificationInputRow,
  SpecificationValue,
  AddMoreButton,
  RemoveButton,
} from "./AddItemFormElements";

const AddItemForm = () => {
  const navigate = useNavigate();
  const initialFormData = Object.freeze({
    name: "",
    description: "",
    brand: null,
    show_price: null,
    location: "",
    category: [],
    is_visible: true,
  });
  const [formData, updateFormData] = useState(initialFormData);
  const { categories } = useContext(CategoryContext);
  const { loggedInUser } = useContext(AuthContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { brands } = useContext(BrandContext);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [featureImage, setFeatureImage] = useState();
  let imageFormData = new FormData();
  const [numberOfSpecFields, setNumberOfSpecFields] = useState(0);
  const [specificationKeys, setSpecificationKeys] = useState("");
  const [specificationValues, setSpecificationValues] = useState("");
  const [specifications, setSpecifications] = useState([]);

  const handleChange = (event) => {
    if (event.target.value === 'noBrand') {
      updateFormData({
        ...formData,
        [event.target.name]: null,
      });
    } else {
      updateFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleDeleteImage = (image, index) => {
    setSelectedImages(selectedImages.filter((img) => img !== image));
    setSelectedFiles(
      selectedFiles.filter((file) => file !== selectedFiles[Number(index)])
    );
  };

  const handleFeatureImageChange = (event) => {
    setFeatureImage(selectedFiles[Number(event.target.value)]);
    console.log(selectedFiles[Number(event.target.value)]);
  };

  const handleSpecKeyChange = (event) => {
    setSpecificationKeys(event.target.value);
  };

  const handleSpecValueChange = (event) => {
    setSpecificationValues(event.target.value);
  };

  const handleFocusOut = (index) => (event) => {
    if (specifications[index]) {
      let updatedSpecification = specifications[index];
      updatedSpecification[event.target.name] = event.target.value;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formData.category = selectedCategories;
    console.log(formData);
    axiosInstance
      .post(`item/add/`, {
        name: formData.name,
        description: formData.description,
        brand: formData.brand,
        show_price: formData.show_price,
        location: formData.location,
        category: formData.category,
        is_visible: formData.is_visible,
      })
      .then((response) => {
        selectedFiles.map((file) => {
          imageFormData.append("image", file);
          imageFormData.append("alt_text", "");
          imageFormData.append("is_feature", file === featureImage);
          imageFormData.append("item", response.data.id);
          axiosInstance.post(`media/add/`, imageFormData).then((response) => {
            console.log(response.data);
            navigate(`/user/${loggedInUser.user_id}`);
          });
        });
        if (specifications.length !== 0) {
          specifications.map((specification) => {
            specification["item"] = response.data.id;
            axiosInstance
              .post(`/item/specification/add/`, specification)
              .then((response) => {
                console.log(response.data);
                navigate(`/user/${loggedInUser.user_id}`);
              });
          });
        }
        console.log(response.data);
      });
    //   .catch((error) => {
    //     if (error.response) {
    //       setErrorData({ ...error.response.data });
    //     } else if (error.request) {
    //       console.log(error.request);
    //     } else {
    //       console.log("Error: ", error.message);
    //     }
    //   });
  };

  const onImageUpload = (event) => {
    const uploadedFiles = event.target.files;
    const selectedImagesArray = Array.from(uploadedFiles);
    const imagesArray = selectedImagesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages([...selectedImages, ...imagesArray]);
    setSelectedFiles([...selectedFiles, ...uploadedFiles]);
  };

  // useEffect(() => {
  //   axiosInstance.get(`brands/`).then((response) => {
  //     setBrands(response.data.results);
  //   });
  // }, []);

  return (
    <Container>
      <InfoFormContainer>
        <InfoFormCard>
          <FormHeader>Fill the Item Information</FormHeader>
          <InputRow>
            <InputLabel>Name: </InputLabel>
            <InputField name="name" onChange={handleChange} />
          </InputRow>

          <InputRow>
            <InputLabel>Description: </InputLabel>
            <InputField name="description" onChange={handleChange} />
          </InputRow>

          <InputRow>
            <InputLabel>Brand: </InputLabel>
            <select name="brand" onChange={handleChange}>
              {brands.length > 0 ? (
                <>
                  <option value='noBrand'>--Choose--</option>
                  {brands.map((brand, index) => {
                    return (
                      <option key={index} value={brand.id}>
                        {brand.name}
                      </option>
                    );
                  })}
                </>
              ) : (
                <option>Loading...</option>
              )}
            </select>
          </InputRow>
          <InputRow>
            <InputLabel>Price: </InputLabel>
            <InputField name="show_price" onChange={handleChange} />
          </InputRow>
          <br />
          <InputRow>
            <InputLabel>Location: </InputLabel>
            <InputField name="location" onChange={handleChange} />
          </InputRow>
          <br />
          <InputLabel>Categories: </InputLabel>
          {categories ? (
            <>
              {categories.results.map((category, index) => {
                return (
                  <CategorySelector
                    key={index}
                    category={category}
                    selectedCategories={selectedCategories}
                    setSelectedCategories={setSelectedCategories}
                  />
                );
              })}
            </>
          ) : (
            <span>Loading...</span>
          )}
          <br />
          <InputRow>
            <InputLabel>Make the product visible ?: </InputLabel>
            <InputField
              name="is_visible"
              type="checkbox"
              onChange={handleChange}
            />
          </InputRow>
        </InfoFormCard>
      </InfoFormContainer>

      <ImageFormContainer>
        <ImageFormCard>
          <ImageFormTitle>Upload Images:</ImageFormTitle>
          <ImageInputWrapper>
            <ImageInputLabel>
              Add
              <ImageInput
                type="file"
                multiple
                name="images"
                onChange={onImageUpload}
                accept="image/png, image/jpeg, image/jpg, image/webp"
              />
            </ImageInputLabel>
          </ImageInputWrapper>
          {selectedFiles.length > 0 && (
            <div>
              <span>Selecgt a feature image: </span>
              <select name="is_feature" onChange={handleFeatureImageChange}>
                {selectedFiles.map((selectedFile, index) => {
                  return (
                    <option key={index} value={index}>
                      {index + 1}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
          <Images>
            {selectedImages &&
              selectedImages.map((image, index) => {
                return (
                  <Image key={index}>
                    <img src={image} height="200" width="400" alt="Image" />
                    <br />
                    {index + 1}

                    <DeleteImageButton
                      onClick={() => {
                        handleDeleteImage(image, index);
                      }}
                    >
                      Delete
                    </DeleteImageButton>
                  </Image>
                );
              })}
          </Images>
        </ImageFormCard>
      </ImageFormContainer>

      <SpecificationFormContainer>
        <SpecificationFormCard>
          <SpecificationFormTitle>Add Specifications</SpecificationFormTitle>
          <form>
            {[...Array(numberOfSpecFields)].map((e, index) => {
              return (
                <SpecificationInputRow key={index}>
                  <SpecificationValue
                    placeholder="Title"
                    onChange={handleSpecKeyChange}
                    name="key"
                    onBlur={handleFocusOut(index)}
                  />
                  <SpecificationValue
                    placeholder="Value"
                    onChange={handleSpecValueChange}
                    name="value"
                    onBlur={handleFocusOut(index)}
                  />
                </SpecificationInputRow>
              );
            })}
          </form>
          <AddMoreButton
            onClick={() => {
              setNumberOfSpecFields((prev) => prev + 1);
              setSpecifications([...specifications, { key: "", value: "" }]);
            }}
          >
            Add
          </AddMoreButton>
          {numberOfSpecFields > 0 && (
            <RemoveButton
              onClick={() => {
                setNumberOfSpecFields((prev) => prev - 1);
                setSpecifications(specifications.slice(0, -1));
              }}
            >
              Remove
            </RemoveButton>
          )}
        </SpecificationFormCard>
      </SpecificationFormContainer>

      <AddButtonWrapper>
        <AddButton type="submit" onClick={handleSubmit}>
          Add Item
        </AddButton>
      </AddButtonWrapper>
    </Container>
  );
};

export default AddItemForm;
