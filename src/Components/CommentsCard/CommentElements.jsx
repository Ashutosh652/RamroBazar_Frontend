import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const CommentBox = styled.div`
  width: 100%;
  //   border: 1px solid red;
  background-color: rgba(0, 0, 0, 0.1);
  min-height: 5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 1em;
  margin-left: 0;
  display: flex;
  align-items: center;
`;

export const ProfilePic = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  //   margin-top: 1%;
  margin-left: 0.5em;
`;

export const CommentInfo = styled.div`
  height: 100%;
  width: 100%;
  //   border: 1px solid red;
  margin-left: 0.5em;
`;

export const AuthorName = styled(Link)`
  font-size: small;
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`;

export const DateCommented = styled.span`
  font-size: x-small;
  color: #665566;
`;

export const CommentContent = styled.div`
  width: 100%;
  //   border: 1px solid red;
`;

export const ReplyBox = styled.div`
  // width: 100%;
  // border: 1px solid red;
  // background-color: rgba(0, 0, 0, 0.1);
  // min-height: 5em;
  // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  // margin: 1em;
  // margin-left: 0;
  margin-left: 2em;
  // margin-right: 1em;
  // display: flex;
  align-items: center;
`;

export const CommentActions = styled.div`
  // border: 1px solid red;
  // margin-left: 5em;
  margin-top: 0.5em;
  font-size: small;
  color: #665566;
`;

export const CommentAction = styled.span`
  // border: 1px solid green;
  margin: 0.25em;

  &:hover {
    color: #000;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const CommentActionDelete = styled.span`
  margin: 0.25em;

  &:hover {
    color: #ff0000;
    text-decoration: underline;
    cursor: pointer;
  }
`;
