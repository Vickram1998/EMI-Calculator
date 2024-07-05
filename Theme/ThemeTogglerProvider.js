// import React, { useContext, useState } from 'react'; // Import React
// const ThemeContext = React.createContext();

// const ThemeContextProvider = ({ children }) => {
//     const [isDarkModeActive, setIsDarkModeActive] = useState(false);
//     return (
//         <ThemeContext.Provider value={{
//             isDarkModeActive,
//             activateLightMode: () => {
//                 setIsDarkModeActive(false);
//             },
//             activateDarkMode: () => {
//                 setIsDarkModeActive(true);
//             }
//         }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// export { ThemeContextProvider, ThemeContext };

// export const useThemeContext = () => useContext(ThemeContext);
