import React, { Component } from "react";
// import logo from "./logo.svg";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import "./App.css";
import Header from "./components/header";
import Card from "./components/card";

class App extends Component {
  render() {
    return (
      <Container maxWidth="lg">
      {/* <div className="App"> */}
        <Header/>
        <Card/>
      {/* </div> */}
      </Container>
    );
  }
}

export default App;
