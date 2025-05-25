import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import JoinedMember from "../components/JoinedMember";

const PomodoroScreen = ({ route, navigation }) => {
  const data = [
    { name: "Aditya" },
    { name: "Viraj" },
    { name: "Vedant" },
    { name: "Soham" },
  ];

  const { roomName, numberOfPomodoro, pomodoroLength, breakLength } = route.params;

  const [remainingTime, setRemainingTime] = useState(pomodoroLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const toggleTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setRemainingTime((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (timeInSec) => {
    const minutes = Math.floor(timeInSec / 60);
    const seconds = timeInSec % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.countdownContainer}>
        <Text style={styles.headerText}>{roomName}</Text>
        <Text style={styles.timerText}>{formatTime(remainingTime)}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Pressable style={styles.button} onPress={toggleTimer}>
          <Text style={styles.buttonText}>{isRunning ? "Pause" : "Start"}</Text>
        </Pressable>

        <Text style={styles.subHeading}>Joined Members</Text>

        <FlatList
          data={data}
          renderItem={JoinedMember}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.memberList}
        />

        <Pressable
          style={styles.deleteRoomButton}
          onPress={() => navigation.navigate("HomeTabs")}
        >
          <Text style={styles.deleteRoomButtonText}>Delete Room</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default PomodoroScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  countdownContainer: {
    flex: 2, // 2:3 ratio
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
  },
  infoContainer: {
    flex: 3, // 3 out of 5 total
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("5%"),
  },
  button: {
    width: wp("50%"),
    height: hp("6.5%"),
    borderWidth: 2,
    borderColor: "#008000",
    borderRadius: wp("10%"),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  buttonText: {
    fontSize: hp("2.5%"),
    color: "white",
    fontWeight: "600",
  },
  subHeading: {
    fontSize: hp("2.2%"),
    fontWeight: "600",
    textDecorationLine: "underline",
    marginTop: hp("2%"),
  },
  memberList: {
    alignItems: "center",
    gap: hp("1.5%"),
    paddingVertical: hp("2%"),
  },
  deleteRoomButton: {
    borderRadius: wp("10%"),
    width: wp("50%"),
    height: hp("6%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  deleteRoomButtonText: {
    color: "white",
    fontSize: hp("2.3%"),
    fontWeight: "600",
  },
  headerText: {
    fontSize: hp("3%"),
    fontWeight: "600",
    marginBottom: hp("1%"),
  },
  timerText: {
    fontSize: hp("6%"),
    fontWeight: "bold",
    color: "#333",
  },
});
