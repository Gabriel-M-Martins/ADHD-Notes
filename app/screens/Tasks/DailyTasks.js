import React, { useEffect } from "react";
import { View, Text } from "react-native";

import Styles from "../../styles/index";

import DailyTask from "../../components/DailyTask";
import IconButton from "../../components/IconButton";

function DailyTasks(props) {
  return (
    <View style={Styles.container}>
      <IconButton
        icon={{ name: "plus", size: 40, color: "#fff" }}
        buttonStyle={{
          position: "absolute",
          left: "80%",
          top: "88%",
          backgroundColor: "tomato",
          borderRadius: 50,
          padding: 4,
          elevation: 5,
        }}
        buttonFunc={{
          onPress: () => props.navigation.navigate("OpenedDailyTask"),
        }}
      />
    </View>
  );
}

export default DailyTasks;

{
  /* <Entypo name="chevron-thin-up" size={24} color="tomato" />
      <Entypo name="chevron-thin-down" size={24} color="tomato" /> */
}
