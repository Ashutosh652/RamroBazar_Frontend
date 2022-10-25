import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 10em;
  //   margin-top: 1em;
  //   border: 1px solid red;
  //   background-color: rgba(0, 0, 0, 0.1);
`;

export const TextArea = styled.textarea`
  width: 100%;
  //   border: 1px solid green;
  background-color: rgba(0, 0, 0, 0.1);
  height: 70%;
  resize: none;
  border: none;

  //   &:focus {
  //     border: none;
  //     border-bottom: 1px solid red;
  //   }
`;

export const SubmitButton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: default;
    // border: 1px solid red;
    box-shadow: none;
    background-color: #cccccc;
  }
`;

export const ButtonWrapper = styled.div`
  //   margin: auto;
  margin-top: 0.5em;
  //   margin-bottom: 200em;
  text-align: center;
`;

export const CancelButton = styled.button`
  background-color: red; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  // font-size: 16px;
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: default;
    // border: 1px solid red;
    box-shadow: none;
    background-color: #cccccc;
  }
`;