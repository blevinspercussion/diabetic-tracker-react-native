import { StyleSheet, TextInput } from "react-native";
import { View, Text } from "react-native";

export default function (props) {
  return (
    <View style={styles.card}>
      <Text style={styles.day}>{props.day}</Text>
      <View style={styles.subContainer}>
        <Text>Morning: </Text>
        <TextInput style={styles.input} defaultValue={0} />
      </View>
      <View style={styles.subContainer}>
        <Text>Evening: </Text>
        <TextInput style={styles.input} defaultValue={0} />
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
