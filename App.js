import "react-native-gesture-handler";
import React from "react";
//import { EStatusBar } from "expo-status-bar";

//import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useRoute } from "@react-navigation/native";

import {
  Home,
  Profile,
  Settings,
  PunctualTasks,
  DailyTasks,
  IsolatedNotes,
  DiaryNotes,
  OpenedDailyTask,
} from "./app/screens/Index";

import setIcon from "./app/utils/SetIcon";

const MainNav = createNativeStackNavigator();
const TabsNav = createMaterialBottomTabNavigator();
const NotesNav = createMaterialTopTabNavigator();
const TasksNav = createMaterialTopTabNavigator();

function TasksTabs() {
  return (
    <TasksNav.Navigator screenOptions={{ tabBarStyle: { paddingTop: "5%" } }}>
      <TasksNav.Screen
        name="DailyTasks"
        component={DailyTasks}
        options={{ title: "Diárias" }}
      />
      <TasksNav.Screen
        name="PunctualTasks"
        component={PunctualTasks}
        options={{ title: "Pontuais" }}
      />
    </TasksNav.Navigator>
  );
}

function NotesTabs() {
  return (
    <NotesNav.Navigator screenOptions={{ tabBarStyle: { paddingTop: "5%" } }}>
      <NotesNav.Screen
        name="DiaryNotes"
        component={DiaryNotes}
        options={{ title: "Diárias" }}
      />
      <NotesNav.Screen
        name="IsolatedNotes"
        component={IsolatedNotes}
        options={{ title: "Isoladas" }}
      />
    </NotesNav.Navigator>
  );
}

function HomeTabs() {
  return (
    <TabsNav.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          setIcon(route.name, focused, color, size),
      })}
    >
      <TabsNav.Screen name="Notes" component={NotesTabs} />
      <TabsNav.Screen name="Home" component={Home} />
      <TabsNav.Screen name="Tasks" component={TasksTabs} />
    </TabsNav.Navigator>
  );
}

function Main() {
  return (
    <MainNav.Navigator screenOptions={{ headerShown: false }}>
      <MainNav.Screen name="Home" component={HomeTabs} />
      <MainNav.Screen name="Profile" component={Profile} />
      <MainNav.Screen name="Settings" component={Settings} />
      <MainNav.Screen name="OpenedDailyTask" component={OpenedDailyTask} />
    </MainNav.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
