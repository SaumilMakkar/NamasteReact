import React from "react";
import User from "./User.js";
import UserClass from "./UserClass.js";

const About=()=>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is Saumil</h2>
            <User name={"Saumil"}/>
            <UserClass name={"Hshsh Class"} location={"Chd Class"}/>
        </div>
    )
}
export default About;

