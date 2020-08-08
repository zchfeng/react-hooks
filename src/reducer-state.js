import React,{createContext, useReducer} from 'react';

export const ColorContext = createContext({})


export const Color = props =>{
    console.log(props.children,'props')
    const [color,dispatch] = useReducer((state,action)=>{
        if(action){
            return action
        }else{
            return ''
        } 
    },'')
    return (
        <ColorContext.Provider value={{color,dispatch}}>
            {props.children}
        </ColorContext.Provider>
    )
}

