import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "25px"};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#000"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  display: ${(props) => (props.display ? props.display : "flex")};
  width: 100%;
  min-height: 100px;
  height: fit-content;
`;

const NoteCard = (props) => {
  return (
    <Container
      borderRadius={props.borderRadius}
      backgroundColor={props.backgroundColor}
      margin={props.margin}
      padding={props.padding}
    >
      {props.children}
    </Container>
  );
};

export default NoteCard;
