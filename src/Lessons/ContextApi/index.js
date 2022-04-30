import React,{useState} from 'react'
import FunctionalComponent from '../FunctionalComponent';
export const ThemeContext=React.createContext();
function ContextApi() {
    const [darkTheme,setDarkTheme]=useState(true);
    function toggleTheme()
    {
        setDarkTheme((preDark)=>!preDark);
    }
  return (
    <div>
           <ThemeContext.Provider value={darkTheme}>
               <button onClick={toggleTheme}>Toggle Theme</button>
               <FunctionalComponent />
           </ThemeContext.Provider> 
    </div>
  )
}

export default ContextApi