import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Modal, SafeAreaView } from "react-native";
import { useState } from "react";

import Header from "./components/Header";
import BloodSugarScreen from "./components/BloodSugarScreen";

export default function App() {
  const [activeHeading, setActiveHeading] = useState("");
  const [data, setData] = useState({
    bloodsugar: {
      Monday: {
        Morning: 0,
        Evening: 0,
      },
      Tuesday: {
        Morning: 0,
        Evening: 0,
      },
      Wednesday: {
        Morning: 0,
        Evening: 0,
      },
      Thursday: {
        Morning: 0,
        Evening: 0,
      },
      Friday: {
        Morning: 0,
        Evening: 0,
      },
      Saturday: {
        Morning: 0,
        Evening: 0,
      },
      Sunday: {
        Morning: 0,
        Evening: 0,
      },
    },
    Exercise: {
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
      Sunday: "",
    },
    Food: {
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
      Sunday: "",
    },
    Water: {
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      Thursday: "",
      Friday: "",
      Saturday: "",
      Sunday: "",
    },
  });

  const handleScreens = (heading) => {
    setActiveHeading(heading);
    console.log(activeHeading);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health Tracker</Text>
      <Header activeHeading={activeHeading} handleScreens={handleScreens} />
      <View style={styles.content}>
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
      <View style={styles.content}>
        {activeHeading === "bloodsugar" && (
          <View>
            <Text style={styles.title}>Blood Sugar</Text>
            {Object.entries(data.bloodsugar).map((item) => {
              {
                console.log(item);
              }
              <Text>{item}</Text>;
            })}
          </View>
        )}
      </View>
      <View style={styles.content}>
        {activeHeading === "exercise" && (
          <Text style={styles.title}>Exercise</Text>
        )}
      </View>
      <View style={styles.content}>
        {activeHeading === "food" && <Text style={styles.title}>Food</Text>}
      </View>
      <View style={styles.content}>
        {activeHeading === "water" && <Text style={styles.title}>Water</Text>}
      </View>
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
