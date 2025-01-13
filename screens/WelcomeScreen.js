import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import logo from "../assets/img/logo.png"; // Correct local image import

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <View style={styles.iconContainer}>
        <Image
          source={logo} // Use the imported image directly
          style={styles.icon}
        />
      </View>
      <Text style={styles.subtitle}>DietSync</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Breakfast")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: { fontSize: 24, color: "#000", marginBottom: 20 },
  iconContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#28a745",
    borderRadius: 50,
    marginBottom: 20,
  },
  icon: { width: 50, height: 50 }, // Style for the logo image
  subtitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#28a745",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#28a745",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default WelcomeScreen;
