
import React,{useEffect,useContext, useReducer} from 'react';
import ReducerText from './reducer-text'
import ReducerBtn from './reducer-button'
import {Color} from './reducer-state'

function Reduer(){
    return (
        <div>
            <h1>reduer</h1>
            <Color>
                <ReducerText />
                <ReducerBtn />
            </Color>
        </div>
    )
}
export default Reduer