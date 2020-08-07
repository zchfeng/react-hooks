import React,{useEffect, useState} from 'react';
import './App.css';

function Page1(){
  console.log('Page1页面','Page1')
  const [page1,setPage1] = useState(0)
  useEffect(()=>{
    console.log(page1,'Page1')
    return ()=>{
      console.log('清除page1')
    }
  },[page1])
  return (
    <div>
      <h1>Page1页面{page1}</h1>
      <button onClick={()=>{setPage1(page1+1)}}>page1-button</button>
    </div>
  )
}

export default Page1;
