import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SubTitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
  },
});
