import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Screen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/img/frame.png")} style={styles.image} />
      <Text style={styles.title}>Never skip breakfast</Text>
      <Text style={styles.description}>
        Kick start your metabolism and help burn calories throughout the day.
      </Text>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
          <Text style={styles.footerText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("JunkFood")}>
          <Text style={styles.footerText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: { width: "100%", height: 394 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 100,
    alignSelf: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    width: 298,
    alignSelf: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 30,
  },
  footerText: {
    fontSize: 16,
    color: "#28a745",
    fontWeight: "bold",
    marginTop: 40,
  },
});

export default Screen2;
