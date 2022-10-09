import "./App.css";
import "./AscyStateComp";
import React from "react";
import AscyStateComp from "./AscyStateComp";
import Willunmount from "./WillUnmount";
import Clock from "./Clock";
import Form from "./Form";
import Comunication from "./Comunication";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }
  removeComp() {
    this.setState({
      show: !this.state.show,
    });
  }
  showText() {
    this.setState({
      showText: true,
    });
  }
  render() {
    return (
      <div className="App">
        <AscyStateComp />
        {this.state.show ? (
          <div>
            <Willunmount />
          </div>
        ) : null}
        <div>
          {" "}
          <button onClick={this.removeComp.bind(this)}>Remove Comp</button>
        </div>

        <div>
          {" "}
          <Clock />{" "}
        </div>
        <div>
          {" "}
          <Form />
        </div>
        <div>
          <Comunication showText={this.showText.bind(this)} />
          {this.state.showText ? <div> Hello I am from parent Text</div> : null}
        </div>
      </div>
    );
  }
}

export default App;
