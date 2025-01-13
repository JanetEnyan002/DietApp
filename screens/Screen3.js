import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Screen3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/frame2.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Avoid Junk Food</Text>
      <Text style={styles.description}>
        Fast foods are high in calories and low in nutrients, leading to weight
        gain.
      </Text>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.navigate("Breakfast")}>
          <Text style={styles.link}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("OnTime")}>
          <Text style={styles.link}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: { width: "100%", height: 394, marginBottom: 20 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
    marginTop: 50,
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 30,
    width: 300,
    alignSelf: "center",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  link: { fontSize: 18, color: "green" },
});

export default Screen3;
