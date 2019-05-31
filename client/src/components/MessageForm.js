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
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting
    }) => (
      <StyledForm onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {/*{touched.email && errors.email}*/}
        <StyledTextArea
          placeholder="message"
          name="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />

        <StyledButton primary type="submit" disabled={isSubmitting}>
          Submit
        </StyledButton>
      </StyledForm>
    )}
  </Formik>
);

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #efefef;
  
  button, textarea {
    margin-top: 10px !important;
  }
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

const StyledTextArea = styled(TextArea)`
  resize: none !important;
`;

export default MessageForm;
