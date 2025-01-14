import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../../styles/Screen4Styles";

const Screen4 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Image at the top */}
      <Image source={require("../../assets/img/frame.png")} style={styles.image} />

      {/* Title and description beneath the image */}
      <Text style={styles.title}>Eat Food on Time</Text>
      <Text style={styles.description}>
        The timing of your meals can significantly impact your health and
        well-being.
      </Text>

      {/* Footer navigation buttons */}
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