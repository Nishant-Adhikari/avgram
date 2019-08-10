import React, { Component } from "react";
// import logo from "./logo.svg";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import "./App.css";
import Header from "./components/header";

class App extends Component {
  render() {
    return (
      <Container maxWidth="md">
      {/* <div className="App"> */}
        <Header/>
      {/* </div> */}
      </Container>
    );
  }
}

export default App;
