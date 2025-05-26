import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { account } from "../lib/appWrite";
import { ID } from "react-native-appwrite";
import { register } from "../auth/auth";
import { useDispatch } from "react-redux";
const keyboardVerticalOffset = Platform.OS === "ios" ? "40" : 0;

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch()
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar style="auto" />
        <View style={styles.headerTextContainer}>
          <Text
            style={{
              fontSize: 56,
              fontWeight: "bold",
            }}
          >
            FIRST TIME?
          </Text>
          <Text
            style={{
              fontSize: 40,
            }}
          >
            Create An Account
          </Text>
        </View>
        <View style={styles.signupContainer}>
          <Image
            source={require("../../assets/signup.jpg")}
            style={styles.appLogo}
          />
          <TextInput
            placeholder="Enter your username"
            onChangeText={(text) => setUsername(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Enter your password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={styles.input}
          />
          <TextInput
            placeholder="Enter your password"
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry
            style={styles.input}
          />
          <Pressable
            style={styles.signupButton}
            onPress={() => register(username, password, navigation, dispatch)}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              Signup
            </Text>
          </Pressable>
          <View style={styles.toLogin}>
            <Text
              style={{
                marginRight: 10,
                fontSize: 18,
              }}
            >
              Already have an account?
            </Text>
            <Pressable onPress={() => navigation.navigate("login")}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  appLogo: {
    width: wp("50%"),
    height: hp("25%"),
    marginBottom: wp("5%"),
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 30 / 2,
    width: wp("85%"),
    marginBottom: wp("5%"),
    height: hp("6%"),
  },
  signupButton: {
    width: wp("85%"),
    height: hp("6%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 20,
  },
  signupContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: wp("5%"),
  },
  toLogin: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
  },
});
