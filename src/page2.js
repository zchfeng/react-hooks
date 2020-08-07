import React,{useEffect,useContext} from 'react';
import './App.css';

function Page2(e){
  console.log('Page2页面','Page2')
  useEffect(()=>{
    console.log('Page2页面Effect','Page2')
  })
  return (
    <div>
      <h1>Page2页面</h1>
    </div>
  )
}

export default Page2;
