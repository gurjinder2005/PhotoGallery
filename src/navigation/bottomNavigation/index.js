import AnDesign from "react-native-vector-icons/AntDesign";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useState } from "react";

import HomeScreen from './../../pages/HomeScreen';
import DetailsScreen from "../../pages/DetailsScreen";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
  const [tabBackground, setTabBackground] = useState();
  return (
    <NavigationContainer>
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
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <AnDesign name="home" color={color} size={26} />
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
            tabBarLabel: "Photos",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                onPre
                name="folder"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          listeners={{
            tabPress() {
              setTabBackground("gray");
            },
          }}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;