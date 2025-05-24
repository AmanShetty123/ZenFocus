import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import LiveRoomItem from "../components/LiveRoomItem";
import Ionicons from "react-native-vector-icons/Ionicons";
const HomeScreen = () => {
  //dummy data for testing the flatlist component
  const rooms = [
    { roomName: "React Native Devs", members: "2/5" },
    { roomName: "UI Designers", members: "3/6" },
    { roomName: "Backend Engineers", members: "5/5" },
    { roomName: "AI Researchers", members: "1/4" },
    { roomName: "Game Dev Hub", members: "4/7" }
  ];

  return (
    <SafeAreaView style={styles.mainContainer} edges={["top"]}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>GOOD</Text>
        <Text style={styles.headerText}>MORNING</Text>
      </View>
      <View style={styles.middleContainer}>
        <View styles={styles.liveRoomHeader}>
          <Text style={styles.liveRoomHeaderText}>
            <Text
              style={{
                color: "red",
              }}
            >
              Live
            </Text>{" "}
            Rooms
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
          <Ionicons name="add-circle-outline" size={24} />
          <Pressable style={styles.createRoomButton}>
            <Text style={{fontSize: 20, fontWeight: 700}}>Create Room</Text>
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
  },
  headerTextContainer: {
    flex: 1,
    padding: wp("4%"),
  },
  headerText: {
    fontSize: 60,
    fontWeight: "bold",
  },
  middleContainer: {
    flex: 3.5,
    borderWidth: 4,
    margin: wp("2%"),
    borderRadius: 35,
    padding: wp("4%"),
  },
  createRoomContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
  },
  liveRoomHeader: {
    flex: 1,
  },
  liveRoomBody: {
    flex: 4,
  },
  liveRoomHeaderText: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: hp("1%"),
  },
  createRoomButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    height: hp("7%"),
    padding: wp("3%"),
    borderRadius: 30,
    marginRight: wp("3%"),
  },
  createRoomButton: {
    marginLeft: 5,
  },
});
