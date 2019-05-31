import React from "react";
import styled from "styled-components";
import * as Yup from "yup";

import { Formik } from "formik";
import { Input, TextArea, Form, Button } from "semantic-ui-react";

const messageFormValidation = Yup.object().shape({
  email: Yup.string()
    .email("Email not valid")
    .required("Email is required"),
  text: Yup.string().required("Message is required")
});

const MessageForm = () => (
  <Formik
    validationSchema={messageFormValidation}
    enableReinitialize
    validateOnBlur={false}
    validateOnChange={false}
    initialValues={{
      email: '',
      text: ''
    }}
    onSubmit={(values, props) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        props.setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleSubmit,
      isSubmitting
    }) => {
      return (
        <StyledForm onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && <Error>{errors.email}</Error>}

          <StyledTextArea
            placeholder="message"
            name="text"
            onChange={handleChange}
            value={values.password}
          />
          {errors.text && <Error>{errors.text}</Error>}

          <StyledButton primary type="submit" loading={isSubmitting}>
            Submit
          </StyledButton>
        </StyledForm>
      );
    }}
  </Formik>
);

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #efefef;

  button,
  textarea {
    margin-top: 10px !important;
  }
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

const StyledTextArea = styled(TextArea)`
  resize: none !important;
`;

const Error = styled.div`
  color: red;
`;

export default MessageForm;
