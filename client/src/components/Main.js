import React from 'react';
import styled from 'styled-components';

import MessageForm from "components/MessageForm";

const Main = () => (
  <Container>
    <MessageForm/>
    <Feed/>
  </Container>
);

const Container = styled.div`
  margin: 5% 30%;
`;

const Feed = styled.div`
  background-color: white;
  height: 400px;
`;

export default Main;
