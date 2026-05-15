import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Layers } from "lucide-react";
import { motion } from "motion/react";

const SERVICES_DATA = {
  "custom-manufacturing": {
    title: "Custom Manufacturing",
    images: [
      "https://images.unsplash.com/photo-1563725514652-32b0af860dff?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621832049874-5ea27b314fba?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Layanan plastic injection dan extrusion molding presisi tinggi untuk memproduksi komponen sesuai spesifikasi unik produk Anda.",
    details: [
      "Kapasitas mesin 90 ton - 1000 ton.",
      "Custom mold design and fabrication.",
      "Proses injeksi plastik presisi tinggi.",
      "Material pendukung lengkap (ABS, PC, Nylon, dll)."
    ]
  },
  "trading": {
    title: "Raw Material Trading",
    images: [
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596707323861-55bb24430e39?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Distribusi biji plastik murni (Virgin Resin) seperti HDPE, LDPE, PP, dan PET dari produsen petrokimia global terbaik.",
    details: [
      "Pasokan stabil dari produsen petrokimia top dunia.",
      "Harga sangat kompetitif untuk pembelian grosir/volume besar.",
      "Layanan distribusi ke seluruh area industri di Indonesia.",
      "Varian virgin & recycled material tersedia."
    ]
  },
  "quality-assurance": {
    title: "Quality Assurance",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574045544186-b4a1b02b545d?q=80&w=2070&auto=format&fit=crop"
    ],
    description: "Tim teknis kami memonitor proses kontrol kualitas mesin secara ketat untuk menjamin hasil sesuai standar toleransi klien.",
    details: [
      "Peralatan pengujian kualitas lab berstandar internasional.",
      "Sertifikasi ISO untuk sistem manajemen kualitas.",
      "Inspeksi dimensi, kekuatan mekanis, dan ketahanan suhu.",
      "Tracing material & detail reporting untuk klien."
    ]
  }
};

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES_DATA[id as keyof typeof SERVICES_DATA];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    setSelectedImageIndex(0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Layanan tidak ditemukan</h1>
          <Link to="/" className="text-red-600 font-bold hover:underline">Kembali ke Beranda</Link>
        </div>
      </div>
    );
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      {/* HEADER SMALL */}
      <header className="fixed top-0 w-full bg-white border-b border-zinc-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-xl flex items-center justify-center">
              <Layers className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight uppercase">
              Sailul<span className="text-red-600">Hikmah</span>
            </span>
          </Link>
          <Link to="/" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-zinc-500 hover:text-red-600 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Kembali
          </Link>
        </div>
      </header>

      {/* DETAIL CONTENT */}
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-red-600 transition-colors mb-8">
              <ArrowLeft className="w-3 h-3" /> Kembali ke Layanan
            </Link>

            <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6 text-zinc-900">
              <span className="font-bold">{service.title}</span>
            </h1>
            
            <p className="text-lg text-zinc-600 leading-relaxed max-w-2xl mb-12">
              {service.description}
            </p>

            <div className="mb-16">
              <div className="w-full h-[400px] sm:h-[500px] mb-4 rounded-3xl overflow-hidden shadow-sm border border-zinc-200">
                <img src={service.images[selectedImageIndex]} alt={service.title} className="w-full h-full object-cover transition-opacity duration-300" />
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
                {service.images.map((img, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-32 h-24 sm:w-40 sm:h-28 rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer snap-start transition-all border-2 ${selectedImageIndex === idx ? 'border-red-600 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`${service.title} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-zinc-200">
              <h3 className="font-display text-xl border-b border-zinc-100 pb-4 font-bold mb-8 text-zinc-900">Detail & Fitur Utama</h3>
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
                {service.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 mt-0.5 rounded-full bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <span className="text-zinc-600 leading-relaxed text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/#contact" className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-red-600 rounded-xl hover:bg-red-700 transition-colors shadow-sm">
                Konsultasikan Kebutuhan Anda
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
