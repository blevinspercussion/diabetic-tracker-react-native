import { StyleSheet } from "react-native-web";
import { SectionList, View, TouchableOpacity, Text } from "react-native";
import { useState } from "react";

export default function Header(props, { handleScreens }) {
  const [data, setData] = useState({
    "Blood Sugar": {
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

  const handlePress = (heading) => {
    props.handleScreens(heading);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handlePress("bloodsugar")}
        style={[
          props.activeHeading === "bloodsugar"
            ? styles.headingActive
            : styles.headingInactive,
        ]}
      >
        <Text>Blood Sugar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("exercise")}
        style={[
          props.activeHeading === "exercise"
            ? styles.headingActive
            : styles.headingInactive,
        ]}
      >
        <Text>Exercise</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("food")}
        style={[
          props.activeHeading === "food"
            ? styles.headingActive
            : styles.headingInactive,
        ]}
      >
        <Text>Food</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("water")}
        style={[
          props.activeHeading === "water"
            ? styles.headingActive
            : styles.headingInactive,
        ]}
      >
        <Text>Water</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headingActive: {
    backgroundColor: "#FF6363",
    marginHorizontal: 15,
    padding: 3,
  },
  headingInactive: {
    backgroundColor: "",
    marginHorizontal: 15,
    padding: 3,
  },
});
