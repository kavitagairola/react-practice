// // import React from "react";
// // function Slider(){
// //     return (
// //         <>
// //         <ul className="flex gap-24 justify-center m-10">
// //             <li>NEW ARRIVALS</li>
// //             <li>BEST SELLER</li>
// //             <li>TRENDING</li>
// //             <li>SALE</li>
// //         </ul>
// //         </>
// //     )
// // }
// // export default Slider;
// import React, { useState } from "react";

// function Slider() {
//   const [activeTab, setActiveTab] = useState("home");

//   const tabContent = {
//     home: {
//       text: "🏠 Welcome to the Home tab!",
//       images: Array.from({ length: 12 }, (_, i) => `https://picsum.photos/seed/home${i}/200/200`),
//     },
//     about: {
//       text: "ℹ️ This is the About tab content.",
//       images: Array.from({ length: 12 }, (_, i) => `https://picsum.photos/seed/about${i}/200/200`),
//     },
//     contact: {
//       text: "📞 Here is the Contact tab content.",
//       images: Array.from({ length: 12 }, (_, i) => `https://picsum.photos/seed/contact${i}/200/200`),
//     },
//   };

//   return (
//     <div className="p-6">
//       {/* Tab Buttons */}
//       <div className="flex justify-center gap-4 mb-6">
//         {Object.keys(tabContent).map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 rounded font-semibold ${
//               activeTab === tab
//                 ? "bg-blue-600 text-white"
//                 : "bg-gray-200 text-black"
//             } transition duration-300`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content Text */}
//       <div className="text-center text-lg font-semibold mb-4">
//         {tabContent[activeTab].text}
//       </div>

//       {/* Image Slider */}
//       <div className="overflow-x-auto">
//         <div className="flex gap-4 w-[1500px] p-4">
//           {tabContent[activeTab].images.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`Image ${index + 1}`}
//               className="w-40 h-40 object-cover rounded shadow-md hover:scale-105 transition-all duration-300"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Slider;

