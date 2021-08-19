import React from "react";
import styled from "styled-components";

const CustomTypography = styled.span`
  height: fit-content;
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-weight: ${(props) => props.fontWeight};
  /* font-size: calc(
    ${(props) => props.fontSize} -
      ${(props) => (props.reduce ? props.reduce : "6px")}
  ); */

  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color && props.color};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  z-index: 100;
  width: ${(props) => (props.width ? props.width : "fit-content")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "")};
  /* @media screen and (min-width: 375px) {
    font-size: calc(
      ${(props) => props.fontSize} -
        ${(props) => (props.reduce ? props.reduce : "4px")}
    );
  }
  @media screen and (min-width: 640px) {
    font-size: calc(${(props) => props.fontSize});
  } */
`;

export default function Typography(props) {
  return (
    <CustomTypography
      as={props.variant ? props.variant : "p"}
      fontWeight={props.fontWeight}
      fontSize={props.fontSize}
      width={props.width}
      {...props}
    >
      {props.children}
    </CustomTypography>
  );
}
