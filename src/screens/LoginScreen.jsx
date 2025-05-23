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
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
            WELCOME
          </Text>
          <Text
            style={{
              fontSize: 56,
              fontWeight: "bold",
            }}
          >
            BACK
          </Text>
        </View>
        <View style={styles.loginContainer}>
          <Image
            source={require("../../assets/login.jpg")}
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
          <Pressable style={styles.loginButton}>
            <Text
              style={{
                color: "white",
              }}
            >
              Login
            </Text>
          </Pressable>
          <View style={styles.toSignup}>
            <Text style={{
              marginRight: 10,
              fontSize: 18
            }}>Dont have an account?</Text>
            <Pressable onPress={() => navigation.navigate('signup')}>
              <Text style={{
              fontWeight: 'bold',
              fontSize: 18
            }}>Signup</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
  loginButton: {
    width: wp("85%"),
    height: hp("6%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 20,
  },
  loginContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: wp("5%"),
  },
  toSignup: {
    flexDirection: "row",
    padding: 10,
    justifyContent: 'center'
  },
});
