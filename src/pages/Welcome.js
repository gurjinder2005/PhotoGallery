import { ImageBackground, StyleSheet, Text, View } from "react-native";

import CustomButton from "../components/CustomButton";
import React from "react";
import { containerStyle } from "../styles";

const WelcomeImage = require("../../assets/img/Welcome.jpg");

const Welcome = ({ navigation }) => {
  return (
    <>
      <ImageBackground
        source={WelcomeImage}
        style={[containerStyle.container, { height: "100%", width: "100%" }]}>
        <View
          style={{
            flex: 4,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              color: "black",
              backgroundColor: "yellow",
              paddingHorizontal: 51,
            }}>
            PHOTO
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "#fff",
              borderColor: "yellow",
              borderWidth: 2,
              padding: 12,
              width: 233,
            }}>
            GALLERY APP
          </Text>
        </View>

        <View style={{ flex: 1, justifyContent: "center" }}>
          <CustomButton
            navigation={navigation}
            title={"Get Started"}></CustomButton>
        </View>
      </ImageBackground>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
