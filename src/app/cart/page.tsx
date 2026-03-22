import Link from 'next/link';

export default function Cart() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(44,47,46,0.06)] rounded-full flex justify-between items-center px-8 py-3">
        <Link href="/" className="text-2xl font-black text-emerald-800 dark:text-emerald-300 tracking-tight font-headline">Irsyam Kidz Wear</Link>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors text-sm font-medium font-label" href="/catalog">Boys</Link>
          <Link className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors text-sm font-medium font-label" href="/catalog">Girls</Link>
          <Link className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors text-sm font-medium font-label" href="/catalog">Babies</Link>
          <Link className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors text-sm font-medium font-label" href="/catalog">New Arrivals</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-full transition-all active:scale-95 duration-200">
            <span className="material-symbols-outlined text-emerald-700 dark:text-emerald-400">person</span>
          </button>
          <Link href="/cart" className="p-2 bg-emerald-50 dark:bg-emerald-900/30 rounded-full transition-all active:scale-95 duration-200 relative flex items-center justify-center">
            <span className="material-symbols-outlined text-emerald-700 dark:text-emerald-400" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
            <span className="absolute top-0 right-0 w-4 h-4 bg-secondary text-on-secondary text-[10px] flex items-center justify-center rounded-full font-bold">2</span>
          </Link>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
        {/* Header */}
        <header className="mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-2">My Playroom Bag</h1>
          <p className="text-on-surface-variant font-medium">You have 2 items in your cart waiting for an adventure.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Cart Items Section */}
          <section className="lg:col-span-8 space-y-6">
            {/* Item 1 */}
            <div className="bg-surface-container-lowest p-6 rounded-lg flex flex-col md:flex-row gap-8 items-center group transition-all hover:shadow-[0_20px_40px_rgba(44,47,46,0.04)]">
              <div className="w-full md:w-48 h-48 rounded-md overflow-hidden bg-surface-container-low flex-shrink-0">
                <img alt="Organic Cotton Play Set" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Toddler boy wearing green organic cotton outfit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzVvulwHKkE67lXd_jkIZ-vx8s8jqdyN5iYt7sWCvDQIM15DgvUpCqsaN6wB0l2m2GOsfCtyQnYoeJ1gnBeyANY6y_nJAfYOvRbm87MdV36VlhOt4zK_nB0PPzrM-BXvhrS-OE1cpN3khJ7ISliEVdYY3_7DdgqbqQ67-dDcqIjSF8m_Dimru0Q2BfjE9CYIavzAaxCi6C1Oz_Rd2zYlbeI8SRy15uneFe6ukUcbcbu3-nrdrIXSh3dDgTPk85bVRUIuN-odIAScxl"/>
              </div>
              <div className="flex-grow flex flex-col justify-between h-full py-2 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <Link href="/product/1"><h3 className="font-headline text-xl font-bold text-on-surface hover:text-primary transition-colors">Organic Cotton Play Set</h3></Link>
                    <p className="text-on-surface-variant text-sm mt-1">Sage Green • Size 2-3Y</p>
                  </div>
                  <button className="text-outline-variant hover:text-error transition-colors">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
                <div className="flex justify-between items-end mt-8 md:mt-0">
                  <div className="flex items-center bg-surface-container-high rounded-full p-1">
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-lowest rounded-full transition-colors">
                      <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <span className="px-4 font-bold font-label text-on-surface">1</span>
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-lowest rounded-full transition-colors text-primary">
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                  <div className="text-right">
                    <span className="font-headline text-xl font-extrabold text-primary">$48.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-surface-container-lowest p-6 rounded-lg flex flex-col md:flex-row gap-8 items-center group transition-all hover:shadow-[0_20px_40px_rgba(44,47,46,0.04)]">
              <div className="w-full md:w-48 h-48 rounded-md overflow-hidden bg-surface-container-low flex-shrink-0">
                <img alt="Knitted Dino Cardigan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close up of a yellow knitted childs cardigan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzrU4E-BC9azf_bBES-PlaPYCnZKnfQDgafVVsTZBn5jjT2Xv9dbMOSS2eflN7Vl2cYPvaRxAdlW4McFK8AY1gH8EuiTVjLjNWiYe4TtkGXsKvb1pE2qBd-bem7J-nE1QkWx_99Z-Wcm9K9oAeXiR0XhN99hkfb9JS2bMv6zVjycfcHjoc4HiX_7dQpK688LTLhjpTHhvGlKNY-l07oZwqsi-Vx4Us6ipnN5gRsUddy1ociHoeEU52i0ozYyWODzaGzZRJckEnCQ7y"/>
              </div>
              <div className="flex-grow flex flex-col justify-between h-full py-2 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <Link href="/product/2"><h3 className="font-headline text-xl font-bold text-on-surface hover:text-primary transition-colors">Knitted Dino Cardigan</h3></Link>
                    <p className="text-on-surface-variant text-sm mt-1">Mustard Yellow • Size 4Y</p>
                  </div>
                  <button className="text-outline-variant hover:text-error transition-colors">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </div>
                <div className="flex justify-between items-end mt-8 md:mt-0">
                  <div className="flex items-center bg-surface-container-high rounded-full p-1">
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-lowest rounded-full transition-colors">
                      <span className="material-symbols-outlined text-sm">remove</span>
                    </button>
                    <span className="px-4 font-bold font-label text-on-surface">1</span>
                    <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container-lowest rounded-full transition-colors text-primary">
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                  <div className="text-right">
                    <span className="font-headline text-xl font-extrabold text-primary">$62.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="pt-8 flex items-center">
              <Link className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all" href="/catalog">
                <span className="material-symbols-outlined">arrow_back</span>
                <span>Continue Shopping</span>
              </Link>
            </div>
          </section>

          {/* Order Summary Sidebar */}
          <aside className="lg:col-span-4 sticky top-32">
            <div className="bg-surface-container-low p-8 rounded-lg">
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-8">Order Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Subtotal</span>
                  <span className="font-medium text-on-surface">$110.00</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Shipping</span>
                  <span className="font-medium text-on-surface">$5.99</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Tax estimate</span>
                  <span className="font-medium text-on-surface">$8.80</span>
                </div>
              </div>

              {/* Discount Code */}
              <div className="mb-8">
                <label className="block text-sm font-bold text-on-surface mb-2 px-1">Promo Code</label>
                <div className="flex gap-2">
                  <input className="flex-grow bg-surface-container-lowest border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all font-medium text-on-surface placeholder:text-outline-variant" placeholder="Enter code" type="text"/>
                  <button className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-xl font-bold hover:brightness-95 transition-all active:scale-95">Apply</button>
                </div>
              </div>

              {/* Total */}
              <div className="pt-6 border-t border-outline-variant/10 mb-8">
                <div className="flex justify-between items-end">
                  <span className="font-headline text-lg font-bold text-on-surface">Total</span>
                  <span className="font-headline text-3xl font-extrabold text-primary tracking-tight">$124.79</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="w-full primary-gradient text-on-primary py-5 rounded-xl font-bold text-lg shadow-[0_20px_40px_rgba(0,105,75,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                Proceed to Checkout
                <span className="material-symbols-outlined">lock</span>
              </button>

              {/* Trust Signals */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant opacity-70">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  Secure Payment
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-on-surface-variant opacity-70">
                  <span className="material-symbols-outlined text-sm">local_shipping</span>
                  Free over $150
                </div>
              </div>
            </div>

            {/* Mini Promotion Card */}
            <div className="mt-6 bg-tertiary-container/30 p-6 rounded-lg relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-on-tertiary-container font-bold text-sm mb-1">Playroom Perk!</p>
                <p className="text-on-tertiary-container text-xs opacity-80 mb-3">Add $40 more to your bag and unlock a mystery gift.</p>
                <div className="w-full h-1.5 bg-surface-container-lowest/50 rounded-full overflow-hidden">
                  <div className="w-[73%] h-full bg-tertiary-dim rounded-full"></div>
                </div>
              </div>
              <span className="material-symbols-outlined absolute -bottom-2 -right-2 text-7xl text-tertiary-container/40 rotate-12 group-hover:rotate-0 transition-transform duration-700">featured_seasonal_and_gifts</span>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full rounded-t-[3rem] mt-20 bg-slate-50 dark:bg-slate-950">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
          <div className="space-y-4">
            <div className="text-xl font-bold text-emerald-800 dark:text-emerald-300 font-headline">Irsyam Kidz Wear</div>
            <p className="font-be-vietnam-pro text-base leading-relaxed text-slate-500 dark:text-slate-400">Crafting childhood memories through conscious design and playful textures.</p>
          </div>
          <div>
            <h4 className="font-headline font-bold text-emerald-700 dark:text-emerald-400 mb-6">Shopping</h4>
            <ul className="space-y-3 font-be-vietnam-pro">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 underline-offset-4 hover:underline transition-all" href="/catalog">FAQ</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 underline-offset-4 hover:underline transition-all" href="/catalog">Shipping</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 underline-offset-4 hover:underline transition-all" href="/catalog">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-bold text-emerald-700 dark:text-emerald-400 mb-6">Legal</h4>
            <ul className="space-y-3 font-be-vietnam-pro">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 underline-offset-4 hover:underline transition-all" href="/catalog">Privacy Policy</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 underline-offset-4 hover:underline transition-all" href="/catalog">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-bold text-emerald-700 dark:text-emerald-400 mb-6">Connect</h4>
            <div className="flex gap-4">
              <a className="w-10 h-10 flex items-center justify-center bg-surface rounded-full text-emerald-700 hover:bg-emerald-100 transition-all" href="#">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
              <a className="w-10 h-10 flex items-center justify-center bg-surface rounded-full text-emerald-700 hover:bg-emerald-100 transition-all" href="#">
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 py-8 border-t border-outline-variant/10 text-center md:text-left">
          <p className="text-slate-500 dark:text-slate-400 font-be-vietnam-pro text-sm">© 2024 Irsyam Kidz Wear. The Modern Playroom.</p>
        </div>
      </footer>
    </>
  );
}
