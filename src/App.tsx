/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ReactNode } from 'react';
import { 
  Anchor, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ShieldCheck, 
  Ship, 
  Compass, 
  Briefcase, 
  Navigation, 
  Activity as ActivityIcon,
  DraftingCompass,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import imgKarl from "../IMG-20241206-WA0017.jpg";
import imgJeanelle from "../IMG-20250421-WA0049.jpg";
import wistaLogo from "../WISTA_logo_vertical_RGB_blue_MALTA-1-429x366.webp";
import mmlaLogo from "../MMLA-30-Anniversary-logo-rgb.jpg";
import transportMaltaLogo from "../transport-malta.jpeg";
import smeLogo from "../sme-purple.jpg";
import syinmLogo from "../syinm.jpeg";
// --- Types ---
interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

interface ActivityItem {
  category: string;
  items: string[];
}

// --- Components ---

const NavLink = ({ href, label, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-2xl uppercase tracking-widest hover:text-[#3b82f6] transition-colors duration-300"
  >
    {label}
  </a>
);
const SectionHeading = ({ children, light = false }: { children: ReactNode; light?: boolean }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`text-5xl md:text-6xl lg:text-8xl font-light mb-8 ${light ? 'text-white' : 'text-[#0a1128]'}`}
  >
    {children}
  </motion.h2>
);
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const activities: ActivityItem[] = [
    {
      category: "Surveys & Certification",
      items: [
        "Appointed Government Surveyor of Ships (unrestricted)",
        "Condition & Valuation Surveys",
        "Insurance, Damage & Accident Assessments",
        "Draft, Bunkering & De-Bunkering Surveys",
        "Pre-Purchase & On/Off-Hire Surveys",
        "Tonnage & Load-line Calculations",
        "Yacht Surveying & Compliance",
        "Malta Flag Commercial Yacht Code Surveys",
        "Tank & Cargo Hose Testing"
      ]
    },
    {
      category: "Engineering & Naval Architecture",
      items: [
        "Marine Technical Consultancy",
        "Stability Analysis & Stability Booklets",
        "Hull & Machinery Inspections"
      ]
    },
    {
      category: "Compliance, Supervision & Expert Services",
      items: [
        "Yacht New Build & Refit Supervision",
        "Appointed Court Expert & Due Diligence",
        "RSO – Approved by Transport Malta",
        "Maritime Labour Convention (MLC) 2006 Implementation",
        "HSEQ Consultancy & Risk Assessments"
      ]
    },
    {
      category: "Cargo & Specialized Operations",
      items: [
        "Heavy Lift Cargo Surveys",
        "Cargo Loading, Lashing & Securing",
        "Dry Container & Reefer Surveys",
        "Towage Approval Surveys",
        "Lifting Appliance Certification"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#0f172a] selection:bg-[#0f172a] selection:text-white">
      {/* --- Navigation --- */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-sm py-4 shadow-sm' : 'bg-transparent py-8 text-white'}`}>
        <div className="w-full px-6 md:px-12 flex justify-between items-center">
          <a href="#about" className="flex items-center gap-3 group">
            <div className="flex flex-col items-start">
              <div className={`font-sans font-extrabold text-6xl tracking-tighter leading-none transition-colors duration-500 ${scrolled ? 'text-[#0a1128]' : 'text-white'}`}>
                Coral.
              </div>
              <div className={`hidden md:block text-sm uppercase tracking-[0.4em] font-light mt-4 transition-colors duration-500 text-left ${scrolled ? 'text-[#0a1128]' : 'text-white/60'}`}>
                Marine Consultancy & Engineering
              </div>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            <NavLink href="#about" label="About Us" />
            <NavLink href="#services" label="Services" />
            <NavLink href="#contact" label="Contact" />
            <NavLink href="#jobs" label="Jobs" />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={32} className={scrolled ? 'text-[#0a1128]' : 'text-white'} />
            ) : (
              <Menu size={32} className={scrolled ? 'text-[#0a1128]' : 'text-white'} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-[#0a1128] flex flex-col items-center justify-center space-y-12"
          >
            <button 
              className="absolute top-8 right-8 text-white p-2"
              onClick={closeMobileMenu}
            >
              <X size={40} />
            </button>
            <div className="flex flex-col items-center gap-10">
              <NavLink href="#about" label="About Us" onClick={closeMobileMenu} />
              <NavLink href="#services" label="Services" onClick={closeMobileMenu} />
              <NavLink href="#contact" label="Contact" onClick={closeMobileMenu} />
              <NavLink href="#jobs" label="Jobs" onClick={closeMobileMenu} />
            </div>
            
            <div className="pt-12 text-center">
              <div className="font-sans font-extrabold text-5xl tracking-tighter leading-none text-white mb-4">
                Coral.
              </div>
              <div className="text-xs uppercase tracking-[0.4em] text-white/50">
                Marine Consultancy & Engineering
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Hero Section --- */}
      <header className="relative h-screen flex items-center justify-center pt-32 overflow-hidden bg-[#0a1128]">
        <div className="absolute inset-0 opacity-60">
          <img 
            src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=2070&auto=format&fit=crop" 
            alt="Superyacht on water" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-14 leading-tight">
              Excellence <br /><span className="italic font-serif">at Sea</span>
            </h1>
            <p className="text-base md:text-lg font-medium tracking-[0.3em] uppercase mb-20 text-gray-200">
              Marine Consultancy & Engineering Services
            </p>
            <a 
              href="#services" 
              className="inline-flex items-center gap-4 px-10 py-5 border border-white text-lg uppercase tracking-widest hover:bg-white hover:text-[#0a1128] transition-all duration-300"
            >
              OUR EXPERTISE <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <div className="w-[1px] h-20 bg-gradient-to-t from-white to-transparent mx-auto" />
        </div>
      </header>

      {/* --- About Section --- */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
            <div>
              <SectionHeading>ABOUT US</SectionHeading>
              <div className="space-y-6 text-2xl text-gray-700 font-light leading-relaxed">
                <p>
                  Coral. is an independent service provider of marine surveying, naval architecture, inspections, audits & marine engineering.
                </p>
                <p>
                  We serve the shipping, yachting & offshore industry. Our firm focuses on delivering exceptional client experiences.
                </p>
                <p>
                  We aim to always provide excellence and support to the maritime sector, ensuring every project—from new builds under the Malta Yacht Code to complex stability analyses—is executed with technical precision.
                </p>
              </div>
            </div>
            <div className="relative aspect-video lg:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2074&auto=format&fit=crop" 
                alt="Modern Superyacht" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-32 -right-10 bg-[#0f172a] text-white p-12 hidden md:block">
                <div className="text-5xl font-serif mb-2">14+</div>
                <div className="text-xs uppercase tracking-widest text-gray-400">Years of Maritime Expertise</div>
              </div>
            </div>
          </div>

          {/* Biographies */}
          <div className="space-y-24">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="aspect-[4/5] overflow-hidden order-last md:order-first">
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={imgKarl}
                    alt="Karl Briffa"
                    className="w-full h-full object-cover object-[center_20%] grayscale brightness-[1.08] contrast-[0.98] blur-[0.4px]"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (!img.src.includes('input_file_1.png')) {
                        img.src = "/input_file_1.png";
                      }
                    }}
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-5xl font-serif mb-2 text-[#0a1128]">Karl Briffa</h3>
                  <p className="text-base uppercase tracking-[0.2em] text-gray-500 font-medium">Director & Lead Engineer</p>
                </div>
                <div className="space-y-6 text-2xl text-gray-700 font-light leading-relaxed">
                  <p>
                    Karl Briffa is a mechanical engineer with a Masters Degree in Naval Architecture & Marine Engineering from the University of Southampton.
                  </p>
                  <p>
                    With over 14 years of experience across the maritime industry, Karl has built a strong reputation for professionalism, technical expertise, and integrity. His lifelong passion for boating and yachting, combined with extensive industry knowledge, has shaped a career dedicated to delivering reliable and client-focused marine consultancy services.
                  </p>
                  <p>
                    As Co-Founder and Director of Coral Marine and Engineering Ltd., Karl is committed to providing practical, transparent, and high-quality solutions tailored to each client’s needs.
                  </p>
                </div>
                <div className="flex gap-4 pt-4">
                  <a 
                    href="https://www.linkedin.com/in/karl-briffa-075bb121/"
                    target="_blank" 
                    rel="no-referrer"
                    className="flex items-center gap-3 text-xs uppercase tracking-widest hover:text-gray-400 transition-colors"
                  >
                    <Linkedin size={18} /> View Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-5xl font-serif mb-2 text-[#0a1128]">Jeanelle Cassar</h3>
                  <p className="text-base uppercase tracking-[0.2em] text-gray-500 font-medium">Director</p>
                </div>
                <div className="space-y-6 text-2xl text-gray-700 font-light leading-relaxed">
                  <p>
                    Jeanelle Cassar is a mechanical engineer with a Masters Degree in Maritime Engineering Science from the University of Southampton.
                  </p>
                  <p>
                    Her career began in London with Global Maritime, where she worked within the oil & gas sector within the design & engineering team with a specialization in Dynamic Positioning systems, gaining valuable experience whilst working offshore.
                  </p>
                  <p>
                    Today she oversees the company’s operations, technical coordination, and strategic development, combining engineering expertise with a practical and client-focused approach.
                  </p>
                </div>
                <div className="flex gap-4 pt-4">
                  <a 
                    href="https://www.linkedin.com/in/jeanelle-cassar-71583041/"
                    target="_blank" 
                    rel="no-referrer"
                    className="flex items-center gap-3 text-xs uppercase tracking-widest hover:text-gray-400 transition-colors"
                  >
                    <Linkedin size={18} /> View Profile
                  </a>
                </div>
              </div>
              <div className="aspect-[4/5] overflow-hidden order-first md:order-last">
                <div className="w-full h-full relative overflow-hidden">
                  <img 
                    src={imgJeanelle}
                    alt="Jeanelle Cassar" 
                    className="w-full h-full object-cover object-[95%_top] scale-125 grayscale brightness-[1.08] contrast-[0.92]"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Try input_file_0.png if the explicit name fails
                      const img = e.target as HTMLImageElement;
                      if (!img.src.includes('input_file_0.png')) {
                        img.src = "/input_file_0.png";
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Services / Activities --- */}
      <section id="services" className="py-24 md:py-32 bg-[#fafafa]">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <SectionHeading>Our Expertise.</SectionHeading>
            <p className="text-gray-500 uppercase tracking-widest text-xl">A full suite of maritime technical services</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-20 lg:gap-x-24">
            {activities.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-6 border-b border-gray-200 pb-6">
                  <span className="text-lg font-sans text-gray-400">0{idx + 1}</span>
                  <h3 className="text-4xl font-medium tracking-tight uppercase text-[#0a1128]">{category.category}</h3>
                </div>
                <ul className="space-y-5">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-4 text-2xl text-gray-700 leading-relaxed font-light">
                      <div className="w-2 h-2 bg-black rounded-full mt-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* --- Memberships & Affiliations --- */}
      <section className="py-20 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-medium">Proud Members of</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-x-32 md:gap-y-24">
            <div className="flex items-center gap-6 group transition-all duration-300">
              <div className="w-28 h-28 flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 grayscale group-hover:grayscale-0 transition-all overflow-hidden">
                <img 
                  src={wistaLogo}
                  alt="WISTA" 
                  className="max-h-full max-w-full object-contain scale-125"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://wistainternational.com/wp-content/uploads/2018/11/logo.png";
                  }}
                />
              </div>
              <span className="text-2xl font-serif tracking-tight text-gray-800">WISTA Malta</span>
            </div>

            <div className="flex items-center gap-6 group transition-all duration-300">
              <div className="w-28 h-28 flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 grayscale group-hover:grayscale-0 transition-all overflow-hidden">
                <img 
                  src={mmlaLogo}
                  alt="Malta Maritime Law Association" 
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://mmla.org.mt/wp-content/uploads/2014/11/mmla-logo-new.png";
                  }}
                />
              </div>
              <span className="text-2xl font-serif tracking-tight text-gray-800">Malta Maritime Law Association</span>
            </div>

            <div className="flex items-center gap-6 group transition-all duration-300">
              <div className="w-28 h-28 flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 grayscale group-hover:grayscale-0 transition-all overflow-hidden">
                <img 
                  src={transportMaltaLogo}
                  alt="Transport Malta" 
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-2xl font-serif tracking-tight text-gray-800">Transport Malta</span>
            </div>

            <div className="flex items-center gap-6 group transition-all duration-300">
              <div className="w-28 h-28 flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 grayscale group-hover:grayscale-0 transition-all overflow-hidden">
                <img 
                  src={smeLogo}
                  alt="Malta Chamber of SMEs" 
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-2xl font-serif tracking-tight text-gray-800 max-w-[300px] leading-tight">Malta Chamber of SMEs</span>
            </div>

            <div className="flex items-center gap-6 group transition-all duration-300">
              <div className="w-28 h-28 flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 grayscale group-hover:grayscale-0 transition-all overflow-hidden">
                <img 
                  src={syinmLogo}
                  alt="Superyacht Industry Network Malta" 
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://syinm.com/wp-content/themes/syinm/images/logo.png";
                  }}
                />
              </div>
              <span className="text-2xl font-serif tracking-tight text-gray-800 max-w-[300px] leading-tight">Superyacht Industry Network Malta</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Jobs Section --- */}
      <section id="jobs" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading>JOIN OUR TEAM</SectionHeading>
              <div className="space-y-6 text-2xl text-gray-700 font-light leading-relaxed">
                <p>
                  At Coral Marine Consultancy, we are always looking for passionate individuals who share our commitment to technical excellence and maritime innovation.
                </p>
                <p>
                  Our team consists of specialized naval architects, marine engineers, and administrative experts working on high-profile projects in the yachting and offshore sectors.
                </p>
                <div className="pt-8">
                  <div className="p-8 border border-gray-100 bg-gray-50/50 space-y-4">
                    <h4 className="text-2xl font-serif">Open Roles</h4>
                    <p className="text-xl text-gray-500">We are currently accepting applications for:</p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-xl font-medium">
                        <div className="w-1.5 h-1.5 bg-black rounded-full" />
                        Marine Engineer / Naval Architect
                      </li>
                    </ul>
                    <p className="text-xl pt-4 italic">
                      Interested candidates are invited to send their CV and cover letter to <span className="font-bold text-[#0a1128]">info@coral.com.mt</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] lg:aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop" 
                alt="Working on a yacht project" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 md:py-32 bg-[#0a1128] text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-20">
            <div>
              <SectionHeading light>Let's Navigate<br /><span className="italic">the Future.</span></SectionHeading>
              <p className="text-gray-400 mb-12 font-light text-2xl max-w-md">
                Whether you're registering under the Malta Flag or requiring technical architectural support, our team is ready to deliver.
              </p>
            </div>
            
            <div className="space-y-10 flex flex-col justify-center">
              <div className="flex items-start gap-8">
                <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center shrink-0">
                  <MapPin className="text-gray-500" size={20} />
                </div>
                <div>
                  <h4 className="text-xl uppercase tracking-widest text-white mb-3 font-semibold">Office</h4>
                  <p className="text-white font-light text-3xl leading-relaxed">
                    62, Abdilla Buildings, Flat 5,<br />
                    Old Bakery Street, Valletta,<br />
                    VLT1454, Malta
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center shrink-0">
                  <Phone className="text-gray-500" size={20} />
                </div>
                <div>
                  <h4 className="text-xl uppercase tracking-widest text-white mb-3 font-semibold">Call</h4>
                  <a href="tel:+35679468226" className="block text-white font-light text-3xl leading-relaxed hover:text-gray-300 transition-colors">+356 79468226</a>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center shrink-0">
                  <Mail className="text-gray-500" size={20} />
                </div>
                <div>
                  <h4 className="text-xl uppercase tracking-widest text-white mb-3 font-semibold">Email</h4>
                  <a href="mailto:karl@coral.com.mt" className="block text-white font-light text-3xl mb-2 leading-relaxed hover:text-gray-300 transition-colors">karl@coral.com.mt</a>
                  <a href="mailto:info@coral.com.mt" className="block text-white font-light text-3xl leading-relaxed hover:text-gray-300 transition-colors">info@coral.com.mt</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 bg-[#0a1128] text-white border-t border-white/10">
        <div className="w-full px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-start">
                <div className="font-sans font-extrabold text-5xl tracking-tighter leading-none text-white">
                  Coral.
                </div>
                <div className="text-sm uppercase tracking-[0.3em] text-white mt-3 font-light text-left">
                  Marine Consultancy & Engineering
                </div>
              </div>
            </div>
            
            <div className="text-[10px] uppercase tracking-widest text-white/80">
              Company Registration: C70918 | VAT: MT 22545218
            </div>

            <div className="text-[10px] uppercase tracking-widest text-white/80 text-center">
              © {new Date().getFullYear()} Coral Marine Consultancy. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Icons Used: Anchor, Menu, X, ChevronRight, Mail, Phone, MapPin, Linkedin, ShieldCheck
