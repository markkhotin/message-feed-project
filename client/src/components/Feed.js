import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import * as messageActions from "actions/messages.actions";
import { messagesSelector } from "selectors/messages.selectors";

import { Loader, Input } from "semantic-ui-react";
import { isLoadingSelector } from "selectors/network.selectors";

import Message from "components/Message";

class Feed extends React.Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    const { isLoading, messages } = this.props;

    return (
      <Container>
        <Input placeholder="Filter" />

        {isLoading ? (
          <Loader active inline="centered" />
        ) : (
          messages.map(message => {
            const { email, text, created } = message;

            return (
              <Message
                key={message._id}
                email={email}
                text={text}
                created={created}
              />
            );
          })
        )}
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
`;

const mapStateToProps = state => ({
  messages: messagesSelector(state),
  isLoading: isLoadingSelector(state, messageActions.FETCH_MESSAGES)
});

export default connect(
  mapStateToProps,
  {
    fetchMessages: messageActions.fetchMessages
  }
)(Feed);
