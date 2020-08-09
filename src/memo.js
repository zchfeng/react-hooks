import React,{useEffect,useContext, useReducer, useMemo} from 'react';

function MemoPage(){
    console.log('memo')
    const pageName = ()=>{
        return 'Memo-Page'
    } 
    useEffect(()=>{
        console.log('memo,Effect')
    })
   const memo = useMemo(()=>{
        console.log('memo-memo')
        pageName()
    },[])
    return (
        <div>
            <div>Memo</div>
            <h1>{pageName()}</h1>
        </div>
    )
}
export default MemoPage