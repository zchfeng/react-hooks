import React,{useState,useContext, useEffect} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './App.css';
import Page1 from './page1';
import Page2 from './page2';


let listDate ={
  page1:{
    data:[1,2,3,4]
  },
  page2:{
    data:[9,8,7,4,5]
  }
}
const ThemeContext = React.createContext();

function Page3(){
  const count = useContext(ThemeContext);
  console.log(count)
  useEffect(()=>{console.log(count,'useEffect')},[count])
  return (
    <div>
      <h1>page3</h1>
    </div>
  )
}

function App(e){
  const [count,setCount] = useState(0)
  console.log('APP页面','app',e)
  return (
    <ThemeContext.Provider value={count}>
      <h1>点击 {count} 次</h1>
      <button onClick={()=>setCount(count+1)}>button</button>
      <Router>
        <ul>
          <li><Link to="/page1">page1</Link></li>
          <li><Link to="/page2">page2</Link></li>
          <li><Link to="/reduer">reduer</Link></li>
          <li><Link to="/memo">Memo</Link></li>
        </ul>
        <Route exact path="/Page1" component={Page1} />
        <Route exact path="/Page2" component={Page2} />
      </Router>
      <Page3 />
    </ThemeContext.Provider>
  )
}

export default App;
