import React from "react";
import styled from "styled-components";
import * as Yup from "yup";
import { connect } from "react-redux";
import { toLower } from 'lodash/fp';
import { Formik } from "formik";

import { Input, TextArea, Form, Button } from "semantic-ui-react";

import * as mainActions from "actions/main.actions";

const messageFormValidation = Yup.object().shape({
  email: Yup.string()
    .email("Email not valid")
    .required("Email is required"),
  text: Yup.string().trim().required("Message is required")
});

const initialValues = {
  email: "",
  text: ""
};

class MessageForm extends React.Component {
  handleSubmitForm = (values, props) => {
    const { submitMessage } = this.props;
    const { email, text } = values;

    if (!email || !text) {
      return;
    }

    submitMessage({ email: toLower(email), text });
    props.setSubmitting(false);
    props.resetForm(initialValues);
  };

  render() {
    return (
      <Formik
        validationSchema={messageFormValidation}
        enableReinitialize
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={initialValues}
        onSubmit={this.handleSubmitForm}
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
                value={values.text}
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
  }
}

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

export default connect(
  null,
  {
    submitMessage: mainActions.submitMessage
  }
)(MessageForm);
