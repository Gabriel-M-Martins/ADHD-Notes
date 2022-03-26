import React from "react";
import { View, Text, ViewPropTypes } from "react-native";
import propTypes from "prop-types";

export default function Separator(props) {
  return (
    <View
      style={[{ flexDirection: "row", alignItems: "center" }, props.container]}
    >
      <View
        style={{
          flex: 1,
          height: props.line.height,
          backgroundColor: props.line.color,
        }}
      />

      <View>
        <Text style={props.text.style}>{props.text.value}</Text>
      </View>

      <View
        style={{
          flex: 1,
          height: props.line.height,
          backgroundColor: props.line.color,
        }}
      />
    </View>
  );
}

Separator.propTypes = {
  container: ViewPropTypes.style,
  line: propTypes.shape({
    height: propTypes.number,
    color: propTypes.string,
  }),
  text: propTypes.shape({
    value: propTypes.string,
    style: propTypes.object,
  }),
};

Separator.defaultProps = {
  line: {
    height: 1,
    color: "black",
  },
  text: {
    style: {
      width: 50,
      textAlign: "center",
    },
  },
};
