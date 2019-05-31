import React from 'react';
import styled from 'styled-components';

export default class Message extends React.Component {
  render() {
    return (
      <Container>
        Hello
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 15px 0;
  border: 1px solid red;
`;
