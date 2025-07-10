import React from 'react';
import ReactDOM from 'react-dom/client';

//React Element
const JsxHeading=()=>{
  return(<h1 className="head" tabIndex="5">
{elem}
  Namaste React using JSX

</h1>)
}
const elem=<span>Hello</span>

//React Functional Component
//Normal JavaScript function
const number=5

const HeadingComponent=()=>{
return(
  <div id="container">
   {<JsxHeading/>}
      
  <h1 className="header">Namaste React Functional Component</h1>
  </div>
)

}
const fn=()=>true



//JSX-HTML like syntax

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>) //React Functional Component  

  
   
