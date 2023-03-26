import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Modal, SafeAreaView } from "react-native";
import { useState } from "react";

import Header from "./components/Header";
import BloodSugarScreen from "./components/BloodSugarScreen";

export default function App() {
  const [activeHeading, setActiveHeading] = useState("");
  const [bloodSugar, setBloodSugar] = useState([
    {
      day: "Monday",
      morning: 0,
      evening: 0,
    },
    {
      day: "Tuesday",
      morning: 0,
      evening: 0,
    },
    {
      day: "Wednesday",
      morning: 0,
      evening: 0,
    },
    {
      day: "Thursday",
      morning: 0,
      evening: 0,
    },
    {
      day: "Friday",
      morning: 0,
      evening: 0,
    },
    {
      day: "Saturday",
      morning: 0,
      evening: 0,
    },
    {
      day: "Sunday",
      morning: 0,
      evening: 0,
    },
  ]);

  const handleScreens = (heading) => {
    setActiveHeading(heading);
    console.log(activeHeading);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Tracker</Text>
      <Header activeHeading={activeHeading} handleScreens={handleScreens} />
      <View>
        {activeHeading === "" && (
          <View style={styles.content}>
            <Text style={styles.title}>Welcome!</Text>
            <Text>
              This app will help you track various health related statistics in
              order to better manage medical conditions such as diabetes.
            </Text>
          </View>
        )}
      </View>
      {activeHeading === "bloodsugar" && (
        <View style={styles.content}>
          <Text style={styles.title}>Blood Sugar</Text>
          {bloodSugar.map((day) => {
            return (
              <Text>
                {day.day} -- {day.morning} -- {day.evening}
              </Text>
            );
          })}
        </View>
      )}
      {activeHeading === "exercise" && (
        <View style={styles.content}>
          <Text style={styles.title}>Exercise</Text>
        </View>
      )}
      {activeHeading === "food" && (
        <View style={styles.content}>
          <Text style={styles.title}>Food</Text>
        </View>
      )}
      {activeHeading === "water" && (
        <View style={styles.content}>
          <Text style={styles.title}>Food</Text>
        </View>
      )}
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
  content: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FFFDA2",
    width: "100%",
    minHeight: "100%",
    borderTopWidth: 1,
    borderColor: "black",
    padding: 5,
  },
  title: {
    fontSize: 35,
  },
});
