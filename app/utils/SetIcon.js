import Ionicons from "react-native-vector-icons/Ionicons";

export default function setIcon(routeName, focused, color, size) {
  let iconName;

  switch (routeName) {
    case "Notes":
      iconName = focused ? "journal" : "journal-outline";
      break;
    case "Tasks":
      iconName = focused ? "clipboard" : "clipboard-outline";
      break;
    case "Home":
      iconName = focused ? "square" : "square-outline";
      break;
  }

  return <Ionicons name={iconName} size={size} color={color} />;
}
