import React from "react";

class AscyStateComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      something: "",
      count: 0,
      person: {
        name: "Ahmad",
        age: 20,
      },
    };
  }
  //   someprocess() {
  //     this.setState({
  //       count: 4,
  //     });
  //   }

  async changeState() {
    this.setState({
      person: {
        // هاي الطريقة مهمة عشان اكتب فوق بس الاسم مش الاوبجكت كامل
        ...this.state.person,
        name: "khalid",
      },
    });

    /*
    await this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        // console.log(this.state.something);
      }
    );
    */

    // this.someprocess();
    // this.setState((state) => {
    //   return { count: state.count + 1 };
    // });
    // console.log(this.state.something);
  }
  incState() {
    this.setState({
      count: {
        count: this.state.count + 1,
      },
    });
  }
  decState() {
    this.setState({
      count: {
        count: this.state.count - 1,
      },
    });
  }

  render() {
    console.log("I am a render function");
    return (
      // Fregment
      <>
        <div>
          <button onClick={this.changeState.bind(this)}> Call setState</button>
        </div>
        <div> {this.state.person.name}</div>
        <div> {this.state.person.age}</div>
        <div>
          {" "}
          <button> Inc</button>
        </div>
        <div> {this.state.count}</div>
        <div>
          {" "}
          <button> Dec</button>
        </div>
      </>
    );
  }
}
export default AscyStateComp;
