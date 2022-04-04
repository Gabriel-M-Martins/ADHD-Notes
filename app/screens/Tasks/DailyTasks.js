import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Styles from "../../styles/index";

import DailyTask from "../../components/DailyTask";
import IconButton from "../../components/IconButton";

import { useSelector } from "react-redux";

function DailyTasks(props) {
  const dailyTasks = useSelector((state) => state.dailyTask.dailyTasks);
  return (
    <View style={Styles.container}>
      <FlatList
        style={style.list}
        data={dailyTasks}
        renderItem={({ item }) => {
          return (
            <DailyTask
              taskTitle={item.titulo}
              time={item.horario}
              containerStyle={style.tasks}
            />
          );
        }}
        // keyExtractor={(item) => item.id}
      />
      <IconButton
        icon={{ name: "plus", size: 40, color: "#fff" }}
        buttonStyle={style.button}
        buttonFunc={{
          onPress: () => props.navigation.navigate("OpenedDailyTask"),
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  tasks: {
    elevation: 0.5,
    margin: 4,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
  },
  button: {
    position: "absolute",
    left: "80%",
    top: "88%",
    backgroundColor: "tomato",
    borderRadius: 50,
    padding: 4,
    elevation: 5,
  },
  list: {
    width: "100%",
    marginTop: "3%",
  },
});

export default DailyTasks;
