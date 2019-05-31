import React from 'react';
import styled from 'styled-components';

import MessageForm from "components/MessageForm";
import Feed from "components/Feed";

const Main = () => (
  <Container>
    <MessageForm/>
    <Feed/>
  </Container>
);

const Container = styled.div`
  margin: 5% 30%;
`;


export default Main;
