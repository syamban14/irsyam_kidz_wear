import Link from 'next/link';

export default function ProductDetail() {
  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-full shadow-[0_20px_40px_rgba(44,47,46,0.06)] flex justify-between items-center px-8 py-3">
        <Link href="/" className="text-2xl font-black text-emerald-800 dark:text-emerald-300 tracking-tight">Irsyam Kidz Wear</Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/catalog" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors text-sm font-medium">Boys</Link>
          <Link href="/catalog" className="text-emerald-700 dark:text-emerald-400 font-bold border-b-2 border-emerald-500 text-sm font-medium">Girls</Link>
          <Link href="/catalog" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors text-sm font-medium">Babies</Link>
          <Link href="/catalog" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors text-sm font-medium">New Arrivals</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/cart" className="flex p-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-full transition-all active:scale-95 duration-200 ease-out">
            <span className="material-symbols-outlined text-emerald-700 dark:text-emerald-400">shopping_cart</span>
          </Link>
          <button className="p-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-full transition-all active:scale-95 duration-200 ease-out">
            <span className="material-symbols-outlined text-emerald-700 dark:text-emerald-400">person</span>
          </button>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 flex items-center gap-2 text-sm font-medium text-on-surface-variant">
          <Link className="hover:text-primary transition-colors" href="/">Home</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <Link className="hover:text-primary transition-colors" href="/catalog">Girls</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-on-surface">Floral Dress</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Image Gallery Section */}
          <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
            {/* Main Image */}
            <div className="flex-1 rounded-lg overflow-hidden bg-surface-container-low aspect-[4/5] relative">
              <img alt="Main product image" className="w-full h-full object-cover" data-alt="Young girl in a floral summer dress playing outdoors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOHBrTFCK7COQg2JiVu0dxZF7-9JMZZlzKQ-v6bAe77sdZonz5yrjKtYiRjaRuKbRlzal4BKae4ukbaDyzlA4TbsA1hQ7jiqGiGZ2qGdzTbeb1pb44rze_fEqFvuhdHjiPCb6U5WHNMvtlJSD_3RDUdOX-iQbATxLMFRM4Izg6BsT9K_34uJsLmi59JGK5K3-uX16CeA4geKMi5_qa9v2fZEVApy8Rzoak1bLjdLmB-Ph9gPFeTHr9lZoe3WszTTEQDHeqOhhbgDVP"/>
              <div className="absolute top-6 right-6">
                <button className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary shadow-sm hover:bg-white transition-all">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-24">
              <button className="flex-shrink-0 w-20 h-24 md:w-full rounded-md overflow-hidden border-2 border-primary ring-offset-2 transition-all">
                <img alt="Thumbnail 1" className="w-full h-full object-cover" data-alt="Floral summer dress detail shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB-ogN5zMhi6h-nwS53Fgoq-GyxHsXPpXhApDstZYqPLMfcLQ4EBlWvt-b1uIaz1Gxmz2VEY2xvdM5bU6bI_KwkO4GAKRlmFIjRJskaJGTJFO98KSlefU9ZkpZbZAEgyQZKzoX_UTwMukIGQzsgsohQcCuRjyu7FRXvHvHr7nLH5VZ3q-xpIsH1dZbLfK57bz-KgSbbYW2JN05MLbwKJCHD9e9cSdNePnxyK1aJ8SObEOZrPSNyA1OvdYlbmBRfqOei3YTUZ7OTnz7"/>
              </button>
              <button className="flex-shrink-0 w-20 h-24 md:w-full rounded-md overflow-hidden opacity-60 hover:opacity-100 transition-all">
                <img alt="Thumbnail 2" className="w-full h-full object-cover" data-alt="Floral pattern fabric texture close up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBur2NW3d-IEjAYl4cRRT2_qctOaEjMjK9tiUWgMe5ArsRLUIiv_IovZcbpk_e1jdMZsbqW35yoEf9QPD0lEbHPmkeUf6cCXfT5j6HMl6xD79T_XallybhroWH98H-tz3ARkOwZ85B4hs7FEbkVsRTpdOJNMdtd6h-LQPxCqrix-aogdz6OttQF2fBPwqv26TH9oipygszbnkc8RxJsNNslsschrd4anwtNpRK4RrrtWg5RlNIY-Md4p20gVhg9bN-UJ6Gha1emEtUY"/>
              </button>
              <button className="flex-shrink-0 w-20 h-24 md:w-full rounded-md overflow-hidden opacity-60 hover:opacity-100 transition-all">
                <img alt="Thumbnail 3" className="w-full h-full object-cover" data-alt="Back of the floral dress with bow detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvH3mnPcJ_rHibVOZshnhOTE3FhC-9FgOtn5KHJegVy6qdxuMYwKo4XSpvTLBHv8S1tXCjVqUcHfF9ms9-7g4x_ST_lLeUH5spmrnDu-ZjmNxRNQ2vGBHGNrORLKFXFJ4by_j9EOdHg3sCYlOKxY98zAICLYeFZdITxtoNkxjg8eY6-ts5qKIEBrzGzIcfPLKQYeTiDKRuo4Wp9SaX57VVtJ8EYNd5m8D-V_IO9PkzGsKq-T96GDGNu0TJkjNtCwL7H4ChSPZkWDgx"/>
              </button>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-2 inline-flex items-center gap-2 px-3 py-1 bg-tertiary-container/30 text-on-tertiary-container rounded-full w-fit text-xs font-bold uppercase tracking-wider">
              New Season
            </div>
            <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight mb-4">Floral Dream Summer Dress</h1>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center bg-surface-container-high px-3 py-1.5 rounded-full">
                <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="ml-1 text-sm font-bold">4.9</span>
                <span className="mx-2 text-outline-variant">|</span>
                <span className="text-sm font-medium text-on-surface-variant">128 Reviews</span>
              </div>
              <span className="text-3xl font-headline font-extrabold text-primary">$35.00</span>
            </div>

            {/* Color Selector */}
            <div className="mb-8">
              <label className="block text-sm font-bold font-headline mb-4 uppercase tracking-widest text-on-surface-variant">Color: Morning Petal</label>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-[#FFD1DC] ring-2 ring-primary ring-offset-4"></button>
                <button className="w-10 h-10 rounded-full bg-[#E0F2F1] hover:scale-110 transition-transform"></button>
                <button className="w-10 h-10 rounded-full bg-[#FFF9C4] hover:scale-110 transition-transform"></button>
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm font-bold font-headline uppercase tracking-widest text-on-surface-variant">Select Size</label>
                <button className="text-sm font-semibold text-primary flex items-center gap-1 hover:underline">
                  <span className="material-symbols-outlined text-lg">straighten</span>
                  Size Guide
                </button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                <button className="py-3 px-4 rounded-xl border-2 border-outline-variant/20 hover:border-primary text-sm font-bold transition-all">S</button>
                <button className="py-3 px-4 rounded-xl border-2 border-primary bg-primary-container text-on-primary-container text-sm font-bold">M</button>
                <button className="py-3 px-4 rounded-xl border-2 border-outline-variant/20 hover:border-primary text-sm font-bold transition-all">L</button>
                <button className="py-3 px-4 rounded-xl border-2 border-outline-variant/20 hover:border-primary text-sm font-bold transition-all">XL</button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 mb-12">
              <button className="primary-gradient text-on-primary font-bold py-5 px-8 rounded-full shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-3 active:scale-95">
                <span className="material-symbols-outlined">shopping_bag</span>
                Add to Cart
              </button>
              <button className="bg-secondary-container text-on-secondary-container font-bold py-5 px-8 rounded-full hover:bg-secondary-fixed transition-all active:scale-95">
                Buy Now
              </button>
            </div>

            {/* Product Features Bento */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-surface-container-low flex flex-col gap-2">
                <span className="material-symbols-outlined text-primary">eco</span>
                <h4 className="font-bold text-sm">100% Organic Cotton</h4>
                <p className="text-xs text-on-surface-variant">Soft and breathable for all-day comfort.</p>
              </div>
              <div className="p-4 rounded-lg bg-surface-container-low flex flex-col gap-2">
                <span className="material-symbols-outlined text-primary">local_shipping</span>
                <h4 className="font-bold text-sm">Fast Shipping</h4>
                <p className="text-xs text-on-surface-variant">Free delivery on orders over $50.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Info Sections */}
        <div className="mt-24 max-w-4xl mx-auto space-y-16">
          <section>
            <h3 className="text-2xl font-headline font-bold mb-6">Product Story</h3>
            <p className="text-lg text-on-surface-variant leading-relaxed font-body">
              Hand-painted floral motifs dance across a lightweight canvas of organic cotton, making the Floral Dream Summer Dress a whimsical staple for your little one's wardrobe. Designed for ultimate freedom of movement, it features an adjustable sash back and delicate flutter sleeves that catch the summer breeze.
            </p>
          </section>

          <section className="bg-surface-container-low p-8 md:p-12 rounded-[3rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-headline font-bold mb-4">Materials &amp; Care</h3>
                <ul className="space-y-3 text-on-surface-variant">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Premium GOTS certified organic cotton
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Eco-friendly low-impact dyes
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Machine wash cold, tumble dry low
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-headline font-bold mb-4">Shipping &amp; Returns</h3>
                <p className="text-on-surface-variant text-sm mb-4">Enjoy hassle-free shopping with our parent-friendly policies.</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">package_2</span>
                    <div>
                      <span className="block font-bold text-sm">Standard Delivery</span>
                      <span className="text-xs text-on-surface-variant">3-5 business days - Free</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-xl">assignment_return</span>
                    <div>
                      <span className="block font-bold text-sm">30-Day Easy Returns</span>
                      <span className="text-xs text-on-surface-variant">No questions asked return policy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Recommendations Section */}
        <section className="mt-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-2">You May Also Like</h2>
              <p className="text-on-surface-variant">Curated pairings for your little explorer</p>
            </div>
            <Link href="/catalog" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Recommended Card 1 */}
            <Link href="/product/2" className="group block">
              <div className="aspect-[4/5] rounded-lg bg-surface-container-lowest overflow-hidden mb-4 relative transition-all group-hover:shadow-xl">
                <img alt="Recommended product" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Baby girl wearing a denim romper" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBnQYxOAEoutqefdusVbTVr621KT2j094i4oE7jKehB9ZMbWL-NOSa3aaku_CbPZ7id42moT7qKN25Fl5wLWZcz2ea7pf2A7Z2KFYhwG-VuPTyFh4EzYfzq8bLlB9MlupKn7AfNPaD9vGl4cTLos-SD60hD-dTMZYc4jDqwg1xP_kzu8cnPz2MNu-LTQEmGiexrz_ZqVb5rz7Uj33PO2OOOAYQVXNzziK4XN7lsqapTXUTbZWKddHN0K0t-Nf2jdoOBO_ctXY_M7sL"/>
                <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  <span className="material-symbols-outlined text-primary">add</span>
                </button>
              </div>
              <h4 className="font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Indigo Denim Romper</h4>
              <span className="text-sm font-semibold text-on-surface-variant">$28.00</span>
            </Link>

            {/* Recommended Card 2 */}
            <Link href="/product/3" className="group block">
              <div className="aspect-[4/5] rounded-lg bg-surface-container-lowest overflow-hidden mb-4 relative transition-all group-hover:shadow-xl">
                <img alt="Recommended product" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Handcrafted leather sandals for kids" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALP__AvpSzOIXMLYRNEuXfZFXEAAayXp4jtzA2T4aON7YYkRlgiB8JX0xDxHHQ-40THr67rhv_BA8-ae6Ri9qeqX-C55pvropbe3UyOEjWDeSWXVJtG9efQ71j8uqNVKSnneO93Pg04zNakNK1NB5TOzZRY7HIQkeAyfpyil3kATUe-MqPjG6_8WXMPR2kc8OchQPqgAQGqiMXicBU3-2PURp_5oRuvGxaRQgc6_pAWyg2ESr_4IpodwVeqPeCYxHtvguElQBpABbd"/>
                <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  <span className="material-symbols-outlined text-primary">add</span>
                </button>
              </div>
              <h4 className="font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Sun-Kissed Sandals</h4>
              <span className="text-sm font-semibold text-on-surface-variant">$42.00</span>
            </Link>

            {/* Recommended Card 3 */}
            <Link href="/product/4" className="group block">
              <div className="aspect-[4/5] rounded-lg bg-surface-container-lowest overflow-hidden mb-4 relative transition-all group-hover:shadow-xl">
                <img alt="Recommended product" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Kid wearing a wide brim straw hat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbkFvg0k07AJrr6Wy2ow9es0nOS0geV_4ushQiEgCfnTlL1zpqRsi15Q6d0-pC2QIyM62oFueOjeX0RESlcul7ajUQghfPEtBX6AmJZpTbhq1VX7O2Vxy433K5BKJbPVpKubMkrHF5IL4uJnPBC60t6MdOnzsLlNlYpvfu2PfPDXV-vvB1pYNfF0Oms0vV10G4C-PO0ynK0lTOTTi-eEFI8IZ54Gmgqn5OB6lCjtZQpsdtj5altbVkfHJNirBb1yptDRHKABCeaVJJ"/>
                <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  <span className="material-symbols-outlined text-primary">add</span>
                </button>
              </div>
              <h4 className="font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Woven Straw Sun Hat</h4>
              <span className="text-sm font-semibold text-on-surface-variant">$15.00</span>
            </Link>

            {/* Recommended Card 4 */}
            <Link href="/product/5" className="group block">
              <div className="aspect-[4/5] rounded-lg bg-surface-container-lowest overflow-hidden mb-4 relative transition-all group-hover:shadow-xl">
                <img alt="Recommended product" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Linen shorts for boys or girls" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyKk8DRx_fa-FYrRKXFhqP6KA99D9kO6K1oa4D_UMcdt9slaNyggQ6iwR7QEBNgSQI60WBe2FhOnUMUa9Ld67llHIXqgBR_uOkQq1WJ8cU89Ib7BFsHxpUsZOq9P34oIE69uEurAZ1pwWBB4MiMolYX5xbO8ALLRF4hRc49BYKc6Fp8eUO4V0ha31IsVHpdxzCTE0YGftpJaY1W5INGPfb-469kFnnxl9mD0k7Nv5i5idZoiiJQeCaPaxSHPA_v5_L5L8USwn7wAQO"/>
                <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  <span className="material-symbols-outlined text-primary">add</span>
                </button>
              </div>
              <h4 className="font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Breezy Linen Shorts</h4>
              <span className="text-sm font-semibold text-on-surface-variant">$24.00</span>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer (Shared Component) */}
      <footer className="w-full rounded-t-[3rem] mt-20 bg-slate-50 dark:bg-slate-950 px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="text-xl font-bold text-emerald-800 dark:text-emerald-300 mb-6 font-headline">Irsyam Kidz Wear</div>
            <p className="text-slate-500 dark:text-slate-400 font-be-vietnam-pro text-base leading-relaxed">
              © 2024 Irsyam Kidz Wear. The Modern Playroom.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-emerald-700 dark:text-emerald-400 mb-6 font-headline">Shop</h5>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 underline-offset-4 hover:underline transition-all" href="/catalog">New Arrivals</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 underline-offset-4 hover:underline transition-all" href="/catalog">Best Sellers</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 underline-offset-4 hover:underline transition-all" href="/catalog">Collections</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-emerald-700 dark:text-emerald-400 mb-6 font-headline">Support</h5>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 underline-offset-4 hover:underline transition-all" href="/catalog">FAQ</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 underline-offset-4 hover:underline transition-all" href="/catalog">Shipping</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 underline-offset-4 hover:underline transition-all" href="/catalog">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-emerald-700 dark:text-emerald-400 mb-6 font-headline">Legal</h5>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 underline-offset-4 hover:underline transition-all" href="/catalog">Privacy Policy</Link></li>
              <li><Link className="text-slate-500 dark:text-slate-400 hover:text-emerald-500 underline-offset-4 hover:underline transition-all" href="/catalog">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
