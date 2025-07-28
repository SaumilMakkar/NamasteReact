import React from "react"
import User from "./User"
class UserClass extends React.Component{
constructor(props){
    super(props);
this.state={
    userInfo:{
        
    },
};

    
}
async componentDidMount(){

    const data=await fetch(' https://api.github.com/users/SaumilMakkar');
    const json=await data.json();
    console.log(json);
    this.setState(
        {
            userInfo:json,
        }
    );



}

render(){
    const {name}=this.state.userInfo;
    return(
    <div className='user-card'>
        <h2>name:{name}</h2>
       
            
        </div> 
    )
}



}
export default UserClass;