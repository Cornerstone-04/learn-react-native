import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("@/assets/images/iced-coffee.png")} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Coffee Shop</Text>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  },
  image:{
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
