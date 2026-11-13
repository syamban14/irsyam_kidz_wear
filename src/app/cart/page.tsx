import Link from 'next/link';

export default function Cart() {
  return (
    <>
      {/* Top Navigation Bar - Single compact line with dominant brand mark */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glass-nav shadow-[0_20px_40px_rgba(44,47,46,0.06)] rounded-full flex justify-between items-center px-8 py-3">
        <Link href="/" className="text-2xl font-black text-emerald-800 dark:text-emerald-300 tracking-tight font-headline">
          Irsyam Kidz Wear
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors duration-200 ease-out text-sm font-medium font-label" href="/catalog">Laki-laki</Link>
          <Link className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors duration-200 ease-out text-sm font-medium font-label" href="/catalog">Perempuan</Link>
          <Link className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors duration-200 ease-out text-sm font-medium font-label" href="/catalog">Bayi</Link>
          <Link className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors duration-200 ease-out text-sm font-medium font-label" href="/catalog">Terbaru</Link>
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Profil pengguna" className="p-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-full transition-colors duration-200 ease-out inline-flex items-center justify-center">
            <span className="material-symbols-outlined text-emerald-700 dark:text-emerald-400">person</span>
          </button>
          <Link href="/cart" aria-label="Keranjang berisi 2 produk" className="p-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-full transition-colors duration-200 ease-out relative inline-flex items-center justify-center">
            <span className="material-symbols-outlined text-emerald-700 dark:text-emerald-400" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
            <span className="absolute top-0 right-0 w-4 h-4 bg-secondary text-on-secondary text-[11px] flex items-center justify-center rounded-full font-bold tabular-nums">2</span>
          </Link>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
        {/* Header */}
        <header className="mb-10">
          <h1 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight mb-2">Keranjang Belanja</h1>
          <p className="text-on-surface-variant font-medium text-base">Ada 2 produk pilihan siap menemani hari ceria si buah hati.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Cart Items Section */}
          <section className="lg:col-span-8 space-y-6">
            {/* Item 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center group shadow-sm hover:shadow-md transition-shadow duration-300 ease-out">
              <div className="w-full md:w-44 h-44 rounded-xl overflow-hidden bg-surface-container-low flex-shrink-0">
                <img
                  alt="Setelan kaos katun organik"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzVvulwHKkE67lXd_jkIZ-vx8s8jqdyN5iYt7sWCvDQIM15DgvUpCqsaN6wB0l2m2GOsfCtyQnYoeJ1gnBeyANY6y_nJAfYOvRbm87MdV36VlhOt4zK_nB0PPzrM-BXvhrS-OE1cpN3khJ7ISliEVdYY3_7DdgqbqQ67-dDcqIjSF8m_Dimru0Q2BfjE9CYIavzAaxCi6C1Oz_Rd2zYlbeI8SRy15uneFe6ukUcbcbu3-nrdrIXSh3dDgTPk85bVRUIuN-odIAScxl"
                />
              </div>
              <div className="flex-grow flex flex-col justify-between h-full py-1 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <Link href="/product/1">
                      <h3 className="font-headline text-lg font-bold text-on-surface hover:text-primary transition-colors duration-200 ease-out">Setelan Kaos Katun Organik</h3>
                    </Link>
                    <p className="text-on-surface-variant text-sm mt-1">Hijau sage · Ukuran 2-3 Thn</p>
                  </div>
                  <button aria-label="Hapus produk" className="text-outline-variant hover:text-error transition-colors duration-200 ease-out">
                    <span className="material-symbols-outlined text-xl">delete</span>
                  </button>
                </div>
                <div className="flex justify-between items-end mt-6">
                  <div className="inline-flex items-center bg-surface-container-high rounded-full p-1">
                    <button aria-label="Kurangi jumlah" className="w-7 h-7 flex items-center justify-center hover:bg-surface-container-lowest rounded-full transition-colors duration-200 ease-out">
                      <span className="material-symbols-outlined text-xs">remove</span>
                    </button>
                    <span className="px-3.5 font-bold font-label text-sm text-on-surface tabular-nums">1</span>
                    <button aria-label="Tambah jumlah" className="w-7 h-7 flex items-center justify-center hover:bg-surface-container-lowest rounded-full transition-colors duration-200 ease-out text-primary">
                      <span className="material-symbols-outlined text-xs">add</span>
                    </button>
                  </div>
                  <div className="text-right">
                    <span className="font-headline text-lg font-bold text-primary tabular-nums">Rp169.000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center group shadow-sm hover:shadow-md transition-shadow duration-300 ease-out">
              <div className="w-full md:w-44 h-44 rounded-xl overflow-hidden bg-surface-container-low flex-shrink-0">
                <img
                  alt="Kardigan rajut dinosaurus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzrU4E-BC9azf_bBES-PlaPYCnZKnfQDgafVVsTZBn5jjT2Xv9dbMOSS2eflN7Vl2cYPvaRxAdlW4McFK8AY1gH8EuiTVjLjNWiYe4TtkGXsKvb1pE2qBd-bem7J-nE1QkWx_99Z-Wcm9K9oAeXiR0XhN99hkfb9JS2bMv6zVjycfcHjoc4HiX_7dQpK688LTLhjpTHhvGlKNY-l07oZwqsi-Vx4Us6ipnN5gRsUddy1ociHoeEU52i0ozYyWODzaGzZRJckEnCQ7y"
                />
              </div>
              <div className="flex-grow flex flex-col justify-between h-full py-1 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <Link href="/product/2">
                      <h3 className="font-headline text-lg font-bold text-on-surface hover:text-primary transition-colors duration-200 ease-out">Kardigan Rajut Dinosaurus</h3>
                    </Link>
                    <p className="text-on-surface-variant text-sm mt-1">Kuning mustard · Ukuran 4-5 Thn</p>
                  </div>
                  <button aria-label="Hapus produk" className="text-outline-variant hover:text-error transition-colors duration-200 ease-out">
                    <span className="material-symbols-outlined text-xl">delete</span>
                  </button>
                </div>
                <div className="flex justify-between items-end mt-6">
                  <div className="inline-flex items-center bg-surface-container-high rounded-full p-1">
                    <button aria-label="Kurangi jumlah" className="w-7 h-7 flex items-center justify-center hover:bg-surface-container-lowest rounded-full transition-colors duration-200 ease-out">
                      <span className="material-symbols-outlined text-xs">remove</span>
                    </button>
                    <span className="px-3.5 font-bold font-label text-sm text-on-surface tabular-nums">1</span>
                    <button aria-label="Tambah jumlah" className="w-7 h-7 flex items-center justify-center hover:bg-surface-container-lowest rounded-full transition-colors duration-200 ease-out text-primary">
                      <span className="material-symbols-outlined text-xs">add</span>
                    </button>
                  </div>
                  <div className="text-right">
                    <span className="font-headline text-lg font-bold text-primary tabular-nums">Rp219.000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="pt-6 flex items-center">
              <Link className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-[gap] duration-200 ease-out" href="/catalog">
                <span className="material-symbols-outlined text-base">arrow_back</span>
                <span>Lanjut Berbelanja</span>
              </Link>
            </div>
          </section>

          {/* Order Summary Sidebar */}
          <aside className="lg:col-span-4 sticky top-32">
            <div className="bg-surface-container-low p-8 rounded-3xl">
              <h2 className="font-headline text-xl font-bold text-on-surface mb-6">Ringkasan Pesanan</h2>
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Subtotal produk</span>
                  <span className="font-semibold text-on-surface tabular-nums">Rp388.000</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Estimasi ongkos kirim</span>
                  <span className="font-semibold text-on-surface tabular-nums">Rp15.000</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Biaya penanganan</span>
                  <span className="font-semibold text-on-surface tabular-nums">Rp1.000</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <span className="block text-xs font-semibold text-on-surface-variant mb-2 font-headline">Kode promo / voucher</span>
                <div className="flex gap-2">
                  <input
                    className="flex-grow bg-surface-container-lowest border-none rounded-full px-4 py-2.5 focus:ring-2 focus:ring-primary/20 font-medium text-sm text-on-surface outline-none placeholder:text-outline-variant"
                    placeholder="Masukkan kode voucher"
                    type="text"
                  />
                  <button className="bg-secondary-container text-on-secondary-container px-5 py-2.5 rounded-full font-bold text-xs hover:brightness-95 active:scale-95 transition-[transform,filter] duration-200 ease-out">
                    Pakai
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="pt-4 border-t border-outline-variant/15 mb-6">
                <div className="flex justify-between items-end">
                  <span className="font-headline text-base font-bold text-on-surface">Total tagihan</span>
                  <span className="font-headline text-2xl font-extrabold text-primary tracking-tight tabular-nums">Rp404.000</span>
                </div>
              </div>

              {/* Checkout Button - Single Primary CTA */}
              <button className="w-full primary-gradient text-on-primary py-4 rounded-full font-bold text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-[transform,box-shadow] duration-200 ease-out flex items-center justify-center gap-2">
                <span>Lanjut ke Pembayaran</span>
                <span className="material-symbols-outlined text-lg">lock</span>
              </button>

              {/* Trust Signals */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant opacity-80">
                  <span className="material-symbols-outlined text-base">verified_user</span>
                  QRIS &amp; Transfer Bank
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant opacity-80">
                  <span className="material-symbols-outlined text-base">local_shipping</span>
                  Gratis ongkir min. Rp250rb
                </div>
              </div>
            </div>

            {/* Mini Perk Card */}
            <div className="mt-6 bg-tertiary-container/30 p-5 rounded-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-on-tertiary-container font-bold text-sm mb-1">Kejutan Buat Si Kecil</p>
                <p className="text-on-tertiary-container text-xs opacity-80 mb-3">Belanja Rp112.000 lagi untuk mendapatkan hadiah mainan edukasi gratis!</p>
                <div className="w-full h-1.5 bg-surface-container-lowest/50 rounded-full overflow-hidden">
                  <div className="w-[73%] h-full bg-tertiary-dim rounded-full"></div>
                </div>
              </div>
              <span className="material-symbols-outlined absolute -bottom-2 -right-2 text-6xl text-tertiary-container/30 rotate-12 group-hover:rotate-0 transition-transform duration-500 ease-out">featured_seasonal_and_gifts</span>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full rounded-t-[3rem] mt-20 bg-slate-50 dark:bg-slate-950 font-body">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto text-sm">
          <div className="space-y-4">
            <div className="text-xl font-bold text-emerald-800 dark:text-emerald-300 font-headline">Irsyam Kidz Wear</div>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Pakaian anak bernuansa modern dan ramah kulit untuk generasi yang aktif bermain.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-on-surface">Koleksi</h4>
            <ul className="space-y-2">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Tanya jawab (FAQ)</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Informasi pengiriman</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Garansi retur barang</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-on-surface">Legalitas</h4>
            <ul className="space-y-2">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Kebijakan privasi</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Syarat dan ketentuan</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-on-surface">Terhubung</h4>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-slate-400 hover:text-emerald-600 cursor-pointer transition-colors duration-200 ease-out" data-icon="public">public</span>
              <span className="material-symbols-outlined text-slate-400 hover:text-emerald-600 cursor-pointer transition-colors duration-200 ease-out" data-icon="alternate_email">alternate_email</span>
            </div>
            <p className="text-xs text-slate-400 mt-2">
              © 2024 Irsyam Kidz Wear. Dibuat dengan penuh kasih di Indonesia.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
