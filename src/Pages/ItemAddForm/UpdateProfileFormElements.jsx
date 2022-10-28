import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

export const FormCard = styled.div`
  /* border: 1px solid red; */
  /* text-align: center; */
  min-width: 50em;
  /* min-height: 40em; */
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const FormHeader = styled.div`
  font-size: x-large;
  text-align: center;
`;

export const InputRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 1em;
  /* margin: 1em; */
`;

export const InfoTitle = styled.div`
  /* width: 100%; */
  /* border: 1px solid red; */
  margin-right: 3em;
`;

export const InfoInput = styled.input`
  width: 25em;
  margin-left: 3em;
`;
