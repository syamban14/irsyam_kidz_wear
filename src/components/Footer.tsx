'use client';

import { useState } from 'react';
import Link from 'next/link';

type HelpTab = 'faq' | 'pengiriman' | 'kontak' | null;

const FAQ_ITEMS = [
  {
    q: 'Apakah bahan pakaian aman untuk kulit bayi yang sensitif?',
    a: 'Seluruh koleksi utama kami menggunakan 100% katun organik dan linen bersertifikat OEKO-TEX yang bebas bahan kimia keras serta pewarna sintetis pemicu alergi.',
  },
  {
    q: 'Bagaimana jika ukuran yang dibeli kurang pas di badan anak?',
    a: 'Kami menyediakan garansi tukar ukuran gratis selama 7 hari sejak paket diterima, selama label pakaian masih terpasang dan belum dicuci.',
  },
  {
    q: 'Bagaimana cara merawat pakaian katun organik agar awet?',
    a: 'Cuci menggunakan air dingin dengan putaran lembut, gunakan deterjen cair ramah bayi, dan jemur di tempat teduh agar serat alami tetap lembut.',
  },
];

export default function Footer() {
  const [activeHelpTab, setActiveHelpTab] = useState<HelpTab>(null);

  return (
    <>
      <footer className="w-full bg-surface-container-low rounded-t-[3rem] mt-20 font-body border-t border-outline-variant/15">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto text-base">
          <div className="flex flex-col gap-4">
            <div className="text-xl font-bold text-primary font-headline tracking-tight">
              Irsyam Kidz Wear
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Mewujudkan keceriaan masa kecil melalui pakaian anak berkualitas tinggi, ramah kulit, dan berdesain modern.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-primary font-bold text-sm font-headline">Koleksi</h4>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-out text-sm"
              href="/catalog?kategori=laki-laki"
            >
              Pakaian anak laki-laki
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-out text-sm"
              href="/catalog?kategori=perempuan"
            >
              Pakaian anak perempuan
            </Link>
            <Link
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-out text-sm"
              href="/catalog?kategori=bayi"
            >
              Kebutuhan bayi
            </Link>
          </div>

          <div className="flex flex-col gap-3 items-start">
            <h4 className="text-primary font-bold text-sm font-headline">Bantuan</h4>
            <button
              type="button"
              onClick={() => setActiveHelpTab('faq')}
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-out text-sm cursor-pointer text-left"
            >
              Pertanyaan umum (FAQ)
            </button>
            <button
              type="button"
              onClick={() => setActiveHelpTab('pengiriman')}
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-out text-sm cursor-pointer text-left"
            >
              Informasi pengiriman
            </button>
            <button
              type="button"
              onClick={() => setActiveHelpTab('kontak')}
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 ease-out text-sm cursor-pointer text-left"
            >
              Hubungi layanan pelanggan
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-primary font-bold text-sm font-headline">Terhubung</h4>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setActiveHelpTab('kontak')}
                aria-label="Informasi butik dan sosial"
                className="w-10 h-10 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-white shadow-sm flex items-center justify-center cursor-pointer transition-colors duration-200 ease-out"
              >
                <span className="material-symbols-outlined text-xl">public</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveHelpTab('kontak')}
                aria-label="Kirim pesan ke layanan pelanggan"
                className="w-10 h-10 rounded-full bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-white shadow-sm flex items-center justify-center cursor-pointer transition-colors duration-200 ease-out"
              >
                <span className="material-symbols-outlined text-xl">alternate_email</span>
              </button>
            </div>
            <p className="text-xs text-on-surface-variant mt-2">
              © 2026 Irsyam Kidz Wear. Dibuat dengan penuh kasih di Indonesia.
            </p>
          </div>
        </div>
      </footer>

      {activeHelpTab && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-up"
          onClick={() => setActiveHelpTab(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="footer-help-title"
        >
          <div
            className="bg-surface-container-lowest rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-outline-variant/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h3 id="footer-help-title" className="font-headline text-xl font-bold text-on-surface">
                  Pusat Informasi &amp; Bantuan Bunda
                </h3>
                <p className="text-xs text-on-surface-variant font-body mt-1">
                  Layanan ramah keluarga Irsyam Kidz Wear
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveHelpTab(null)}
                className="p-2 rounded-full hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
                aria-label="Tutup jendela bantuan"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Segmented Tab Switcher */}
            <div className="inline-flex p-1 bg-surface-container-high rounded-full w-full justify-between gap-1 mb-6">
              {[
                { id: 'faq', label: 'FAQ' },
                { id: 'pengiriman', label: 'Pengiriman' },
                { id: 'kontak', label: 'Hubungi kami' },
              ].map((t) => {
                const isActive = activeHelpTab === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveHelpTab(t.id as HelpTab)}
                    className={`flex-1 py-2 px-3 rounded-full text-xs font-semibold transition-[background-color,color] duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-primary text-on-primary font-bold shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface'
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>

            {activeHelpTab === 'faq' && (
              <div className="space-y-4">
                {FAQ_ITEMS.map((item) => (
                  <div
                    key={item.q}
                    className="bg-surface-container-low rounded-2xl p-4"
                  >
                    <h4 className="font-headline font-bold text-sm text-on-surface mb-1.5">
                      {item.q}
                    </h4>
                    <p className="text-xs text-on-surface-variant font-body leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeHelpTab === 'pengiriman' && (
              <div className="space-y-4 text-sm font-body text-on-surface-variant">
                <div className="bg-surface-container-low rounded-2xl p-4 flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-primary text-2xl mt-0.5">
                    local_shipping
                  </span>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface text-sm mb-1">
                      Gratis Ongkir ke Seluruh Indonesia
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Nikmati pengiriman gratis otomatis untuk setiap transaksi minimal <strong className="text-on-surface tabular-nums">Rp250.000</strong>. Untuk pesanan di bawah nominal tersebut, tarif flat hanya <strong className="text-on-surface tabular-nums">Rp18.000</strong>.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-2xl p-4 flex items-start gap-3.5">
                  <span className="material-symbols-outlined text-primary text-2xl mt-0.5">
                    schedule
                  </span>
                  <div>
                    <h4 className="font-headline font-bold text-on-surface text-sm mb-1">
                      Jadwal Pengiriman Harian
                    </h4>
                    <p className="text-xs leading-relaxed">
                      Pesanan terkonfirmasi sebelum pukul 15.00 WIB dikirim di hari yang sama. Tersedia opsi kurir instan untuk area Jabodetabek &amp; Bandung.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeHelpTab === 'kontak' && (
              <div className="space-y-4">
                <div className="bg-surface-container-low rounded-2xl p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      chat
                    </span>
                    <div>
                      <h4 className="font-headline font-bold text-sm text-on-surface">
                        WhatsApp Concierge Bunda
                      </h4>
                      <p className="text-xs text-on-surface-variant tabular-nums">
                        +62 812-8890-2026 (Senin–Sabtu, 08.00–20.00 WIB)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-2xl p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      mail
                    </span>
                    <div>
                      <h4 className="font-headline font-bold text-sm text-on-surface">
                        Email Layanan Pelanggan
                      </h4>
                      <p className="text-xs text-on-surface-variant">
                        halo@irsyamkidzwear.id
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-2xl p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      storefront
                    </span>
                    <div>
                      <h4 className="font-headline font-bold text-sm text-on-surface">
                        Studio &amp; Galeri Butik
                      </h4>
                      <p className="text-xs text-on-surface-variant">
                        Jl. Trunojoyo No. 24, Bandung — Jawa Barat
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
