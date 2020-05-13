import React from "react";
import {plants} from "./data";
import "./App.css";
import NavBar from "./components/NavBar";
import UserInfo from "./components/User/UserInfo";
import PlantContainer from "./components/Plant/PlantContainer";
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    plants: [],
  };
  componentDidMount() {
    this.setState({
      plants: plants
    })
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <UserInfo />
        <PlantContainer />
      </div>
    );
  }
}

export default App;
