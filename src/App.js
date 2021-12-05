import { useEffect, useState } from "react";
import Body from "./components/Body";
import { BaseURL } from "./components/common/BaseUrl";

function App() {
  const [eightfootball,setEightFootball] =  useState();
  const[eighttennis,setEightTennis] =  useState();
  useEffect(() => {

    const socket9 = new WebSocket(`${BaseURL}ws/eight/one/football/twoway/`);
    socket9.onmessage = function(event){
      const eightSnooker = event.data
      // seteightSnooker(eightSnooker)
      console.log("printig data")
      console.log(eightSnooker)
    }
    // var eventSource = new EventSource("http://localhost:5000/api/eight/one/football")
    
    // eventSource.addEventListener("message", function(e) {
    //   console.log(e.data)
    // }, false)

    // eventSource.addEventListener("online", function(e) {
    //   // console.log(e.data.color)
    // const  data = JSON.parse(e.data)
    // setEightFootball(data)
    //  console.log(data)
    // }, true)



    // var eventSourceone = new EventSource("http://localhost:5000/api/eight/one/tennis")
    
    // eventSourceone.addEventListener("message", function(e) {
    //   console.log(e.data)
    // }, false)

    // eventSourceone.addEventListener("online", function(e) {
    //   // console.log(e.data.color)
    // const  data = JSON.parse(e.data)
    // setEightTennis(data)
    //  console.log(data)
    // }, true)
  
  },[]);
  return (
    <div>
     <Body
    //  eightfootballb = {eightfootball}
    //  eighttennisb = {eighttennis}
     />
    </div>
  );
}

export default App;
