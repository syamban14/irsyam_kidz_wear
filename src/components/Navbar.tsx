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

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { label: 'Laki-laki', href: '/catalog?kategori=laki-laki', id: 'laki-laki' },
    { label: 'Perempuan', href: '/catalog?kategori=perempuan', id: 'perempuan' },
    { label: 'Bayi', href: '/catalog?kategori=bayi', id: 'bayi' },
    { label: 'Terbaru', href: '/catalog?kategori=terbaru', id: 'terbaru' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glass-nav rounded-full shadow-[0_20px_40px_rgba(44,47,46,0.06)] flex justify-between items-center px-8 py-3">
      <Link href="/" className="text-2xl font-black text-emerald-800 dark:text-emerald-300 tracking-tight font-headline">
        Irsyam Kidz Wear
      </Link>
      
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
                  : 'font-medium text-slate-600 hover:text-emerald-600'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <Link
          href="/cart"
          className="p-2 hover:bg-emerald-50 rounded-full transition-colors duration-200 ease-out relative inline-flex items-center justify-center"
          aria-label="Keranjang belanja"
        >
          <span className="material-symbols-outlined text-emerald-700">shopping_cart</span>
          {mounted && totalItems > 0 && (
            <span className="absolute top-0 right-0 w-4 h-4 bg-secondary text-on-secondary text-[11px] flex items-center justify-center rounded-full font-bold tabular-nums">
              {totalItems}
            </span>
          )}
        </Link>
        <button
          className="p-2 hover:bg-emerald-50 rounded-full transition-colors duration-200 ease-out inline-flex items-center justify-center"
          aria-label="Profil pengguna"
        >
          <span className="material-symbols-outlined text-emerald-700">person</span>
        </button>
      </div>
    </nav>
  );
}

export default function Navbar() {
  return (
    <Suspense
      fallback={
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glass-nav rounded-full shadow-[0_20px_40px_rgba(44,47,46,0.06)] flex justify-between items-center px-8 py-3">
          <Link href="/" className="text-2xl font-black text-emerald-800 tracking-tight font-headline">
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
