import Link from 'next/link';

export default function ProductDetail() {
  return (
    <>
      {/* Top Navigation Bar - Single compact line with dominant brand mark */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glass-nav rounded-full shadow-[0_20px_40px_rgba(44,47,46,0.06)] flex justify-between items-center px-8 py-3">
        <Link href="/" className="text-2xl font-black text-emerald-800 dark:text-emerald-300 tracking-tight font-headline">
          Irsyam Kidz Wear
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/catalog" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors duration-200 ease-out text-sm font-medium font-label">Laki-laki</Link>
          <Link href="/catalog" className="text-emerald-700 dark:text-emerald-400 font-bold border-b-2 border-emerald-500 py-1 text-sm font-label">Perempuan</Link>
          <Link href="/catalog" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors duration-200 ease-out text-sm font-medium font-label">Bayi</Link>
          <Link href="/catalog" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors duration-200 ease-out text-sm font-medium font-label">Terbaru</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/cart" className="p-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-full transition-colors duration-200 ease-out inline-flex items-center justify-center" aria-label="Keranjang belanja">
            <span className="material-symbols-outlined text-emerald-700 dark:text-emerald-400">shopping_cart</span>
          </Link>
          <button className="p-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-full transition-colors duration-200 ease-out inline-flex items-center justify-center" aria-label="Profil pengguna">
            <span className="material-symbols-outlined text-emerald-700 dark:text-emerald-400">person</span>
          </button>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
        {/* Breadcrumb Navigation - Sentence case */}
        <nav className="mb-8 flex items-center gap-2 text-sm font-medium text-on-surface-variant font-body" aria-label="Breadcrumb">
          <Link className="hover:text-primary transition-colors duration-200 ease-out" href="/">Beranda</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <Link className="hover:text-primary transition-colors duration-200 ease-out" href="/catalog">Koleksi perempuan</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-on-surface">Gaun bunga tropis</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Image Gallery Section */}
          <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
            {/* Main Image */}
            <div className="flex-1 rounded-3xl overflow-hidden bg-surface-container-low aspect-[4/5] relative shadow-sm">
              <img
                alt="Anak perempuan mengenakan gaun bunga musim panas bermain ceria di luar ruangan"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOHBrTFCK7COQg2JiVu0dxZF7-9JMZZlzKQ-v6bAe77sdZonz5yrjKtYiRjaRuKbRlzal4BKae4ukbaDyzlA4TbsA1hQ7jiqGiGZ2qGdzTbeb1pb44rze_fEqFvuhdHjiPCb6U5WHNMvtlJSD_3RDUdOX-iQbATxLMFRM4Izg6BsT9K_34uJsLmi59JGK5K3-uX16CeA4geKMi5_qa9v2fZEVApy8Rzoak1bLjdLmB-Ph9gPFeTHr9lZoe3WszTTEQDHeqOhhbgDVP"
              />
              <div className="absolute top-6 right-6">
                <button aria-label="Simpan ke favorit" className="w-11 h-11 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center text-primary shadow-sm hover:bg-white transition-colors duration-200 ease-out">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:w-20">
              <button aria-label="Foto utama gaun" className="flex-shrink-0 w-20 h-24 md:w-full rounded-2xl overflow-hidden ring-2 ring-primary ring-offset-2 transition-[box-shadow] duration-200 ease-out">
                <img alt="Foto utama gaun" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB-ogN5zMhi6h-nwS53Fgoq-GyxHsXPpXhApDstZYqPLMfcLQ4EBlWvt-b1uIaz1Gxmz2VEY2xvdM5bU6bI_KwkO4GAKRlmFIjRJskaJGTJFO98KSlefU9ZkpZbZAEgyQZKzoX_UTwMukIGQzsgsohQcCuRjyu7FRXvHvHr7nLH5VZ3q-xpIsH1dZbLfK57bz-KgSbbYW2JN05MLbwKJCHD9e9cSdNePnxyK1aJ8SObEOZrPSNyA1OvdYlbmBRfqOei3YTUZ7OTnz7"/>
              </button>
              <button aria-label="Foto detail serat kain" className="flex-shrink-0 w-20 h-24 md:w-full rounded-2xl overflow-hidden opacity-70 hover:opacity-100 transition-opacity duration-200 ease-out">
                <img alt="Detail serat kain" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBur2NW3d-IEjAYl4cRRT2_qctOaEjMjK9tiUWgMe5ArsRLUIiv_IovZcbpk_e1jdMZsbqW35yoEf9QPD0lEbHPmkeUf6cCXfT5j6HMl6xD79T_XallybhroWH98H-tz3ARkOwZ85B4hs7FEbkVsRTpdOJNMdtd6h-LQPxCqrix-aogdz6OttQF2fBPwqv26TH9oipygszbnkc8RxJsNNslsschrd4anwtNpRK4RrrtWg5RlNIY-Md4p20gVhg9bN-UJ6Gha1emEtUY"/>
              </button>
              <button aria-label="Foto detail pita belakang" className="flex-shrink-0 w-20 h-24 md:w-full rounded-2xl overflow-hidden opacity-70 hover:opacity-100 transition-opacity duration-200 ease-out">
                <img alt="Detail pita belakang" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvH3mnPcJ_rHibVOZshnhOTE3FhC-9FgOtn5KHJegVy6qdxuMYwKo4XSpvTLBHv8S1tXCjVqUcHfF9ms9-7g4x_ST_lLeUH5spmrnDu-ZjmNxRNQ2vGBHGNrORLKFXFJ4by_j9EOdHg3sCYlOKxY98zAICLYeFZdITxtoNkxjg8eY6-ts5qKIEBrzGzIcfPLKQYeTiDKRuo4Wp9SaX57VVtJ8EYNd5m8D-V_IO9PkzGsKq-T96GDGNu0TJkjNtCwL7H4ChSPZkWDgx"/>
              </button>
            </div>
          </div>

          {/* Product Details Section - Pure typography hierarchy without decorative chips */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface leading-tight mb-3">
              Gaun Bunga Tropis Anak
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center bg-surface-container-high px-3 py-1 rounded-full">
                <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="ml-1 text-xs font-bold tabular-nums">4.9</span>
                <span className="mx-2 text-outline-variant text-xs">·</span>
                <span className="text-xs font-medium text-on-surface-variant">128 ulasan pembeli</span>
              </div>
              <span className="text-2xl md:text-3xl font-headline font-extrabold text-primary tabular-nums">Rp189.000</span>
            </div>

            {/* Color Selector */}
            <div className="mb-6">
              <span className="block text-sm font-semibold text-on-surface-variant mb-3 font-headline">Warna: Kelopak Bunga Pagi</span>
              <div className="flex gap-3">
                <button aria-label="Merah muda kelopak" className="w-9 h-9 rounded-full bg-[#FFD1DC] ring-2 ring-primary ring-offset-2"></button>
                <button aria-label="Hijau mint sejuk" className="w-9 h-9 rounded-full bg-[#E0F2F1] hover:scale-105 transition-transform duration-200 ease-out"></button>
                <button aria-label="Kuning mentari" className="w-9 h-9 rounded-full bg-[#FFF9C4] hover:scale-105 transition-transform duration-200 ease-out"></button>
              </div>
            </div>

            {/* Size Selector - Connected Segmented Toggle (No Button Walls) */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-on-surface-variant font-headline">Pilih ukuran</span>
                <button className="text-xs font-semibold text-primary flex items-center gap-1 hover:underline">
                  <span className="material-symbols-outlined text-sm">straighten</span>
                  Panduan ukuran
                </button>
              </div>
              <div className="inline-flex p-1 bg-surface-container-high rounded-full w-full justify-between">
                <button className="flex-1 py-2 rounded-full text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors duration-200 ease-out">S (2-3 Thn)</button>
                <button className="flex-1 py-2 rounded-full text-xs font-bold bg-primary text-on-primary shadow-sm transition-[background-color,color] duration-200 ease-out">M (4-5 Thn)</button>
                <button className="flex-1 py-2 rounded-full text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors duration-200 ease-out">L (6-7 Thn)</button>
                <button className="flex-1 py-2 rounded-full text-xs font-semibold text-on-surface-variant hover:text-on-surface transition-colors duration-200 ease-out">XL (8-9 Thn)</button>
              </div>
            </div>

            {/* Primary Action Button - Single clear primary action */}
            <div className="flex flex-col gap-3 mb-10">
              <button className="primary-gradient text-on-primary font-bold py-4 px-8 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-[transform,box-shadow] duration-200 ease-out flex items-center justify-center gap-3">
                <span className="material-symbols-outlined text-xl">shopping_bag</span>
                Tambah ke Keranjang
              </button>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-surface-container-low flex flex-col gap-1.5">
                <span className="material-symbols-outlined text-primary text-xl">eco</span>
                <h4 className="font-bold text-sm text-on-surface">100% Katun organik</h4>
                <p className="text-xs text-on-surface-variant">Sangat lembut dan ramah untuk kulit si kecil.</p>
              </div>
              <div className="p-4 rounded-2xl bg-surface-container-low flex flex-col gap-1.5">
                <span className="material-symbols-outlined text-primary text-xl">local_shipping</span>
                <h4 className="font-bold text-sm text-on-surface">Pengiriman cepat</h4>
                <p className="text-xs text-on-surface-variant">Bebas ongkir untuk pesanan di atas Rp250.000.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Info Sections */}
        <div className="mt-24 max-w-4xl mx-auto space-y-16">
          <section>
            <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">Cerita Produk</h3>
            <p className="text-base text-on-surface-variant leading-relaxed font-body">
              Motif bunga tropis yang dilukis dengan penuh kasih berpadu dengan kain katun organik pilihan, menjadikan gaun ini pilihan paling nyaman untuk si buah hati. Potongan longgar dengan aksen pita di bagian belakang memberikan kebebasan bergerak sepenuhnya saat bermain di rumah maupun berlibur di akhir pekan.
            </p>
          </section>

          <section className="bg-surface-container-low p-8 md:p-12 rounded-[2.5rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-lg font-headline font-bold mb-4 text-on-surface">Bahan &amp; Perawatan</h4>
                <ul className="space-y-2.5 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    Katun organik bersertifikat OEKO-TEX
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    Pewarna alami non-toksik aman untuk kulit
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    Bisa dicuci mesin (mode lembut) dengan air dingin
                  </li>
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
            <Link href="/product/2" className="group block">
              <div className="aspect-[4/5] rounded-2xl bg-surface-container-lowest overflow-hidden mb-3 relative shadow-sm group-hover:shadow-md transition-shadow duration-300 ease-out">
                <img alt="Romper denim indigo" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBnQYxOAEoutqefdusVbTVr621KT2j094i4oE7jKehB9ZMbWL-NOSa3aaku_CbPZ7id42moT7qKN25Fl5wLWZcz2ea7pf2A7Z2KFYhwG-VuPTyFh4EzYfzq8bLlB9MlupKn7AfNPaD9vGl4cTLos-SD60hD-dTMZYc4jDqwg1xP_kzu8cnPz2MNu-LTQEmGiexrz_ZqVb5rz7Uj33PO2OOOAYQVXNzziK4XN7lsqapTXUTbZWKddHN0K0t-Nf2jdoOBO_ctXY_M7sL"/>
              </div>
              <h4 className="font-headline font-bold text-sm md:text-base text-on-surface mb-0.5 group-hover:text-primary transition-colors duration-200 ease-out">Romper Denim Indigo</h4>
              <p className="text-xs md:text-sm font-bold text-primary tabular-nums">Rp139.000</p>
            </Link>

            <Link href="/product/3" className="group block">
              <div className="aspect-[4/5] rounded-2xl bg-surface-container-lowest overflow-hidden mb-3 relative shadow-sm group-hover:shadow-md transition-shadow duration-300 ease-out">
                <img alt="Sandal santai anak" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALP__AvpSzOIXMLYRNEuXfZFXEAAayXp4jtzA2T4aON7YYkRlgiB8JX0xDxHHQ-40THr67rhv_BA8-ae6Ri9qeqX-C55pvropbe3UyOEjWDeSWXVJtG9efQ71j8uqNVKSnneO93Pg04zNakNK1NB5TOzZRY7HIQkeAyfpyil3kATUe-MqPjG6_8WXMPR2kc8OchQPqgAQGqiMXicBU3-2PURp_5oRuvGxaRQgc6_pAWyg2ESr_4IpodwVeqPeCYxHtvguElQBpABbd"/>
              </div>
              <h4 className="font-headline font-bold text-sm md:text-base text-on-surface mb-0.5 group-hover:text-primary transition-colors duration-200 ease-out">Sandal Santai Anak</h4>
              <p className="text-xs md:text-sm font-bold text-primary tabular-nums">Rp165.000</p>
            </Link>

            <Link href="/product/4" className="group block">
              <div className="aspect-[4/5] rounded-2xl bg-surface-container-lowest overflow-hidden mb-3 relative shadow-sm group-hover:shadow-md transition-shadow duration-300 ease-out">
                <img alt="Topi pantai anyam" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbkFvg0k07AJrr6Wy2ow9es0nOS0geV_4ushQiEgCfnTlL1zpqRsi15Q6d0-pC2QIyM62oFueOjeX0RESlcul7ajUQghfPEtBX6AmJZpTbhq1VX7O2Vxy433K5BKJbPVpKubMkrHF5IL4uJnPBC60t6MdOnzsLlNlYpvfu2PfPDXV-vvB1pYNfF0Oms0vV10G4C-PO0ynK0lTOTTi-eEFI8IZ54Gmgqn5OB6lCjtZQpsdtj5altbVkfHJNirBb1yptDRHKABCeaVJJ"/>
              </div>
              <h4 className="font-headline font-bold text-sm md:text-base text-on-surface mb-0.5 group-hover:text-primary transition-colors duration-200 ease-out">Topi Pantai Anyam</h4>
              <p className="text-xs md:text-sm font-bold text-primary tabular-nums">Rp75.000</p>
            </Link>

            <Link href="/product/5" className="group block">
              <div className="aspect-[4/5] rounded-2xl bg-surface-container-lowest overflow-hidden mb-3 relative shadow-sm group-hover:shadow-md transition-shadow duration-300 ease-out">
                <img alt="Celana pendek linen sejuk" className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyKk8DRx_fa-FYrRKXFhqP6KA99D9kO6K1oa4D_UMcdt9slaNyggQ6iwR7QEBNgSQI60WBe2FhOnUMUa9Ld67llHIXqgBR_uOkQq1WJ8cU89Ib7BFsHxpUsZOq9P34oIE69uEurAZ1pwWBB4MiMolYX5xbO8ALLRF4hRc49BYKc6Fp8eUO4V0ha31IsVHpdxzCTE0YGftpJaY1W5INGPfb-469kFnnxl9mD0k7Nv5i5idZoiiJQeCaPaxSHPA_v5_L5L8USwn7wAQO"/>
              </div>
              <h4 className="font-headline font-bold text-sm md:text-base text-on-surface mb-0.5 group-hover:text-primary transition-colors duration-200 ease-out">Celana Pendek Linen</h4>
              <p className="text-xs md:text-sm font-bold text-primary tabular-nums">Rp95.000</p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full rounded-t-[3rem] mt-20 bg-slate-50 dark:bg-slate-950 px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm font-body">
          <div className="space-y-4">
            <div className="text-xl font-bold text-emerald-800 dark:text-emerald-300 font-headline">Irsyam Kidz Wear</div>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
              Pakaian anak bernuansa modern dan ramah kulit untuk generasi yang aktif bermain.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-on-surface">Koleksi</h4>
            <ul className="space-y-2">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Koleksi terbaru</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Pilihan terlaris</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Semua produk</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-on-surface">Bantuan</h4>
            <ul className="space-y-2">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Tanya jawab (FAQ)</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Informasi pengiriman</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Kontak pelanggan</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-headline font-bold text-on-surface">Legalitas</h4>
            <ul className="space-y-2">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Kebijakan privasi</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 transition-colors duration-200 ease-out" href="/catalog">Syarat dan ketentuan</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-slate-200/50 text-center text-xs text-slate-400">
          © 2024 Irsyam Kidz Wear. Dibuat dengan penuh kasih di Indonesia.
        </div>
      </footer>
    </>
  );
}
