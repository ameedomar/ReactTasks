import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      secName: "",
      formatedName: "",
    };
  }
  onfirstNameChanged(e) {
    let value = e.target.value;
    this.setState({
      firstName: value,
    });
  }
  onSecNameChanged(e) {
    let value = e.target.value;
    this.setState({
      secName: value,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    const formatResult = `${this.state.firstName} ${this.state.secName}`;

    this.setState({ formatedName: formatResult });
  }

  render() {
    return (
      <div className="">
        <div>
          <form onSubmit={this.onFormSubmit.bind(this)}>
            <label> first Name </label>
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.onfirstNameChanged.bind(this)}
            />

            <label> Second Name </label>
            <input
              type="text"
              value={this.state.secName}
              onChange={this.onSecNameChanged.bind(this)}
            />
            <button onSubmit={this.onFormSubmit.bind(this)}> submit</button>
          </form>
        </div>
        <p> {this.state.formatedName}</p>
      </div>
    );
  }
}
export default Form;
