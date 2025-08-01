import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
// import About from './components/About.js';
import Contact from './components/Contact.js';
import Error from './components/Error.js'
import RestaurantMenu from './components/RestaurantMenu.js';
// import Grocery from './components/Grocery.js';
import Header from './components/Header.js';
import Body from './components/Body.js';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import { Outlet } from "react-router-dom";
import UserContext from './utils/UserContext.js';

/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

//  const styleCard = {
//   backgroundColor: '#f0f0f0',
// };

// * Props :

// * prop -> is Just a JS Object

// * Note: When you have to dainamically pass in a data to a component, you pass in prop

// const RestaurantCard = (props) => {
// console.log(props);

// * Note We can also destructure props on the fly by wrapping them in between {}, this is like...

// * const { resName, cuisine } = props;

// const RestaurantCard = ({ resName, cuisine }) => {
//   console.log({ resName, cuisine });

// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)

// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

// * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer

/* Episode 05 Let's get Hookd ------------------------------------------------------------------------------------------------------ 
 * There are 2 type of Export/Import
 *   1) Defalut Export/Import
 *        export default Component;
 *        import Component from 'path';

 *   2) Name Export/Import
 *        export const Component;
 *        import { Component } from 'path'; 
 
*/

const currYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Vasu</strong>
      </p>
    </footer>
  );
};

const Grocery=lazy(()=>import(
  "./components/Grocery.js"
))
const About=lazy(()=>import(
  "./components/About.js"
))


const AppLayout = () => {

//authentication


const[userInfo,setuserInfo]=useState();



useEffect(()=>{
  //Make an Api call and send username and password
  const data={
    name:"Saumil Makkar"
  };
  setuserInfo(data.name);
})

  return (
    <>
      <UserContext.Provider value={{loggedInUser:userInfo,setUserName}}>
        
      </UserContext.Provider>
      <div className="app">
        <Header />
        <Outlet></Outlet>
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
{
path:"/",
element:<Body></Body>

},{
        path: "/about", // this is for "/about"
        element: <Suspense fallback={<h1>Loading..</h1>}><About/></Suspense>
      },
      {
        path:"/contact",
        element:<Contact/>
      },{
        path:"/restaurants/:resId",
        element:<RestaurantMenu></RestaurantMenu>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading..</h1>}><Grocery/></Suspense>
      }
    
  
    ],
   
  
   errorElement:<Error></Error>
     
  },
    
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
