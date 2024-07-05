// // import { useThemeContext } from "./ThemeProvider"

// const ThemeToggler = () => {
//     const { isDarkModeActive, activateLightMode, activateDarkMode } = useThemeContext(); // Invoke useThemeContext

//     return (
//         <div>
//             <button onClick={() => {
//                 if (isDarkModeActive) {
//                     activateLightMode();
//                 } else {
//                     activateDarkMode();
//                 }
//             }}>
//                 {isDarkModeActive ? (
//                     <i className="fa-regular fa-lightbulb fa-xl"></i>
//                 ) : (
//                     <i className="fa-solid fa-lightbulb" style={{ color: '#0d0d0d' }}></i>
//                 )}
//             </button>
//         </div>
//     );
// };

// export default ThemeToggler;
