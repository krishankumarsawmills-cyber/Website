/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Mail, MapPin, 
  ChevronRight, Award, ShieldCheck, 
  Clock, ArrowRight, Home, Layers, Dot, Instagram, MessageCircle
} from 'lucide-react';

const PRODUCT_CATEGORIES = [
  {
    title: "Premium Plywood",
    description: "High-density plywood with superior resistance to water and termites. Ideal for all commercial and residential architectural projects.",
    image: "./regenerated_image_1777394122888.png",
    features: ["BWP Grade", "Calibrated Core", "Anti-Termite Treatment"]
  },
  {
    title: "Block Boards",
    description: "Exceptionally strong block boards providing excellent structural stability and durability for heavy-duty applications and furniture.",
    image: "https://images.unsplash.com/photo-1549488344-c6b75ebdb594?auto=format&fit=crop&q=80&w=1200",
    features: ["Pinewood Core", "High Load Bearing", "Zero Bending"]
  },
  {
    title: "Flush Doors",
    description: "Solid core flush doors designed for long-lasting strength and aesthetic elegance. Compatible with various veneers and laminates.",
    image: "https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?auto=format&fit=crop&q=80&w=1200",
    features: ["Kiln-Seasoned Wood", "Impact Proof", "Custom Finishes"]
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+919355558099";
  };

  const handleProductInquiry = (productTitle: string) => {
    const selectEl = document.getElementById('inquiry-type') as HTMLSelectElement;
    if (selectEl) {
      Array.from(selectEl.options).forEach((opt, idx) => {
        if (opt.text.toLowerCase().includes(productTitle.toLowerCase().split(' ')[1] || productTitle.toLowerCase())) {
          selectEl.selectedIndex = idx;
        }
      });
    }
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream/90 backdrop-blur shadow-sm py-4 border-b border-sage' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#home"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex items-center space-x-4 bg-white/20 p-2 pr-6 rounded-full backdrop-blur-md shadow-lg border border-white/30 transform hover:scale-105 transition-all"
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner overflow-hidden border-2 border-forest-mid p-1">
              <img 
                src="./regenerated_image_1777394125920.png"
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-4xl leading-none font-extrabold text-forest-dark tracking-wide drop-shadow-sm">KRISHAN KUMAR</span>
              <span className="text-sm tracking-[0.4em] font-bold text-forest-mid mt-1 uppercase text-shadow-sm border-b border-forest-mid/30 pb-1">Saw Mills</span>
            </div>
          </motion.a>

          <div className="hidden md:flex items-center space-x-10 text-xs font-semibold tracking-widest uppercase">
            {['Home', 'Products', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-forest-mid hover:text-forest-dark transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-forest-mid transition-all group-hover:w-full" />
              </a>
            ))}
            <button onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }} className="bg-forest-mid text-cream px-6 py-3 rounded-full hover:bg-forest-dark transition-all text-[10px] font-bold cursor-pointer hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0">
              GET A QUOTE
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="text-forest-dark" /> : <Menu className="text-forest-dark" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-6 text-xl font-display">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="border-b border-sage pb-2 text-forest-dark">
                  {item}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="bg-forest-mid text-cream px-8 py-4 rounded-full mt-4 font-bold active:bg-forest-dark cursor-pointer"
              >
                GET A QUOTE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-cream/70 z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&q=80&w=2000" 
            alt="Forest backdrop" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className="w-12 h-[1px] bg-forest-mid"></span>
                <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-forest-mid">Established in 2016</h2>
              </div>
              <motion.h1 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl font-display leading-[0.9] mb-8 text-forest-dark drop-shadow-sm"
              >
                Premium Timber <span className="italic text-forest-light">Rooted in Quality.</span>
              </motion.h1>
              <p className="text-lg text-forest-mid/80 mb-10 max-w-xl font-serif italic text-xl leading-relaxed">
                Specializing in high-density plywood, block boards, and solid flush doors. We provide the strength your dream architecture deserves.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mt-12 items-center">
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-forest-dark text-white px-10 py-5 rounded-full flex items-center justify-center space-x-2 group hover:shadow-xl hover:bg-forest-mid transition-all w-full sm:w-auto font-bold tracking-wide"
                >
                  <span>EXPLORE OUR RANGE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleCall}
                  className="text-forest-dark hover:text-forest-mid underline underline-offset-8 decoration-sage font-bold tracking-widest text-sm flex items-center space-x-2 cursor-pointer"
                >
                  <Phone className="w-5 h-5" />
                  <span>DIRECT INQUIRY ON CALL</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-forest-mid mb-4 italic">Craftsmanship</h2>
              <h3 className="text-4xl md:text-5xl font-display text-forest-dark">Durable. Robust. Precise.</h3>
            </div>
            <p className="max-w-md text-forest-mid font-serif leading-relaxed">
              From marine-grade plywood to architect-choice flush doors, we deliver timber that withstands time and climate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PRODUCT_CATEGORIES.map((category, idx) => (
              <motion.div 
                key={idx}
                onClick={() => handleProductInquiry(category.title)}
                className="group cursor-pointer bg-white p-6 rounded-[32px] border border-sage hover:border-forest-mid transition-all duration-500 hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-8">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-forest-dark/10 group-hover:bg-forest-dark/0 transition-all duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="bg-cream/90 backdrop-blur p-4 rounded-xl shadow-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-forest-mid">Quality Inspected</span>
                      <p className="text-xs mt-1 text-forest-dark">Grade A Timber</p>
                    </div>
                    <div className="w-12 h-12 bg-forest-mid rounded-full flex items-center justify-center shadow-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100 ring-4 ring-cream/50 cursor-pointer hover:bg-forest-dark hover:scale-110">
                       <ArrowRight className="w-5 h-5 text-cream" />
                    </div>
                  </div>
                </div>
                <h4 className="text-2xl font-display mb-4 flex items-center text-forest-dark">
                  {category.title}
                  <Dot className="text-forest-light mx-2" />
                </h4>
                <p className="text-forest-mid mb-6 font-serif">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {category.features.map((feature, fIdx) => (
                    <span key={fIdx} className="text-[10px] font-bold tracking-wider uppercase border border-sage bg-sage/30 px-3 py-1 rounded-full text-forest-mid">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-forest-dark text-cream relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-forest-light mb-4 italic">The Legacy</h2>
              <h3 className="text-4xl md:text-5xl font-display mb-8 text-cream">Krishan Kumar Saw Mills</h3>
              <p className="text-cream/70 mb-12 font-serif text-lg italic leading-relaxed">
                "Rooted in Yamuna Nagar since 2016, we've dedicated ourselves to the mastery of timber. Our journey is built on the promise of providing the most reliable woodwork for homes and industries alike."
              </p>
              
              <div className="grid grid-cols-2 gap-10">
                <div className="relative z-10 group">
                   <div className="text-5xl font-display text-forest-light mb-2 group-hover:scale-110 transition-transform origin-left">9+</div>
                   <div className="text-[10px] uppercase tracking-widest font-bold text-cream/50">Years of Growth</div>
                </div>
                <div className="relative z-10 group">
                   <div className="text-5xl font-display text-forest-light mb-2 group-hover:scale-110 transition-transform origin-left">100%</div>
                   <div className="text-[10px] uppercase tracking-widest font-bold text-cream/50">Solid Core Timber</div>
                </div>
              </div>
            </motion.div>

            <div className="relative group perspective-1000">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden relative border border-cream/10 animate-float animate-pulse-glow">
                <img 
                  src="./regenerated_image_1777394117210.png" 
                  alt="Timber Processing" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-forest-dark/40 group-hover:bg-forest-dark/20 transition-all duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <img 
                     src="./regenerated_image_1777394125920.png"
                     className="w-48 h-48 opacity-40 filter drop-shadow-xl"
                     alt="Watermark logo"
                   />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Inquiry Cards */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Premium Plywood", desc: "Heavy-duty BWP/BWR sheets designed for all interiors and large-scale projects.", icon: Layers },
                { title: "Block Boards", desc: "Solid pine wood core block boards for heavy load-bearing furniture and applications.", icon: ShieldCheck },
                { title: "Flush Doors", desc: "Functional elegance for modern homes, highly durable and impact resistant.", icon: Home }
              ].map((item, idx) => (
                <button 
                  key={idx} 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white p-10 rounded-[2.5rem] border border-sage hover:border-forest-light hover:shadow-2xl transition-all duration-300 group h-full text-left flex flex-col justify-between items-start transform hover:-translate-y-2 cursor-pointer outline-none focus:ring-4 focus:ring-forest-light/20"
                >
                   <div>
                     <div className="w-14 h-14 bg-sage/30 rounded-2xl flex items-center justify-center text-forest-mid mb-8 group-hover:bg-forest-light group-hover:text-white transition-colors duration-300">
                        <item.icon className="w-6 h-6" />
                     </div>
                     <h3 className="font-display text-2xl mb-4 text-forest-dark group-hover:text-forest-light transition-colors">{item.title}</h3>
                     <p className="text-forest-mid text-sm leading-relaxed mb-6">{item.desc}</p>
                   </div>
                   <div className="flex items-center text-forest-mid group-hover:text-forest-light font-bold text-xs tracking-widest mt-4">
                     <span className="mr-2 uppercase">Inquire Now</span>
                     <ArrowRight className="group-hover:translate-x-3 transition-transform duration-300" />
                   </div>
                </button>
              ))}
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[4rem] overflow-hidden border border-sage shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-20 bg-sage/10">
                <h2 className="text-xs font-semibold tracking-[0.3em] uppercase text-forest-mid mb-4">Direct Connection</h2>
                <h3 className="text-4xl font-display mb-10 text-forest-dark">Request a Callback</h3>
                
                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white border border-sage rounded-3xl p-10 text-center"
                  >
                    <div className="w-20 h-20 bg-sage/30 rounded-full flex items-center justify-center mx-auto mb-6 text-forest-mid">
                      <ShieldCheck className="w-10 h-10" />
                    </div>
                    <h4 className="text-3xl font-display text-forest-dark mb-4">Request Received</h4>
                    <p className="text-forest-mid mb-8">Thank you for your interest! We will review your request and call you back shortly.</p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="bg-forest-mid text-cream px-8 py-4 rounded-full font-bold tracking-widest text-xs hover:bg-forest-dark transition-all cursor-pointer"
                    >
                      SEND ANOTHER REQUEST
                    </button>
                  </motion.div>
                ) : (
                  <form 
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const name = formData.get('fullName');
                      const phone = formData.get('phone');
                      const interest = formData.get('interest');
                      
                      const message = `Hello Krishan Kumar Saw Mills, I would like to request a callback.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Interested In:* ${interest}`;
                      const whatsappUrl = `https://wa.me/919355558099?text=${encodeURIComponent(message)}`;
                      
                      window.open(whatsappUrl, '_blank');
                      setFormSubmitted(true);
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-forest-mid block mb-2">Full Name</label>
                        <input name="fullName" required type="text" className="w-full bg-white border border-sage rounded-xl p-4 outline-none focus:border-forest-mid transition-colors font-sans text-forest-dark" placeholder="e.g. Rahul Sharma" />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-forest-mid block mb-2">Phone</label>
                        <input name="phone" required type="tel" className="w-full bg-white border border-sage rounded-xl p-4 outline-none focus:border-forest-mid transition-colors font-sans text-forest-dark" placeholder="+91 93555 58099" />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-forest-mid block mb-2">I am looking for</label>
                      <select name="interest" id="inquiry-type" className="w-full bg-white border border-sage rounded-xl p-4 outline-none focus:border-forest-mid transition-colors cursor-pointer font-sans text-forest-dark">
                        <option>Plywood Catalog & Pricing</option>
                        <option>Block Boards Detail</option>
                        <option>Flush Doors Bulk Inquiry</option>
                        <option>Mixed Order / Other</option>
                      </select>
                    </div>
                    <button 
                      type="submit"
                      className="bg-forest-mid text-cream w-full py-5 rounded-full text-xs font-bold tracking-[0.2em] shadow-lg hover:bg-forest-dark transition-all focus:ring-4 focus:ring-forest-mid/30 cursor-pointer"
                    >
                      SCHEDULE A CALL
                    </button>
                  </form>
                )}
              </div>

              <div className="bg-forest-dark text-cream p-12 md:p-20 relative flex flex-col justify-between">
                <div>
                   <h4 className="text-2xl font-display mb-12 text-cream">Yamuna Nagar Office</h4>
                   <div className="space-y-10">
                       {[
                        { 
                          icon: MapPin, title: "Location", 
                          detail: "Chenati Road, Jagadhari, Haryana - 135003",
                          link: "https://maps.google.com/?q=Chenati+Road,Jagadhari,Haryana,135003" 
                        },
                        { 
                          icon: Phone, title: "Owner Direct", detail: "+91 93555 58099",
                          link: "tel:+919355558099"
                        },
                        { 
                          icon: Mail, title: "Official Email", detail: "krishankumarsawmills@gmail.com",
                          link: "mailto:krishankumarsawmills@gmail.com"
                        }
                      ].map((item, idx) => (
                        <a 
                          key={idx} 
                          href={item.link}
                          target={item.icon === MapPin ? "_blank" : "_self"}
                          rel="noreferrer"
                          className="flex items-start space-x-6 group cursor-pointer hover:bg-white/5 p-4 -ml-4 rounded-2xl transition-colors"
                        >
                           <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-forest-light transition-colors">
                              <item.icon className="w-4 h-4 text-forest-light group-hover:text-forest-dark transition-colors" />
                           </div>
                           <div>
                              <div className="text-[10px] uppercase tracking-widest font-bold text-forest-mid mb-1">{item.title}</div>
                              <div className="text-cream font-serif italic text-lg opacity-90 group-hover:opacity-100 transition-opacity">{item.detail}</div>
                           </div>
                        </a>
                      ))}
                   </div>
                </div>

                <div className="mt-12 pt-8 border-t border-cream/10">
                   <h4 className="text-[10px] tracking-[0.3em] text-forest-light font-bold uppercase mb-6">Social Connect</h4>
                   <div className="flex flex-wrap gap-4">
                     <a href="https://www.instagram.com/krishan_kumar_saw_mills?igsh=MXNmNTRsdzBiMW55ZQ==" target="_blank" rel="noreferrer" className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-full transition-all border border-white/5 hover:border-white/20">
                       <Instagram className="w-5 h-5 text-pink-400" />
                       <span className="text-cream text-xs font-bold tracking-widest uppercase">Instagram</span>
                     </a>
                     <a href="https://wa.me/919355558099" target="_blank" rel="noreferrer" className="flex items-center space-x-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 px-6 py-4 rounded-full transition-all border border-[#25D366]/20 hover:border-[#25D366]/40">
                       <MessageCircle className="w-5 h-5 text-[#25D366]" />
                       <span className="text-[#25D366] text-xs font-bold tracking-widest uppercase">WhatsApp</span>
                     </a>
                   </div>
                </div>

                <div className="mt-12 pt-8 border-t border-cream/10">
                    <p className="text-cream/40 text-[10px] tracking-widest leading-relaxed">
                      REGISTERED TIMBER DEALER • QUALITY ASSURED SINCE 2016 • JAGADHARI, HARYANA
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cream py-12 border-t border-sage">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-4 opacity-100 bg-white/20 p-2 pr-6 rounded-full">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1">
                <img 
                  src="./regenerated_image_1777394125920.png"
                  className="w-full h-full object-contain"
                  alt="Logo grayscale"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl md:text-3xl leading-none font-bold text-forest-dark uppercase">Krishan Kumar</span>
                <span className="text-xs tracking-[0.3em] font-bold text-forest-mid uppercase mt-0.5">Saw Mills</span>
              </div>
            </div>
            
            <div className="flex space-x-8 text-[10px] font-bold tracking-widest uppercase text-forest-mid">
               <a href="#" className="hover:text-forest-dark transition-colors">Privacy</a>
               <a href="tel:+919355558099" className="hover:text-forest-dark transition-colors">Contact</a>
               <a href="https://maps.google.com/?q=Chenati+Road,Jagadhari,Haryana,135003" target="_blank" rel="noreferrer" className="hover:text-forest-dark transition-colors">Location</a>
            </div>

            <p className="text-[10px] text-forest-mid/60 tracking-widest uppercase">
              © {new Date().getFullYear()} Krishan Kumar Saw Mills • Est. 2016
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
