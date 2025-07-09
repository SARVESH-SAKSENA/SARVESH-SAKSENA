import { useEffect } from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {

    return (
        <div>
            <h1>About Us</h1>
            <h3>This is a react app</h3>
            <User name = "Sarvesh"/>
            <UserClass name = "Sarvesh" />
        </div>
    )
}

export default About;