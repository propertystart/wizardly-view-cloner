
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, ChevronRight } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      id: "hero",
      title: "THE VIEW IN PRESTON",
      subtitle: "HERITAGE REIMAGINED",
      description: "An architectural masterpiece nestled in the heart of Preston, offering a lifestyle of unparalleled luxury and sophistication.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1800&q=80"
    },
    {
      id: "overview",
      title: "OVERVIEW",
      subtitle: "CONTEMPORARY LIVING",
      description: "The View In Preston represents a new paradigm in luxury living, where heritage craftsmanship meets contemporary design. This exclusive collection of residences offers a once-in-a-lifetime opportunity to own a piece of architectural history reimagined for modern lifestyles.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1800&q=80"
    },
    {
      id: "location",
      title: "LOCATION",
      subtitle: "PRESTON, MELBOURNE",
      description: "Situated in one of Melbourne's most sought-after suburbs, The View In Preston offers unparalleled access to the city's finest amenities, including world-class dining, shopping, and cultural experiences.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=1800&q=80"
    },
    {
      id: "design",
      title: "DESIGN",
      subtitle: "ARCHITECTURAL EXCELLENCE",
      description: "Each residence has been meticulously crafted with an unwavering commitment to quality and detail, featuring soaring ceilings, floor-to-ceiling windows, and the finest materials sourced from around the world.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80"
    },
  ];

  const handleSectionChange = (index: number) => {
    setActiveSection(index);
    const element = document.getElementById(sections[index].id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter">STEMCON</div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#overview" className="uppercase text-sm tracking-wider hover:text-gray-300 transition-colors">Overview</a>
          <a href="#location" className="uppercase text-sm tracking-wider hover:text-gray-300 transition-colors">Location</a>
          <a href="#design" className="uppercase text-sm tracking-wider hover:text-gray-300 transition-colors">Design</a>
          <button className="uppercase text-sm tracking-wider border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors">
            Enquire
          </button>
        </nav>
        <button className="md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </header>

      {/* Fixed sidebar */}
      <div className="fixed top-1/2 transform -translate-y-1/2 right-8 z-40 hidden lg:block">
        <div className="flex flex-col items-center space-y-4">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => handleSectionChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index ? "bg-white scale-125" : "bg-gray-500 hover:bg-gray-300"
              }`}
              aria-label={`Go to ${section.title}`}
            />
          ))}
        </div>
      </div>

      {/* Hero section */}
      <section 
        id="hero" 
        className="relative h-screen w-full overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${sections[0].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight mb-6">
              THE VIEW<br />IN PRESTON
            </h1>
            <p className="text-lg md:text-xl opacity-80 max-w-lg">
              {sections[0].description}
            </p>
            <div className="mt-8">
              <button className="uppercase tracking-wider flex items-center gap-2 border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors">
                <span>Enquire now</span>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
          <span className="text-sm uppercase tracking-wider mb-2">Scroll to explore</span>
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </section>

      {/* Content sections */}
      {sections.slice(1).map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="relative min-h-screen flex flex-col md:flex-row"
          onMouseEnter={() => setActiveSection(index + 1)}
        >
          <div className="md:w-1/2 lg:w-2/5 bg-black flex flex-col justify-center p-8 md:p-16 lg:p-24">
            <div className="mb-4 text-gray-400 uppercase tracking-wider text-sm">{section.subtitle}</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6">{section.title}</h2>
            <p className="text-lg opacity-70 mb-8">{section.description}</p>
            <button className="text-sm uppercase tracking-wider flex items-center gap-2 w-fit hover:underline">
              <span>Learn more</span>
              <ChevronRight size={16} />
            </button>
          </div>
          <div 
            className="md:w-1/2 lg:w-3/5 h-80 md:h-auto"
            style={{
              backgroundImage: `url(${section.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </section>
      ))}

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div className="text-2xl font-bold tracking-tighter mb-8 md:mb-0">STEMCON</div>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <h3 className="text-sm font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">info@stemcon.com</p>
                <p className="text-gray-400">+61 3 1234 5678</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-4">Address</h3>
                <p className="text-gray-400">123 Preston Road</p>
                <p className="text-gray-400">Preston, VIC 3072</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} STEMCON. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
