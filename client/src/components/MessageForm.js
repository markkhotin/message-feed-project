import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

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
        <Field
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email}
        <Field
          component="textarea"
          placeholder="message"
          name="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          cols={30}
          rows={10}
        />
        {touched.text && errors.text}
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </StyledForm>
    )}
  </Formik>
);

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #efefef;
`;

export default MessageForm;
