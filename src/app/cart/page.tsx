'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { PRODUCTS } from '@/data/products';
import { useCartStore } from '@/store/cartStore';

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const [promoInput, setPromoInput] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [paymentSuccessData, setPaymentSuccessData] = useState<{
    token: string;
    total: number;
  } | null>(null);

  const {
    items,
    addItem,
    removeItem,
    updateQuantity,
    applyPromoCode,
    promoCode,
    discount,
    promoError,
    getSubtotal,
    getShippingFee,
    getFinalTotal,
    clearCart,
  } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const subtotal = mounted ? getSubtotal() : 0;
  const shippingFee = mounted ? getShippingFee() : 0;
  const serviceFee = mounted && items.length > 0 ? 1000 : 0;
  const finalTotal = mounted ? getFinalTotal() : 0;
  const complementaryProducts = PRODUCTS.filter(
    (p) => !items.some((i) => i.product.id === p.id)
  ).slice(0, 3);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    applyPromoCode(promoInput);
  };

  const handleProceedToCheckout = async () => {
    setIsCheckingOut(true);
    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((i) => ({
            id: i.product.id,
            name: i.product.name,
            price: i.product.price,
            quantity: i.quantity,
            size: i.size,
            color: i.color,
          })),
          amount: finalTotal,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setPaymentSuccessData({
          token: data.token,
          total: finalTotal,
        });
      }
    } catch (err) {
      console.error('Checkout error:', err);
    } finally {
      setIsCheckingOut(false);
    }
  };

  const handleFinishOrder = () => {
    clearCart();
    setPaymentSuccessData(null);
  };

  if (!mounted) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen text-center">
          <p className="text-on-surface-variant font-body">Memuat keranjang belanja...</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen animate-fade-up">
        <header className="mb-10">
          <h1 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface tracking-tight mb-2">
            Keranjang Belanja
          </h1>
          <p className="text-on-surface-variant font-medium text-base">
            {items.length > 0
              ? `Terdapat ${items.length} jenis pakaian siap menemani hari ceria si kecil.`
              : 'Keranjang belanja Anda masih kosong.'}
          </p>
        </header>

        {items.length === 0 ? (
          <div className="bg-surface-container-low rounded-3xl p-12 text-center max-w-2xl mx-auto my-12">
            <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">
              shopping_bag
            </span>
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-2">
              Belum Ada Pakaian di Keranjang
            </h2>
            <p className="text-on-surface-variant font-body text-sm mb-8 max-w-md mx-auto">
              Yuk, temukan pakaian anak berbahan katun organik yang nyaman dan lembut untuk si buah hati!
            </p>
            <Link
              href="/catalog"
              className="primary-gradient text-on-primary px-8 py-3.5 rounded-full font-headline font-bold text-sm shadow-md hover:shadow-lg transition-shadow duration-200 ease-out inline-flex items-center gap-2"
            >
              <span>Jelajahi Katalog Pakaian</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Cart Items Section */}
            <section className="lg:col-span-8 space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center group shadow-sm hover:shadow-md transition-shadow duration-300 ease-out"
                >
                  <div className="w-full md:w-44 h-44 rounded-xl overflow-hidden bg-surface-container-low flex-shrink-0">
                    <img
                      alt={item.product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      src={item.product.images[0]}
                    />
                  </div>

                  <div className="flex-grow flex flex-col justify-between h-full py-1 w-full">
                    <div className="flex justify-between items-start">
                      <div>
                        <Link href={`/product/${item.product.id}`}>
                          <h3 className="font-headline text-lg font-bold text-on-surface hover:text-primary transition-colors duration-200 ease-out">
                            {item.product.name}
                          </h3>
                        </Link>
                        <p className="text-on-surface-variant text-sm mt-1">
                          {item.color} · {item.size}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label="Hapus produk"
                        className="text-outline-variant hover:text-error transition-colors duration-200 ease-out p-1"
                      >
                        <span className="material-symbols-outlined text-xl">delete</span>
                      </button>
                    </div>

                    <div className="flex justify-between items-end mt-6">
                      <div className="inline-flex items-center bg-surface-container-high rounded-full p-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label="Kurangi jumlah"
                          className="w-7 h-7 flex items-center justify-center hover:bg-surface-container-lowest rounded-full transition-colors duration-200 ease-out"
                        >
                          <span className="material-symbols-outlined text-xs">remove</span>
                        </button>
                        <span className="px-3.5 font-bold font-label text-sm text-on-surface tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label="Tambah jumlah"
                          className="w-7 h-7 flex items-center justify-center hover:bg-surface-container-lowest rounded-full transition-colors duration-200 ease-out text-primary"
                        >
                          <span className="material-symbols-outlined text-xs">add</span>
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-headline text-lg font-bold text-primary tabular-nums">
                          Rp{(item.product.price * item.quantity).toLocaleString('id-ID')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-6 flex justify-between items-center">
                <Link
                  className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-[gap] duration-200 ease-out"
                  href="/catalog"
                >
                  <span className="material-symbols-outlined text-base">arrow_back</span>
                  <span>Lanjut Berbelanja</span>
                </Link>

                <button
                  onClick={clearCart}
                  className="text-xs text-outline-variant hover:text-error transition-colors duration-200 ease-out underline"
                >
                  Kosongkan Keranjang
                </button>
              </div>
            </section>

            {/* Order Summary Sidebar */}
            <aside className="lg:col-span-4 sticky top-32">
              <div className="bg-surface-container-low p-8 rounded-3xl shadow-sm">
                <h2 className="font-headline text-xl font-bold text-on-surface mb-6">Ringkasan Pesanan</h2>
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between text-on-surface-variant">
                    <span>Subtotal produk</span>
                    <span className="font-semibold text-on-surface tabular-nums">
                      Rp{subtotal.toLocaleString('id-ID')}
                    </span>
                  </div>

                  <div className="flex justify-between text-on-surface-variant">
                    <span>Estimasi ongkos kirim</span>
                    <span className="font-semibold text-on-surface tabular-nums">
                      {shippingFee === 0 ? (
                        <span className="text-emerald-700 font-bold">Gratis</span>
                      ) : (
                        `Rp${shippingFee.toLocaleString('id-ID')}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between text-on-surface-variant">
                    <span>Biaya layanan</span>
                    <span className="font-semibold text-on-surface tabular-nums">
                      Rp{serviceFee.toLocaleString('id-ID')}
                    </span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-bold">
                      <span>Voucher ({promoCode})</span>
                      <span className="tabular-nums">-Rp{discount.toLocaleString('id-ID')}</span>
                    </div>
                  )}
                </div>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="mb-6">
                  <span className="block text-xs font-semibold text-on-surface-variant mb-2 font-headline">
                    Kode promo / voucher (contoh: KIDZ25)
                  </span>
                  <div className="flex gap-2">
                    <input
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="flex-grow bg-surface-container-lowest border-none rounded-full px-4 py-2.5 focus:ring-2 focus:ring-primary/20 font-medium text-sm text-on-surface outline-none placeholder:text-outline-variant uppercase"
                      placeholder="KIDZ25"
                      type="text"
                    />
                    <button
                      type="submit"
                      className="bg-secondary-container text-on-secondary-container px-5 py-2.5 rounded-full font-bold text-xs hover:brightness-95 active:scale-95 transition-[transform,filter] duration-200 ease-out"
                    >
                      Pakai
                    </button>
                  </div>
                  {promoError && (
                    <p className="text-xs text-error mt-2 font-medium">{promoError}</p>
                  )}
                  {discount > 0 && !promoError && (
                    <p className="text-xs text-emerald-700 mt-2 font-medium">✓ Voucher aktif diterapkan!</p>
                  )}
                </form>

                {/* Total */}
                <div className="pt-4 border-t border-outline-variant/15 mb-6">
                  <div className="flex justify-between items-end">
                    <span className="font-headline text-base font-bold text-on-surface">Total tagihan</span>
                    <span className="font-headline text-2xl font-extrabold text-primary tracking-tight tabular-nums">
                      Rp{finalTotal.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleProceedToCheckout}
                  disabled={isCheckingOut}
                  className="w-full primary-gradient text-on-primary py-4 rounded-full font-bold text-base shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-[transform,box-shadow] duration-200 ease-out flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  <span>{isCheckingOut ? 'Menyiapkan Pembayaran...' : 'Lanjut ke Pembayaran'}</span>
                  <span className="material-symbols-outlined text-lg">
                    {isCheckingOut ? 'hourglass_top' : 'lock'}
                  </span>
                </button>

                {/* Trust Signals */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant opacity-80">
                    <span className="material-symbols-outlined text-base text-primary">verified_user</span>
                    QRIS &amp; Transfer Bank
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant opacity-80">
                    <span className="material-symbols-outlined text-base text-primary">local_shipping</span>
                    Gratis ongkir ≥ Rp250rb
                  </div>
                </div>
              </div>

              {/* Free Shipping Progress Perk */}
              {subtotal < 250000 && (
                <div className="mt-6 bg-tertiary-container/30 p-5 rounded-2xl relative overflow-hidden group">
                  <div className="relative z-10">
                    <p className="text-on-tertiary-container font-bold text-sm mb-1">Promo Bebas Ongkir</p>
                    <p className="text-on-tertiary-container text-xs opacity-80 mb-3">
                      Belanja Rp{(250000 - subtotal).toLocaleString('id-ID')} lagi untuk mendapatkan Gratis Ongkir!
                    </p>
                    <div className="w-full h-1.5 bg-surface-container-lowest/50 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${Math.min(100, Math.round((subtotal / 250000) * 100))}%` }}
                        className="h-full bg-tertiary-dim rounded-full transition-[width] duration-300 ease-out"
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </aside>
          </div>
        )}

        {/* Complementary Quick-Add Products */}
        {complementaryProducts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-outline-variant/15">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="font-headline text-2xl font-bold text-on-surface">
                  Pilihan Pelengkap untuk Si Kecil
                </h2>
                <p className="text-sm text-on-surface-variant font-body mt-1">
                  {subtotal > 0 && subtotal < 250000
                    ? `Tambahkan 1 pakaian lagi untuk langsung menikmati pengiriman gratis.`
                    : `Rekomendasi koleksi katun organik favorit Bunda.`}
                </p>
              </div>
              <Link
                href="/catalog"
                className="text-primary font-headline font-bold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-[gap] duration-200"
              >
                <span>Lihat semua koleksi</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {complementaryProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-surface-container-lowest rounded-3xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <Link
                    href={`/product/${prod.id}`}
                    className="w-20 h-24 rounded-2xl overflow-hidden bg-surface-container-low flex-shrink-0 block"
                  >
                    <img
                      src={prod.images[0]}
                      alt={prod.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link href={`/product/${prod.id}`}>
                      <h3 className="font-headline font-bold text-sm text-on-surface truncate hover:text-primary transition-colors">
                        {prod.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      {prod.sizes[0]} · {prod.colors[0]?.name}
                    </p>
                    <p className="font-headline font-bold text-sm text-primary tabular-nums mt-1">
                      Rp{prod.price.toLocaleString('id-ID')}
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        addItem(
                          prod,
                          prod.sizes[0] || 'Standar',
                          prod.colors[0]?.name || 'Standar',
                          1
                        )
                      }
                      className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                      <span>Tambah ke keranjang</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Payment Confirmation Modal */}
        {paymentSuccessData && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-surface-container-lowest max-w-md w-full rounded-3xl p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
              </div>

              <h2 className="font-headline text-2xl font-bold text-on-surface text-center mb-2">
                Pesanan Berhasil Dibuat!
              </h2>
              <p className="text-sm text-on-surface-variant text-center mb-6">
                Kode Transaksi: <strong className="font-mono text-on-surface">{paymentSuccessData.token}</strong>
              </p>

              <div className="bg-surface-container-low p-5 rounded-2xl mb-6 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Metode</span>
                  <span className="font-semibold text-on-surface">QRIS / Virtual Account</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Total Tagihan</span>
                  <span className="font-bold text-primary tabular-nums">
                    Rp{paymentSuccessData.total.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">Status</span>
                  <span className="text-emerald-700 font-bold">Menunggu Pembayaran</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleFinishOrder}
                  className="w-full primary-gradient text-on-primary py-3.5 rounded-full font-headline font-bold text-sm shadow-md"
                >
                  Selesai &amp; Bersihkan Keranjang
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
