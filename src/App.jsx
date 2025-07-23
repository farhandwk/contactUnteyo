import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Asumsi file-file ini ada di proyek Anda
import Header from "./Header" 
import Footer from "./Footer"
import "./App.css"

// Di lingkungan lokal Anda, Anda bisa menggunakan impor ini:
import bgWhite from "./assets/DummbyBGwhite.jpg"
import bgBlack from "./assets/DummyBGblack.png"

import instagram from "./assets/instagram-icon.png"
import email from "./assets/email-icon.png"

import uch from "./assets/uch-room.png"

const assistYou = [
    {id: 1, title: "Partnerships & In-depth Inquiries", text: "For inquiries regarding partnerships & collaboration , media & press , or to provide comprehensive suggestions & feedback, please reach out to us using the email address listed below. Our team will review your message and respond accordingly."},
    {id: 2, title: "Quick Questions & Support", text: "Have a general question about our programs or need technical support with our platform? Min Un is here to help. For a faster response, please click and connect with us through the Min Un WhatsApp contact provided below."},
]

const contact = [
    {id: 1, img: email, text: "unteyojourney@gmail.com", link: "mailto:unteyojourney.com", title: "email"},
    {id: 2, img: instagram, text: "@UnteyoJourney", link: "https://www.instagram.com/unteyojourney/", title: "instagram"}
]

// === PERUBAHAN UTAMA ADA DI SINI ===
// Komponen Modal sekarang menampilkan konten unik berdasarkan ID
const Modal = ({ activeModalId, onClose }) => {
    if (!activeModalId) return null;

    // Fungsi untuk merender konten modal yang spesifik
    const renderModalContent = () => {
        switch (activeModalId) {
            case 1:
                return {
                    title: "How Can We Assist You?",
                    content: (
                        <section className="space-y-4 text-white flex flex-col items-center gap-2 w-full text-justify pb-12">
                            {assistYou.map((item) => (
                                <div key={item.id} className='flex flex-col items-center gap-2'>
                                    <h4 className='text-lg font-semibold self-start'>{item.title}</h4>
                                    <span className='text-md'>{item.text}</span>
                                </div>
                            ))}
                        </section>
                    )
                };
            case 2:
                return {
                    title: "Dive Into Our Programs",
                    content: (
                        <section className="space-y-4 text-white flex flex-row items-center gap-4 text-justify pb-12">
                            {contact.map((item) => (
                                <div key={item.id} className='flex flex-col items-center w-1/2'>
                                    <img src={item.img} className='w-36'></img>
                                    <span>{item.text}</span>
                                    <a href={item.link}>{item.title}</a>
                                </div>
                            ))}
                        </section>
                    )
                };
            case 3:
                return {
                    title: "Visit Our Hub",
                    content: (
                        <section className="space-y-4 text-white flex flex-col items-center gap-4 text-justify pb-12 md:flex-row">
                            <div className='flex flex-col items-center gap-2'>
                                <h4 className='text-lg font-semibold'>UTY CREATIVE HUB</h4>
                                <span className='text-md'>Jl. Siliwangi Jl. Jombor Lor, Mlati Krajan, Sendangadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55284</span>
                            </div>
                            <img src={uch} className='md:w-1/2'></img>
                        </section>
                    )
                };
            default:
                return { title: "", content: null };
        }
    };

    const { title, content } = renderModalContent();

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6 pt-36"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    className="bg-gray-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative flex flex-col items-center md:max-w-4xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors text-2xl font-bold">&times;</button>
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">{title}</h2>
                    <div className="text-gray-300">
                        {content}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};


const GridBox = ({ children, className, onClick, onMouseEnter, onMouseLeave, imageUrl, isExpanded }) => (
    <div 
        className={`flex items-center justify-center rounded-2xl transition-all duration-700 ease-in-out cursor-pointer overflow-hidden relative ${className}`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <div
            className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out ${isExpanded ? 'scale-110 blur-sm' : 'scale-100 blur-0'}`}
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="relative z-10 w-full h-full">
            {children}
        </div>
    </div>
);

const DefaultContent = ({ title }) => (
    <div 
        className="relative flex items-center justify-center w-full h-full text-white text-center"
    >
        <div className="absolute inset-0 bg-black/50"></div>
        <h3 className="relative z-10 text-xl font-bold p-4 lg:text-2xl">{title}</h3>
    </div>
);

const ExpandedContent = ({ title, description, onLearnMore }) => (
    <div className="flex flex-col items-start justify-end w-full h-full p-8 text-white bg-gradient-to-t from-black/60 to-transparent">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-white/80 mb-4">{description}</p>
        <button 
            onClick={onLearnMore} 
            className="bg-white text-black font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors"
        >
            Learn More
        </button>
    </div>
);

function InteractiveGridLayout({ onOpenModal }) {
    const [activeBox, setActiveBox] = useState(0);
    const [hoveredBox, setHoveredBox] = useState(0);
    
    const handleBoxClick = (boxNumber) => {
        setActiveBox(prev => (prev === boxNumber ? 0 : boxNumber));
    };

    const handleDesktopHover = (boxNumber) => {
        if (window.innerWidth >= 768) {
            setHoveredBox(boxNumber);
        }
    };

    const getBoxClasses = (boxNumber) => {
        const mobileHeight = activeBox === 0 ? 'h-64' : (activeBox === boxNumber ? 'h-128' : 'h-64');
        const desktopWidth = hoveredBox === 0 ? 'md:w-1/3' : (hoveredBox === boxNumber ? 'md:w-full' : 'md:w-1/6');
        return `${mobileHeight} ${desktopWidth} md:h-128`;
    };
    
    // Di komputer Anda, ganti URL ini dengan variabel impor Anda (misal: bgWhite).
    // Di komputer Anda, ganti URL ini dengan variabel impor Anda (misal: bgWhite).
    const boxesData = [
        { id: 1, imageUrl: bgWhite, title: "Our Assistant", description: "How we can assist you" },
        { id: 2, imageUrl: bgBlack, title: "Contact Information", description: "Our contact information for imquires"  },
        { id: 3, imageUrl: bgWhite, title: "Our Hub", description: "Come to our lovely place" }
    ];

    const isHintVisible = hoveredBox === 0 && activeBox === 0;

    return (
        <div className="w-full p-4 lg:px-6 flex flex-col items-center">
            <div className="h-10 flex items-center md:hidden">
                <AnimatePresence>
                    {isHintVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="text-gray-400 text-sm">Click a card to see the effect</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-4">
                {boxesData.map(box => {
                    const isExpanded = hoveredBox === box.id || activeBox === box.id;
                    return (
                        <GridBox 
                            key={box.id}
                            onClick={() => handleBoxClick(box.id)}
                            onMouseEnter={() => handleDesktopHover(box.id)}
                            onMouseLeave={() => handleDesktopHover(0)}
                            className={getBoxClasses(box.id)}
                            imageUrl={box.imageUrl}
                            isExpanded={isExpanded}
                        >
                            <div className={`absolute inset-0 transition-opacity duration-500 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}>
                                <DefaultContent title={box.title} />
                            </div>
                            <div className={`absolute inset-0 transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                                <ExpandedContent 
                                    title={box.title} 
                                    description={box.description} 
                                    // PERUBAHAN: Sekarang hanya mengirim ID
                                    onLearnMore={() => onOpenModal(box.id)}
                                />
                            </div>
                        </GridBox>
                    );
                })}
            </div>

            <div className="h-10 hidden md:flex items-center">
                <AnimatePresence>
                    {isHintVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="text-gray-400 text-sm">Hover a card to see the effect</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

// Komponen App utama
export default function App() {
    // PERUBAHAN: State sekarang menyimpan ID, bukan seluruh objek
    const [activeModalId, setActiveModalId] = useState(null);

    return (
        <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center font-[helvetica]">
            <Header/>
            <div className="text-center mb-4 text-white pt-36 md:mb-8">
                <h1 className="text-2xl font-bold lg:text-4xl">Contact</h1>
            </div>
            <InteractiveGridLayout onOpenModal={setActiveModalId} />
            <Footer/>
            <Modal activeModalId={activeModalId} onClose={() => setActiveModalId(null)} />
        </div>
    );
}
