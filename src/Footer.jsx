import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "./assets/logo.png";
import instagram from "./assets/instagram.png";
import tiktok from "./assets/tiktok.png";
import youtube from "./assets/youtube.png";

function Footer({ scrollToSection }) {
  const [openSection, setOpenSection] = React.useState(null);


  const contacts = [
    { gambar: instagram, link: "https://www.instagram.com/unteyojourney?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", name: "Instagram" },
    { gambar: tiktok, link: "https://www.tiktok.com/@unteyo.journey?_t=ZS-8w65xIKnw9v&_r=1", name: "TikTok" },
    { gambar: youtube, link: "https://www.youtube.com/@UnteyoJourney", name: "" },
  ];

  const footerSectionsCompany = [
    {
      title: "Company",
      items: [
        { name: "About Us", link: "/about/" },
        { name: "Program", link: "/program/" },
        { name: "Careers", link: "/careers/" },
        { name: "Contact Us", link: "/contact/" },
      ],
    },
  ];

  const footerSectionExplore = [
    {
      title: "Explore",
      items : [
        {name: "All Events", link: "https://event.unteyojourney.com/index.php"},
        {name: "News", link: ""},
        {name: "Creative Media", link: ""},
        {name: "Events: Sharing Session", link: "https://event.unteyojourney.com/index.php?kategori=Sharing+Session"},
        {name: "Events: Social Education", link: "https://event.unteyojourney.com/index.php?kategori=Social+Education"},
        {name: "Events: Movements", link: "https://event.unteyojourney.com/index.php?kategori=Movement"},
      ]
    }
  ]


  const footerSectionsUserGuide = [
    {
      title: "User Guide & Policies",
      items: [
        { name: "Privacy Policy", link: "/#/privacy" },
        { name: "Terms and Condition", link: "/#/terms" },
        { name: "Cookie Policy", link: "/#/cookies" },
        { name: "Recruitment Privacy", link: "/#/recruitment" },
      ],
    },
  ];

  return (
    <footer id="connect" className="relative w-full bg-gradient-to-br from-[#000] to-[#16213e] text-white">
      <div
      className="absolute h-[25%] top-0 left-0 right-0 bg-gradient-to-b from-[#000] to-transparent pointer-events-none"
      aria-hidden="true"
    ></div>
      <div className="container mx-auto px-4 py-14 flex flex-col gap-6">
        {/* Logo and Description */}
        <div className="text-center mb-6">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto w-20 md:w-24 mb-4 hover:scale-110 transition-transform duration-300"
          />
          <p className="text-xs md:text-sm text-gray-300 max-w-md mx-auto px-4">
            Empowering innovation and creativity through meaningful connections
            and transformative experiences.
          </p>
        </div>

        {/* Sections Layout */}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-4 md:gap-8 pb-8">
          {[...footerSectionsCompany, ...footerSectionExplore ,  ...footerSectionsUserGuide].map((section, index) => (
            <div key={index} className="">
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  {/* PERUBAHAN: Hanya tag <a> yang digunakan */}
                  <a
                    href={item.link}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
                    </ul>
                    {/* Garis pembatas hanya tampil di mobile */}
          
                  </div>
                ))}
          {/* Social Media */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-start items-center gap-5">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={contact.gambar}
                    alt={contact.name}
                    className="w-8 h-8 object-contain"
                  />
                </a>
              ))}
            </div>
        </div>
        </div>
        

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-700">
          <p className="text-xs text-gray-500">
            © 2025 Unteyo Journey. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
