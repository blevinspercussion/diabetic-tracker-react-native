import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import Header from "./components/Header";

export default function App() {
  const [activeHeading, setActiveHeading] = useState("bloodsugar");

  const handleScreens = (heading) => {
    setActiveHeading(heading);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Tracker</Text>
      <Header activeHeading={activeHeading} handleScreens={handleScreens} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 35,
  },
});
