import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../../styles/Screen3Styles";

const Screen3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/frame2.png")}
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

export default Screen3;
