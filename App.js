import React from "react";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

import Home from "./src";

export default function App() {
  return (
    <>
      {Platform.OS === "ios" ? (
        <StatusBar style="Dark" />
      ) : (
        <StatusBar style="light" backgroundColor="#000" translucent={false} />
      )}
      <Home />
    </>
  );
}
