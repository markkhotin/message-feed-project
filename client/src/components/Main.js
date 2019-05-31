import React from 'react';
import styled from 'styled-components';

const Main = () => (
  <Container>
    <Form/>
    <Feed/>
  </Container>
);

const Container = styled.div`
  margin: 5% 30%;
`;

const Form = styled.div`
  background-color: #efefef;
  height: 200px;
`;

const Feed = styled.div`
  background-color: white;
  height: 400px;
`;

export default Main;
