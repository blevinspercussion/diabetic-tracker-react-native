import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, ScrollView } from "react-native";
import BloodSugarCard from "./BloodSugarCard";

export default function (props, { handleBloodSugar }) {
  let data = props.data;
  let bloodSugarAverage;

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>Blood Sugar</Text>
      {data.map((day) => {
        return (
          <BloodSugarCard
            day={day.day}
            morning={day.morning}
            evening={day.evening}
            calculateAverageBloodSugar={props.calculateAverageBloodSugar}
            handleBloodSugar={props.handleBloodSugar}
          />
        );
      })}
      <TouchableOpacity onPress={props.calculateAverageBloodSugar}>
        <Text>Average: {props.averageBloodSugar}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    top: "10%",
    width: "100%",
  },
  content: {
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FFFDA2",
    minWidth: 400,
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
