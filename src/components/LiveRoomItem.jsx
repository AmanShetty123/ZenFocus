import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const LiveRoomItem = ({ item }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.roomName}>{item.roomName}</Text>
        <Text style={styles.members}>Members: {item.members}</Text>
      </View>
      <Pressable style={styles.joinButton}>
        <Text style={styles.joinButtonText}>Join</Text>
      </Pressable>
    </View>
  );
};

export default LiveRoomItem;

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 2,
    borderColor: "black",
    padding: wp("3%"),
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: hp("1%"),
    width: wp("85%"),
    alignSelf: "center",
    backgroundColor: "white",
  },
  textContainer: {
    flexDirection: "column",
  },
  roomName: {
    fontSize: 16,
    fontWeight: "800",
    fontFamily: "sans-serif",
  },
  members: {
    fontSize: 13,
    color: "#555",
    marginTop: 2,
    fontStyle: "italic",
  },
  joinButton: {
    borderRadius: 6,
    paddingVertical: hp("0.8%"),
    paddingHorizontal: wp("4%"),
    backgroundColor: "#FF3B30",
  },
  joinButtonText: {
    fontWeight: "bold",
    fontSize: 15,
    color: 'white'
  },
});
