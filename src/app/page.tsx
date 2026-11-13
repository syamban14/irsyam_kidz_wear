import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import {
  HeroInteractiveStage,
  CommunityVoucherCard,
  NewsletterForm,
} from '@/components/HomeInteractive';
import { PRODUCTS } from '@/data/products';

export default function Home() {
  const newArrivals = PRODUCTS.filter((p) => p.isNew).slice(0, 3);
  const favoriteItem = PRODUCTS.find((p) => p.id === '4') || PRODUCTS[3];
  const secondFavorite = PRODUCTS.find((p) => p.id === '5') || PRODUCTS[4];
  const thirdFavorite = PRODUCTS.find((p) => p.id === '8') || PRODUCTS[7];

  const categories = [
    {
      title: 'Gaun manis',
      subtitle: 'Katun tropis ringan',
      href: '/catalog?kategori=perempuan',
      image: PRODUCTS.find((p) => p.id === '1')?.images[0] || '/images/prod-gaun-bunga.jpg',
    },
    {
      title: 'Kaos & kemeja',
      subtitle: 'Linen & rajut adem',
      href: '/catalog?kategori=laki-laki',
      image: PRODUCTS.find((p) => p.id === '3')?.images[0] || '/images/prod-gaun-bunga.jpg',
    },
    {
      title: 'Celana & overal',
      subtitle: 'Lentur bebas bergerak',
      href: '/catalog?kategori=laki-laki',
      image: PRODUCTS.find((p) => p.id === '4')?.images[0] || '/images/prod-romper-bunga.jpg',
    },
    {
      title: 'Perlengkapan bayi',
      subtitle: 'Ekstra lembut & aman',
      href: '/catalog?kategori=bayi',
      image: PRODUCTS.find((p) => p.id === '2')?.images[0] || '/images/prod-romper-bunga.jpg',
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Full-Bleed Atmospheric Hero */}
        <section className="relative w-full min-h-[94dvh] flex items-center pb-12 md:pb-16 pt-28 overflow-hidden">
          <img
            src="/images/hero-editorial.jpg"
            alt="Koleksi Pakaian Anak Organik Irsyam Kidz Wear"
            className="absolute inset-0 w-full h-full object-cover object-[72%_65%] md:object-[75%_70%] scale-[1.03]"
          />
          {/* Sunlit Editorial Gradient Overlay for high text contrast on the left while keeping children on the right clear */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-[#f5f7f5]/88 via-[#f5f7f5]/65 to-[#f5f7f5]/95 md:bg-gradient-to-r md:from-[#f5f7f5] md:via-[#f5f7f5]/82 md:via-45% md:to-transparent"
          />
          {/* Soft radial sunlit wash over top-right architectural seam so navbar and upper sky feel seamless */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_55%_32%_at_82%_0%,rgba(245,247,245,0.92)_0%,rgba(245,247,245,0.45)_55%,transparent_100%)] pointer-events-none"
          />
          {/* Subtle top edge wash so transparent navbar links/icons stay crisp */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#f5f7f5]/90 via-[#f5f7f5]/50 to-transparent pointer-events-none"
          />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
            <div className="max-w-xl">
              <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl font-black text-on-surface tracking-tight leading-[0.96] mb-5 animate-fade-up">
                Koleksi Ceria Musim Panas
              </h1>
              <p className="text-base md:text-lg text-on-surface-variant max-w-md leading-relaxed font-body mb-7 animate-fade-up-delay-1">
                Pakaian anak berbahan katun organik sejuk untuk keceriaan bermain dan eksplorasi si buah hati setiap hari.
              </p>
              <div className="mb-8 animate-fade-up-delay-1">
                <Link
                  href="/catalog"
                  className="primary-gradient text-on-primary px-9 py-4 rounded-full font-headline font-bold text-base inline-flex items-center gap-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-[transform,box-shadow] duration-200 ease-out"
                >
                  <span>Jelajahi koleksi</span>
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </Link>
              </div>

              <HeroInteractiveStage />
            </div>
          </div>
        </section>

        {/* Visual Editorial Categories */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface tracking-tight">
                Pilihan Kategori
              </h2>
              <p className="text-on-surface-variant font-body mt-1.5">
                Temukan potongan paling pas untuk setiap aktivitas harian si kecil.
              </p>
            </div>
            <Link
              href="/catalog"
              className="text-primary font-headline font-bold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-[gap] duration-200"
            >
              <span>Buka semua katalog</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {categories.map((cat, idx) => (
              <ScrollReveal key={cat.title} delayMs={idx * 70}>
                <Link
                  href={cat.href}
                  className="group relative block aspect-[4/5] rounded-3xl overflow-hidden bg-surface-container-low shadow-[0_8px_24px_rgba(44,47,46,0.05)]"
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent"
                  />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <h3 className="font-headline text-lg md:text-xl font-bold leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-xs md:text-sm text-white/85 font-body mt-0.5">
                      {cat.subtitle}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Koleksi Terbaru — Asymmetric Organic Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface tracking-tight mb-2">
                Koleksi Terbaru
              </h2>
              <p className="text-on-surface-variant font-body">
                Potongan segar berbahan lembut untuk hari yang penuh petualangan.
              </p>
            </div>
            <Link
              href="/catalog?filter=terbaru"
              className="text-primary font-headline font-bold inline-flex items-center gap-2 hover:gap-3 transition-[gap] duration-200 self-start sm:self-auto"
            >
              <span>Lihat semua</span>
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:pb-8">
            {newArrivals.map((item, idx) => (
              <ScrollReveal
                key={item.id}
                delayMs={idx * 90}
                className={idx === 1 ? 'md:translate-y-6' : ''}
              >
                <Link href={`/product/${item.id}`} className="group block cursor-pointer">
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-surface-container-low mb-4 shadow-[0_8px_24px_rgba(44,47,46,0.04)]">
                    <img
                      alt={item.name}
                      src={item.images[0]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    />
                  </div>
                  <div className="flex justify-between items-start gap-4 px-1">
                    <div>
                      <h3 className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors duration-200">
                        {item.name}
                      </h3>
                      <p className="text-sm text-on-surface-variant font-body mt-0.5 line-clamp-1">
                        {item.colors.map((c) => c.name).join(' · ')}
                      </p>
                    </div>
                    <span className="font-headline font-bold text-lg text-primary whitespace-nowrap tabular-nums">
                      Rp{item.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Pilihan Favorit Orang Tua & Komunitas */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <ScrollReveal className="mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface tracking-tight mb-2">
              Pilihan Favorit Orang Tua
            </h2>
            <p className="text-on-surface-variant font-body">
              Pakaian paling dicintai oleh keluarga kami karena kenyamanan dan keawetannya.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Hero Favorite Card */}
            <ScrollReveal className="lg:col-span-6">
              <Link
                href={`/product/${favoriteItem.id}`}
                className="relative h-full min-h-[420px] rounded-3xl overflow-hidden bg-surface-container-low group block shadow-[0_12px_32px_rgba(44,47,46,0.06)]"
              >
                <img
                  alt={favoriteItem.name}
                  src={favoriteItem.images[0]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
                />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-xs font-medium text-white/85 mb-1.5">
                    Pilihan terlaris bulan ini
                  </p>
                  <h3 className="font-headline text-2xl md:text-3xl font-bold mb-2">
                    {favoriteItem.name}
                  </h3>
                  <p className="text-white/90 text-sm mb-6 max-w-md line-clamp-2 font-body">
                    {favoriteItem.description}
                  </p>
                  <span className="inline-flex items-center gap-2 bg-white text-on-surface px-6 py-2.5 rounded-full font-headline font-bold text-sm shadow-sm group-hover:bg-primary group-hover:text-on-primary transition-colors duration-200">
                    Beli sekarang — Rp{favoriteItem.price.toLocaleString('id-ID')}
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Right Pair + Interactive Voucher */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ScrollReveal delayMs={80}>
                <Link
                  href={`/product/${secondFavorite.id}`}
                  className="bg-surface-container-lowest rounded-3xl p-5 flex flex-col justify-between group h-full shadow-[0_6px_20px_rgba(44,47,46,0.04)] hover:-translate-y-1 transition-transform duration-300 ease-out"
                >
                  <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-low mb-4">
                    <img
                      alt={secondFavorite.name}
                      src={secondFavorite.images[0]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors duration-200">
                      {secondFavorite.name}
                    </h4>
                    <p className="font-headline font-bold text-primary mt-1 tabular-nums">
                      Rp{secondFavorite.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>

              <ScrollReveal delayMs={140}>
                <Link
                  href={`/product/${thirdFavorite.id}`}
                  className="bg-surface-container-lowest rounded-3xl p-5 flex flex-col justify-between group h-full shadow-[0_6px_20px_rgba(44,47,46,0.04)] hover:-translate-y-1 transition-transform duration-300 ease-out"
                >
                  <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-low mb-4">
                    <img
                      alt={thirdFavorite.name}
                      src={thirdFavorite.images[0]}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    />
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors duration-200">
                      {thirdFavorite.name}
                    </h4>
                    <p className="font-headline font-bold text-primary mt-1 tabular-nums">
                      Rp{thirdFavorite.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>

              <ScrollReveal delayMs={180} className="sm:col-span-2">
                <CommunityVoucherCard />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 pb-24">
          <ScrollReveal>
            <div className="bg-surface-container-low rounded-[2.5rem] px-6 py-16 md:p-20 text-center relative overflow-hidden">
              <div className="max-w-xl mx-auto relative z-10">
                <h2 className="font-headline text-3xl md:text-4xl font-black text-on-surface tracking-tight mb-4">
                  Dapatkan Inspirasi &amp; Promo Hangat
                </h2>
                <p className="text-on-surface-variant font-body text-base leading-relaxed mb-8">
                  Daftar buletin mingguan kami untuk katalog lookbook terbaru, panduan merawat serat alami, serta penawaran khusus anggota.
                </p>
                <NewsletterForm />
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
