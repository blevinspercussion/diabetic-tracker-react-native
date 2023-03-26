import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import BloodSugarCard from "./BloodSugarCard";

export default function (props) {
  let data = props.data;
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Blood Sugar</Text>
      {data.map((day) => {
        return (
          <BloodSugarCard
            day={day.day}
            morning={day.morning}
            evening={day.evening}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: "10%",
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
    textAlign: "center",
  },
});
