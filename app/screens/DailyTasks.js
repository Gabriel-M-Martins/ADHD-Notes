import React from "react";
import { Entypo } from "@expo/vector-icons";
import { View, Text } from "react-native";

import Styles from "../styles/index";

function DailyTasks(props) {
  return (
    <View style={Styles.container}>
      <Entypo name="chevron-thin-up" size={24} color="tomato" />
      <Entypo name="chevron-thin-down" size={24} color="tomato" />
      <Text>Tela de afazeres diários</Text>
    </View>
  );
}

export default DailyTasks;
