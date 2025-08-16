// src/components/MobileNav.jsx

import { motion, AnimatePresence } from 'framer-motion';

const MobileNav = ({ isOpen, setIsOpen }) => {

  const companyItems = [
    { id: 1, title: "About Us", link: "/about/" },
    { id: 2, title: "Our Program", link: "/program/" },
    { id: 3, title: "Careers", link: "/careers/" },
    { id: 4, title: "Contact Us", link: "/contact/" },
  ];

  const eventItems = [
    { id: 1, title: "Social Education", link: "#" },
    { id: 2, title: "Sharing Session", link: "#" },
    { id: 3, title: "Movement", link: "#" },
    { id: 4, title: "All Events", link: "#" },
  ];

  const postItems = [
    { id: 1, title: "Creative Media", link: "/creativeMedia/" },
    { id: 2, title: "Student News", link: "/StudentNews/" },
  ];
  
  const sidebarVariants = {
    closed: { x: '100%' },
    open: { x: '0%' },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40"
          />

          {/* Sidebar */}
          <motion.div
            className="fixed bottom-0 right-0 h-full w-3/4 max-w-sm bg-black/50 text-white  z-100"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div  className="w-full h-full p-8 pt-24"
            style={{
              backdropFilter: "blur(20px)"
            }}>
              <h2 className="text-2xl font-bold mb-8">Menu</h2>
            <nav className='font-[Helvetica] flex flex-col gap-4'>
              <section>
                <h3 className='text-lg mb-2'><strong>Company</strong></h3>
                <div className='flex flex-col gap-2'>
                  {companyItems.map((item) => (
                    <a key={item.id} href={item.link} className='text-sm'>{item.title}</a>
                  ))}
                </div>
              </section>
              <section>
                <h3 className='text-lg mb-2'><strong>Program</strong></h3>
                <div className='flex flex-col gap-2'>
                  {eventItems.map((item) => (
                    <a key={item.id} href={item.link} className='text-sm'>{item.title}</a>
                  ))}
                </div>
              </section>
              <section>
                <h3 className='text-lg mb-2'><strong>Post</strong></h3>
                <div className='flex flex-col gap-2'>
                  {postItems.map((item) => (
                    <a key={item.id} href={item.link} className='text-sm'>{item.title}</a>
                  ))}
                </div>
              </section>
            </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;