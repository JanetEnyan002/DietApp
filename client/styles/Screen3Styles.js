import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 394,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "center",
    marginTop: 50,
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 30,
    width: 300,
    alignSelf: "center",
  },
  navigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  link: {
    fontSize: 18,
    color: "green",
  },
});

export default styles;