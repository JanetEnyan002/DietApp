import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 150, // Scaled down width
    height: 150, // Scaled down height
    resizeMode: "contain",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#28a745",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;