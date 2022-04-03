import React from "react";
import { View } from "react-native";
import propTypes from "prop-types";

export default function Line(props) {
  return (
    <View
      style={{
        borderBottomColor: props.color,
        borderBottomWidth: props.width,
        paddingTop: props.paddingShape.top,
        paddingBottom: props.paddingShape.bottom,
        paddingLeft: props.paddingShape.left,
        paddingRight: props.paddingShape.right,
        marginLeft: props.marginShape.left,
        marginRight: props.marginShape.right,
        marginTop: props.marginShape.top,
        marginBottom: props.marginShape.bottom,
      }}
    />
  );
}

Line.propTypes = {
  color: propTypes.string,
  width: propTypes.number,
  paddingShape: propTypes.shape({
    top: propTypes.number,
    bottom: propTypes.number,
    left: propTypes.number,
    right: propTypes.number,
  }),
  marginShape: propTypes.shape({
    top: propTypes.number,
    bottom: propTypes.number,
    left: propTypes.number,
    right: propTypes.number,
  }),
};

Line.defaultProps = {
  color: "black",
  width: 1,
  paddingShape: { top: 0, bottom: 0, left: 0, right: 0 },
  marginShape: { top: 0, bottom: 0, left: 0, right: 0 },
};
