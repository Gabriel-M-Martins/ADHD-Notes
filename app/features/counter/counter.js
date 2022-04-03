import React from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "../../components/IconButton";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={{ textAlign: "center" }}>{count}</Text>
      <View style={{ flexDirection: "row" }}>
        <IconButton
          icon={{ name: "plus", size: 24, color: "tomato" }}
          buttonFunc={{ onPress: () => dispatch(increment()) }}
        />
        <IconButton
          icon={{ name: "minus", size: 24, color: "tomato" }}
          buttonFunc={{ onPress: () => dispatch(decrement()) }}
        />
      </View>
    </View>
  );
}
