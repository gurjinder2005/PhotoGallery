import { Button, StyleSheet, Text, TchableOpacity, View } from "react-native";

import CustomButton from "../component/CustomButton";
import React from "react";
import { conainerstyle } from "../styles";
import { ImageBackground } from "react-native-web";
 
const WelcomeImage = require ("")

const Welcome = () => {
  return (
  <ImageBackground
   imageStyle={{ opacity:0.8}}
   source={WelcomeImage} 
   style={[conststyle.container,{}]}>
    <Text
    style={{
        fontSize:150,
        fontWeight:"bold",
        color:"black",
        fontFamily:"Inter-Black",
        borderColor:"yellow",
        paddingHorizontal:10,
    }}>
    PHOTO
    </Text>
    <Text>
    style={{
        fontsize:45,
         fontWeight:"bold",
        color:"black",
        fontFamily:"Inter-Black",
        borderColor:"yellow",
        borderwidth:2,
        padding: 12,
        }}
         GALLERY APP
    
    </Text>

        <View style={{ marginTop:200}}>
         <CustomButton title={"Get started"}></CustomButton>
    </View>
    </ImageBackground>
    );
    };
     export default Welcome;
        const style = StyleSheet.create({});

  