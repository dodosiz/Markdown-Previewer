import * as React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  width: 90%;
  height: 200px;
  margin-top: 3%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border: none;
  resize: none;
`;

export function Editor(props = { handleInputChange: () => {} }) {
  const onInputChange = (e) => {
    props.handleInputChange(e.target.value);
  };
  return <TextArea id="editor" onChange={onInputChange}></TextArea>;
}
