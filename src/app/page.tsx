import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Top Navigation Bar - Single compact line with dominant brand mark */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glass-nav rounded-full shadow-[0_20px_40px_rgba(44,47,46,0.06)] flex justify-between items-center px-8 py-3">
        <Link href="/" className="text-2xl font-black text-emerald-800 dark:text-emerald-300 tracking-tight font-headline">
          Irsyam Kidz Wear
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-bold text-emerald-700 border-b-2 border-emerald-500 py-1 font-label" href="/catalog">Laki-laki</Link>
          <Link className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors duration-200 ease-out font-label" href="/catalog">Perempuan</Link>
          <Link className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors duration-200 ease-out font-label" href="/catalog">Bayi</Link>
          <Link className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors duration-200 ease-out font-label" href="/catalog">Terbaru</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/cart" className="p-2 hover:bg-emerald-50 rounded-full transition-colors duration-200 ease-out inline-flex items-center justify-center" aria-label="Keranjang belanja">
            <span className="material-symbols-outlined text-emerald-700" data-icon="shopping_cart">shopping_cart</span>
          </Link>
          <button className="p-2 hover:bg-emerald-50 rounded-full transition-colors duration-200 ease-out inline-flex items-center justify-center" aria-label="Akun pengguna">
            <span className="material-symbols-outlined text-emerald-700" data-icon="person">person</span>
          </button>
        </div>
      </nav>

      <main className="min-h-screen">
        {/* Hero Section - Bleeds to y=0 behind navbar, centered monumental typography & wide showcase */}
        <section className="relative w-full pt-36 md:pt-44 pb-20 px-6 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center mb-10">
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-on-surface tracking-tight leading-[0.95] mb-6">
              Koleksi Ceria Musim Panas
            </h1>
            <p className="text-base md:text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed font-body mb-8">
              Pakaian anak berbahan katun organik sejuk untuk keceriaan bermain dan eksplorasi si buah hati setiap hari.
            </p>
            <div className="flex justify-center">
              <Link
                href="/catalog"
                className="primary-gradient text-on-primary px-10 py-4 rounded-full font-headline font-bold text-base inline-flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-[transform,box-shadow] duration-200 ease-out"
              >
                Jelajahi Koleksi
                <span className="material-symbols-outlined text-xl" data-icon="arrow_forward">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Full-width showcase stage */}
          <div className="max-w-7xl mx-auto">
            <div className="relative h-[440px] md:h-[560px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_40px_rgba(44,47,46,0.06)] bg-primary-container/20">
              <img
                alt="Anak-anak ceria bermain di luar ruangan mengenakan koleksi musim panas"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8WITzGtyXVNSZXnbWOaUeZug2PRQ-jZ9hj2dibV8WuPsdHk5t99fPj1vWVp200llXuiO6SsftWDShBsbiSdVmNSTj1thpkRW7zegLnmUOj_Tmb2RcItnBWwGEpC8LXJlUq_cbXDl-a57_NXsi1fJoZ5aCQSDtru5IZ24Il1EDXvPpZXVWExdn71sOjBeY4JOJSTjrlGaPyTE5XpsdMjK_0THicUCv7Cm4ZNL11aBFhd_hd_oXGXLyO2Mr_b7guXEMt53CaA3TNgxY"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Category Section - Round icons with sentence case labels */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <Link href="/catalog" className="group flex flex-col items-center gap-3">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary-container transition-colors duration-200 ease-out">
                <span className="material-symbols-outlined text-3xl md:text-4xl text-primary" data-icon="apparel">apparel</span>
              </div>
              <span className="font-headline font-semibold text-sm text-on-surface">Kaos anak</span>
            </Link>
            <Link href="/catalog" className="group flex flex-col items-center gap-3">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-secondary-container transition-colors duration-200 ease-out">
                <span className="material-symbols-outlined text-3xl md:text-4xl text-secondary" data-icon="styler">styler</span>
              </div>
              <span className="font-headline font-semibold text-sm text-on-surface">Gaun manis</span>
            </Link>
            <Link href="/catalog" className="group flex flex-col items-center gap-3">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-tertiary-container transition-colors duration-200 ease-out">
                <span className="material-symbols-outlined text-3xl md:text-4xl text-tertiary" data-icon="checkroom">checkroom</span>
              </div>
              <span className="font-headline font-semibold text-sm text-on-surface">Celana santai</span>
            </Link>
            <Link href="/catalog" className="group flex flex-col items-center gap-3">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary-fixed-dim transition-colors duration-200 ease-out">
                <span className="material-symbols-outlined text-3xl md:text-4xl text-on-primary-fixed" data-icon="category">category</span>
              </div>
              <span className="font-headline font-semibold text-sm text-on-surface">Setelan bermain</span>
            </Link>
          </div>
        </section>

        {/* New Arrivals - Pure typography hierarchy without decorative chips */}
        <section className="bg-surface-container-low py-24 rounded-[3rem]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-2">Koleksi Terbaru</h2>
                <p className="text-on-surface-variant text-sm md:text-base font-medium">Koleksi segar siap menemani hari bermain si kecil</p>
              </div>
              <Link href="/catalog" className="text-primary font-bold text-sm md:text-base flex items-center gap-2 hover:translate-x-1 transition-transform duration-200 ease-out">
                Lihat semua <span className="material-symbols-outlined" data-icon="trending_flat">trending_flat</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Product 1 */}
              <Link href="/product/1" className="group block">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-lowest mb-5 shadow-sm">
                  <img
                    alt="Setelan linen mint"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuADC0OGglbIR4V3si3zFaWC_8R-Du7YFg_BPljFUZzyWxaYqMIAHv7n9o-3SRqH_RyTP0YIG0QQDM2HSBrG3c1UisBr6mujZpbpm3C7OOTV_qacVNGwcqq19ijLL2t34S3d8wfU37coZG02DjZIgpeGK4lHH8pEfEqaaTtSuZ6q0aX14j9Qvu2leJObkA6b1do5fhgSIDmGJHnWDGVruGraTh_ZE1tQEAqhcgtE7_CEvAzvhRSHwZt8XoooCE1gXi-7RYPGYH4wUJoe"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-lg font-bold text-on-surface group-hover:text-primary transition-colors duration-200 ease-out">Setelan Linen Mint</h3>
                  <p className="text-sm text-on-surface-variant font-medium">Bahan linen sejuk buatan lokal</p>
                  <p className="text-base font-bold text-primary tabular-nums">Rp169.000</p>
                </div>
              </Link>

              {/* Product 2 */}
              <Link href="/product/2" className="group block md:-mt-6">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-lowest mb-5 shadow-sm">
                  <img
                    alt="Romper katun motif bunga"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgaYxxBqNlCSZsjz502zG8VeSNkLoFyN8Zf4Ft27ARTogwG0A1xt3G9ZwdQCAGcNSVKAVYwQQkMsBA7JfgOk2iuy30BJMLC0QEgJI0IzoQMKxvRThbct-dbs0-mj4L0xkaaU4UxZq2xXhgdA2eYbGLCj0HvX2mQWa01KsXlYE3X1R_HxluVftDcx-7SWhXelxRN6tn8UqyXEgpEcNDMNW3D7bUrQMw9xfs7KHYBBzS9DwdVMRwazs8uKckddExaj3aFH1t_-Zj2pLY"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-lg font-bold text-on-surface group-hover:text-primary transition-colors duration-200 ease-out">Romper Bunga Organik</h3>
                  <p className="text-sm text-on-surface-variant font-medium">Pilihan favorit para bunda</p>
                  <p className="text-base font-bold text-primary tabular-nums">Rp149.000</p>
                </div>
              </Link>

              {/* Product 3 */}
              <Link href="/product/3" className="group block md:mt-6">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-lowest mb-5 shadow-sm">
                  <img
                    alt="Topi anyaman anak"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlH6KMO6AQFWOxHRFf7ZRj_DJXRXrpP2-GZaIJ0eiXR4skN0zslmipw8ooxjqwrsZhpa7jPWVsjZ7HmcHK3_dl2COj_LkGHTNZTp4Jei2fIYIt4kTs5q84TYNiAZqHtHV886c1XH5FqH1-NDuymIHwy_3Rd7ak5dBg4WKMHILkS3FpVY4hmc3LEdzvtoKwj5fH102-ynSzt0buRb68qUZtHLp2fNmv9lia3RbJzGs4D_MGmgvDUDqnTNYGydy1yaywPcoqrUq3EBG4"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-lg font-bold text-on-surface group-hover:text-primary transition-colors duration-200 ease-out">Topi Jerami Anyam</h3>
                  <p className="text-sm text-on-surface-variant font-medium">Pelindung panas dari serat alami</p>
                  <p className="text-base font-bold text-primary tabular-nums">Rp89.000</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Parent Favorites - Curated Highlight Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface text-center mb-16">Pilihan Favorit Orang Tua</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group">
              <img
                alt="Overal denim klasik"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCpziAKALNYDE4lZRd2BKxeKGcI9kHcmC_YLuUwxA9CGL1ogG3zkStqZPszhv77ahlG8czpxCs6kU7XylmNV2FtF1zRah36HSi1CkLx91rZG69Y8xMsxJJqZSs_4o82hrxHQ_SzxvJTbqmsDDg_1aLnb_wO53fiUHjkKFhYOjsuo51MWpRNk6sa1pqwytfOPK4zTy4hmuNUz7J3wi6rpfUEX1Y3pA_tr3YPhKNtMQwz-SiNk8tv9OGM8CfA08ifAMVnVNiSkrh7YxN"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10">
                <h3 className="text-white font-headline text-2xl md:text-3xl font-bold mb-2">Overal Denim Klasik</h3>
                <p className="text-white/80 mb-6 max-w-sm text-sm md:text-base">Kuat untuk aktivitas bermain di luar ruangan, awet dan nyaman sepanjang hari.</p>
                <Link href="/product/4" className="bg-surface text-on-surface w-fit px-6 py-2.5 rounded-full font-bold text-sm shadow-xl hover:bg-primary hover:text-white transition-colors duration-200 ease-out">
                  Lihat detail
                </Link>
              </div>
            </div>

            <div className="bg-secondary-container/20 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-secondary text-3xl mb-4" data-icon="eco" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                <h3 className="font-headline text-lg font-bold text-on-secondary-container">Paket Kaos Organik</h3>
                <p className="text-sm text-on-secondary-container/80 mt-1">Paket hemat 3 kaos katun harian.</p>
              </div>
              <p className="font-headline font-bold text-on-secondary-container text-base tabular-nums mt-4">Rp119.000</p>
            </div>

            <div className="bg-tertiary-container/20 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-tertiary text-3xl mb-4" data-icon="footprint" style={{ fontVariationSettings: "'FILL' 1" }}>footprint</span>
                <h3 className="font-headline text-lg font-bold text-on-tertiary-container">Sepatu Bayi Lembut</h3>
                <p className="text-sm text-on-tertiary-container/80 mt-1">Sol empuk untuk langkah pertama si kecil.</p>
              </div>
              <p className="font-headline font-bold text-on-tertiary-container text-base tabular-nums mt-4">Rp179.000</p>
            </div>

            <div className="md:col-span-2 bg-primary-fixed-dim/30 rounded-3xl p-8 flex items-center justify-between">
              <div className="max-w-[65%]">
                <h3 className="font-headline text-xl md:text-2xl font-bold text-on-primary-fixed">Gabung Komunitas Bunda</h3>
                <p className="text-on-primary-fixed/80 text-sm mt-1">Dapatkan voucher Rp25.000 dan akses eksklusif untuk koleksi rilis awal.</p>
              </div>
              <div className="w-14 h-14 rounded-full primary-gradient flex items-center justify-center text-on-primary shadow-sm flex-shrink-0">
                <span className="material-symbols-outlined text-2xl" data-icon="mail">mail</span>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="bg-surface-container-high rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold mb-3 text-on-surface relative z-10">Abadikan Keceriaan Si Kecil</h2>
            <p className="text-on-surface-variant text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed relative z-10 font-body">
              Tandai akun kami @irsyamkidz di Instagram untuk kesempatan tampil di lookbook digital bulanan kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 max-w-md mx-auto">
              <input
                className="px-6 py-3.5 rounded-full border-none bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 w-full font-body text-sm outline-none"
                placeholder="Masukkan alamat email bunda..."
                type="email"
              />
              <button className="primary-gradient text-on-primary px-8 py-3.5 rounded-full font-headline font-bold text-sm whitespace-nowrap shadow-md hover:shadow-lg transition-shadow duration-200 ease-out">
                Berlangganan
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-slate-50 dark:bg-slate-950 rounded-t-[3rem] mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto text-base">
          <div className="flex flex-col gap-4">
            <div className="text-xl font-bold text-emerald-800 dark:text-emerald-300 font-headline">Irsyam Kidz Wear</div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Mewujudkan keceriaan masa kecil melalui pakaian anak berkualitas tinggi, ramah kulit, dan berdesain modern.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-emerald-700 font-bold text-sm font-headline">Koleksi</h4>
            <Link className="text-slate-500 hover:text-emerald-600 transition-colors duration-200 ease-out text-sm" href="/catalog">Pakaian anak laki-laki</Link>
            <Link className="text-slate-500 hover:text-emerald-600 transition-colors duration-200 ease-out text-sm" href="/catalog">Pakaian anak perempuan</Link>
            <Link className="text-slate-500 hover:text-emerald-600 transition-colors duration-200 ease-out text-sm" href="/catalog">Kebutuhan bayi</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-emerald-700 font-bold text-sm font-headline">Bantuan</h4>
            <Link className="text-slate-500 hover:text-emerald-600 transition-colors duration-200 ease-out text-sm" href="/catalog">Pertanyaan umum (FAQ)</Link>
            <Link className="text-slate-500 hover:text-emerald-600 transition-colors duration-200 ease-out text-sm" href="/catalog">Informasi pengiriman</Link>
            <Link className="text-slate-500 hover:text-emerald-600 transition-colors duration-200 ease-out text-sm" href="/catalog">Hubungi layanan pelanggan</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-emerald-700 font-bold text-sm font-headline">Terhubung</h4>
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
