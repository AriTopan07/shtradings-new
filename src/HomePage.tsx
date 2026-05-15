import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Factory, 
  Globe, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Package, 
  Recycle, 
  Droplets,
  Layers,
  CheckCircle2,
  Check,
  Menu,
  X,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans overflow-x-hidden">
      {/* HEADER / NAV */}
      <header className="fixed top-0 w-full bg-white border-b border-zinc-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-xl flex items-center justify-center">
              <Layers className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight uppercase">
              Sailul<span className="text-red-600">Hikmah</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors">Tentang Kami</a>
            <a href="#services" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors">Layanan</a>
            <a href="#portfolio" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors">Portofolio</a>
            <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors">Kontak</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-colors">
              Minta Penawaran
            </a>
            <button 
              className="md:hidden flex items-center justify-center p-2 text-zinc-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-zinc-200 bg-white overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-6">
                <a onClick={() => setIsMobileMenuOpen(false)} href="#about" className="text-sm font-bold uppercase tracking-widest text-zinc-900">Tentang Kami</a>
                <a onClick={() => setIsMobileMenuOpen(false)} href="#services" className="text-sm font-bold uppercase tracking-widest text-zinc-900">Layanan</a>
                <a onClick={() => setIsMobileMenuOpen(false)} href="#portfolio" className="text-sm font-bold uppercase tracking-widest text-zinc-900">Portofolio</a>
                <a onClick={() => setIsMobileMenuOpen(false)} href="#contact" className="text-sm font-bold uppercase tracking-widest text-zinc-900">Kontak</a>
                <a onClick={() => setIsMobileMenuOpen(false)} href="#contact" className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest text-white bg-zinc-900 rounded-xl mt-4">
                  Minta Penawaran
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#fcfcfc] text-zinc-900 border-b border-zinc-200">
        {/* Grid Background spanning entire section */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="flex flex-col gap-6 relative z-20"
          >
            <motion.div variants={fadeInUp} className="text-red-600 font-bold text-xs uppercase tracking-widest">
              Manufaktur & Trading Plastik
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-6xl font-medium leading-tight tracking-tight">
              Solusi Plastik <br/>
              <span className="font-bold text-zinc-900">Presisi Tinggi.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg text-zinc-500 max-w-lg leading-relaxed">
              Kami menyediakan material plastik berkualitas global dan layanan manufaktur custom untuk mendukung inovasi industri modern Anda.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <a href="#portfolio" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2">
                Lihat Produk <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all">
                Hubungi Kami
              </a>
            </motion.div>
          </motion.div>

          {/* Abstract Hero Visualization (SVG/Illustration-like) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1 }}
            className="hidden md:flex relative h-[500px] w-full items-center justify-center"
          >
            {/* Connection Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-200 -translate-y-1/2 z-0"></div>
            
            {/* Left Node: Raw Materials */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center shadow-lg z-10">
              <Recycle className="w-8 h-8 text-emerald-500" />
            </div>
            
            {/* Right Node: Finished Product */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-white border border-zinc-200 rounded-2xl flex items-center justify-center shadow-lg z-10">
              <Package className="w-8 h-8 text-zinc-900" />
            </div>

            {/* Particles Flowing */}
            <motion.div 
              animate={{ left: ["0%", "50%"], opacity: [0, 1, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }} 
              className="absolute top-1/2 w-3 h-3 bg-emerald-500 rounded-full -translate-y-1/2 z-0 -mt-[1px]"
            />
            <motion.div 
              animate={{ left: ["50%", "100%"], opacity: [0, 1, 0] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1 }} 
              className="absolute top-1/2 w-3 h-3 bg-red-600 rounded-full -translate-y-1/2 z-0 -mt-[1px]"
            />
            
            {/* Center Node: Factory/Molding */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
              className="relative z-20 w-48 h-48 bg-white rounded-[2rem] shadow-xl border border-zinc-100 flex flex-col items-center justify-center gap-2"
            >
              <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mb-2">
                <Factory className="w-10 h-10 text-red-600" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Processing</div>
              
              {/* Spinning Gears */}
              <div className="absolute -top-6 -right-4 w-28 h-28">
                {/* Large Gear */}
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ repeat: Infinity, duration: 12, ease: "linear" }} 
                  className="absolute top-0 right-2 text-zinc-900 drop-shadow-sm"
                >
                  <Settings className="w-14 h-14" />
                </motion.div>
                
                {/* Medium Gear */}
                <motion.div 
                  animate={{ rotate: -360 }} 
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }} 
                  className="absolute top-11 right-12 text-red-600 drop-shadow-sm"
                >
                  <Settings className="w-10 h-10" />
                </motion.div>
                
                {/* Small Gear */}
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ repeat: Infinity, duration: 6, ease: "linear" }} 
                  className="absolute top-16 right-5 text-zinc-400 drop-shadow-sm"
                >
                  <Settings className="w-7 h-7" />
                </motion.div>
              </div>
              
              {/* Droplets icon */}
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} 
                className="absolute -bottom-5 -left-5 w-14 h-14 bg-white border border-zinc-200 rounded-xl flex items-center justify-center shadow-lg"
              >
                <Droplets className="w-6 h-6 text-blue-500" />
              </motion.div>
            </motion.div>
            
            {/* Floating UI Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute left-8 top-1/4 -translate-y-10 bg-white border border-zinc-200 p-4 rounded-xl shadow-xl flex items-center gap-4 z-30"
            >
              <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center text-red-600 rounded-lg"><CheckCircle2 className="w-5 h-5" /></div>
              <div>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Sertifikasi ISO</p>
                <p className="font-bold text-sm text-zinc-900">Standar Global</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute right-8 bottom-1/4 translate-y-10 bg-white border border-zinc-200 p-4 z-30 rounded-xl shadow-xl flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-white rounded-lg"><ShieldCheck className="w-5 h-5" /></div>
              <div>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Quality Control</p>
                <p className="font-bold text-sm text-zinc-900">Presisi Tinggi</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES SECTION */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12 pt-8"
          >
            {/* Capability 1 */}
            <motion.div variants={fadeInUp} className="relative bg-zinc-50 rounded-2xl p-8 pt-12 md:pt-14 text-center shadow-sm border border-zinc-100">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-red-600 rounded-full border-[6px] border-white flex items-center justify-center text-white shadow-sm">
                <Check className="w-5 h-5 flex-shrink-0" strokeWidth={3} />
              </div>
              <h4 className="font-display font-bold text-zinc-900 text-base md:text-lg mb-4">Jasa Injection</h4>
              <p className="text-zinc-500 text-sm md:text-base">"Dengan mesin injeksi berkapasistas 90 ton - 1000 ton"</p>
            </motion.div>

            {/* Capability 2 */}
            <motion.div variants={fadeInUp} className="relative bg-zinc-50 rounded-2xl p-8 pt-12 md:pt-14 text-center shadow-sm border border-zinc-100">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-red-600 rounded-full border-[6px] border-white flex items-center justify-center text-white shadow-sm">
                <Check className="w-5 h-5 flex-shrink-0" strokeWidth={3} />
              </div>
              <h4 className="font-display font-bold text-zinc-900 text-base md:text-lg mb-4">Jasa Pembuatan Sparepart dan Moulding</h4>
              <p className="text-zinc-500 text-sm md:text-base">Jasa CNC - Jasa EDM - Jasa Bubut - Jasa Grinding</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT PARTNERS */}
      <section className="py-12 border-b border-zinc-200 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center">
          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6 md:mb-0 md:mr-8 whitespace-nowrap shrink-0">Dipercaya oleh industri terkemuka</p>
          <div className="flex-grow overflow-hidden relative">
            {/* Gradient masks for smooth fading at edges */}
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <motion.div 
              animate={{ x: ["0%", "-33.333333%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="flex items-center opacity-40 grayscale whitespace-nowrap w-max"
            >
              {/* Need to repeat logos to create seamless loop */}
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center pr-16 gap-16">
                  <div className="text-xl font-display font-medium uppercase tracking-tight">AUTO<span className="font-light">MAX</span></div>
                  <div className="text-xl font-display font-medium uppercase tracking-tight">Pack<span className="italic">Systems</span></div>
                  <div className="text-xl font-display font-medium uppercase tracking-tighter">TECHBUILD</div>
                  <div className="text-xl font-display font-medium uppercase tracking-tight">Medi<span className="font-serif">Plast</span></div>
                  <div className="text-xl font-display font-medium uppercase tracking-tight">POLY<span className="font-light">INNOV</span></div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-[4/3] bg-zinc-200 border border-zinc-200 relative rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
                  alt="Plastic Pellets" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="flex flex-col gap-6"
            >
              <h2 className="text-red-600 font-bold tracking-widest text-[10px] uppercase">Tentang Sailul Hikmah</h2>
              <h3 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-tight">
                Inovator Material Plastik <span className="font-bold">Terpercaya</span>
               </h3>
              <p className="text-zinc-500 text-lg leading-relaxed">
                Sailul Hikmah Manufacture Trading telah melayani berbagai sektor industri sejak 2010. Kami memadukan keunggulan dalam proses manufaktur (injeksi dan ekstrusi) dengan jaringan pasokan global untuk trading biji plastik.
              </p>
              <div className="space-y-6 mt-4">
                {[
                  "Fasilitas produksi modern berstandar internasional.",
                  "Jaringan supply material virgin & daur ulang kualitas premium.",
                  "Komitmen penuh terhadap keberlanjutan dan lingkungan."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-zinc-200 bg-white rounded-2xl">
                    <div className="w-8 h-8 bg-zinc-100 flex items-center justify-center text-sm font-bold text-zinc-400 p-2 shrink-0 rounded-lg">0{i+1}</div>
                    <span className="text-zinc-600 text-sm align-middle self-center">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-12 border-t border-zinc-200 pt-8 mt-4">
                <div>
                  <div className="font-display text-4xl font-medium tracking-tight text-zinc-900 mb-1">14+</div>
                  <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Tahun Pengalaman</div>
                </div>
                <div>
                  <div className="font-display text-4xl font-medium tracking-tight text-zinc-900 mb-1">500+</div>
                  <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Klien Aktif</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-white border-b border-zinc-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-zinc-400 font-bold tracking-widest text-[10px] uppercase mb-4">Layanan Kami</h2>
              <h3 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-zinc-900">
                Lebih Dari <span className="font-bold">Sekadar Pemasok</span>
              </h3>
            </div>
            <p className="text-zinc-500 text-sm max-w-sm">
              Solusi ujung-ke-ujung (end-to-end) mulai dari penyediaan raw material hingga custom manufacturing komponen plastik.
            </p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Service 1 */}
            <motion.div variants={fadeInUp} className="group bg-white hover:border-red-600 transition-all flex flex-col min-h-[300px] rounded-3xl overflow-hidden shadow-sm border border-zinc-100">
              <div className="relative h-48 w-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1563725514652-32b0af860dff?q=80&w=2070&auto=format&fit=crop" alt="Custom Manufacturing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Factory className="w-5 h-5 text-red-600" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="font-display font-bold text-sm uppercase mb-3 text-zinc-900">Custom Manufacturing</h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">
                  Layanan plastic injection dan extrusion molding presisi tinggi untuk memproduksi komponen sesuai spesifikasi unik produk Anda.
                </p>
                <Link to="/services/custom-manufacturing" className="text-red-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Lihat Detail <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeInUp} className="group bg-white hover:border-red-600 transition-all flex flex-col min-h-[300px] rounded-3xl overflow-hidden shadow-sm border border-zinc-100">
              <div className="relative h-48 w-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop" alt="Raw Material Trading" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Globe className="w-5 h-5 text-red-600" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="font-display font-bold text-sm uppercase mb-3 text-zinc-900">Raw Material Trading</h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">
                  Distribusi biji plastik murni (Virgin Resin) seperti HDPE, LDPE, PP, dan PET dari produsen petrokimia global terbaik.
                </p>
                <Link to="/services/trading" className="text-red-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Lihat Detail <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeInUp} className="group bg-white hover:border-red-600 transition-all flex flex-col min-h-[300px] rounded-3xl overflow-hidden shadow-sm border border-zinc-100">
              <div className="relative h-48 w-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt="Quality Assurance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                  <ShieldCheck className="w-5 h-5 text-red-600" />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="font-display font-bold text-sm uppercase mb-3 text-zinc-900">Quality Assurance</h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">
                  Tim teknis kami memonitor proses kontrol kualitas mesin secara ketat untuk menjamin hasil sesuai standar toleransi klien.
                </p>
                <Link to="/services/quality-assurance" className="text-red-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                  Lihat Detail <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl border-l border-zinc-300 pl-6">
              <h2 className="text-red-600 font-bold tracking-widest text-[10px] uppercase mb-4">Portofolio Produk</h2>
              <h3 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-zinc-900">Kualitas <span className="font-bold">di Setiap Butiran</span></h3>
            </div>
            <a href="#contact" className="px-6 py-2 border border-zinc-200 bg-white hover:bg-zinc-100 text-[10px] uppercase font-bold tracking-widest transition-colors flex items-center gap-2 rounded-full">
              Request Katalog <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Product 1 */}
            <div className="group relative border border-zinc-200 bg-white overflow-hidden p-6 hover:border-red-600 transition-colors h-[400px] flex flex-col justify-between rounded-3xl">
              <div>
                <Droplets className="w-6 h-6 text-red-600 mb-4" />
                <h4 className="font-display font-bold text-sm uppercase mb-2">Virgin Resin</h4>
                <p className="text-zinc-500 text-xs">(HDPE/PP/LDPE)</p>
              </div>
              <div className="relative h-40 w-full mt-6 opacity-90 group-hover:opacity-100 transition-all">
                <img src="https://images.unsplash.com/photo-1596707323861-55bb24430e39?q=80&w=2070&auto=format&fit=crop" alt="Virgin Resin" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Product 2 */}
            <div className="group relative border border-zinc-200 bg-white overflow-hidden p-6 hover:border-red-600 transition-colors h-[400px] flex flex-col justify-between rounded-3xl">
              <div>
                <Recycle className="w-6 h-6 text-red-600 mb-4" />
                <h4 className="font-display font-bold text-sm uppercase mb-2">Eco-Recycled Res</h4>
                <p className="text-zinc-500 text-xs">Post-Consumer Recycled</p>
              </div>
              <div className="relative h-40 w-full mt-6 opacity-90 group-hover:opacity-100 transition-all">
                <img src="https://images.unsplash.com/photo-1605600659901-af5200b3bd2a?q=80&w=1964&auto=format&fit=crop" alt="Recycled Plastics" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Product 3 */}
            <div className="lg:col-span-2 group relative border border-zinc-200 bg-white overflow-hidden p-6 hover:border-red-600 transition-colors h-[400px] flex flex-col justify-between md:flex-row md:items-end rounded-3xl">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <Package className="w-6 h-6 text-red-600 mb-4" />
                <h4 className="font-display font-bold text-sm uppercase mb-2">Custom Parts</h4>
                <p className="text-zinc-500 text-xs max-w-[200px]">Komponen presisi untuk industri otomotif & elektronik dengan cetakan injeksi.</p>
              </div>
              <div className="relative h-40 md:h-full md:w-1/2 md:absolute top-0 right-0 opacity-90 group-hover:opacity-100 transition-all">
                <img src="https://images.unsplash.com/photo-1621832049874-5ea27b314fba?q=80&w=2070&auto=format&fit=crop" alt="Custom Injection Parts" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="bg-zinc-50 border-t border-zinc-200 text-zinc-900 pt-20 pb-10 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 border-b border-zinc-200 pb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-red-600 rounded-xl flex items-center justify-center">
                  <Layers className="text-white w-5 h-5" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight uppercase">
                  Sailul<span className="text-red-600">Hikmah</span>
                </span>
              </div>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                Manufaktur presisi material plastik berpengalaman. Kami berdedikasi untuk memberikan kualitas dan layanan terbaik bagi pertumbuhan industri Anda.
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-zinc-400">Kantor Pusat</h3>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 mb-2">HEAD OFFICE SIDOARJO</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Kawasan Industri Dan Pergudangan Sinar Gedangan, D, 23, Gemurung, Gedangan, Kab. Sidoarjo, Jawa Timur, 61254
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-zinc-400">Hubungi Kami</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">+62 812-3440-7108 (Whatsapp)</p>
                    <p className="text-sm text-zinc-500">+62 31 99039743 (Kantor)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-red-600 shrink-0" />
                  <p className="text-sm text-zinc-500">sailulhikmah1291@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold">
            <div className="text-zinc-400 tracking-widest flex flex-col gap-2 md:flex-row items-center">
              <span>&copy; {new Date().getFullYear()} Sailul Hikmah Manufacture Trading</span>
              <span className="hidden md:inline-block text-zinc-300">•</span>
              <span className="normal-case tracking-normal text-zinc-500 font-medium">
                Crafted with ❤️ by <a href="https://ariradev.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">Ariradev</a>
              </span>
            </div>
            <div className="flex gap-6 italic text-zinc-400 tracking-widest">
              <span>Precision</span>
              <span>Integrity</span>
              <span>Innovation</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
