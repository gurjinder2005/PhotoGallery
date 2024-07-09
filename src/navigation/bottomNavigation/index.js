import AnDesign from "react-native-vector-icons/AntDesign";
import DetailsScreen from "../../pages/DetailsScreen";
import HomeScreen from "./../../pages/HomeScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "../../pages/ProfileScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useState } from "react";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
  const [tabBackground, setTabBackground] = useState();
  return (
    <>
      <Tab.Navigator
        activeColor="black"
        inactiveColor="#3e2465"
        barStyle={{
          backgroundColor: tabBackground,
        }}>
        <Tab.Screen
          name="Feed"
          component={HomeScreen}
          listeners={{
            tabPress() {
              setTabBackground("silver");
            },
          }}
          options={{
            tabBarLabel: "Explore",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="image-search"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={DetailsScreen}
          listeners={{
            tabPress() {
              setTabBackground("azure");
            },
          }}
          options={{
            tabBarLabel: "My Gallery ",
            tabBarIcon: ({ color }) => (
              <MaterialIcons
                onPre
                name="photo-library"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          listeners={{
            tabPress() {
              setTabBackground("gray");
            },
          }}
          options={{
            tabBarLabel: "About",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigation;
