import Link from 'next/link';

export default function Catalog() {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full z-50 bg-white/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(44,47,46,0.06)] flex justify-between items-center px-8 py-3">
        <Link href="/" className="text-2xl font-black text-emerald-800 tracking-tight font-headline">Irsyam Kidz Wear</Link>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="/catalog">Boys</Link>
          <Link className="text-sm font-bold text-emerald-700 border-b-2 border-emerald-500" href="/catalog">Girls</Link>
          <Link className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="/catalog">Babies</Link>
          <Link className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="/catalog">New Arrivals</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/cart" className="flex p-2 hover:bg-emerald-50 rounded-full transition-all">
            <span className="material-symbols-outlined text-emerald-700">shopping_cart</span>
          </Link>
          <button className="p-2 hover:bg-emerald-50 rounded-full transition-all">
            <span className="material-symbols-outlined text-emerald-700">person</span>
          </button>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
        {/* Header Section */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="font-headline text-5xl font-extrabold text-on-surface tracking-tight mb-2">Browse Collection</h1>
            <p className="text-on-surface-variant font-body">Curated styles for the little explorers.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <select className="appearance-none bg-surface-container-low border-none rounded-xl px-6 py-3 pr-12 font-label text-sm font-medium focus:ring-2 focus:ring-primary/20 cursor-pointer">
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Popularity</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
            </div>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filter */}
          <aside className="w-full md:w-64 flex-shrink-0 space-y-10">
            <div className="space-y-6">
              <h3 className="font-headline text-lg font-bold">Size</h3>
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded-lg bg-surface-container-highest font-label text-xs font-semibold hover:bg-primary-container transition-colors">2T</button>
                <button className="px-4 py-2 rounded-lg bg-primary-container text-on-primary-container font-label text-xs font-semibold">3T</button>
                <button className="px-4 py-2 rounded-lg bg-surface-container-highest font-label text-xs font-semibold hover:bg-primary-container transition-colors">4T</button>
                <button className="px-4 py-2 rounded-lg bg-surface-container-highest font-label text-xs font-semibold hover:bg-primary-container transition-colors">5T</button>
                <button className="px-4 py-2 rounded-lg bg-surface-container-highest font-label text-xs font-semibold hover:bg-primary-container transition-colors">6Y</button>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="font-headline text-lg font-bold">Color Palette</h3>
              <div className="flex flex-wrap gap-3">
                <button className="w-8 h-8 rounded-full bg-emerald-500 ring-2 ring-offset-2 ring-emerald-500"></button>
                <button className="w-8 h-8 rounded-full bg-amber-400 ring-offset-2 hover:ring-2 hover:ring-amber-400 transition-all"></button>
                <button className="w-8 h-8 rounded-full bg-sky-400 ring-offset-2 hover:ring-2 hover:ring-sky-400 transition-all"></button>
                <button className="w-8 h-8 rounded-full bg-rose-400 ring-offset-2 hover:ring-2 hover:ring-rose-400 transition-all"></button>
                <button className="w-8 h-8 rounded-full bg-slate-200 ring-offset-2 hover:ring-2 hover:ring-slate-300 transition-all"></button>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-headline text-lg font-bold">Price Range</h3>
              <div className="space-y-4">
                <input className="w-full accent-primary bg-surface-container-high h-1.5 rounded-full" max="200" min="0" type="range" defaultValue="120"/>
                <div className="flex justify-between text-sm font-medium text-on-surface-variant font-label">
                  <span>$0</span>
                  <span>$120+</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-headline text-lg font-bold">Age Group</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input defaultChecked className="rounded-sm border-outline-variant text-primary focus:ring-primary/20 w-5 h-5 transition-all" type="checkbox"/>
                  <span className="font-body text-sm group-hover:text-primary transition-colors">Toddler (1-3 yrs)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded-sm border-outline-variant text-primary focus:ring-primary/20 w-5 h-5 transition-all" type="checkbox"/>
                  <span className="font-body text-sm group-hover:text-primary transition-colors">Little Kids (4-7 yrs)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input className="rounded-sm border-outline-variant text-primary focus:ring-primary/20 w-5 h-5 transition-all" type="checkbox"/>
                  <span className="font-body text-sm group-hover:text-primary transition-colors">Big Kids (8-12 yrs)</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <section className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
              
              {/* Product Card 1 */}
              <Link href="/product/1" className="group cursor-pointer block">
                <div className="relative bg-surface-container-lowest rounded-lg overflow-hidden mb-6 aspect-[4/5] shadow-[0_20px_40px_rgba(44,47,46,0.03)] group-hover:shadow-[0_20px_40px_rgba(44,47,46,0.08)] transition-all duration-500">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Meadow Blossom Dress" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzCVgBivVDdQjhZCQnBpk4-GS9EsGH7O_z5wQycgY5DZ5NgOoMzKYDWbz7TWyjlEFTE_4tbE0UsCeHfhoJsA0PBCNrOM4TwnU8PFMgvQDo6iGh1oP_1kfdCextg4oQmiZfh0pb9e9QrEbtCffuWkV-wEEwmb3Qar62SCBJI4f4Oyjs0P6Fn9QhV2PIE0DoSxLVVI91WxbEVWG-vj-1uF9XOVC_H2hZeOvJPQj7AMWpqgQvPW1ijXeV4tm1w7vHyUX7RXkyQkkxz114"/>
                  <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Organic</div>
                  <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
                  </button>
                </div>
                <h3 className="font-headline font-bold text-lg mb-1 group-hover:text-primary transition-colors">Meadow Blossom Dress</h3>
                <p className="text-on-surface-variant font-body text-sm mb-2">Sustainable Cotton • Flora Pattern</p>
                <p className="font-headline font-extrabold text-primary text-xl">$48.00</p>
              </Link>
              
              {/* Product Card 2 */}
              <Link href="/product/2" className="group cursor-pointer block sm:mt-8">
                <div className="relative bg-surface-container-lowest rounded-lg overflow-hidden mb-6 aspect-[4/5] shadow-[0_20px_40px_rgba(44,47,46,0.03)] group-hover:shadow-[0_20px_40px_rgba(44,47,46,0.08)] transition-all duration-500">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Sun-Kissed Rain Shell" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7WuHzGvNH4_IoaPG0xBHmQML0mSPT1gbHDQW6qVzjnTTLNqK-RpddHvkbGF1qg_KZSS36mrnvdHE5IGtrpAOh2vmqbTHTQFBgqASpn1f2syMtrJDhZODtb_IxWTFBbIbcMb3hCI54F9REgM8hoobGX0MUbZMrGY4_kXJaWUWK2j1MPGhlP6w85unF8T1seAZwmo454JBRU-4-vJex7q71_6yR4lfEFmd4CCuCZmLnPvJVJRHSxYyJdbyFqzWmPepOiRD4SRhTOTqG"/>
                  <div className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Best Seller</div>
                  <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
                  </button>
                </div>
                <h3 className="font-headline font-bold text-lg mb-1 group-hover:text-primary transition-colors">Sun-Kissed Rain Shell</h3>
                <p className="text-on-surface-variant font-body text-sm mb-2">Water-Resistant • Recycled PET</p>
                <p className="font-headline font-extrabold text-primary text-xl">$65.00</p>
              </Link>

              {/* Product Card 3 */}
              <Link href="/product/3" className="group cursor-pointer block">
                <div className="relative bg-surface-container-lowest rounded-lg overflow-hidden mb-6 aspect-[4/5] shadow-[0_20px_40px_rgba(44,47,46,0.03)] group-hover:shadow-[0_20px_40px_rgba(44,47,46,0.08)] transition-all duration-500">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Vintage Denim Overall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrOh_xsbFZVcicMP8gXX6pZTp8qBAzKq_v3ic9bPtDMR5aZSpFP5tvSP57xOfEgvnc227knPKj0oUxIA-ySb4VRAKC4OBLOPw4Ge9ygJrPG2R75BH1FnA8Zkt4-XnwsGTtEsSU3uIs5XTgymuc4Cau0zWfWnnUZD8X0dJZoip59rQmFHGWQJl1ccwK8_WgUedJ3bxCFbUZGCitL--ZeHmLyCpM5I0veXl6wfx3bq1G18e_fPyg11Osv2flTEffsawBt-Pu43ey9ftW"/>
                  <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
                  </button>
                </div>
                <h3 className="font-headline font-bold text-lg mb-1 group-hover:text-primary transition-colors">Vintage Denim Overall</h3>
                <p className="text-on-surface-variant font-body text-sm mb-2">Soft Stretch • Classic Indigo</p>
                <p className="font-headline font-extrabold text-primary text-xl">$52.00</p>
              </Link>

              {/* Product Card 4 */}
              <Link href="/product/4" className="group cursor-pointer block">
                <div className="relative bg-surface-container-lowest rounded-lg overflow-hidden mb-6 aspect-[4/5] shadow-[0_20px_40px_rgba(44,47,46,0.03)] group-hover:shadow-[0_20px_40px_rgba(44,47,46,0.08)] transition-all duration-500">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Cloud Linen Button-Up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi6T75TXCN8PyiCLQUnwNRO3xKkPqiCE5_qhg6ab-UDzHfTT0duPw9sl8RfGWoDp4hsQwq5GrBiU4nADztS1jQ4ORlSWncYsEqQbEWQ5OmNNVqqpPXjr4OSGr1gN7SarIHTaPsJTbRW9t4LWvWJvkKyj-MYA_DuxhTWdeGQ7R2ENnufij_hWkItijWAqacLGcxvKnnj-xeXeXskSoLBPw5VDVof_xKKUK_7BZSvAtpalcuzwxyJEz3FmEWDmqg04CrlXYeew4osKPe"/>
                  <div className="absolute top-4 left-4 bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">New</div>
                  <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
                  </button>
                </div>
                <h3 className="font-headline font-bold text-lg mb-1 group-hover:text-primary transition-colors">Cloud Linen Button-Up</h3>
                <p className="text-on-surface-variant font-body text-sm mb-2">Breathable • Heirloom Quality</p>
                <p className="font-headline font-extrabold text-primary text-xl">$39.00</p>
              </Link>

              {/* Product Card 5 */}
              <Link href="/product/5" className="group cursor-pointer block sm:mt-8">
                <div className="relative bg-surface-container-lowest rounded-lg overflow-hidden mb-6 aspect-[4/5] shadow-[0_20px_40px_rgba(44,47,46,0.03)] group-hover:shadow-[0_20px_40px_rgba(44,47,46,0.08)] transition-all duration-500">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Warm Embrace Cardigan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv2ISmp1rl1oqIQzfiBBaIE-C2tgw0gXUlJ1Hcnph4LLnr0x-N_3OzMEQEgdAuIog3HNsyAZQYLpNLJCtY1-RaU8Xmct9vVfjW5JRvtF76xIrQsrArFkp3FGmodkMJOr6yuT5IVc9E4P8sItJYNTsB29xG8hg4KyxCR73-QGFeHqs1L4GRlzrje2JmqKlud11-tGJyDFvATVt-0H6X_O5_um-qKFs65GZ0Hs3FgQ5ZyEBYrZc66QKsXtAL8Do0DI8XfZM00zMO4Ywu"/>
                  <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
                  </button>
                </div>
                <h3 className="font-headline font-bold text-lg mb-1 group-hover:text-primary transition-colors">Warm Embrace Cardigan</h3>
                <p className="text-on-surface-variant font-body text-sm mb-2">Merino Wool Mix • Dusty Rose</p>
                <p className="font-headline font-extrabold text-primary text-xl">$55.00</p>
              </Link>

              {/* Product Card 6 */}
              <Link href="/product/6" className="group cursor-pointer block">
                <div className="relative bg-surface-container-lowest rounded-lg overflow-hidden mb-6 aspect-[4/5] shadow-[0_20px_40px_rgba(44,47,46,0.03)] group-hover:shadow-[0_20px_40px_rgba(44,47,46,0.08)] transition-all duration-500">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Adventurer Jogger Set" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtWPRbrxETnTCRP54r7ME5snP1MLmRMqvs46syeLjWPWF3oUGd_i2eCHtdMIlBuupSI5apIuT-SNPWEnuQCWuRIUggnnlTp2IMSoAjZ4aqYekxOkAgYwZlcnb_vR7ikWUry-xzulxo1StA47ifxWwEzfRYmorA538CGOJJWVMqBDtD3lu1rJnBzA_M1gIb4Akz_QyfvJkMwJ-CFJGjTpHoOWMBmZpcnG6GlRZm51xd_EKyDnAZbCkCWUuVMYWSLQF7jO3URU2jcVWi"/>
                  <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="material-symbols-outlined text-primary">add_shopping_cart</span>
                  </button>
                </div>
                <h3 className="font-headline font-bold text-lg mb-1 group-hover:text-primary transition-colors">Adventurer Jogger Set</h3>
                <p className="text-on-surface-variant font-body text-sm mb-2">Flexible Knit • Midnight Blue</p>
                <p className="font-headline font-extrabold text-primary text-xl">$42.00</p>
              </Link>
              
            </div>

            {/* Load More Section */}
            <div className="mt-24 flex flex-col items-center gap-6">
              <p className="text-on-surface-variant font-body text-sm">Showing 6 of 48 items</p>
              <div className="w-48 h-1 bg-surface-container-high rounded-full overflow-hidden">
                <div className="w-[12.5%] h-full bg-primary transition-all duration-500"></div>
              </div>
              <button className="primary-gradient text-on-primary px-12 py-4 rounded-xl font-headline font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
                Load More Styles
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full rounded-t-[3rem] mt-20 bg-slate-50 dark:bg-slate-950 font-body">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="text-xl font-bold text-emerald-800 dark:text-emerald-300 font-headline">Irsyam Kidz Wear</div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Modern, conscious clothing for the playful generation. We believe in quality that lasts through every adventure.</p>
          </div>
          <div className="space-y-6">
            <h4 className="font-headline font-bold text-on-surface">Shop</h4>
            <ul className="space-y-3">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 hover:underline underline-offset-4 transition-all" href="/catalog">Boys Collection</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 hover:underline underline-offset-4 transition-all" href="/catalog">Girls Collection</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 hover:underline underline-offset-4 transition-all" href="/catalog">Baby Essentials</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-headline font-bold text-on-surface">Support</h4>
            <ul className="space-y-3">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 hover:underline underline-offset-4 transition-all" href="/catalog">FAQ</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 hover:underline underline-offset-4 transition-all" href="/catalog">Shipping</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 hover:underline underline-offset-4 transition-all" href="/catalog">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-headline font-bold text-on-surface">Legal</h4>
            <ul className="space-y-3">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 hover:underline underline-offset-4 transition-all" href="/catalog">Privacy Policy</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 hover:underline underline-offset-4 transition-all" href="/catalog">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200/50 py-8 text-center text-slate-500 dark:text-slate-400 text-sm">
          © 2024 Irsyam Kidz Wear. The Modern Playroom.
        </div>
      </footer>
    </>
  );
}
