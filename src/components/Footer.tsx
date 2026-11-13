import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 rounded-t-[3rem] mt-20 font-body">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto text-base">
        <div className="flex flex-col gap-4">
          <div className="text-xl font-bold text-emerald-800 dark:text-emerald-300 font-headline">Irsyam Kidz Wear</div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Mewujudkan keceriaan masa kecil melalui pakaian anak berkualitas tinggi, ramah kulit, dan berdesain modern.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="text-emerald-700 font-bold text-sm font-headline">Koleksi</h4>
          <Link className="text-slate-500 hover:text-emerald-600 transition-colors duration-200 ease-out text-sm" href="/catalog?kategori=laki-laki">Pakaian anak laki-laki</Link>
          <Link className="text-slate-500 hover:text-emerald-600 transition-colors duration-200 ease-out text-sm" href="/catalog?kategori=perempuan">Pakaian anak perempuan</Link>
          <Link className="text-slate-500 hover:text-emerald-600 transition-colors duration-200 ease-out text-sm" href="/catalog?kategori=bayi">Kebutuhan bayi</Link>
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
  );
}
