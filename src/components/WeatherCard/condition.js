import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp, condition }) => {
  const Temp = styled.h1`
    font-family: sans-serif;
    font-size: 45px;
  `;
  const State = styled.h3`
    font-size: 25px;
  `;
  return (
    <>
      <Temp>{temp}°C</Temp>
      <State>{condition}</State>
    </>
  );
};

export default Condition;
