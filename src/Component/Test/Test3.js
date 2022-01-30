import React, { useState, useRef,useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  let [a,setA] = useState(10);
  
  useEffect(() => {
    const intervalId = setInterval(()=>{
      return setA(function(){
        console.log(a);
        return a+1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);





  // function plus(){
  //   // setA(()=>{
  //   //   // console.log(a);
  //   //   return a+1;
  //   // });
  //   setA(function(qq){
  //     console.log(a);
  //     console.log(qq);
  //     return a+1;
  //   })
  // }
  // if(count<5){
  //   plus();
  //   aAaA();
  //   setCount(count+1);
  // // console.log(count);
  // }

  // function aAaA(){
  //   console.log(a);
  // }
  
  return <p>자동 카운트: {count} , {a}</p>;
}



export default Counter;