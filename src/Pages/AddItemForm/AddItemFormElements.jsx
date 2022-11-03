import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const InfoFormContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  /* border: 3px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: auto; */
  padding: 2em;
`;

export const InfoFormCard = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-height: 35em;
  min-width: 50em;
  /* margin-top: 5em; */
  /* margin-bottom: 3em; */
`;

export const FormHeader = styled.div`
  width: 100%;
  font-size: large;
  text-align: center;
  padding: 1em;
`;

export const InputRow = styled.div`
  width: 90%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  border: 1px solid white;
  text-align: center;
  margin: 1em;
`;

export const InputLabel = styled.div`
  text-align: center;
  /* margin-left: 0em; */
  width: 50%;
  /* border: 1px solid red; */
`;

export const InputField = styled.input`
  height: 2em;
  /* margin-right: 0em; */
  width: 50%;
  /* border: 1px solid blue; */
`;

export const AddButtonWrapper = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  margin-bottom: 10em;
  margin-top: 3em;
`;

export const AddButton = styled.button`
  height: 3em;
  width: 7em;
  margin: auto;

  &:hover {
    background-color: green;
    cursor: pointer;
  }
`;

export const ImageFormContainer = styled.div`
  width: 100%;
  /* border: 1px solid green; */
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 10em; */
`;

export const ImageFormCard = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-height: 15em;
  min-width: 50em;
`;

export const ImageFormTitle = styled.div`
  width: 100%;
  font-size: large;
  text-align: center;
`;

export const ImageInputWrapper = styled.div`
  margin: 1.5em;
  text-align: center;
`;

export const ImageInputLabel = styled.label`
  height: 7em;
  width: 7em;
  /* border: 1px solid black; */
  /* margin: auto; */
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const ImageInput = styled.input`
  display: none;
`;

export const Images = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.div`
  margin: 1rem 0.5rem;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;

export const DeleteImageButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  border: none;
  color: white;
  background-color: lightcoral;

  &:hover {
    background-color: red;
  }
`;

export const SpecificationFormContainer = styled.div`
  width: 100%;
  /* border: 2px solid blue; */
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpecificationFormCard = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  /* min-height: 15em; */
  min-width: 50em;
`;

export const SpecificationFormTitle = styled.div`
  width: 100%;
  font-size: large;
  text-align: center;
`;

export const SpecificationInputRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SpecificationValue = styled.input`
  width: 40%;
  padding: 0.5em;
  margin: 0.5em;
`;

export const AddMoreButton = styled.button`
  width: 7em;
`;

export const RemoveButton = styled.button`
  width: 7em;
`;
