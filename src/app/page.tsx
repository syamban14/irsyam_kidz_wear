import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PRODUCTS } from '@/data/products';

export default function Home() {
  const newArrivals = PRODUCTS.filter((p) => p.isNew).slice(0, 3);
  const favoriteItem = PRODUCTS.find((p) => p.isFavorite && p.id === '4') || PRODUCTS[3];
  const secondFavorite = PRODUCTS.find((p) => p.id === '5') || PRODUCTS[4];
  const thirdFavorite = PRODUCTS.find((p) => p.id === '8') || PRODUCTS[7];

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
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

        {/* Category Section */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <Link href="/catalog?kategori=laki-laki" className="group flex flex-col items-center gap-3">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary-container transition-colors duration-200 ease-out">
                <span className="material-symbols-outlined text-3xl md:text-4xl text-primary" data-icon="apparel">apparel</span>
              </div>
              <span className="font-headline font-semibold text-sm text-on-surface">Kaos anak</span>
            </Link>
            <Link href="/catalog?kategori=perempuan" className="group flex flex-col items-center gap-3">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-secondary-container transition-colors duration-200 ease-out">
                <span className="material-symbols-outlined text-3xl md:text-4xl text-secondary" data-icon="styler">styler</span>
              </div>
              <span className="font-headline font-semibold text-sm text-on-surface">Gaun manis</span>
            </Link>
            <Link href="/catalog?kategori=laki-laki" className="group flex flex-col items-center gap-3">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-tertiary-container transition-colors duration-200 ease-out">
                <span className="material-symbols-outlined text-3xl md:text-4xl text-tertiary" data-icon="checkroom">checkroom</span>
              </div>
              <span className="font-headline font-semibold text-sm text-on-surface">Celana santai</span>
            </Link>
            <Link href="/catalog?kategori=bayi" className="group flex flex-col items-center gap-3">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-surface-container-low flex items-center justify-center group-hover:bg-primary-fixed-dim transition-colors duration-200 ease-out">
                <span className="material-symbols-outlined text-3xl md:text-4xl text-on-primary-fixed" data-icon="category">category</span>
              </div>
              <span className="font-headline font-semibold text-sm text-on-surface">Setelan bermain</span>
            </Link>
          </div>
        </section>

        {/* New Arrivals - Dynamic from PRODUCTS */}
        <section className="bg-surface-container-low py-24 rounded-[3rem]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-2">Koleksi Terbaru</h2>
                <p className="text-on-surface-variant text-sm md:text-base font-medium">Koleksi segar siap menemani hari bermain si kecil</p>
              </div>
              <Link href="/catalog?kategori=terbaru" className="text-primary font-bold text-sm md:text-base flex items-center gap-2 hover:translate-x-1 transition-transform duration-200 ease-out">
                Lihat semua <span className="material-symbols-outlined" data-icon="trending_flat">trending_flat</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {newArrivals.map((prod, idx) => (
                <Link
                  key={prod.id}
                  href={`/product/${prod.id}`}
                  className={`group block ${idx === 1 ? 'md:-mt-6' : idx === 2 ? 'md:mt-6' : ''}`}
                >
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container-lowest mb-5 shadow-sm">
                    <img
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      src={prod.images[0]}
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-headline text-lg font-bold text-on-surface group-hover:text-primary transition-colors duration-200 ease-out">
                      {prod.name}
                    </h3>
                    <p className="text-sm text-on-surface-variant font-medium">
                      {prod.category === 'perempuan' ? 'Pilihan favorit para bunda' : 'Bahan katun sejuk pilihan'}
                    </p>
                    <p className="text-base font-bold text-primary tabular-nums">
                      Rp{prod.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Parent Favorites - Dynamic highlight */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface text-center mb-16">Pilihan Favorit Orang Tua</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group">
              <img
                alt={favoriteItem.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src={favoriteItem.images[0]}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10">
                <h3 className="text-white font-headline text-2xl md:text-3xl font-bold mb-2">{favoriteItem.name}</h3>
                <p className="text-white/80 mb-6 max-w-sm text-sm md:text-base">{favoriteItem.description}</p>
                <Link
                  href={`/product/${favoriteItem.id}`}
                  className="bg-surface text-on-surface w-fit px-6 py-2.5 rounded-full font-bold text-sm shadow-xl hover:bg-primary hover:text-white transition-colors duration-200 ease-out"
                >
                  Lihat detail
                </Link>
              </div>
            </div>

            <div className="bg-secondary-container/20 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-secondary text-3xl mb-4" data-icon="eco" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                <h3 className="font-headline text-lg font-bold text-on-secondary-container">{secondFavorite.name}</h3>
                <p className="text-sm text-on-secondary-container/80 mt-1">{secondFavorite.description}</p>
              </div>
              <p className="font-headline font-bold text-on-secondary-container text-base tabular-nums mt-4">
                Rp{secondFavorite.price.toLocaleString('id-ID')}
              </p>
            </div>

            <div className="bg-tertiary-container/20 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-tertiary text-3xl mb-4" data-icon="footprint" style={{ fontVariationSettings: "'FILL' 1" }}>footprint</span>
                <h3 className="font-headline text-lg font-bold text-on-tertiary-container">{thirdFavorite.name}</h3>
                <p className="text-sm text-on-tertiary-container/80 mt-1">{thirdFavorite.description}</p>
              </div>
              <p className="font-headline font-bold text-on-tertiary-container text-base tabular-nums mt-4">
                Rp{thirdFavorite.price.toLocaleString('id-ID')}
              </p>
            </div>

            <div className="md:col-span-2 bg-primary-fixed-dim/30 rounded-3xl p-8 flex items-center justify-between">
              <div className="max-w-[65%]">
                <h3 className="font-headline text-xl md:text-2xl font-bold text-on-primary-fixed">Gabung Komunitas Bunda</h3>
                <p className="text-on-primary-fixed/80 text-sm mt-1">Gunakan kode voucher KIDZ25 di keranjang untuk potongan Rp25.000!</p>
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

      <Footer />
    </>
  );
}
