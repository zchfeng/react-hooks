import React,{useEffect,useContext, useReducer} from 'react';
import {ColorContext} from './reducer-state.js'

function ReduerBtn(){
    const {dispatch} = useContext(ColorContext)
    return (
        <div>
            <button onClick={()=>{dispatch('red')}}> 红色 </button>
            <button onClick={()=>{dispatch('blue')}}> 蓝色 </button>
            <button onClick={()=>{dispatch('yellow')}}> 黄色 </button>
        </div>
    )
}
export default ReduerBtn