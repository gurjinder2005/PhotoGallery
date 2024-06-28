import * as React from "react";

import { ActivityIndicator, MD2Colors } from "react-native-paper";

import { Text } from "react-native";
import { View } from "react-native";
import { containerStyle } from "../styles";
import { COLORS } from '../constants/Colors';

const Loader = () => {
  return (
    <>
      <View style={containerStyle.container}>
        <ActivityIndicator
          size={"large"}
          animating={true}
          theme={{ colors: { primary: COLORS.INDICATOR_COLOR } }}
        />
        <Text
          style={{
            color: COLORS.LABEL_COLOR,
            marginTop: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}>
          Loading...
        </Text>
      </View>
    </>
  );
};

export default Loader;
