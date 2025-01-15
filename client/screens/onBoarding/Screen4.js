import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../../styles/Screen2Styles";

const Screen4 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/img/frame.png")} style={styles.image} />
      <Text style={styles.title}>Eat Food on Time</Text>
      <Text style={styles.description}>
        The timing of your meals can significantly impact your health and
        well-being.
      </Text>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("JunkFood")}>
          <Text style={styles.footerText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("HealthPreferences")}>
          <Text style={styles.footerText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen4;