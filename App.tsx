import React from "react";
import Login from "./src/screens/Login";
import { StatusBar } from "react-native";
import { themes } from "./src/global/themes";


export default function App() {

    return (
      <>
        <StatusBar
          backgroundColor={themes.colors.backgroundPrimary}
          translucent
        />
        <Login />
      </>
    );
  }
