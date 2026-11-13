import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CatalogClient from './CatalogClient';

export default function Catalog() {
  return (
    <>
      <Navbar />

      <main className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
        <header className="mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-2">
            Katalog Koleksi
          </h1>
          <p className="text-on-surface-variant font-body text-base">
            Pilihan pakaian anak modis, sejuk, dan ramah kulit untuk aktivitas si kecil.
          </p>
        </header>

        <Suspense
          fallback={
            <div className="py-20 text-center text-on-surface-variant font-body">
              Memuat katalog koleksi...
            </div>
          }
        >
          <CatalogClient />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
