import React from "react";
import { StyleSheet, Text, View } from "react-native";

const List = ({ data }) => {
  return data.map((datapoint) => (
    <View key={datapoint} style={styles.listItem}>
      <Text style={styles.textItem}>{datapoint}</Text>
    </View>
  ));
};

export default List;
const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "#e2b497",
  },
  textItem: {
    color: "#351401",
    textAlign: "center",
  },
});
