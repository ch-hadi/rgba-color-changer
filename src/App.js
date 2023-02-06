// import React, from 'react';
import { useState } from "react";
import "./App.css";
function App() {
  //   let options = {
  //     url : 'https://dummy.restapiexample.com/api/v1/employees'
  //   }
  //   let list = [1,2,3,4,5,6,7,8]
  //   const between =(a)=>{
  //     return a>2 && a<8
  //   }
  //   const filtred = list.filter((a)=>between(a))
  //   // console.log(filtred)
  //   const [number , setNumber] = useState(0);
  //   // const {data} = useFetch(options)

  //   // let fd = data?.data;

  //   // const filterWithName = ()=>{
  //   //  let name = fd?.filter((item)=>{
  //   //   if(item?.employee_name?.startsWith('C')) return item

  //   //  })

  //   //  let fn =name?.filter((item)=>{
  //   //  if(item.id === 13){
  //   //   console.log('deleted item ->', item)
  //   //   return item.id !== 13
  //   //  }
  //   //  return item
  //   //  })
  //   //  console.log('hj',fn)
  //   // }
  //  const fabi=(n)=>{
  //   let fb =n
  //   let fobina = [0,1]
  //   for(let i = 2; i<fb; i++){
  //     console.log(i)
  //      fobina[i] = fobina[i-1] +fobina[i-2]
  //   }
  //   return fobina
  //  }

  //  const factorial=()=>{
  //    let ft =number
  //    let temp =1
  //    for(let i =1 ; i<=ft;i++){
  //     // console.log(i)
  //    temp = temp*i
  //       //  temp = i*(i+1)
  //    }
  //    return temp
  //  }
  //  const prim=(n)=>{
  //   // let p =1;
  //    return n%2 ? 'true' : 'false'
  //   // return
  //  }

  //  const handleChange =(e)=>{
  //   setNumber(e.target.value)
  //  }
  //  const see =()=>{
  //   console.log(factorial())
  //  }
  //  console.log('deg is',degree)
  const [color, setColor] = useState("");
  function randomRGB() {
    var roundValue = Math.round,
      rndmValue = Math.random,
      maxNum = 255;
    setColor(
      "rgba(" +
        roundValue(rndmValue() * maxNum) +
        "," +
        roundValue(rndmValue() * maxNum) +
        "," +
        roundValue(rndmValue() * maxNum) +
        ")"
    );
  }

  return (
    <div className="App" style={{ background: color ? color:'#000' }}>
      <a className="btn-slice" onClick={randomRGB}>
        <div class="top">
          <span>Click to Change Color</span>
        </div>
        <div class="bottom">
          <span>Click to Change Color</span>
        </div>
      </a>
      {/* <button class="custom-btn btn-12" onClick={randomRGB}><span>Click!</span><span>Read More</span></button> */}
    </div>
  );
}

export default App;
