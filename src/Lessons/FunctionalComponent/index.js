import React,{useContext} from 'react';
import {ThemeContext} from  '../ContextApi'
function FunctionalComponent() {
    const darkTheme=useContext(ThemeContext);
    const themestyle={
        backgroundColor:darkTheme? '#333' :'#ccc',
        color:darkTheme?'#ccc':'#333',
        padding:'2rem',
        margin:'2rem'
    }
  return (
    <div style={themestyle}>index</div>
  )
}

export default FunctionalComponent