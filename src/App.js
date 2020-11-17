import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyWelcome from "./components/MyWelcome";
import LatestRelease from "./components/LatestRelease";
import MyFooter from "./components/MyFooter";

class App extends React.Component {
  render() {
    return (
      <>
        <MyNav title="Glitzsint" />
        <MyWelcome />
        <LatestRelease />
        <MyFooter />
      </>
    );
  }
}

export default App;
