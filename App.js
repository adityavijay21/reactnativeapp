import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./App/Screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";

export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_c29jaWFsLXRlYWwtNTguY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <View styles={styles.container}>
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
