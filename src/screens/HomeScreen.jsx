import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LiveRoomItem from "../components/LiveRoomItem";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  //dummy data for testing the flatlist component
  const rooms = [
    { roomName: "React Native Devs", members: "2/5" },
    { roomName: "UI Designers", members: "3/6" },
    { roomName: "Backend Engineers", members: "5/5" },
    { roomName: "AI Researchers", members: "1/4" },
    { roomName: "Game Dev Hub", members: "4/7" },
  ];

  return (
    <SafeAreaView style={styles.mainContainer} edges={["top"]}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>GOOD</Text>
        <Text style={styles.headerText}>MORNING</Text>
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.liveRoomHeader}>
          <Text style={styles.liveRoomHeaderText}>
            <Text style={styles.liveText}>Live</Text> Rooms
          </Text>
        </View>
        <View style={styles.liveRoomBody}>
          <FlatList
            data={rooms}
            renderItem={LiveRoomItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <View style={styles.createRoomContainer}>
        <View style={styles.createRoomButtonContainer}>
          <Ionicons
            name="add-circle-outline"
            size={Math.min(width * 0.06, 28)}
            color="#333"
          />
          <Pressable
            style={styles.createRoomButton}
            onPress={() => navigation.navigate("createRoom")}
          >
            <Text style={styles.createRoomButtonText}>Create Room</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F4F4F6",
  },
  headerTextContainer: {
    flex: 1,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.02,
    justifyContent: "center",
  },
  headerText: {
    fontSize: Math.min(width * 0.13, height * 0.08, 65),
    fontWeight: "bold",
    lineHeight: Math.min(width * 0.14, height * 0.085, 70),
  },
  middleContainer: {
    flex: 3.5,
    borderWidth: Math.max(2, width * 0.008),
    marginHorizontal: width * 0.02,
    marginVertical: height * 0.01,
    borderRadius: Math.min(width * 0.08, 35),
    padding: width * 0.04,
    borderColor: "#ddd",
  },
  createRoomContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.01,
    minHeight: height * 0.08,
  },
  liveRoomHeader: {
    liveRoomHeader: {
      justifyContent: "center",
      marginBottom: height * 0.01,
    },
  },
  liveRoomBody: {
    flex: 4.9,
  },
  liveRoomHeaderText: {
    fontSize: Math.min(width * 0.065, height * 0.035, 30),
    fontWeight: "600",
    marginBottom: height * 0.01,
  },
  liveText: {
    color: "red",
  },
  createRoomButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: Math.max(1, width * 0.004),
    height: Math.max(height * 0.06, 50),
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.01,
    borderRadius: Math.min(width * 0.08, 30),
    marginRight: width * 0.03,
    borderColor: "#333",
    backgroundColor: "#fff",
    // Add shadow for better visual appeal
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  createRoomButton: {
    marginLeft: width * 0.02,
  },
  createRoomButtonText: {
    fontSize: Math.min(width * 0.045, height * 0.025, 20),
    fontWeight: "700",
    color: "#333",
  },
});
