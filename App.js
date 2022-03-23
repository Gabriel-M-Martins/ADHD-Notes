import "react-native-gesture-handler";
import React from "react";
//import { EStatusBar } from "expo-status-bar";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

import {
  Home,
  Profile,
  Settings,
  PunctualTasks,
  DailyTasks,
  IsolatedNotes,
  DiaryNotes,
} from "./app/screens/Index";

import setIcon from "./app/utils/SetIcon";

const Drawer = createDrawerNavigator();
const MainTab = createBottomTabNavigator();
const NotesTab = createMaterialTopTabNavigator();
const TasksTab = createMaterialTopTabNavigator();

function TasksTabs() {
  return (
    <TasksTab.Navigator screenOptions={{ tabBarStyle: { paddingTop: "5%" } }}>
      <TasksTab.Screen
        name="DailyTasks"
        component={DailyTasks}
        options={{ title: "Diárias" }}
      />
      <TasksTab.Screen
        name="PunctualTasks"
        component={PunctualTasks}
        options={{ title: "Pontuais" }}
      />
    </TasksTab.Navigator>
  );
}

function NotesTabs() {
  return (
    <NotesTab.Navigator screenOptions={{ tabBarStyle: { paddingTop: "5%" } }}>
      <NotesTab.Screen
        name="DiaryNotes"
        component={DiaryNotes}
        options={{ title: "Diárias" }}
      />
      <NotesTab.Screen
        name="IsolatedNotes"
        component={IsolatedNotes}
        options={{ title: "Isoladas" }}
      />
    </NotesTab.Navigator>
  );
}

function HomeTabs() {
  return (
    <MainTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          setIcon(route.name, focused, color, size),
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <MainTab.Screen name="Notes" component={NotesTabs} />
      <MainTab.Screen name="Home" component={Home} />
      <MainTab.Screen name="Tasks" component={TasksTabs} />
    </MainTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Tabs"
          component={HomeTabs}
          options={{
            title: "Home",
            headerTitle: () => {
              return;
            },
          }}
        />

        <Drawer.Screen name="Profile" component={Profile} />

        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator> */}
      <HomeTabs />
    </NavigationContainer>
  );
}
