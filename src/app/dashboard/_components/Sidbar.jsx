// "use client";
// import React from "react";
// import Image from "next/image";
// import { HiHome } from "react-icons/hi2";
// import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
// import { HiOutlineShieldCheck } from "react-icons/hi";
// import { AiOutlineLogout } from "react-icons/ai";
// import { usePathname } from "next/navigation";
// import Link from "next/link";

// const Sidbar = () => {
//   const Menu = [
//     {
//       id: 1,
//       name: "Home",
//       icon: <HiHome />,
//       path: "/dashboard",
//     },
//     {
//       id: 2,
//       name: "Explore",
//       icon: <HiOutlineSquare3Stack3D />,
//       path: "/dashboard/explore",
//     },
//     {
//       id: 3,
//       name: "Upgrade",
//       icon: <HiOutlineShieldCheck />,
//       path: "/dashboard/upgrade",
//     },
//     {
//       id: 4,
//       name: "Logout",
//       icon: <AiOutlineLogout />,
//       path: "/dashboard/logout",
//     },
//   ];
//   const path = usePathname();

//   return (
//     <div className="fixed h-full w-64 p-5 shadow-md">
//       <Image
//         className="img"
//         src="/logo.svg"
//         alt="Logo"
//         width={70}
//         height={70}
//       />
//       <hr className="my-3" />
//       <ul>
//         {Menu.map((item) => (
//           <li
//             key={item.id}
//             className={`flex items-center gap-2 p-3 mb-2 cursor-pointer text-gray-600 hover:bg-gray-100 hover:text-black 
//             rounded-lg ${item.path === path && "bg-gray-100 text-black"}`}
//           >
//             <Link href={item.path} className="flex items-center gap-2">
//               <div className="text-2xl">{item.icon}</div>
//               <h2>{item.name}</h2>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <div className="relative h-screen">
//         <div className="absolute bottom-0 left-0 right-0 h-[60%]">
//           <progress
//             value="33"
//             max="100"
//             className="w-full bg-sky-500 h-4 rounded"
//           ></progress>
//           <h2 className="text-sm">2 out of 5 courses created</h2>
//           <h2 className="text-xs text-gray-500">upgrade your profile</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidbar;


"use client";
import React from "react";
import Image from "next/image";
import { HiHome } from "react-icons/hi2";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { AiOutlineLogout } from "react-icons/ai";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <HiHome />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiOutlineSquare3Stack3D />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <HiOutlineShieldCheck />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: <AiOutlineLogout />,
      path: "/dashboard/logout",
    },
  ];
  const path = usePathname();

  return (
    <div className="fixed h-full w-64 p-5 shadow-md">
      <Image
        className="img"
        src="/logo.svg"
        alt="Logo"
        width={70}
        height={70}
      />
      <hr className="my-3" />
      <ul>
        {Menu.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            className={`flex items-center gap-2 p-3 mb-2 cursor-pointer text-gray-600 hover:bg-gray-100 hover:text-black rounded-lg ${item.path === path && "bg-gray-100 text-black"}`}
          >
            <div className="text-2xl">{item.icon}</div>
            <h2>{item.name}</h2>
          </Link>
        ))}
      </ul>
      <div className="relative h-screen">
        <div className="absolute bottom-0 left-0 right-0 h-[60%]">
          <progress
            value="33"
            max="100"
            className="w-full bg-sky-500 h-4 rounded"
          ></progress>
          <h2 className="text-sm">2 out of 5 courses created</h2>
          <h2 className="text-xs text-gray-500">Upgrade your profile</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

