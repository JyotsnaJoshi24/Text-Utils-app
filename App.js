
import './App.css';

import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react';



function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const toggleMode =()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
}
  return (
  <>
  <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} />
  
  <div className = "container my-3">
 
  <TextForm heading = "Try TextUtils-Word counter, character counter, remove extra spaces" mode={mode}/>
    
  

  </div>
  </>
  );
}

export default App;
