
// import { useState } from "react";
// import logo from "../assets/foodie.jpg";
// import { Link } from "react-router-dom";
// import useOnline from "../utils/useOnline";
// import React from "react";


// const Title = () => {
//     return (
//         <a href="/">
//             <img
//                 className="h-28 p-0"
//                 alt="Logo"
//                 src={logo} />
//         </a>
//     );
// }


// const Header = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(true);

//     const isOnline = useOnline();


//     return (
//     //     <div className="flex justify-between shadow-lg ">
//     //         <Title />
//     //         <div >
//     //             <ul className="flex py-2 pr-2 text-2xl ">
//     //                 <li className="px-2   hover:text-white hover:text-xl rounded-md">
//     //                     <Link to="/home ">Home</Link>
//     //                 </li>
//     //                 <li className="px-2 hover:text-white hover:text-m rounded-md">
//     //                     <Link to="/contact">Contact</Link>
//     //                 </li>
//     //                 <li className="px-2 hover:text-white hover:text-m rounded-md">
//     //                     <Link to="/About">About</Link>
//     //                 </li>
//     //                 <li className="px-2 hover:text-white hover:text-m rounded-md">
//     //                     <Link to="/cart">Cart</Link>
//     //                 </li>

//     //             </ul>
//     //             <div className="grid  justify-items-start">
//     //                 <ul className="status px-1" >
//     //                     {/* <li>
//     //                         {isLoggedIn ? (
//     //                             <button onClick={() => setIsLoggedIn(false)}>Logout</button>
//     //                         ) : (
//     //                             <button onClick={() => setIsLoggedIn(true)}>Login</button>)

//     //                         }
//     //                     </li> */}

//     //                     <li >
//     //                         <h3 >{isOnline ? "✅" : "🔴"} </h3>

//     //                     </li>
//     //                 </ul>
//     //             </div>



//     //         </div>
//     //     </div>

//     // )
//     <div className="flex justify-between items-center p-4 shadow-lg bg-white">
//     <Title />
//     <div className="flex items-center space-x-4">
//       <ul className="flex space-x-4 text-lg">
//         <li className="hover:text-white hover:text-xl rounded-md transition duration-300 ease-in-out">
//           <Link to="/home">Home</Link>
//         </li>
//         <li className="hover:text-white hover:text-lg rounded-md transition duration-300 ease-in-out">
//           <Link to="/contact">Contact</Link>
//         </li>
//         <li className="hover:text-white hover:text-lg rounded-md transition duration-300 ease-in-out">
//           <Link to="/about">About</Link>
//         </li>
//         <li className="hover:text-white hover:text-lg rounded-md transition duration-300 ease-in-out">
//           <Link to="/cart">Cart</Link>
//         </li>
//       </ul>
//       <div className="flex items-center space-x-4">
//         {/* Status indicator */}
//         <div className="status px-1">
//           <h3>{isOnline ? "✅" : "🔴"}</h3>
//         </div>
//         {/* Sign In/Sign Out button */}
//         <div>
//           {isLoggedIn ? (
//             <button
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
//               onClick={() => setIsLoggedIn(false)}
//             >
//               Sign Out
//             </button>
//           ) : (
//             <button
//               className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
//               onClick={() => setIsLoggedIn(true)}
//             >
//               Sign In
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
//     )  
// };
// export default Header;
import { useState } from "react";
import logo from "../assets/foodvilla.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import React from "react";

const Title = () => {
    return (
        <a href="/">
            <img
                className="h-28 p-0"
                alt="Logo"
                src={logo} />
        </a>
    );
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const isOnline = useOnline();

    return (
  

        <div className="flex justify-between items-center p-4 shadow-lg bg-white text-black">
            <Title />
            <div className="flex items-center space-x-4">
                <ul className="flex space-x-4 text-lg">
                    <li className="hover:bg-sky-400 hover:text-white px-2 py-1 rounded-md transition duration-300 ease-in-out">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="hover:bg-sky-400 hover:text-white px-2 py-1 rounded-md transition duration-300 ease-in-out">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="hover:bg-sky-400 hover:text-white px-2 py-1 rounded-md transition duration-300 ease-in-out">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="hover:bg-sky-400 hover:text-white px-2 py-1 rounded-md transition duration-300 ease-in-out">
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
                <div className="flex items-center space-x-4">
                    {/* Status indicator */}
                    <div className="status px-1">
                        <h3>{isOnline ? "✅" : "🔴"}</h3>
                    </div>
                    {/* Sign In/Sign Out button */}
                    <div>
                        {isLoggedIn ? (
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                                onClick={() => setIsLoggedIn(false)}
                            >
                                Sign Out
                            </button>
                        ) : (
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                                onClick={() => setIsLoggedIn(true)}
                            >
                                Sign In
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
