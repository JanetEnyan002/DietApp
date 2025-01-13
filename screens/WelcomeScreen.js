import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../styles/WelcomeScreenStyles";
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

export default WelcomeScreen;
