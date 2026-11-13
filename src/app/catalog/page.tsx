import Link from 'next/link';

export default function Catalog() {
  return (
    <>
      {/* Top Navigation Bar - Single compact line with dominant brand mark */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glass-nav rounded-full shadow-[0_20px_40px_rgba(44,47,46,0.06)] flex justify-between items-center px-8 py-3">
        <Link href="/" className="text-2xl font-black text-emerald-800 dark:text-emerald-300 tracking-tight font-headline">
          Irsyam Kidz Wear
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors duration-200 ease-out font-label" href="/catalog">Laki-laki</Link>
          <Link className="text-sm font-bold text-emerald-700 border-b-2 border-emerald-500 py-1 font-label" href="/catalog">Perempuan</Link>
          <Link className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors duration-200 ease-out font-label" href="/catalog">Bayi</Link>
          <Link className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors duration-200 ease-out font-label" href="/catalog">Terbaru</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/cart" className="p-2 hover:bg-emerald-50 rounded-full transition-colors duration-200 ease-out inline-flex items-center justify-center" aria-label="Keranjang belanja">
            <span className="material-symbols-outlined text-emerald-700">shopping_cart</span>
          </Link>
          <button className="p-2 hover:bg-emerald-50 rounded-full transition-colors duration-200 ease-out inline-flex items-center justify-center" aria-label="Profil pengguna">
            <span className="material-symbols-outlined text-emerald-700">person</span>
          </button>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
        {/* Header Section */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-2">Katalog Koleksi</h1>
            <p className="text-on-surface-variant font-body text-base">Pilihan pakaian anak modis dan sejuk untuk si kecil.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <select className="appearance-none bg-surface-container-low border-none rounded-full px-6 py-2.5 pr-12 font-label text-sm font-medium focus:ring-2 focus:ring-primary/20 cursor-pointer text-on-surface">
                <option>Paling baru</option>
                <option>Harga: terendah ke tertinggi</option>
                <option>Harga: tertinggi ke terendah</option>
                <option>Paling populer</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-base">expand_more</span>
            </div>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filter */}
          <aside className="w-full md:w-64 flex-shrink-0 space-y-10">
            {/* Connected Segmented Toggle for Size */}
            <div className="space-y-4">
              <h3 className="font-headline text-base font-bold text-on-surface">Ukuran Anak</h3>
              <div className="inline-flex p-1 bg-surface-container-high rounded-full w-full justify-between">
                <button className="px-3 py-1.5 rounded-full text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors duration-200 ease-out">2 Thn</button>
                <button className="px-3 py-1.5 rounded-full text-xs font-bold bg-primary text-on-primary shadow-sm transition-[background-color,color] duration-200 ease-out">3 Thn</button>
                <button className="px-3 py-1.5 rounded-full text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors duration-200 ease-out">4 Thn</button>
                <button className="px-3 py-1.5 rounded-full text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors duration-200 ease-out">5 Thn</button>
                <button className="px-3 py-1.5 rounded-full text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors duration-200 ease-out">6 Thn</button>
              </div>
            </div>
            
            {/* Color Palette */}
            <div className="space-y-4">
              <h3 className="font-headline text-base font-bold text-on-surface">Pilihan Warna</h3>
              <div className="flex flex-wrap gap-3">
                <button aria-label="Hijau zamrud" className="w-7 h-7 rounded-full bg-emerald-500 ring-2 ring-offset-2 ring-emerald-500"></button>
                <button aria-label="Kuning kenari" className="w-7 h-7 rounded-full bg-amber-400 ring-offset-2 hover:ring-2 hover:ring-amber-400 transition-[box-shadow] duration-200 ease-out"></button>
                <button aria-label="Biru langit" className="w-7 h-7 rounded-full bg-sky-400 ring-offset-2 hover:ring-2 hover:ring-sky-400 transition-[box-shadow] duration-200 ease-out"></button>
                <button aria-label="Merah muda pastel" className="w-7 h-7 rounded-full bg-rose-400 ring-offset-2 hover:ring-2 hover:ring-rose-400 transition-[box-shadow] duration-200 ease-out"></button>
                <button aria-label="Abu terang" className="w-7 h-7 rounded-full bg-slate-200 ring-offset-2 hover:ring-2 hover:ring-slate-300 transition-[box-shadow] duration-200 ease-out"></button>
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-4">
              <h3 className="font-headline text-base font-bold text-on-surface">Rentang Harga</h3>
              <div className="space-y-3">
                <input className="w-full accent-primary bg-surface-container-high h-1.5 rounded-full cursor-pointer" max="500000" min="0" step="10000" type="range" defaultValue="300000"/>
                <div className="flex justify-between text-xs font-medium text-on-surface-variant tabular-nums">
                  <span>Rp0</span>
                  <span>Rp300.000+</span>
                </div>
              </div>
            </div>

            {/* Age Group */}
            <div className="space-y-4">
              <h3 className="font-headline text-base font-bold text-on-surface">Kelompok Usia</h3>
              <div className="space-y-2.5">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input defaultChecked className="rounded-sm border-outline-variant text-primary focus:ring-primary/20 w-4 h-4" type="checkbox"/>
                  <span className="font-body text-sm text-on-surface-variant group-hover:text-primary transition-colors duration-200 ease-out">Batita (1–3 tahun)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded-sm border-outline-variant text-primary focus:ring-primary/20 w-4 h-4" type="checkbox"/>
                  <span className="font-body text-sm text-on-surface-variant group-hover:text-primary transition-colors duration-200 ease-out">Anak kecil (4–7 tahun)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded-sm border-outline-variant text-primary focus:ring-primary/20 w-4 h-4" type="checkbox"/>
                  <span className="font-body text-sm text-on-surface-variant group-hover:text-primary transition-colors duration-200 ease-out">Anak besar (8–12 tahun)</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid - Pure typography without corner badge chips */}
          <section className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
              
              {/* Product Card 1 */}
              <Link href="/product/1" className="group cursor-pointer block">
                <div className="relative bg-surface-container-lowest rounded-2xl overflow-hidden mb-4 aspect-[4/5] shadow-sm group-hover:shadow-md transition-shadow duration-300 ease-out">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt="Gaun bunga musim panas"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzCVgBivVDdQjhZCQnBpk4-GS9EsGH7O_z5wQycgY5DZ5NgOoMzKYDWbz7TWyjlEFTE_4tbE0UsCeHfhoJsA0PBCNrOM4TwnU8PFMgvQDo6iGh1oP_1kfdCextg4oQmiZfh0pb9e9QrEbtCffuWkV-wEEwmb3Qar62SCBJI4f4Oyjs0P6Fn9QhV2PIE0DoSxLVVI91WxbEVWG-vj-1uF9XOVC_H2hZeOvJPQj7AMWpqgQvPW1ijXeV4tm1w7vHyUX7RXkyQkkxz114"
                  />
                  <button className="absolute bottom-4 right-4 bg-white/95 backdrop-blur p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-[opacity,transform] duration-200 ease-out" aria-label="Tambah ke keranjang">
                    <span className="material-symbols-outlined text-primary text-xl">add_shopping_cart</span>
                  </button>
                </div>
                <h3 className="font-headline font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-200 ease-out">Gaun Bunga Tropis</h3>
                <p className="text-on-surface-variant font-body text-sm mb-1">Katun organik lembut bernapas</p>
                <p className="font-headline font-bold text-primary text-base tabular-nums">Rp189.000</p>
              </Link>
              
              {/* Product Card 2 */}
              <Link href="/product/2" className="group cursor-pointer block sm:mt-6">
                <div className="relative bg-surface-container-lowest rounded-2xl overflow-hidden mb-4 aspect-[4/5] shadow-sm group-hover:shadow-md transition-shadow duration-300 ease-out">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt="Jaket pelindung hujan cerah"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7WuHzGvNH4_IoaPG0xBHmQML0mSPT1gbHDQW6qVzjnTTLNqK-RpddHvkbGF1qg_KZSS36mrnvdHE5IGtrpAOh2vmqbTHTQFBgqASpn1f2syMtrJDhZODtb_IxWTFBbIbcMb3hCI54F9REgM8hoobGX0MUbZMrGY4_kXJaWUWK2j1MPGhlP6w85unF8T1seAZwmo454JBRU-4-vJex7q71_6yR4lfEFmd4CCuCZmLnPvJVJRHSxYyJdbyFqzWmPepOiRD4SRhTOTqG"
                  />
                  <button className="absolute bottom-4 right-4 bg-white/95 backdrop-blur p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-[opacity,transform] duration-200 ease-out" aria-label="Tambah ke keranjang">
                    <span className="material-symbols-outlined text-primary text-xl">add_shopping_cart</span>
                  </button>
                </div>
                <h3 className="font-headline font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-200 ease-out">Jaket Pelindung Hujan Ringan</h3>
                <p className="text-on-surface-variant font-body text-sm mb-1">Bahan tahan percikan air</p>
                <p className="font-headline font-bold text-primary text-base tabular-nums">Rp249.000</p>
              </Link>

              {/* Product Card 3 */}
              <Link href="/product/3" className="group cursor-pointer block">
                <div className="relative bg-surface-container-lowest rounded-2xl overflow-hidden mb-4 aspect-[4/5] shadow-sm group-hover:shadow-md transition-shadow duration-300 ease-out">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt="Overal denim klasik"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrOh_xsbFZVcicMP8gXX6pZTp8qBAzKq_v3ic9bPtDMR5aZSpFP5tvSP57xOfEgvnc227knPKj0oUxIA-ySb4VRAKC4OBLOPw4Ge9ygJrPG2R75BH1FnA8Zkt4-XnwsGTtEsSU3uIs5XTgymuc4Cau0zWfWnnUZD8X0dJZoip59rQmFHGWQJl1ccwK8_WgUedJ3bxCFbUZGCitL--ZeHmLyCpM5I0veXl6wfx3bq1G18e_fPyg11Osv2flTEffsawBt-Pu43ey9ftW"
                  />
                  <button className="absolute bottom-4 right-4 bg-white/95 backdrop-blur p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-[opacity,transform] duration-200 ease-out" aria-label="Tambah ke keranjang">
                    <span className="material-symbols-outlined text-primary text-xl">add_shopping_cart</span>
                  </button>
                </div>
                <h3 className="font-headline font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-200 ease-out">Overal Denim Kasual</h3>
                <p className="text-on-surface-variant font-body text-sm mb-1">Denim lentur dan nyaman dipakai</p>
                <p className="font-headline font-bold text-primary text-base tabular-nums">Rp199.000</p>
              </Link>

              {/* Product Card 4 */}
              <Link href="/product/4" className="group cursor-pointer block">
                <div className="relative bg-surface-container-lowest rounded-2xl overflow-hidden mb-4 aspect-[4/5] shadow-sm group-hover:shadow-md transition-shadow duration-300 ease-out">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt="Kemeja linen lembut"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi6T75TXCN8PyiCLQUnwNRO3xKkPqiCE5_qhg6ab-UDzHfTT0duPw9sl8RfGWoDp4hsQwq5GrBiU4nADztS1jQ4ORlSWncYsEqQbEWQ5OmNNVqqpPXjr4OSGr1gN7SarIHTaPsJTbRW9t4LWvWJvkKyj-MYA_DuxhTWdeGQ7R2ENnufij_hWkItijWAqacLGcxvKnnj-xeXeXskSoLBPw5VDVof_xKKUK_7BZSvAtpalcuzwxyJEz3FmEWDmqg04CrlXYeew4osKPe"
                  />
                  <button className="absolute bottom-4 right-4 bg-white/95 backdrop-blur p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-[opacity,transform] duration-200 ease-out" aria-label="Tambah ke keranjang">
                    <span className="material-symbols-outlined text-primary text-xl">add_shopping_cart</span>
                  </button>
                </div>
                <h3 className="font-headline font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-200 ease-out">Kemeja Linen Awan</h3>
                <p className="text-on-surface-variant font-body text-sm mb-1">Serat linen sejuk kualitas premium</p>
                <p className="font-headline font-bold text-primary text-base tabular-nums">Rp159.000</p>
              </Link>

              {/* Product Card 5 */}
              <Link href="/product/5" className="group cursor-pointer block sm:mt-6">
                <div className="relative bg-surface-container-lowest rounded-2xl overflow-hidden mb-4 aspect-[4/5] shadow-sm group-hover:shadow-md transition-shadow duration-300 ease-out">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt="Kardigan rajut hangat"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv2ISmp1rl1oqIQzfiBBaIE-C2tgw0gXUlJ1Hcnph4LLnr0x-N_3OzMEQEgdAuIog3HNsyAZQYLpNLJCtY1-RaU8Xmct9vVfjW5JRvtF76xIrQsrArFkp3FGmodkMJOr6yuT5IVc9E4P8sItJYNTsB29xG8hg4KyxCR73-QGFeHqs1L4GRlzrje2JmqKlud11-tGJyDFvATVt-0H6X_O5_um-qKFs65GZ0Hs3FgQ5ZyEBYrZc66QKsXtAL8Do0DI8XfZM00zMO4Ywu"
                  />
                  <button className="absolute bottom-4 right-4 bg-white/95 backdrop-blur p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-[opacity,transform] duration-200 ease-out" aria-label="Tambah ke keranjang">
                    <span className="material-symbols-outlined text-primary text-xl">add_shopping_cart</span>
                  </button>
                </div>
                <h3 className="font-headline font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-200 ease-out">Kardigan Rajut Hangat</h3>
                <p className="text-on-surface-variant font-body text-sm mb-1">Rajutan wol halus warna dusty rose</p>
                <p className="font-headline font-bold text-primary text-base tabular-nums">Rp219.000</p>
              </Link>

              {/* Product Card 6 */}
              <Link href="/product/6" className="group cursor-pointer block">
                <div className="relative bg-surface-container-lowest rounded-2xl overflow-hidden mb-4 aspect-[4/5] shadow-sm group-hover:shadow-md transition-shadow duration-300 ease-out">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt="Setelan jogger petualang"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtWPRbrxETnTCRP54r7ME5snP1MLmRMqvs46syeLjWPWF3oUGd_i2eCHtdMIlBuupSI5apIuT-SNPWEnuQCWuRIUggnnlTp2IMSoAjZ4aqYekxOkAgYwZlcnb_vR7ikWUry-xzulxo1StA47ifxWwEzfRYmorA538CGOJJWVMqBDtD3lu1rJnBzA_M1gIb4Akz_QyfvJkMwJ-CFJGjTpHoOWMBmZpcnG6GlRZm51xd_EKyDnAZbCkCWUuVMYWSLQF7jO3URU2jcVWi"
                  />
                  <button className="absolute bottom-4 right-4 bg-white/95 backdrop-blur p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-[opacity,transform] duration-200 ease-out" aria-label="Tambah ke keranjang">
                    <span className="material-symbols-outlined text-primary text-xl">add_shopping_cart</span>
                  </button>
                </div>
                <h3 className="font-headline font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-200 ease-out">Setelan Jogger Petualang</h3>
                <p className="text-on-surface-variant font-body text-sm mb-1">Kain rajut fleksibel biru laut</p>
                <p className="font-headline font-bold text-primary text-base tabular-nums">Rp169.000</p>
              </Link>
            </div>

            {/* Load More Section */}
            <div className="mt-20 flex flex-col items-center gap-4">
              <p className="text-on-surface-variant font-body text-sm tabular-nums">Menampilkan 6 dari 48 produk</p>
              <div className="w-48 h-1 bg-surface-container-high rounded-full overflow-hidden">
                <div className="w-[12.5%] h-full bg-primary"></div>
              </div>
              <button className="primary-gradient text-on-primary px-10 py-3.5 rounded-full font-headline font-bold text-sm shadow-md hover:shadow-lg transition-shadow duration-200 ease-out">
                Muat lebih banyak
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full rounded-t-[3rem] mt-20 bg-slate-50 dark:bg-slate-950 font-body">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
          <div className="space-y-4">
            <div className="text-xl font-bold text-emerald-800 dark:text-emerald-300 font-headline">Irsyam Kidz Wear</div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Pakaian anak bernuansa modern dan ramah kulit untuk generasi yang aktif bermain.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-on-surface text-sm">Koleksi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Pakaian anak laki-laki</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Pakaian anak perempuan</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Kebutuhan dasar bayi</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-on-surface text-sm">Bantuan</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Tanya jawab (FAQ)</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Informasi pengiriman</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Kontak pelanggan</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-on-surface text-sm">Legalitas</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Kebijakan privasi</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Syarat dan ketentuan</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200/50 py-6 text-center text-slate-500 dark:text-slate-400 text-xs">
          © 2024 Irsyam Kidz Wear. Dibuat dengan penuh kasih di Indonesia.
        </div>
      </footer>
    </>
  );
}
