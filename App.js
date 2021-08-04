import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListItem from "./components/ListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text styles={styles.largeTitle}>Markets</Text>
      </View>
      <View style={styles.divider} />
      <ListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleWrapper: {
    marginTop: 80,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#A9ABB1",
    marginHorizontal: 16,
    marginTop: 16,
  },
});
