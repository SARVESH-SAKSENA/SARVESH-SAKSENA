import { useState } from "react";

const User = (props) => {

    const [count] = useState(0);
    return (
      <div>
        <h1>This is the functional component of User</h1>
        <h2>the same component is also structured using class based in userClass file</h2>
        <h3>Count = {count}</h3>
        <h4>Prop = {props.name}</h4>
      </div>
    );
}

export default User;