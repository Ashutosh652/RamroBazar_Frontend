import React, { useState } from "react";
import {
  Form,
  TextArea,
  SubmitButton,
  ButtonWrapper,
  CancelButton,
} from "./CommentFormElements";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  initialText = "",
  handleCancel,
}) => {
  const [text, setText] = useState(initialText);
  const isTextAreaDisabled = text.length === 0;

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <>
      <span style={{ fontSize: "small", color: "#665566" }}>
        Write a Comment
      </span>
      <Form onSubmit={onSubmit}>
        <TextArea
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        >
          Write here...
        </TextArea>
        <ButtonWrapper>
          <SubmitButton disabled={isTextAreaDisabled}>
            {submitLabel}
          </SubmitButton>
        </ButtonWrapper>
        {hasCancelButton && (
          <ButtonWrapper>
            <CancelButton type="button" onClick={handleCancel}>
              Cancel
            </CancelButton>
          </ButtonWrapper>
        )}
      </Form>
    </>
  );
};

export default CommentForm;
