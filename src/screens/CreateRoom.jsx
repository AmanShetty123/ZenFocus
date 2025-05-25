import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateRoom = ({ navigation }) => {
  const [roomName, setRoomName] = useState("");
  const [numberOfMembers, setNumberOfMembers] = useState("");
  const [numberOfPomodoro, setNumberOfPomodoro] = useState("");
  const [pomodoroLength, setPomodoroLength] = useState("");
  const [breakLength, setBreakLength] = useState("");

  const { width, height } = useWindowDimensions();

  const onCreateRoom = () => {
    console.log(
      roomName,
      numberOfMembers,
      numberOfPomodoro,
      pomodoroLength,
      breakLength
    );
    navigation.navigate("pomodoroRoom", {
      roomName,
      numberOfPomodoro,
      pomodoroLength,
      breakLength,
    });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    keyboardAvoidingView: {
      flex: 1,
    },
    innerContainer: {
      flex: 1,
      paddingHorizontal: width * 0.05,
      justifyContent: "center",
    },
    roomDetailsContainer: {
      borderWidth: 2,
      borderRadius: 30,
      padding: width * 0.04,
      borderColor: "#ddd",
      backgroundColor: "#fff",
    },
    formContainer: {
      paddingHorizontal: width * 0.02,
    },
    eachInputContainer: {
      marginBottom: height * 0.018,
    },
    eachInputContainerText: {
      fontWeight: "600",
      fontSize: width * 0.04 > 16 ? 16 : width * 0.04,
      marginBottom: height * 0.008,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ddd",
      padding: height * 0.015,
      borderRadius: 15,
      width: "100%",
      minHeight: height * 0.055,
      fontSize: width * 0.035 > 14 ? 14 : width * 0.035,
      backgroundColor: "#fff",
    },
    buttonContainer: {
      alignItems: "center",
      paddingVertical: height * 0.025,
    },
    createRoomButton: {
      borderWidth: 2,
      borderColor: "green",
      width: width * 0.4 > 160 ? 160 : width * 0.4,
      height: height * 0.06,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30,
      backgroundColor: "green",
    },
    createRoomButtonText: {
      fontSize: width * 0.045 > 18 ? 18 : width * 0.045,
      color: "white",
      fontWeight: "600",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.innerContainer}>
            <View style={styles.roomDetailsContainer}>
              <View style={styles.formContainer}>
                <View style={styles.eachInputContainer}>
                  <Text style={styles.eachInputContainerText}>Room Name</Text>
                  <TextInput
                    placeholder="Please assign name to your room"
                    value={roomName}
                    onChangeText={setRoomName}
                    style={styles.input}
                  />
                </View>
                <View style={styles.eachInputContainer}>
                  <Text style={styles.eachInputContainerText}>
                    Number of Members
                  </Text>
                  <TextInput
                    placeholder="Up to 5 members are allowed"
                    inputMode="numeric"
                    value={numberOfMembers}
                    onChangeText={setNumberOfMembers}
                    style={styles.input}
                  />
                </View>
                <View style={styles.eachInputContainer}>
                  <Text style={styles.eachInputContainerText}>
                    Number of Pomodoros
                  </Text>
                  <TextInput
                    placeholder="How many pomodoros you can withstand"
                    inputMode="numeric"
                    value={numberOfPomodoro}
                    onChangeText={setNumberOfPomodoro}
                    style={styles.input}
                  />
                </View>
                <View style={styles.eachInputContainer}>
                  <Text style={styles.eachInputContainerText}>
                    Pomodoro Length
                  </Text>
                  <TextInput
                    placeholder="Enter length of each Pomodoro (in mins)"
                    inputMode="numeric"
                    value={pomodoroLength}
                    onChangeText={setPomodoroLength}
                    style={styles.input}
                  />
                </View>
                <View style={styles.eachInputContainer}>
                  <Text style={styles.eachInputContainerText}>
                    Break Length
                  </Text>
                  <TextInput
                    placeholder="Enter your break (rest) time"
                    inputMode="numeric"
                    value={breakLength}
                    onChangeText={setBreakLength}
                    style={styles.input}
                  />
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <Pressable
                  style={styles.createRoomButton}
                  onPress={onCreateRoom}
                >
                  <Text style={styles.createRoomButtonText}>Create Room</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CreateRoom;
