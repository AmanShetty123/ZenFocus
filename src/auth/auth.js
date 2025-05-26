import { ID } from "react-native-appwrite";
import { account } from "../lib/appWrite";
import { setLoggedInUser } from "../slices/authSlice";

export const login = async (userName, password, navigation, dispatch) => {
  try {
    userName = userName.trim()
    const email = userName + "@gmail.com";
    // try {
    //   await account.deleteSession("current");
    // } catch (err) {
    //   // If there's no session, it's okay — skip
    //   console.log("No active session to delete");
    // }
    await account.createEmailPasswordSession(email, password);
    const userDetails = await account.get();
    dispatch(setLoggedInUser(userDetails));
    navigation.navigate("HomeTabs");
  } catch (error) {
    console.log(error);
  }
};

export const register = async (userName, password, navigation, dispatch) => {
  try {
    userName = userName.trim()
    const email = userName + "@gmail.com";
    await account.create(ID.unique(), email, password, userName);
    await login(userName, password, navigation, dispatch);
  } catch (error) {
    console.log(error);
  }
};


export const initAuth = async (dispatch, navigation) => {
  try {
    const user = await account.get(); // checks current session and gets user
    dispatch(setLoggedInUser(user));
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeTabs' }],
    });
  } catch (err) {
    console.log('No active session:', err.message);
    // optionally navigate to Login
    navigation.reset({
      index: 0,
      routes: [{ name: 'login' }],
    });
  }
};