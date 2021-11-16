import {createContext} from 'react';

export const ThemeContext = createContext(); //context

// export const ThemeProvider = ({children}) =>{
//     const [isDarkMode,setIsDarkMode] = useState(false);

//     const switchDarkMode = () =>{
//     setIsDarkMode(!isDarkMode);
//     }
//     return
//     (          
//         <ThemeContext.Provider value={{isDarkMode,switchDarkMode}}>
//             {children}
//         </ThemeContext.Provider>
//     );
// }