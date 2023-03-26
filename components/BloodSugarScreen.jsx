import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import BloodSugarCard from "./BloodSugarCard";

export default function (props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blood Sugar</Text>
      {props.data.map((e) => {
        return <BloodSugarCard day={props.data.bloodsugar} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: "10%",
  },
  title: {
    fontSize: 35,
    textAlign: "center",
  },
});
