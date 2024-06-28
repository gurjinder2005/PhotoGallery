import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import CustomButton from "../components/CustomButton";
import Loader from "../components/Loader";
import { containerStyle } from "../styles";

const WelcomeImage = require("../../assets/img/Welcome.jpg");

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      {isLoading === false ? (
        <ImageBackground
          source={WelcomeImage}
          style={[containerStyle.container, {height : "100%" , width : "100%"}]}>
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
                paddingHorizontal: 10,
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
            <CustomButton title={"Get Started"}></CustomButton>
          </View>
        </ImageBackground>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
