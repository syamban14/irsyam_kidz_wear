'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCartStore } from '@/store/cartStore';

interface Props {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: Props) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product, selectedSize, selectedColor, 1);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1800);
  };

  return (
    <>
      <main className="pt-32 px-6 max-w-7xl mx-auto min-h-screen animate-fade-up">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 flex items-center gap-2 text-sm font-medium text-on-surface-variant font-body" aria-label="Breadcrumb">
          <Link className="hover:text-primary transition-colors duration-200 ease-out" href="/">Beranda</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <Link className="hover:text-primary transition-colors duration-200 ease-out" href={`/catalog?kategori=${product.category}`}>
            Koleksi {product.category}
          </Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-on-surface line-clamp-1">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Image Gallery Section */}
          <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
            {/* Main Image */}
            <div className="flex-1 rounded-3xl overflow-hidden bg-surface-container-low aspect-[4/5] relative shadow-sm">
              <img
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-300 ease-out"
                src={product.images[selectedImageIndex] || product.images[0]}
              />
              <div className="absolute top-6 right-6">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  aria-label="Simpan ke favorit"
                  className={`w-11 h-11 rounded-full backdrop-blur-md flex items-center justify-center shadow-sm transition-[colors,transform] duration-200 ease-out ${
                    isFavorite ? 'bg-rose-50 text-rose-500 scale-105' : 'bg-white/85 text-primary hover:bg-white'
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-xl"
                    style={isFavorite ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    favorite
                  </span>
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:w-20">
                {product.images.map((img, idx) => {
                  const isActive = idx === selectedImageIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      aria-label={`Foto produk ke-${idx + 1}`}
                      className={`flex-shrink-0 w-20 h-24 md:w-full rounded-2xl overflow-hidden transition-[box-shadow,opacity] duration-200 ease-out ${
                        isActive
                          ? 'ring-2 ring-primary ring-offset-2 opacity-100'
                          : 'opacity-65 hover:opacity-100'
                      }`}
                    >
                      <img alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" src={img} />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Product Details Section */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface leading-tight mb-3">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center bg-surface-container-high px-3 py-1 rounded-full">
                <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="ml-1 text-xs font-bold tabular-nums">{product.rating}</span>
                <span className="mx-2 text-outline-variant text-xs">·</span>
                <span className="text-xs font-medium text-on-surface-variant">{product.reviewsCount} ulasan pembeli</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-headline font-extrabold text-primary tabular-nums">
                  Rp{product.price.toLocaleString('id-ID')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm line-through text-outline-variant tabular-nums">
                    Rp{product.originalPrice.toLocaleString('id-ID')}
                  </span>
                )}
              </div>
            </div>

            <p className="text-sm text-on-surface-variant font-body mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selector */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <span className="block text-sm font-semibold text-on-surface-variant mb-3 font-headline">
                  Warna: <span className="text-on-surface font-bold">{selectedColor}</span>
                </span>
                <div className="flex gap-3">
                  {product.colors.map((c) => {
                    const isSelected = selectedColor === c.name;
                    return (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        style={{ backgroundColor: c.hex }}
                        aria-label={c.name}
                        className={`w-9 h-9 rounded-full ring-offset-2 transition-[box-shadow,transform] duration-200 ease-out ${
                          isSelected ? 'ring-2 ring-primary scale-110' : 'hover:scale-105'
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {/* Size Selector - Connected Segmented Toggle */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-on-surface-variant font-headline">
                  Pilih ukuran: <span className="text-on-surface font-bold">{selectedSize}</span>
                </span>
                <button
                  type="button"
                  onClick={() => setShowSizeGuide(true)}
                  className="text-xs font-semibold text-primary flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">straighten</span>
                  Panduan ukuran
                </button>
              </div>
              <div className="inline-flex p-1 bg-surface-container-high rounded-full w-full justify-between gap-1">
                {product.sizes.map((sz) => {
                  const isSelected = selectedSize === sz;
                  return (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`flex-1 py-2 px-2 rounded-full text-xs font-semibold whitespace-nowrap transition-[background-color,color] duration-200 ease-out cursor-pointer ${
                        isSelected
                          ? 'bg-primary text-on-primary font-bold shadow-sm'
                          : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="flex flex-col gap-3 mb-10">
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={`font-bold py-4 px-8 rounded-full shadow-md transition-[transform,box-shadow,background-color] duration-200 ease-out flex items-center justify-center gap-3 ${
                  isAdded
                    ? 'bg-emerald-600 text-white scale-[1.02]'
                    : 'primary-gradient text-on-primary hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
                }`}
              >
                <span className="material-symbols-outlined text-xl">
                  {isAdded ? 'check_circle' : 'shopping_bag'}
                </span>
                <span>{isAdded ? '✓ Berhasil Ditambahkan ke Keranjang!' : 'Tambah ke Keranjang'}</span>
              </button>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-2 gap-4">
              {product.features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-surface-container-low flex flex-col gap-1.5">
                  <span className="material-symbols-outlined text-primary text-xl">{feat.icon}</span>
                  <h4 className="font-bold text-sm text-on-surface">{feat.title}</h4>
                  <p className="text-xs text-on-surface-variant">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Info Sections */}
        <div className="mt-24 max-w-4xl mx-auto space-y-16">
          <section>
            <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">Cerita Produk</h3>
            <p className="text-base text-on-surface-variant leading-relaxed font-body">
              {product.story}
            </p>
          </section>

          <section className="bg-surface-container-low p-8 md:p-12 rounded-[2.5rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-lg font-headline font-bold mb-4 text-on-surface">Bahan &amp; Perawatan</h4>
                <ul className="space-y-2.5 text-sm text-on-surface-variant">
                  {product.materialsCare.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-headline font-bold mb-4 text-on-surface">Pengiriman &amp; Garansi</h4>
                <p className="text-on-surface-variant text-sm mb-4">Kebijakan belanja ramah orang tua untuk kenyamanan penuh.</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">package_2</span>
                    <div>
                      <span className="block font-bold text-sm text-on-surface">Pengiriman reguler &amp; instan</span>
                      <span className="text-xs text-on-surface-variant">Estimasi tiba 1-3 hari kerja ke seluruh Indonesia</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">assignment_return</span>
                    <div>
                      <span className="block font-bold text-sm text-on-surface">Garansi tukar ukuran 7 hari</span>
                      <span className="text-xs text-on-surface-variant">Kemudahan tukar bila ukuran pakaian kurang pas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Recommendations Section */}
        {relatedProducts.length > 0 && (
          <section className="mt-28">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-headline font-bold mb-1 text-on-surface">Pilihan Pasangan Serasi</h2>
                <p className="text-on-surface-variant text-sm font-body">Padanan manis untuk gaya si buah hati</p>
              </div>
              <Link href="/catalog" className="text-primary font-bold text-sm flex items-center gap-1.5 hover:gap-2.5 transition-[gap] duration-200 ease-out">
                Lihat semua <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <Link key={rel.id} href={`/product/${rel.id}`} className="group block">
                  <div className="aspect-[4/5] rounded-2xl bg-surface-container-lowest overflow-hidden mb-3 relative shadow-sm group-hover:shadow-md transition-shadow duration-300 ease-out">
                    <img
                      alt={rel.name}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      src={rel.images[0]}
                    />
                  </div>
                  <h4 className="font-headline font-bold text-sm md:text-base text-on-surface mb-0.5 group-hover:text-primary transition-colors duration-200 ease-out line-clamp-1">
                    {rel.name}
                  </h4>
                  <p className="text-xs md:text-sm font-bold text-primary tabular-nums">
                    Rp{rel.price.toLocaleString('id-ID')}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Interactive Size Guide Modal */}
      {showSizeGuide && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-up"
          onClick={() => setShowSizeGuide(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="size-guide-title"
        >
          <div
            className="bg-surface-container-lowest rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-outline-variant/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h3 id="size-guide-title" className="font-headline text-xl font-bold text-on-surface">
                  Panduan Ukuran Anak
                </h3>
                <p className="text-xs text-on-surface-variant font-body mt-1">
                  Pengukuran dalam sentimeter (cm) untuk potongan reguler yang nyaman.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowSizeGuide(false)}
                className="p-2 rounded-full hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                aria-label="Tutup panduan ukuran"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-outline-variant/25">
              <table className="w-full text-left text-sm font-body">
                <thead className="bg-surface-container-low font-headline text-xs font-bold text-on-surface">
                  <tr>
                    <th className="py-3 px-4">Usia</th>
                    <th className="py-3 px-4">Tinggi (cm)</th>
                    <th className="py-3 px-4">Lingkar Dada</th>
                    <th className="py-3 px-4">Panjang Baju</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/15 tabular-nums text-on-surface-variant">
                  <tr>
                    <td className="py-3 px-4 font-semibold text-on-surface">1–2 Thn</td>
                    <td className="py-3 px-4">80–92</td>
                    <td className="py-3 px-4">54 cm</td>
                    <td className="py-3 px-4">38 cm</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-on-surface">2–3 Thn</td>
                    <td className="py-3 px-4">92–100</td>
                    <td className="py-3 px-4">58 cm</td>
                    <td className="py-3 px-4">42 cm</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-on-surface">4–5 Thn</td>
                    <td className="py-3 px-4">104–112</td>
                    <td className="py-3 px-4">62 cm</td>
                    <td className="py-3 px-4">46 cm</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-on-surface">6–7 Thn</td>
                    <td className="py-3 px-4">116–124</td>
                    <td className="py-3 px-4">66 cm</td>
                    <td className="py-3 px-4">50 cm</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-on-surface">8–9 Thn</td>
                    <td className="py-3 px-4">128–136</td>
                    <td className="py-3 px-4">70 cm</td>
                    <td className="py-3 px-4">54 cm</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-xs text-on-surface-variant font-body mt-4 leading-relaxed">
              Tips Bunda: Jika tinggi badan si kecil berada di antara dua ukuran, pilih satu ukuran lebih besar agar lebih leluasa bergerak.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
