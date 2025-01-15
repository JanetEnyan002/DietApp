import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../../styles/Screen2Styles";

const Screen3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/img/frame.png")} style={styles.image} />
      <Text style={styles.title}>Stay Hydrated</Text>
      <Text style={styles.description}>
        Drinking water is essential for maintaining good health.
      </Text>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Breakfast")}>
          <Text style={styles.footerText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("OnTime")}>
          <Text style={styles.footerText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen3;