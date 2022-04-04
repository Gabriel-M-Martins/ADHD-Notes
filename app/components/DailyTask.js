import React from "react";
import { View, Text, StyleSheet, ViewPropTypes } from "react-native";
import propTypes from "prop-types";
import IconButton from "./IconButton";
import Line from "./Line";

export default function DailyTask(props) {
  return (
    <View style={[styles.view, props.containerStyle]}>
      <View style={styles.infoContainer}>
        <Text style={[styles.text, styles.time]}>{props.time}</Text>
        <Line marginShape={{ left: 5, right: 5 }} />
        <Text style={[styles.text, styles.task]}>{props.taskTitle}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <IconButton
          buttonStyle={[styles.buttons, props.buttonStyle]}
          buttonFunc={{ onPress: props.excluirFunc }}
          icon={{
            name: props.deleteIcon.name,
            size: props.deleteIcon.size,
            color: props.deleteIcon.color,
          }}
        />

        <IconButton
          buttonStyle={[styles.buttons, props.buttonStyle]}
          buttonFunc={{ onPress: props.editarFunc }}
          icon={{
            name: props.editIcon.name,
            size: props.editIcon.size,
            color: props.editIcon.color,
          }}
        />
      </View>
    </View>
  );
}

DailyTask.propTypes = {
  taskTitle: propTypes.string.isRequired,
  time: propTypes.string.isRequired,
  containerStyle: ViewPropTypes.style,
  buttonStyle: ViewPropTypes.style,
  deleteFunc: propTypes.func,
  editFunc: propTypes.func,
  deleteIcon: propTypes.shape({
    name: propTypes.string,
    size: propTypes.number,
    color: propTypes.string,
  }),
  editIcon: propTypes.shape({
    name: propTypes.string,
    size: propTypes.number,
    color: propTypes.string,
  }),
};

DailyTask.defaultProps = {
  deleteIcon: {
    name: "trash",
    size: 24,
    color: "tomato",
  },
  editIcon: {
    name: "pencil",
    size: 24,
    color: "tomato",
  },
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  infoContainer: {
    flexDirection: "column",
    flex: 2,
    justifyContent: "space-around",
    marginLeft: 5,
  },
  text: {
    textAlign: "left",
    fontSize: 17,
    paddingLeft: 15,
    marginVertical: 5,
  },
  task: {},
  time: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttons: {
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
