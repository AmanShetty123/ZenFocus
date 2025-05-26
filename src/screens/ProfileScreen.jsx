import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { account } from "../lib/appWrite";
import { useDispatch } from "react-redux";
import { logoutUser } from "../slices/authSlice";
const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      dispatch(logoutUser());
      navigation.replace("login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Image
            source={require("../../assets/profile.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.headerText}>SILLY CODER</Text>
          <Text style={styles.subHeaderText}>@sillycoder7</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonContainerText}>Pomodoros this month</Text>
            <Text style={styles.buttonContainerText}>12</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonContainerText}>Total focus time</Text>
            <Text style={styles.buttonContainerText}>6 hrs</Text>
          </View>
          <Pressable style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>Logout</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    paddingBottom: hp("5%"),
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: hp("2%"),
    marginBottom: hp("2%"),
  },
  profileImage: {
    width: wp("60%"),
    height: wp("60%"),
    borderRadius: wp("30%"),
    marginBottom: hp("2%"),
  },
  headerText: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subHeaderText: {
    fontSize: 20,
    color: "gray",
  },
  infoContainer: {
    width: wp("90%"),
    alignItems: "center",
  },
  buttonContainer: {
    borderWidth: 2,
    borderColor: "#ccc",
    width: "100%",
    height: hp("8%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: hp("1%"),
  },
  buttonContainerText: {
    fontSize: 18,
    fontWeight: "600",
  },
  logoutButton: {
    width: "100%",
    height: hp("8%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: hp("1%"),
    backgroundColor: "red",
  },
  logoutButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
