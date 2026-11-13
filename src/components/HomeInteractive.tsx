'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';

const MOOD_SCENES = [
  {
    id: 'taman',
    label: 'Bermain di Taman',
    productId: '4',
    tagline: 'Denim lentur tahan aktivitas luar ruangan',
  },
  {
    id: 'acara',
    label: 'Acara Keluarga',
    productId: '1',
    tagline: 'Katun organik motif bunga yang anggun & sejuk',
  },
  {
    id: 'santai',
    label: 'Santai di Rumah',
    productId: '2',
    tagline: 'Serat alami ekstra lembut untuk kulit sensitif',
  },
];

export function HeroInteractiveStage() {
  const [activeMoodIndex, setActiveMoodIndex] = useState(0);
  const currentMood = MOOD_SCENES[activeMoodIndex];
  const featuredProduct = PRODUCTS.find((p) => p.id === currentMood.productId) || PRODUCTS[0];

  return (
    <div className="glass-nav rounded-3xl p-4 md:p-5 shadow-[0_20px_50px_rgba(44,47,46,0.12)] max-w-xl animate-fade-up-delay-2">
      {/* Connected Segmented Pills for Mood Selection */}
      <div className="inline-flex flex-wrap sm:flex-nowrap p-1 bg-surface-container-high/80 rounded-full mb-4 w-full justify-between gap-1">
        {MOOD_SCENES.map((mood, idx) => {
          const isActive = idx === activeMoodIndex;
          return (
            <button
              key={mood.id}
              onClick={() => setActiveMoodIndex(idx)}
              className={`flex-1 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-[background-color,color,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer ${
                isActive
                  ? 'bg-primary text-on-primary font-bold shadow-sm'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {mood.label}
            </button>
          );
        })}
      </div>

      {/* Interactive Preview Card */}
      <Link
        href={`/product/${featuredProduct.id}`}
        className="flex items-center gap-4 group bg-surface-container-lowest/90 rounded-2xl p-3 hover:bg-surface-container-lowest transition-colors duration-200 ease-out"
      >
        <div className="w-16 h-20 rounded-xl overflow-hidden bg-surface-container-low flex-shrink-0">
          <img
            src={featuredProduct.images[0]}
            alt={featuredProduct.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-primary mb-0.5">{currentMood.tagline}</p>
          <h3 className="font-headline font-bold text-sm md:text-base text-on-surface truncate group-hover:text-primary transition-colors duration-200">
            {featuredProduct.name}
          </h3>
          <p className="font-headline font-bold text-sm text-on-surface-variant tabular-nums">
            Rp{featuredProduct.price.toLocaleString('id-ID')}
          </p>
        </div>
        <span className="w-9 h-9 rounded-full bg-surface-container-low group-hover:bg-primary group-hover:text-on-primary text-primary flex items-center justify-center transition-colors duration-200 flex-shrink-0">
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </span>
      </Link>
    </div>
  );
}

export function CommunityVoucherCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText('KIDZ25');
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className="md:col-span-2 bg-primary-fixed-dim/30 hover:bg-primary-fixed-dim/45 rounded-3xl p-8 flex items-center justify-between text-left w-full transition-colors duration-200 ease-out cursor-pointer group"
    >
      <div className="max-w-[72%]">
        <h3 className="font-headline text-xl md:text-2xl font-bold text-on-primary-fixed mb-1">
          {copied ? '✓ Kode Voucher KIDZ25 Disalin!' : 'Gabung Komunitas Bunda'}
        </h3>
        <p className="text-on-primary-fixed/85 text-sm leading-relaxed">
          {copied
            ? 'Gunakan di halaman keranjang untuk potongan langsung Rp25.000.'
            : 'Klik untuk salin kode KIDZ25 dan nikmati potongan Rp25.000 di keranjang.'}
        </p>
      </div>
      <div className="w-14 h-14 rounded-full primary-gradient flex items-center justify-center text-on-primary shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-200 ease-out">
        <span className="material-symbols-outlined text-2xl">
          {copied ? 'check' : 'content_copy'}
        </span>
      </div>
    </button>
  );
}

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubmittedEmail(email.trim());
    setEmail('');
  };

  if (submittedEmail) {
    return (
      <div className="bg-surface-container-lowest/90 rounded-3xl px-8 py-6 max-w-md mx-auto shadow-sm animate-fade-up">
        <span className="material-symbols-outlined text-primary text-3xl mb-2">mark_email_read</span>
        <p className="font-headline font-bold text-base text-on-surface mb-1">
          Terima Kasih, Bunda!
        </p>
        <p className="text-sm text-on-surface-variant font-body">
          Lookbook terbaru dan info promo telah dikirim ke <strong>{submittedEmail}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 max-w-md mx-auto"
    >
      <input
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-6 py-3.5 rounded-full border-none bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 w-full font-body text-sm outline-none text-on-surface placeholder:text-outline-variant"
        placeholder="Masukkan alamat email bunda..."
        type="email"
      />
      <button
        type="submit"
        className="primary-gradient text-on-primary px-8 py-3.5 rounded-full font-headline font-bold text-sm whitespace-nowrap shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-[transform,box-shadow] duration-200 ease-out cursor-pointer"
      >
        Berlangganan
      </button>
    </form>
  );
}
