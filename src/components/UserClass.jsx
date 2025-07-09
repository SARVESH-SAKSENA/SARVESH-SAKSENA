import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = {
      count: 0,
    };
  }
  
  render() {
    console.log("Render");
    return (
      <div>
        <h1>This is a class based component of User</h1>
        <h2>There is also a functional component of same in User file</h2>
        <h3>count = {this.state.count}</h3>
        <h4>prop = {this.props.name}</h4>
      </div>
    );
  }
}

export default UserClass;