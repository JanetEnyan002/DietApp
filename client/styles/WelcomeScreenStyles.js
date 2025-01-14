import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    color: "#000",
    marginBottom: 20,
  },
  iconContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#28a745",
    borderRadius: 50,
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#006400",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#006400",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
