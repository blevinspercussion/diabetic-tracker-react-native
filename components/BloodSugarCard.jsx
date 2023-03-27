import { StyleSheet, TextInput } from "react-native";
import { View, Text } from "react-native";

export default function (props, { handleBloodSugar }) {
  const handleChange = (timeOfDay, newValue) => {
    // let numValue = Number(newValue);
    let numValue = parseInt(newValue);
    props.handleBloodSugar(props.day, timeOfDay, numValue);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.day}>{props.day}</Text>
      <View style={styles.subContainer}>
        <Text>Morning: </Text>
        <TextInput
          style={styles.input}
          defaultValue={props.evening === null ? 0 : parseInt(props.morning)}
          keyboardType="numeric"
          onChangeText={(newText) => {
            handleChange("morning", newText);
          }}
        />
      </View>
      <View style={styles.subContainer}>
        <Text>Evening: </Text>
        <TextInput
          style={styles.input}
          defaultValue={props.evening === null ? 0 : props.evening}
          keyboardType="numeric"
          onChangeText={(newText) => handleChange("evening", newText)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#BAFFB4",
    marginBottom: 15,
    minWidth: "50%",
    padding: 10,
    borderRadius: 15,
  },
  content: {
    textAlign: "center",
  },
  day: {
    fontSize: 25,
    textAlign: "left",
  },
  input: {
    borderWidth: 1,
    maxWidth: 50,
    padding: 5,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },
});
