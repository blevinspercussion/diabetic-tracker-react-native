import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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
  const [averageBloodSugar, setAverageBloodSugar] = useState(0);

  const handleScreens = (heading) => {
    setActiveHeading(heading);
  };

  const calculateAverageBloodSugar = () => {
    let bloodSugarArray = [];
    let sumOfArray = 0;
    let average = 0;

    for (let i = 0; i < bloodSugar.length; i++) {
      if (bloodSugar[i].morning > 0) {
        bloodSugarArray.push(bloodSugar[i].morning);
      }
      if (bloodSugar[i].evening > 0) {
        bloodSugarArray.push(bloodSugar[i].evening);
      }
    }
    for (let i = 0; i < bloodSugarArray.length; i++) {
      sumOfArray += bloodSugarArray[i];
    }
    average = sumOfArray / bloodSugarArray.length;
    setAverageBloodSugar(average);
  };

  const handleBloodSugar = (day, timeOfDay, newValue) => {
    const currentDayIndex = bloodSugar.findIndex((bs) => bs.day === day);
    const updatedDay = {
      ...bloodSugar[currentDayIndex],
      [timeOfDay]: newValue,
    };
    const newBloodSugar = [
      ...bloodSugar.slice(0, currentDayIndex),
      updatedDay,
      ...bloodSugar.slice(currentDayIndex + 1),
    ];
    setBloodSugar(newBloodSugar);
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
        <BloodSugarScreen
          data={bloodSugar}
          averageBloodSugar={averageBloodSugar}
          calculateAverageBloodSugar={calculateAverageBloodSugar}
          handleBloodSugar={handleBloodSugar}
        />
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
