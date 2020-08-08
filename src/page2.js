import React,{useEffect,useContext, useReducer} from 'react';
import './App.css';

function Page2(e){
  console.log('Page2页面','Page2')
  const [reducer,dispatch] = useReducer((state,action)=>{
    console.log(action,state)
    switch (action){
      case 'add':
        return state+1
      case 'decrement':
        return state-1
      default:
        return state
    }
  },0)
  useEffect(()=>{
    console.log('Page2页面Effect','Page2')
  })
  return (
    <div>
      <h1>Page2页面</h1>
      <h1>reducer:{reducer}</h1>
      <button onClick={() => dispatch('add')}>+</button>
      <button onClick={() => dispatch('decrement')}>-</button>
    </div>
  )
}

export default Page2;
