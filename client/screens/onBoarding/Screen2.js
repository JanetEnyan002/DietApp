import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../../styles/Screen2Styles";

const Screen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/img/frame.png")} style={styles.image} />
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

export default Screen2;
