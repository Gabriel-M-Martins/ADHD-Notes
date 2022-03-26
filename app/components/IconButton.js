import React from "react";
import { View, TouchableOpacity, ViewPropTypes } from "react-native";
import { Entypo } from "@expo/vector-icons";
import propTypes from "prop-types";

export default function IconButton(props) {
  return (
    <TouchableOpacity
      style={props.buttonStyle}
      onPress={props.buttonFunc.onPress}
      onPressIn={props.buttonFunc.onPressIn}
      onPressOut={props.buttonFunc.onPressOut}
      onLongPress={props.buttonFunc.onLongPress}
    >
      <Entypo
        name={props.icon.name}
        size={props.icon.size}
        color={props.icon.color}
        style={props.iconStyle}
      />
    </TouchableOpacity>
  );
}

IconButton.propTypes = {
  iconStyle: ViewPropTypes.style,
  icon: propTypes.shape({
    name: propTypes.string.isRequired,
    size: propTypes.number.isRequired,
    color: propTypes.string.isRequired,
  }),
  buttonStyle: ViewPropTypes.style,
  buttonFunc: propTypes.shape({
    onPress: propTypes.func,
    onPressIn: propTypes.func,
    onPressOut: propTypes.func,
    onLongPress: propTypes.func,
  }),
};

IconButton.defaultProps = {
  buttonFunc: {
    onPress: () => {},
    onPressIn: () => {},
    onPressOut: () => {},
    onLongPress: () => {},
  },
};
