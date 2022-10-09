import React from "react";

class Willunmount extends React.Component {
  constructor(props) {
    super(props);
    console.log("the component is mounting");
  }

  componentWillUnmount() {
    console.log("Iam in Will Unmount function");
  }
  render() {
    return <div> this Component is Expiremental Component </div>;
  }
}

export default Willunmount;
