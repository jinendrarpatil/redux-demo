import React, { Component } from "react";

class ViewData extends Component {
  render() {
    return (
      <div>
        <h1>Email:{this.props.email}</h1>
        <h1>Password:{this.props.password}</h1>
      </div>
    );
  }
}

export default ViewData;
