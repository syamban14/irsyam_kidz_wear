'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { PRODUCTS, Product } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';

const COLOR_FILTERS = [
  { id: 'hijau', label: 'Hijau', hex: '#10B981', keywords: ['hijau', 'mint', 'sage', 'pinus', 'teal'] },
  { id: 'krem', label: 'Krem & Pasir', hex: '#E6D3A7', keywords: ['krem', 'pasir', 'alami', 'kuning'] },
  { id: 'biru', label: 'Biru & Denim', hex: '#38BDF8', keywords: ['biru', 'denim'] },
  { id: 'pink', label: 'Merah Muda', hex: '#F472B6', keywords: ['pink', 'merah muda', 'pastel'] },
  { id: 'netral', label: 'Putih & Abu', hex: '#E2E8F0', keywords: ['putih', 'abu', 'misty', 'netral'] },
];

const SIZES_LIST = [
  { value: '2', label: '2th' },
  { value: '3', label: '3th' },
  { value: '4', label: '4th' },
  { value: '5', label: '5th' },
  { value: '6', label: '6th' },
];

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
  const onlyFavorites = searchParams.get('favorit') === '1';
  const urlQuery = searchParams.get('q') || '';

  const [mounted, setMounted] = useState(false);
  const [searchInput, setSearchInput] = useState(urlQuery);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const addItem = useCartStore((state) => state.addItem);
  const favoriteIds = useWishlistStore((state) => state.favoriteIds);
  const toggleFavorite = useWishlistStore((state) => state.toggleFavorite);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setSearchInput(urlQuery);
  }, [urlQuery]);

  useEffect(() => {
    if (!showMobileFilter) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowMobileFilter(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showMobileFilter]);

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (
      value === 'semua' ||
      value === '' ||
      value === '0' ||
      (key === 'harga' && value === '300000')
    ) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    const query = params.toString();
    router.replace(`/catalog${query ? `?${query}` : ''}`, { scroll: false });
  };

  const resetAllFilters = () => {
    setSearchInput('');
    router.replace('/catalog', { scroll: false });
  };

  const activeFilterCount =
    (selectedCategory !== 'semua' ? 1 : 0) +
    (selectedSize !== 'semua' ? 1 : 0) +
    (selectedColor !== 'semua' ? 1 : 0) +
    (selectedPriceMax < 300000 ? 1 : 0) +
    (selectedAgeGroup !== 'semua' ? 1 : 0) +
    (onlyFavorites ? 1 : 0) +
    (searchInput.trim() !== '' ? 1 : 0);

  const filteredProducts = useMemo(() => {
    const keyword = searchInput.trim().toLowerCase();

    return PRODUCTS.filter((prod) => {
      if (onlyFavorites && mounted && !favoriteIds.includes(prod.id)) {
        return false;
      }

      if (keyword) {
        const haystack = [
          prod.name,
          prod.description,
          prod.category,
          ...prod.colors.map((c) => c.name),
          ...prod.materialsCare,
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(keyword)) return false;
      }

      if (selectedCategory === 'terbaru') {
        if (!prod.isNew) return false;
      } else if (selectedCategory !== 'semua') {
        if (prod.category !== selectedCategory) return false;
      }

      if (selectedSize !== 'semua') {
        const targetAge = parseInt(selectedSize, 10);
        const hasSize = prod.sizes.some((s) => {
          if (Number.isNaN(targetAge)) {
            return s.toLowerCase().includes(selectedSize.toLowerCase());
          }
          const rangeMatch = s.match(/(\d+)\s*-\s*(\d+)\s*Thn/i);
          if (rangeMatch) {
            const min = parseInt(rangeMatch[1], 10);
            const max = parseInt(rangeMatch[2], 10);
            return targetAge >= min && targetAge <= max;
          }
          const singleMatch = s.match(/(\d+)\s*Thn/i);
          if (singleMatch) {
            return parseInt(singleMatch[1], 10) === targetAge;
          }
          return false;
        });
        if (!hasSize) return false;
      }

      if (selectedColor !== 'semua') {
        const normalized = selectedColor.toLowerCase();
        const colorGroup = COLOR_FILTERS.find(
          (cf) => cf.id === normalized || cf.keywords.includes(normalized)
        );
        const terms = colorGroup ? colorGroup.keywords : [normalized];
        const hasColor = prod.colors.some((c) => {
          const cname = c.name.toLowerCase();
          return terms.some((t) => cname.includes(t));
        });
        if (!hasColor) return false;
      }

      if (prod.price > selectedPriceMax) {
        return false;
      }

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
    onlyFavorites,
    mounted,
    favoriteIds,
    searchInput,
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

  const handleToggleWishlist = (e: React.MouseEvent, productId: string) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(productId);
  };

  const renderFilterControls = () => (
    <div className="space-y-9">
      {/* Wishlist Filter Toggle */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-headline text-base font-bold text-on-surface">Koleksi Pribadi</h3>
          {activeFilterCount > 0 && (
            <button
              type="button"
              onClick={resetAllFilters}
              className="text-xs text-primary font-bold hover:underline cursor-pointer"
            >
              Reset ({activeFilterCount})
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={() => updateFilter('favorit', onlyFavorites ? '0' : '1')}
          className={`w-full px-4 py-2.5 rounded-2xl text-xs font-semibold flex items-center justify-between transition-colors duration-200 cursor-pointer ${
            onlyFavorites
              ? 'bg-rose-50 text-rose-600 ring-1 ring-rose-200'
              : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface'
          }`}
        >
          <span className="inline-flex items-center gap-2">
            <span
              className="material-symbols-outlined text-base"
              style={onlyFavorites ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              favorite
            </span>
            <span>Favorit saya</span>
          </span>
          <span className="tabular-nums font-bold">
            {mounted ? favoriteIds.length : 0}
          </span>
        </button>
      </div>

      {/* Category Filter */}
      <div className="space-y-3.5">
        <h3 className="font-headline text-base font-bold text-on-surface">Kategori</h3>
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
                type="button"
                onClick={() => updateFilter('kategori', cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ease-out cursor-pointer ${
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

      {/* Size Segmented Toggle */}
      <div className="space-y-3.5">
        <div className="flex justify-between items-center">
          <h3 className="font-headline text-base font-bold text-on-surface">Ukuran Anak</h3>
          {selectedSize !== 'semua' && (
            <button
              type="button"
              onClick={() => updateFilter('ukuran', 'semua')}
              className="text-xs text-primary hover:underline cursor-pointer"
            >
              Hapus
            </button>
          )}
        </div>
        <div className="inline-flex p-1 bg-surface-container-high rounded-full w-full justify-between gap-1">
          {SIZES_LIST.map((sz) => {
            const active = selectedSize === sz.value;
            return (
              <button
                key={sz.value}
                type="button"
                onClick={() => updateFilter('ukuran', active ? 'semua' : sz.value)}
                className={`flex-1 px-2.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-[background-color,color] duration-200 ease-out cursor-pointer ${
                  active
                    ? 'bg-primary text-on-primary font-bold shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {sz.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Color Palette */}
      <div className="space-y-3.5">
        <div className="flex justify-between items-center">
          <h3 className="font-headline text-base font-bold text-on-surface">Pilihan Warna</h3>
          {selectedColor !== 'semua' && (
            <button
              type="button"
              onClick={() => updateFilter('warna', 'semua')}
              className="text-xs text-primary hover:underline cursor-pointer"
            >
              Hapus
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          {COLOR_FILTERS.map((c) => {
            const active = selectedColor.toLowerCase() === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => updateFilter('warna', active ? 'semua' : c.id)}
                style={{ backgroundColor: c.hex }}
                title={c.label}
                aria-label={c.label}
                className={`w-7 h-7 rounded-full ring-offset-2 border border-black/10 transition-[box-shadow,transform] duration-200 ease-out cursor-pointer ${
                  active ? 'ring-2 ring-primary scale-110' : 'hover:scale-105'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Price Range Slider */}
      <div className="space-y-3.5">
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

      {/* Age Group Checkboxes */}
      <div className="space-y-3.5">
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
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-12">
      {/* Desktop Sidebar Filter */}
      <aside className="hidden md:block w-72 flex-shrink-0">
        {renderFilterControls()}
      </aside>

      {/* Product Grid & Search Header */}
      <section className="flex-1">
        {/* Search Input + Mobile Filter Button + Sort */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg pointer-events-none">
                search
              </span>
              <input
                type="search"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  updateFilter('q', e.target.value);
                }}
                placeholder="Cari pakaian, bahan katun, linen, atau warna..."
                aria-label="Cari produk di katalog"
                className="w-full bg-surface-container-low rounded-full pl-11 pr-10 py-2.5 text-sm font-body text-on-surface placeholder:text-outline-variant focus:ring-2 focus:ring-primary/20 outline-none"
              />
              {searchInput && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchInput('');
                    updateFilter('q', '');
                  }}
                  aria-label="Hapus pencarian"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface p-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">close</span>
                </button>
              )}
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setShowMobileFilter(true)}
                className="md:hidden inline-flex items-center gap-2 bg-surface-container-low px-4 py-2.5 rounded-full text-xs font-bold text-on-surface cursor-pointer"
              >
                <span className="material-symbols-outlined text-base text-primary">tune</span>
                <span>Filter</span>
                {activeFilterCount > 0 && (
                  <span className="px-1.5 py-0.5 rounded-full bg-primary text-on-primary text-[10px] tabular-nums">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              <div className="relative flex-1 sm:flex-initial">
                <select
                  value={selectedSort}
                  onChange={(e) => updateFilter('urut', e.target.value)}
                  className="w-full appearance-none bg-surface-container-low border-none rounded-full px-5 py-2.5 pr-10 font-label text-xs font-semibold focus:ring-2 focus:ring-primary/20 cursor-pointer text-on-surface outline-none"
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
          </div>

          <div className="flex items-center justify-between">
            <p className="text-on-surface-variant text-sm font-medium tabular-nums">
              Menampilkan <strong className="text-on-surface">{filteredProducts.length}</strong> produk
              {onlyFavorites && ' favorit'}
            </p>
            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={resetAllFilters}
                className="text-xs font-bold text-primary hover:underline md:hidden cursor-pointer"
              >
                Reset filter
              </button>
            )}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-surface-container-low rounded-3xl p-8">
            <span className="material-symbols-outlined text-5xl text-outline-variant mb-4">
              {onlyFavorites ? 'favorite_border' : 'search_off'}
            </span>
            <h3 className="font-headline text-lg font-bold text-on-surface mb-2">
              {onlyFavorites ? 'Belum ada produk favorit tersimpan' : 'Tidak ada produk yang cocok'}
            </h3>
            <p className="text-sm text-on-surface-variant max-w-sm mx-auto mb-6">
              {onlyFavorites
                ? 'Ketuk ikon hati pada pakaian pilihan Bunda untuk menyimpannya di sini.'
                : 'Coba sesuaikan kata kunci pencarian, ukuran, warna, atau batas harga untuk melihat koleksi lainnya.'}
            </p>
            <button
              type="button"
              onClick={resetAllFilters}
              className="primary-gradient text-on-primary px-6 py-2.5 rounded-full font-bold text-sm shadow-md cursor-pointer"
            >
              Tampilkan Semua Produk
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {filteredProducts.map((prod, idx) => {
              const isJustAdded = addedProductId === prod.id;
              const isFav = mounted && favoriteIds.includes(prod.id);
              return (
                <Link
                  key={prod.id}
                  href={`/product/${prod.id}`}
                  style={{ animationDelay: `${Math.min(idx, 6) * 55}ms` }}
                  className="group cursor-pointer block animate-fade-up"
                >
                  <div className="relative bg-surface-container-lowest rounded-2xl overflow-hidden mb-4 aspect-[4/5] shadow-sm group-hover:shadow-md transition-shadow duration-300 ease-out">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      alt={prod.name}
                      src={prod.images[0]}
                    />

                    {/* Wishlist Toggle */}
                    <button
                      type="button"
                      onClick={(e) => handleToggleWishlist(e, prod.id)}
                      aria-label={isFav ? 'Hapus dari favorit' : 'Simpan ke favorit'}
                      className={`absolute top-3.5 right-3.5 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center shadow-sm transition-[opacity,transform,background-color,color] duration-200 ease-out cursor-pointer ${
                        isFav
                          ? 'opacity-100 bg-rose-50 text-rose-500 scale-105'
                          : 'opacity-85 md:opacity-0 md:group-hover:opacity-100 bg-white/90 text-on-surface-variant hover:text-rose-500'
                      }`}
                    >
                      <span
                        className="material-symbols-outlined text-lg"
                        style={isFav ? { fontVariationSettings: "'FILL' 1" } : undefined}
                      >
                        favorite
                      </span>
                    </button>

                    {/* Quick Add to Cart */}
                    <button
                      type="button"
                      onClick={(e) => handleQuickAdd(e, prod)}
                      className={`absolute bottom-4 right-4 p-3 rounded-full shadow-md transition-[opacity,transform,background-color] duration-200 ease-out flex items-center justify-center cursor-pointer ${
                        isJustAdded
                          ? 'opacity-100 bg-emerald-600 text-white scale-110'
                          : 'opacity-90 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 bg-white/95 text-primary hover:bg-primary hover:text-white'
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

      {/* Mobile Filter Drawer */}
      {showMobileFilter && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-black/35 backdrop-blur-xs flex items-end"
          onClick={() => setShowMobileFilter(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-filter-title"
        >
          <div
            className="w-full max-h-[85dvh] overflow-y-auto bg-surface-container-lowest rounded-t-[2rem] p-6 pb-8 shadow-2xl animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-outline-variant/15">
              <h2 id="mobile-filter-title" className="font-headline text-lg font-bold text-on-surface">
                Filter Koleksi
              </h2>
              <button
                type="button"
                onClick={() => setShowMobileFilter(false)}
                className="p-2 rounded-full hover:bg-surface-container-low text-on-surface-variant cursor-pointer"
                aria-label="Tutup filter"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            {renderFilterControls()}
            <div className="mt-8 pt-4 border-t border-outline-variant/15 flex gap-3">
              {activeFilterCount > 0 && (
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="px-5 py-3 rounded-full bg-surface-container-high text-on-surface font-bold text-xs cursor-pointer"
                >
                  Reset
                </button>
              )}
              <button
                type="button"
                onClick={() => setShowMobileFilter(false)}
                className="flex-1 primary-gradient text-on-primary py-3 rounded-full font-headline font-bold text-sm shadow-md cursor-pointer"
              >
                Lihat {filteredProducts.length} Produk
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
