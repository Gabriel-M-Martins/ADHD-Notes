import React from "react";
//import { StatusBar as EStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

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
const HomeNav = createBottomTabNavigator();
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
    <HomeNav.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        lazy: false,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarIcon: ({ focused, color, size }) =>
          setIcon(route.name, focused, color, size),
      })}
    >
      <HomeNav.Screen name="Notes" component={NotesTabs} />
      <HomeNav.Screen name="Home" component={Home} />
      <HomeNav.Screen name="Tasks" component={TasksTabs} />
    </HomeNav.Navigator>
  );
}

function Main() {
  return (
    <MainNav.Navigator screenOptions={{ headerShown: false }}>
      <MainNav.Screen name="HomeTabs" component={HomeTabs} />
      <MainNav.Screen name="Profile" component={Profile} />
      <MainNav.Screen name="Settings" component={Settings} />
      <MainNav.Screen
        name="OpenedDailyTask"
        component={OpenedDailyTask}
        options={{ headerShown: true, title: "Nova tarefa diária" }}
      />
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
