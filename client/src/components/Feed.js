import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { trimStart } from 'lodash/fp';

import * as mainActions from "actions/main.actions";
import {
  filteredMessagesSelector,
  filterTermSelector
} from "selectors/main.selectors";

import { Loader, Input } from "semantic-ui-react";
import { isLoadingSelector } from "selectors/network.selectors";

import Message from "components/Message";

class Feed extends React.Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  handleFilterChange = e => {
    const { setFilterTerm } = this.props;
    const filter = trimStart(e.target.value);

    setFilterTerm(filter);
  };

  render() {
    const { isLoading, messages, filterTerm } = this.props;

    return (
      <Container>
        <Input
          placeholder="Filter"
          value={filterTerm}
          onChange={this.handleFilterChange}
        />

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
  messages: filteredMessagesSelector(state),
  isLoading: isLoadingSelector(state, mainActions.FETCH_MESSAGES),
  filterTerm: filterTermSelector(state)
});

export default connect(
  mapStateToProps,
  {
    fetchMessages: mainActions.fetchMessages,
    setFilterTerm: mainActions.setFilterTerm
  }
)(Feed);
