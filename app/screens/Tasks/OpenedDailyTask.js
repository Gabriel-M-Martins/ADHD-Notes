import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
//import TextInputMask from "react-native-text-input-mask";

import Styles from "../../styles/index";

function OpenedDailyTask(props) {
  return (
    <View style={Styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>Título</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>Horário</Text>
        {/* <TextInputMask
          style={styles.input}
          keyboardType="numeric"
          mask={"[00]:[00]"}
        /> */}
      </View>
      <Text>Descrição</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "40%",
    margin: 12,
    borderRadius: 5,
    borderBottomWidth: 1,
  },
});

export default OpenedDailyTask;
