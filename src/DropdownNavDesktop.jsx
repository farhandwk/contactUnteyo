import { useState } from "react";

export default function DropdownNavDesktop({ label, items, leftContent, align = "left" }) {
  const [isHovered, setIsHovered] = useState(false);

  const alignmentClasses = {
    left: "left-0",
    center: "left-1/2 -translate-x-1/2",
    right: "right-0",
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-block transition-all duration-300 ease-in-out 
                  ${isHovered ? 'h-[60px]' : 'h-[40px]'}`}
    >
      {/* Trigger */}
      <div className="cursor-pointer text-white px-4 py-2 font-semibold">
        {label}
      </div>

      {/* Dropdown */}
      <div
        className={`transition-opacity duration-300 ease-in-out origin-top 
          ${isHovered ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"} 
          absolute mt-2 ${alignmentClasses[align]} bg-black/50 text-white shadow-xl rounded-xl border-gray-100 border-2
          w-[400px] flex z-[999]`}
      >
        {/* Left content */}
        <div className="w-1/2 p-0 border-r border-gray-300 flex flex-col items-center justify-center">
          {leftContent}
        </div>

        {/* Right content */}
        <div className="w-1/2 px-2 flex flex-col justify-center gap-2">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="hover:bg-gray-100 hover:text-black rounded px-3 py-2 text-sm font-medium"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
