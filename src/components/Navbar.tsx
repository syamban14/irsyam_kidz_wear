'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';

function NavbarContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams?.get('kategori');

  const totalItems = useCartStore((state) => state.getTotalItems());
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [copiedVoucher, setCopiedVoucher] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawers when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setProfileOpen(false);
  }, [pathname, currentCategory]);

  const isHomeTop = pathname === '/' && !scrolled && !mobileMenuOpen;

  const navLinks = [
    { label: 'Laki-laki', href: '/catalog?kategori=laki-laki', id: 'laki-laki' },
    { label: 'Perempuan', href: '/catalog?kategori=perempuan', id: 'perempuan' },
    { label: 'Bayi', href: '/catalog?kategori=bayi', id: 'bayi' },
    { label: 'Terbaru', href: '/catalog?kategori=terbaru', id: 'terbaru' },
  ];

  const handleCopyVoucher = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('KIDZ25');
    }
    setCopiedVoucher(true);
    setTimeout(() => setCopiedVoucher(false), 2000);
  };

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 flex justify-between items-center transition-[top,width,background-color,box-shadow,border-radius,padding] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isHomeTop
            ? 'top-0 w-full max-w-7xl bg-transparent px-6 md:px-10 py-5 rounded-none shadow-none'
            : 'top-4 w-[95%] max-w-7xl glass-nav rounded-full shadow-[0_20px_40px_rgba(44,47,46,0.08)] px-6 md:px-8 py-3'
        }`}
      >
        <Link
          href="/"
          className="text-xl md:text-2xl font-black text-emerald-900 tracking-tight font-headline whitespace-nowrap"
        >
          Irsyam Kidz Wear
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === '/catalog' && currentCategory === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`text-sm font-label py-1 transition-colors duration-200 ease-out ${
                  isActive
                    ? 'font-bold text-emerald-700 border-b-2 border-emerald-500'
                    : 'font-medium text-on-surface/80 hover:text-emerald-700'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-3 relative">
          <Link
            href="/cart"
            className="p-2 hover:bg-emerald-500/10 rounded-full transition-colors duration-200 ease-out relative inline-flex items-center justify-center"
            aria-label="Keranjang belanja"
          >
            <span className="material-symbols-outlined text-emerald-800">shopping_cart</span>
            {mounted && totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 bg-secondary text-on-secondary text-[11px] flex items-center justify-center rounded-full font-bold tabular-nums">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            onClick={() => {
              setProfileOpen((prev) => !prev);
              setMobileMenuOpen(false);
            }}
            className="p-2 hover:bg-emerald-500/10 rounded-full transition-colors duration-200 ease-out inline-flex items-center justify-center cursor-pointer"
            aria-label="Info akun dan voucher"
            aria-expanded={profileOpen}
          >
            <span className="material-symbols-outlined text-emerald-800">person</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              setMobileMenuOpen((prev) => !prev);
              setProfileOpen(false);
            }}
            className="md:hidden p-2 hover:bg-emerald-500/10 rounded-full transition-colors duration-200 ease-out inline-flex items-center justify-center cursor-pointer"
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu kategori'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-emerald-800">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>

          {/* Profile Quick Popover */}
          {profileOpen && (
            <div className="absolute right-0 top-14 w-72 bg-surface-container-lowest rounded-3xl p-5 shadow-[0_20px_50px_rgba(44,47,46,0.12)] z-50 animate-fade-up">
              <p className="font-headline font-bold text-sm text-on-surface mb-1">
                Selamat Datang, Bunda
              </p>
              <p className="text-xs text-on-surface-variant mb-4 font-body">
                Belanja cepat &amp; nikmati bebas ongkir minimal Rp250.000.
              </p>
              <div className="bg-surface-container-low rounded-2xl p-3 mb-4 flex items-center justify-between">
                <div>
                  <span className="block text-xs text-on-surface-variant">Voucher diskon Rp25rb</span>
                  <span className="font-headline font-bold text-sm text-primary tabular-nums">KIDZ25</span>
                </div>
                <button
                  onClick={handleCopyVoucher}
                  className="bg-primary text-on-primary px-3 py-1.5 rounded-full text-xs font-bold hover:opacity-90 transition-opacity duration-200 cursor-pointer"
                >
                  {copiedVoucher ? 'Tersalin!' : 'Salin'}
                </button>
              </div>
              <div className="space-y-1 text-sm font-medium">
                <Link
                  href="/catalog"
                  className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-surface-container-low text-on-surface transition-colors duration-150"
                >
                  <span>Lihat semua koleksi</span>
                  <span className="material-symbols-outlined text-base text-primary">arrow_forward</span>
                </Link>
                <Link
                  href="/cart"
                  className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-surface-container-low text-on-surface transition-colors duration-150"
                >
                  <span>Keranjang saya ({mounted ? totalItems : 0})</span>
                  <span className="material-symbols-outlined text-base text-primary">shopping_bag</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/25 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[92%] glass-nav rounded-3xl p-6 shadow-[0_24px_48px_rgba(44,47,46,0.16)] animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className={`px-4 py-3 rounded-2xl font-headline font-bold text-base transition-colors duration-150 ${
                  pathname === '/'
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface hover:bg-surface-container-low'
                }`}
              >
                Beranda
              </Link>
              {navLinks.map((link) => {
                const isActive = pathname === '/catalog' && currentCategory === link.id;
                return (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={`px-4 py-3 rounded-2xl font-headline font-semibold text-base transition-colors duration-150 ${
                      isActive
                        ? 'bg-primary text-on-primary'
                        : 'text-on-surface hover:bg-surface-container-low'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/catalog"
                className="px-4 py-3 rounded-2xl font-headline font-semibold text-base text-primary hover:bg-surface-container-low transition-colors duration-150"
              >
                Semua Koleksi
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function Navbar() {
  return (
    <Suspense
      fallback={
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl z-50 px-6 md:px-10 py-5 flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-black text-emerald-900 tracking-tight font-headline">
            Irsyam Kidz Wear
          </Link>
          <div className="w-10"></div>
        </nav>
      }
    >
      <NavbarContent />
    </Suspense>
  );
}
