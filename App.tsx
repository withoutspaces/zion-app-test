import React from "react";
import Routes from "./src/routes";

import { StatusBar } from "react-native";
import { themes } from "./src/global/themes";


export default function App() {

    return (
      <>
        <StatusBar
          backgroundColor={themes.colors.backgroundPrimary}
          translucent
        />
        <Routes />
      </>
    );
  }
