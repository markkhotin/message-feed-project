import React from "react";
import styled from "styled-components";
import md5 from "md5";
import moment from "moment";

const gravatarUrl = (email, size = 50) => {
  const lowerCaseEmail = email.toLowerCase();
  return `http://www.gravatar.com/avatar/${md5(lowerCaseEmail)}?s=${size}`;
};

const getDateString = created =>
  moment().diff(created, "m") < 1 ? "Just now" : moment(created).calendar();

const Message = ({ email, text, created }) => (
  <Container>
    <AvatarWrapper>
      <img src={gravatarUrl(email)} alt="Gravatar" />
    </AvatarWrapper>

    <TextWrapper>
      <EmailDateWrapper>
        <Email>{email}</Email>

        <Date>{getDateString(created)}</Date>
      </EmailDateWrapper>

      <Text>{text}</Text>
    </TextWrapper>
  </Container>
);

const Container = styled.div`
  padding: 15px 0;
  display: flex;
`;

const AvatarWrapper = styled.div`
  margin-right: 10px;
  width: 50px;
  height: 50px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmailDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Email = styled.div`
  font-weight: bold;
  margin-right: 5px;
`;
const Date = styled.div`
  color: #b2b2b2;
  font-size: 12px;
`;
const Text = styled.div`
  word-break: break-word;
`;

export default Message;
