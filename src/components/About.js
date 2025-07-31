import React from "react";
import User from "./User.js";
import UserClass from "./UserClass.js";
import UserContext from "../utils/UserContext.js";

const About=()=>{
    return(
        <div>
            <h1>About</h1>
            <div>
                Logged In User
                <UserContext.Consumer>
                    {({loggedInUser})=><h1>{loggedInUser}</h1>}
                </UserContext.Consumer> 
            </div>
            <h2>This is Saumil</h2>
            <User name={"Saumil"}/>
            <UserClass name={"Hshsh Class"} location={"Chd Class"}/>
        </div>
    )
}
export default About;

