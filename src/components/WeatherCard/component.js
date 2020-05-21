import React from "react";
import styled from "@emotion/styled";
import Location from "./Location";
import Condition from "./condition";
import Icon from "./icon";

const WeatherCard = ({ temp, condition, city, country }) => {
  var red = 0;
  var blue = 0;
  let highColor = 0;
  let lowColor = 0;
  if (temp > 12) {
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 150;
    red = 255;
    blue = 0;
  } else {
    highColor = (1 - (temp + 20) / 32) * 255;
    lowColor = highColor - 150;
    red = 0;
    blue = 255;
  }
  const Card = styled.div`
    background: linear-gradient(
      to top,
      rgb(${red}, ${highColor}, ${blue}),
      rgb(${red}, ${lowColor}, ${blue})
    );
    width: 20%;
    height: 100%;
    margin: 50px auto;
    border: 1px solid black;
    text-align: center;
    border-radius: 15px;
    color: white;
  `;

  return (
    <Card>
      <Location country={country} city={city} />
      <Icon condition={condition} />
      <Condition temp={temp} condition={condition} />
    </Card>
  );
};

export default WeatherCard;
