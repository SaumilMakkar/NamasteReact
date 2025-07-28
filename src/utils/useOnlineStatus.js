import { useEffect } from "react";


const useOnlineStatus=()=>{

//check if online

useEffect(()=>{

const[onlineStatus,setOnlineStatus]=useState(true)
window.addEventListener("offline",()=>{

setOnlineStatus(false);



})

window.addEventListener("online",()=>{

setOnlineStatus(true);



})


},[]);

//boolean value
return onlineStatus;

}
export default useOnlineStatus;