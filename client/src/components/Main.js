import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Message } from "semantic-ui-react";

import * as mainActions from "actions/main.actions";
import { errorSelector } from "selectors/main.selectors";

import MessageForm from "components/MessageForm";
import Feed from "components/Feed";

const Main = ({ error, clearError }) => (
  <Container>
    {error && (
      <Message negative onDismiss={() => clearError()}>
        <Message.Header>API Error</Message.Header>
        <p>{error.message}</p>
      </Message>
    )}

    <MessageForm />
    <Feed />
  </Container>
);

const Container = styled.div`
  max-width: 450px;
  margin: 3% auto;
`;

const mapStateToProps = state => ({
  error: errorSelector(state)
});

export default connect(
  mapStateToProps,
  {
    clearError: mainActions.clearError
  }
)(Main);
