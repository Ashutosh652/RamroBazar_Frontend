import styled from "styled-components";

export const Items = styled.div`
  margin: 5%;
  /* border: 2px solid green; */
  width: 35%;
  max-height: 30em;
  overflow: auto;
  //   background-color: rgba(161, 54, 54, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const TitleHead = styled.div`
  font-size: large;
  text-align: center;
`;

export const ItemList = styled.div`
  padding: 1em;
  //   border: 1px solid red;
`;

export const Item = styled.div`
  padding: 1em;

  &:hover {
    background-color: rgba(161, 54, 54, 0.1);
    cursor: pointer;
  }
`;

// export const ItemName = styled.span`
//   width: 100%;
// `;
