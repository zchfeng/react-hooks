import React,{useContext} from 'react';
import {ColorContext} from './reducer-state'


function ReduerText(){
    const {color} = useContext(ColorContext) || ''
    return (
        <h1 style={{color}}>reduer页面颜色</h1>
    )
}
export default ReduerText