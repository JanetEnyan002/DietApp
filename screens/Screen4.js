import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Screen4 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Image at the top */}
      <Image source={require("../assets/img/frame.png")} style={styles.image} />

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
        <TouchableOpacity onPress={() => alert("More screens to come!")}>
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
    padding: 20,
  },
  image: {
    width: "100%",
    height: 394,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 40,
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

export default Screen4;
