import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "react-native-reanimated";

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>
        Favorites Screen right now not working in some times i fix it !!1{" "}
      </Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    fontWeight: "bold",
    fontSize: 34,
    textAlign: "center",
    color: "white",
  },
});
