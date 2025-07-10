import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import RestaurantCard from "./components/RestaurantCard.js";



const styleCard={
    backgroundColor:"#f0f0f0"
}
const AppLayout=()=>{
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
            
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)



  