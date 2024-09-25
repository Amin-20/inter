import React from "react";
import { Dimensions, Image, StyleSheet, View, Text } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("screen");

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.mainImage}
        contentFit="cover"
        source="../assets/images/Appbar-2.png"
      />
      <Text style={styles.text}>Приглашения</Text>
      <View
        style={{ width: "100%", height: "100%", backgroundColor: "#e4eaff" }}
      ></View>

      <View style={styles.routerBar}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: 100,
    marginBottom: 25,
  },
  mainImage: {
    width: "100%",
    height: "100%",
  },
  text: {
    color: "#4a6ada",
    backgroundColor: "rgb(228, 234, 255)",
    fontSize: 20,
    paddingVertical: 17,
    fontWeight: "600",
    paddingLeft: 20,
  },
  routerBar: {
    backgroundColor: "rgb(200, 234, 255)",
    height : 50,
    width:deviceWidth, 
  },
});

export default MainPage;
