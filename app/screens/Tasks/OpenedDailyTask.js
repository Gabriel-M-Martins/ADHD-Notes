import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import IconButton from "../../components/IconButton";

import Styles from "../../styles/index";

import { useDispatch, useSelector } from "react-redux";
import { addDailyTask } from "../../features/dailyTask/dailyTaskSlice";

function OpenedDailyTask(props) {
  let horario = "";
  let titulo = "";
  let descricao = "";
  const id = useSelector((state) => state.dailyTask.lastKey + 1);
  const dispatch = useDispatch();

  return (
    <View style={[Styles.container, { justifyContent: "flex-start" }]}>
      <View style={[styles.horizontalContainer, { width: "100%" }]}>
        <TextInput
          style={[styles.input]}
          placeholder="Nome da tarefa"
          onChangeText={(text) => {
            titulo = text;
          }}
        />
        <TextInputMask
          style={[styles.input, { width: "20%" }]}
          type={"datetime"}
          value={horario}
          options={{ format: "HH:mm" }}
          onChangeText={(text) => {
            horario = text;
          }}
          placeholder="00:00"
        />
      </View>

      <TextInput
        style={styles.descriptionInput}
        multiline={true}
        textBreakStrategy="simple"
        placeholder="Descrição"
        onChangeText={(text) => {
          descricao = text;
        }}
      />

      <IconButton
        buttonStyle={styles.button}
        icon={{ name: "save", size: 40, color: "white" }}
        buttonFunc={{
          onPress: () => {
            dispatch(
              addDailyTask({
                id: id,
                titulo: titulo,
                horario: horario,
                descricao: descricao,
              })
            );
            props.navigation.goBack();
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "50%",
    margin: 12,
    borderRadius: 5,
    borderBottomWidth: 1,
    textAlign: "center",
    fontSize: 16,
  },
  descriptionInput: {
    width: "85%",
    height: "50%",
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "auto",
    textAlignVertical: "top",
    padding: 10,
    fontSize: 16,
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    width: 55,
    height: 55,
    bottom: "5%",
    backgroundColor: "tomato",
    borderRadius: 50,
  },
});

export default OpenedDailyTask;
