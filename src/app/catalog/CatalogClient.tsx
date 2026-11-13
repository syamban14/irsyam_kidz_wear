'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { PRODUCTS, Product } from '@/data/products';
import { useCartStore } from '@/store/cartStore';

export default function CatalogClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read current filters from URL
  const selectedCategory = searchParams.get('kategori') || 'semua';
  const selectedSize = searchParams.get('ukuran') || 'semua';
  const selectedColor = searchParams.get('warna') || 'semua';
  const selectedPriceMax = Number(searchParams.get('harga')) || 300000;
  const selectedAgeGroup = searchParams.get('usia') || 'semua';
  const selectedSort = searchParams.get('urut') || 'terbaru';

  const addItem = useCartStore((state) => state.addItem);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  // Helper to update URL params cleanly
  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'semua' || value === '' || (key === 'harga' && value === '300000')) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    const query = params.toString();
    router.replace(`/catalog${query ? `?${query}` : ''}`, { scroll: false });
  };

  const resetAllFilters = () => {
    router.replace('/catalog', { scroll: false });
  };

  // Filter and sort products dynamically
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((prod) => {
      // Category filter
      if (selectedCategory === 'terbaru') {
        if (!prod.isNew) return false;
      } else if (selectedCategory !== 'semua') {
        if (prod.category !== selectedCategory) return false;
      }

      // Size filter
      if (selectedSize !== 'semua') {
        const hasSize = prod.sizes.some((s) =>
          s.toLowerCase().includes(selectedSize.toLowerCase())
        );
        if (!hasSize) return false;
      }

      // Color filter
      if (selectedColor !== 'semua') {
        const hasColor = prod.colors.some((c) =>
          c.name.toLowerCase().includes(selectedColor.toLowerCase())
        );
        if (!hasColor) return false;
      }

      // Price filter
      if (prod.price > selectedPriceMax) {
        return false;
      }

      // Age group filter
      if (selectedAgeGroup !== 'semua') {
        if (prod.ageGroup !== selectedAgeGroup) return false;
      }

      return true;
    }).sort((a, b) => {
      if (selectedSort === 'harga-asc') return a.price - b.price;
      if (selectedSort === 'harga-desc') return b.price - a.price;
      if (selectedSort === 'populer') return b.reviewsCount - a.reviewsCount;
      return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    });
  }, [
    selectedCategory,
    selectedSize,
    selectedColor,
    selectedPriceMax,
    selectedAgeGroup,
    selectedSort,
  ]);

  const handleQuickAdd = (e: React.MouseEvent, prod: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(prod, prod.sizes[0] || 'Standar', prod.colors[0]?.name || 'Standar', 1);
    setAddedProductId(prod.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1500);
  };

  const sizesList = ['2 Thn', '3 Thn', '4 Thn', '5 Thn', '6 Thn'];
  const colorsList = [
    { name: 'Hijau', hex: '#10B981' },
    { name: 'Kuning', hex: '#FBBF24' },
    { name: 'Biru', hex: '#38BDF8' },
    { name: 'Pink', hex: '#F472B6' },
    { name: 'Netral', hex: '#E2E8F0' },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-12">
      {/* Sidebar Filter */}
      <aside className="w-full md:w-64 flex-shrink-0 space-y-10">
        {/* Active Category Filter Tabs */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-headline text-base font-bold text-on-surface">Kategori</h3>
            {(selectedCategory !== 'semua' || selectedSize !== 'semua' || selectedColor !== 'semua') && (
              <button
                onClick={resetAllFilters}
                className="text-xs text-primary font-bold hover:underline"
              >
                Reset
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'semua', label: 'Semua' },
              { id: 'laki-laki', label: 'Laki-laki' },
              { id: 'perempuan', label: 'Perempuan' },
              { id: 'bayi', label: 'Bayi' },
              { id: 'terbaru', label: 'Terbaru' },
            ].map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => updateFilter('kategori', cat.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ease-out ${
                    active
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Connected Segmented Toggle for Size */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-headline text-base font-bold text-on-surface">Ukuran Anak</h3>
            {selectedSize !== 'semua' && (
              <button
                onClick={() => updateFilter('ukuran', 'semua')}
                className="text-xs text-primary hover:underline"
              >
                Hapus
              </button>
            )}
          </div>
          <div className="inline-flex p-1 bg-surface-container-high rounded-full w-full justify-between">
            {sizesList.map((sz) => {
              const active = selectedSize === sz;
              return (
                <button
                  key={sz}
                  onClick={() => updateFilter('ukuran', active ? 'semua' : sz)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-[background-color,color] duration-200 ease-out ${
                    active
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

        {/* Color Palette */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-headline text-base font-bold text-on-surface">Pilihan Warna</h3>
            {selectedColor !== 'semua' && (
              <button
                onClick={() => updateFilter('warna', 'semua')}
                className="text-xs text-primary hover:underline"
              >
                Hapus
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-3">
            {colorsList.map((c) => {
              const active = selectedColor.toLowerCase() === c.name.toLowerCase();
              return (
                <button
                  key={c.name}
                  onClick={() => updateFilter('warna', active ? 'semua' : c.name.toLowerCase())}
                  style={{ backgroundColor: c.hex }}
                  aria-label={c.name}
                  className={`w-7 h-7 rounded-full ring-offset-2 transition-[box-shadow,transform] duration-200 ease-out ${
                    active ? 'ring-2 ring-primary scale-110' : 'hover:scale-105'
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Price Range Slider */}
        <div className="space-y-4">
          <h3 className="font-headline text-base font-bold text-on-surface">Maksimal Harga</h3>
          <div className="space-y-3">
            <input
              className="w-full accent-primary bg-surface-container-high h-1.5 rounded-full cursor-pointer"
              max="300000"
              min="50000"
              step="10000"
              type="range"
              value={selectedPriceMax}
              onChange={(e) => updateFilter('harga', e.target.value)}
            />
            <div className="flex justify-between text-xs font-medium text-on-surface-variant tabular-nums">
              <span>Rp50.000</span>
              <span className="font-bold text-primary">Rp{selectedPriceMax.toLocaleString('id-ID')}</span>
            </div>
          </div>
        </div>

        {/* Age Group */}
        <div className="space-y-4">
          <h3 className="font-headline text-base font-bold text-on-surface">Kelompok Usia</h3>
          <div className="space-y-2.5">
            {[
              { id: 'batita', label: 'Batita (1–3 tahun)' },
              { id: 'anak-kecil', label: 'Anak kecil (4–7 tahun)' },
              { id: 'anak-besar', label: 'Anak besar (8–12 tahun)' },
            ].map((age) => (
              <label key={age.id} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedAgeGroup === age.id}
                  onChange={() => updateFilter('usia', selectedAgeGroup === age.id ? 'semua' : age.id)}
                  className="rounded-sm border-outline-variant text-primary focus:ring-primary/20 w-4 h-4 cursor-pointer"
                />
                <span className="font-body text-sm text-on-surface-variant group-hover:text-primary transition-colors duration-200 ease-out">
                  {age.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <section className="flex-1">
        {/* Dynamic Sort Controls & Count */}
        <div className="mb-8 flex justify-between items-center">
          <p className="text-on-surface-variant text-sm font-medium tabular-nums">
            Menampilkan <strong className="text-on-surface">{filteredProducts.length}</strong> produk
          </p>
          <div className="relative">
            <select
              value={selectedSort}
              onChange={(e) => updateFilter('urut', e.target.value)}
              className="appearance-none bg-surface-container-low border-none rounded-full px-5 py-2 pr-10 font-label text-xs font-semibold focus:ring-2 focus:ring-primary/20 cursor-pointer text-on-surface outline-none"
            >
              <option value="terbaru">Paling baru</option>
              <option value="harga-asc">Harga: termurah</option>
              <option value="harga-desc">Harga: tertinggi</option>
              <option value="populer">Paling populer</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-base">
              expand_more
            </span>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-surface-container-low rounded-3xl p-8">
            <span className="material-symbols-outlined text-5xl text-outline-variant mb-4">search_off</span>
            <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Tidak ada produk yang cocok</h3>
            <p className="text-sm text-on-surface-variant max-w-sm mx-auto mb-6">
              Coba sesuaikan filter harga, ukuran, atau warna untuk menemukan pilihan pakaian anak lainnya.
            </p>
            <button
              onClick={resetAllFilters}
              className="primary-gradient text-on-primary px-6 py-2.5 rounded-full font-bold text-sm shadow-md"
            >
              Reset Semua Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {filteredProducts.map((prod) => {
              const isJustAdded = addedProductId === prod.id;
              return (
                <Link key={prod.id} href={`/product/${prod.id}`} className="group cursor-pointer block">
                  <div className="relative bg-surface-container-lowest rounded-2xl overflow-hidden mb-4 aspect-[4/5] shadow-sm group-hover:shadow-md transition-shadow duration-300 ease-out">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      alt={prod.name}
                      src={prod.images[0]}
                    />
                    <button
                      onClick={(e) => handleQuickAdd(e, prod)}
                      className={`absolute bottom-4 right-4 p-3 rounded-full shadow-md transition-[opacity,transform,background-color] duration-200 ease-out flex items-center justify-center ${
                        isJustAdded
                          ? 'opacity-100 bg-emerald-600 text-white scale-110'
                          : 'opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 bg-white/95 text-primary hover:bg-primary hover:text-white'
                      }`}
                      aria-label="Tambah cepat ke keranjang"
                    >
                      <span className="material-symbols-outlined text-xl">
                        {isJustAdded ? 'check' : 'add_shopping_cart'}
                      </span>
                    </button>
                  </div>
                  <h3 className="font-headline font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-200 ease-out">
                    {prod.name}
                  </h3>
                  <p className="text-on-surface-variant font-body text-sm mb-1 line-clamp-1">
                    {prod.description}
                  </p>
                  <p className="font-headline font-bold text-primary text-base tabular-nums">
                    Rp{prod.price.toLocaleString('id-ID')}
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
