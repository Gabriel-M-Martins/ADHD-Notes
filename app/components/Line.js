import React from "react";
import { View } from "react-native";
import propTypes from "prop-types";

export default function Line(props) {
  return (
    <View
      style={{ borderBottomColor: props.color, borderBottomWidth: props.width }}
    />
  );
}

Line.propTypes = {
  color: propTypes.string,
  width: propTypes.number,
};

Line.defaultProps = {
  color: "black",
  width: 1,
};
