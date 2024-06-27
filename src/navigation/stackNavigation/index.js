import {  StyleSheet, Text, View } from "react-native";

import Loader from"../../pages/Loader";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Welcome from"../../pages/Welcome";
import { createStackNavigator} from "@react-navigation/stack";
const Navigation = () => {
    const stack = createStackNavigator();
    return(
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
        headerShown: false,
        }}
        initialRouteNAME={"WELCOME"}>
        
        <stack.secreen name ="Welcome" components={Welcome}/>
        <stack.secreen name ="Welcome" components={Welcome}/>
       </Stack.Navigator>
       </NavigationContainer>
    );
};

 export default Navigation;
  const Style = StyleSheet.create({});