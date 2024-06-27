import { Button, StyleSheet, Text, TchableOpacity, View } from "react-native";

import React from "react";
import { BackgroundImage } from "react-native-elements/dist/config";
 
const CustomButton =({title  }) => {
return(
    <View>
     <TchableOpacity
     style={{
        width:300,
        height:50,
        Backgroundcolor:"pink",
        borderRadius:30,
   }}>
    <Text style={{ textAlign:"center",fontWeight:"bold"}}>{title}</Text>
   </TchableOpacity>
     </View>
 );
};
  export default CustomButton;