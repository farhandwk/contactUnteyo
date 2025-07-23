// src/components/Header.jsx

import DropdownNavDekstop from "./DropdownNavDesktop";
import logo from "./assets/logo.png"
import instagram from "./assets/instagramHeader.png"
import tiktok from "./assets/tiktokHeader.png"
import youtube from "./assets/youtubeHeader.png"
import hamburger from "./assets/ham.png"
import ucc from "./assets/ucc.png"
import { useEffect, useState } from "react";
import "./App.css"
// 1. Impor komponen baru
import MobileNav from "./MobileNav";

// Data
const companyItems = [
  { id: 1, title: "About Us", link: "/newUnteyo/about/" },
  { id: 2, title: "Our Program", link: "/newUnteyo/program/" },
  { id: 3, title: "Careers", link: "#" },
  { id: 4, title: "Contact Us", link: "/newUnteyo/contact" },
];

const eventItems = [
  { id: 1, title: "Social Education", link: "#" },
  { id: 2, title: "Sharing Session", link: "#" },
  { id: 3, title: "Movement", link: "#" },
  { id: 4, title: "All Events", link: "#" },
];

const postItems = [
  { id: 1, title: "Creative Media", link: "#" },
  { id: 2, title: "Student News", link: "#" },
];

const socialMedia = [
  {id: 1, img: instagram},
  {id: 2, img: tiktok},
  {id: 3, img: youtube},
]

const comingSoonContent = (
  <div className="text-center text-xs text-white bg-black w-[120px] h-[180px] rounded-lg flex flex-col justify-center p-2">
    <img
      src={ucc}
      alt="Coming soon"
      className="mx-auto mb-2 rounded"
    />
    <span className="mt-2">Coming soon...</span>
  </div>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`Helvetica text-white w-screen px-4 sm:px-8 py-4 flex flex-row justify-between items-center z-[99] fixed top-0 transition-colors duration-300 max-h-20 md:max-h-20 ${
          isScrolled || isSidebarOpen ? "scrolled" : ""
        }`} 
      >
        {/* 6. Tombol Menu Mobile: Gunakan 'lg:hidden' agar hanya tampil di layar kecil */}
        <div className="flex flex-row gap-6 items-center justify-center">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden">
            <img src={hamburger} ></img>
          </button>
          <div className="flex flex-row items-center justify-center">
            <a href="/newUnteyo/">
              <img src={logo} className="w-[74px] h-[80px] " alt="Logo"/>
            </a>
          
            <div className="hidden lg:flex flex-row items-center gap-[100px] p-[30px] lg:gap-12 lg:pl-24">
              <DropdownNavDekstop label="Company" items={companyItems} leftContent={comingSoonContent} align="left"/>
              <DropdownNavDekstop label="Event" items={eventItems} leftContent={comingSoonContent} align="center"/>
              <DropdownNavDekstop label="Post" items={postItems} leftContent={comingSoonContent} align="right"/>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          {socialMedia.map((item) => (
            <img src={item.img} key={item.id}></img>
          ))}
        </div>

        
      </nav>
      
      {/* 7. Render komponen sidebar di sini */}
      <MobileNav isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </>
  );
}