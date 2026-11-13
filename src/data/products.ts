export interface Product {
  id: string;
  name: string;
  category: 'laki-laki' | 'perempuan' | 'bayi';
  price: number;
  originalPrice?: number;
  description: string;
  story: string;
  materialsCare: string[];
  features: { icon: string; title: string; desc: string }[];
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  ageGroup: 'batita' | 'anak-kecil' | 'anak-besar';
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
  isFavorite?: boolean;
  stock: number;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Gaun Bunga Tropis Anak',
    category: 'perempuan',
    price: 189000,
    originalPrice: 220000,
    description: 'Gaun musim panas cantik dengan motif bunga tropis yang dilukis lembut di atas katun organik bernapas.',
    story: 'Motif bunga tropis yang dilukis dengan penuh kasih berpadu dengan kain katun organik pilihan, menjadikan gaun ini pilihan paling nyaman untuk si buah hati. Potongan longgar dengan lengan riak halus memberikan kebebasan bergerak sepenuhnya saat bermain di rumah maupun berlibur di akhir pekan.',
    materialsCare: [
      'Katun organik bersertifikat OEKO-TEX',
      'Pewarna alami non-toksik aman untuk kulit sensitif',
      'Bisa dicuci mesin (mode lembut) dengan air dingin'
    ],
    features: [
      { icon: 'eco', title: '100% Katun organik', desc: 'Sangat lembut dan ramah untuk kulit si kecil.' },
      { icon: 'local_shipping', title: 'Pengiriman cepat', desc: 'Bebas ongkir untuk pesanan di atas Rp250.000.' }
    ],
    images: [
      '/images/prod-gaun-bunga.jpg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgaYxxBqNlCSZsjz502zG8VeSNkLoFyN8Zf4Ft27ARTogwG0A1xt3G9ZwdQCAGcNSVKAVYwQQkMsBA7JfgOk2iuy30BJMLC0QEgJI0IzoQMKxvRThbct-dbs0-mj4L0xkaaU4UxZq2xXhgdA2eYbGLCj0HvX2mQWa01KsXlYE3X1R_HxluVftDcx-7SWhXelxRN6tn8UqyXEgpEcNDMNW3D7bUrQMw9xfs7KHYBBzS9DwdVMRwazs8uKckddExaj3aFH1t_-Zj2pLY'
    ],
    colors: [
      { name: 'Krem Kelopak', hex: '#F5E6D3' },
      { name: 'Hijau Mint', hex: '#C8E6C9' },
      { name: 'Merah Muda Pastel', hex: '#FFD1DC' }
    ],
    sizes: ['S (2-3 Thn)', 'M (4-5 Thn)', 'L (6-7 Thn)', 'XL (8-9 Thn)'],
    ageGroup: 'anak-kecil',
    rating: 4.9,
    reviewsCount: 128,
    isNew: true,
    stock: 25
  },
  {
    id: '2',
    name: 'Romper Bunga Organik',
    category: 'bayi',
    price: 149000,
    originalPrice: 175000,
    description: 'Romper bayi dan batita berbahan katun lembut dengan kancing batok kelapa yang ramah kulit.',
    story: 'Didesain khusus untuk kulit bayi yang sensitif, romper bunga ini memakai 100% serat katun organik murni tanpa pestisida berbahaya. Dilengkapi kancing jepret lembut di bagian bawah untuk memudahkan penggantian popok.',
    materialsCare: [
      '100% Katun organik combed murni',
      'Kancing batok kelapa & snap bebas nikel',
      'Cuci dengan deterjen khusus pakaian bayi'
    ],
    features: [
      { icon: 'baby_changing_station', title: 'Kancing praktis', desc: 'Memudahkan penggantian popok saat bepergian.' },
      { icon: 'favorite', title: 'Hypoallergenic', desc: 'Aman untuk kulit bayi yang sangat sensitif.' }
    ],
    images: [
      '/images/prod-romper-bunga.jpg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgaYxxBqNlCSZsjz502zG8VeSNkLoFyN8Zf4Ft27ARTogwG0A1xt3G9ZwdQCAGcNSVKAVYwQQkMsBA7JfgOk2iuy30BJMLC0QEgJI0IzoQMKxvRThbct-dbs0-mj4L0xkaaU4UxZq2xXhgdA2eYbGLCj0HvX2mQWa01KsXlYE3X1R_HxluVftDcx-7SWhXelxRN6tn8UqyXEgpEcNDMNW3D7bUrQMw9xfs7KHYBBzS9DwdVMRwazs8uKckddExaj3aFH1t_-Zj2pLY'
    ],
    colors: [
      { name: 'Krem Bunga', hex: '#F3EFE0' },
      { name: 'Hijau Sage', hex: '#D1DFD3' }
    ],
    sizes: ['3-6 Bln', '1-2 Thn', '2-3 Thn'],
    ageGroup: 'batita',
    rating: 4.9,
    reviewsCount: 94,
    isNew: true,
    isFavorite: true,
    stock: 18
  },
  {
    id: '3',
    name: 'Kemeja Linen Awan',
    category: 'laki-laki',
    price: 169000,
    originalPrice: 199000,
    description: 'Kemeja lengan panjang berbahan linen alami sejuk berwarna pasir lembut untuk tampilan rapi maupun santai.',
    story: 'Kombinasi linen alami dan katun menghadirkan tekstur premium yang tetap ringan dan adem untuk anak laki-laki di iklim tropis. Cocok untuk acara keluarga maupun bermain sore.',
    materialsCare: [
      'Campuran 60% Linen alami & 40% Katun',
      'Kancing kayu ramah lingkungan',
      'Setrika suhu sedang untuk menjaga tekstur serat'
    ],
    features: [
      { icon: 'air', title: 'Sirkulasi udara baik', desc: 'Tetap sejuk saat dipakai di cuaca panas.' },
      { icon: 'nature', title: 'Serat alami ramah bumi', desc: 'Ditenun secara etis dengan pewarna lembut.' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDi6T75TXCN8PyiCLQUnwNRO3xKkPqiCE5_qhg6ab-UDzHfTT0duPw9sl8RfGWoDp4hsQwq5GrBiU4nADztS1jQ4ORlSWncYsEqQbEWQ5OmNNVqqpPXjr4OSGr1gN7SarIHTaPsJTbRW9t4LWvWJvkKyj-MYA_DuxhTWdeGQ7R2ENnufij_hWkItijWAqacLGcxvKnnj-xeXeXskSoLBPw5VDVof_xKKUK_7BZSvAtpalcuzwxyJEz3FmEWDmqg04CrlXYeew4osKPe',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuADC0OGglbIR4V3si3zFaWC_8R-Du7YFg_BPljFUZzyWxaYqMIAHv7n9o-3SRqH_RyTP0YIG0QQDM2HSBrG3c1UisBr6mujZpbpm3C7OOTV_qacVNGwcqq19ijLL2t34S3d8wfU37coZG02DjZIgpeGK4lHH8pEfEqaaTtSuZ6q0aX14j9Qvu2leJObkA6b1do5fhgSIDmGJHnWDGVruGraTh_ZE1tQEAqhcgtE7_CEvAzvhRSHwZt8XoooCE1gXi-7RYPGYH4wUJoe'
    ],
    colors: [
      { name: 'Pasir Alami', hex: '#D7CCC8' },
      { name: 'Hijau Sage', hex: '#C8E6C9' }
    ],
    sizes: ['2 Thn', '3 Thn', '4 Thn', '5 Thn', '6 Thn'],
    ageGroup: 'anak-kecil',
    rating: 5.0,
    reviewsCount: 82,
    isNew: true,
    stock: 15
  },
  {
    id: '4',
    name: 'Overal Denim Kasual',
    category: 'laki-laki',
    price: 199000,
    originalPrice: 239000,
    description: 'Overal denim anak klasik yang kuat, lentur, dan awet untuk aktivitas bermain di luar ruangan.',
    story: 'Dibuat untuk anak-anak petualang! Bahan denim katun dengan sentuhan stretch lembut memungkinkan si kecil memanjat, berlari, dan bereksplorasi tanpa rasa sempit atau kaku.',
    materialsCare: [
      'Denim stretch katun 10oz fleksibel',
      'Gesper logam kuningan antik kokoh',
      'Cuci terpisah pada pencucian pertama'
    ],
    features: [
      { icon: 'shield', title: 'Bahan tahan banting', desc: 'Awet dipakai bertahun-tahun hingga adik berikutnya.' },
      { icon: 'straighten', title: 'Tali bahu adjustable', desc: 'Bisa dipanjangkan seiring pertumbuhan anak.' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBrOh_xsbFZVcicMP8gXX6pZTp8qBAzKq_v3ic9bPtDMR5aZSpFP5tvSP57xOfEgvnc227knPKj0oUxIA-ySb4VRAKC4OBLOPw4Ge9ygJrPG2R75BH1FnA8Zkt4-XnwsGTtEsSU3uIs5XTgymuc4Cau0zWfWnnUZD8X0dJZoip59rQmFHGWQJl1ccwK8_WgUedJ3bxCFbUZGCitL--ZeHmLyCpM5I0veXl6wfx3bq1G18e_fPyg11Osv2flTEffsawBt-Pu43ey9ftW',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCpziAKALNYDE4lZRd2BKxeKGcI9kHcmC_YLuUwxA9CGL1ogG3zkStqZPszhv77ahlG8czpxCs6kU7XylmNV2FtF1zRah36HSi1CkLx91rZG69Y8xMsxJJqZSs_4o82hrxHQ_SzxvJTbqmsDDg_1aLnb_wO53fiUHjkKFhYOjsuo51MWpRNk6sa1pqwytfOPK4zTy4hmuNUz7J3wi6rpfUEX1Y3pA_tr3YPhKNtMQwz-SiNk8tv9OGM8CfA08ifAMVnVNiSkrh7YxN'
    ],
    colors: [
      { name: 'Biru Denim Klasik', hex: '#2B4C7E' },
      { name: 'Biru Denim Muda', hex: '#60A5FA' }
    ],
    sizes: ['2 Thn', '3 Thn', '4 Thn', '5 Thn', '6 Thn'],
    ageGroup: 'anak-kecil',
    rating: 4.9,
    reviewsCount: 156,
    isFavorite: true,
    stock: 20
  },
  {
    id: '5',
    name: 'Kardigan Rajut Hangat',
    category: 'perempuan',
    price: 219000,
    description: 'Kardigan rajutan katun halus dengan tekstur lembut, ideal untuk udara sejuk atau ruangan ber-AC.',
    story: 'Rajutan hangat yang dibuat dari benang katun combed pilihan sehingga tidak menimbulkan rasa gatal di kulit anak. Pas dipadukan di atas gaun manis atau kaos harian.',
    materialsCare: [
      '100% Katun rajut halus (tidak menusuk)',
      'Jangan diperas kencang saat mencuci',
      'Jemur mendatar agar bentuk rajutan tidak melar'
    ],
    features: [
      { icon: 'ac_unit', title: 'Penghangat ideal', desc: 'Cocok untuk jalan-jalan sore atau cuaca berangin.' },
      { icon: 'sentiment_very_satisfied', title: 'Anti gatal', desc: 'Serat halus tanpa bahan sintetis kasar.' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzrU4E-BC9azf_bBES-PlaPYCnZKnfQDgafVVsTZBn5jjT2Xv9dbMOSS2eflN7Vl2cYPvaRxAdlW4McFK8AY1gH8EuiTVjLjNWiYe4TtkGXsKvb1pE2qBd-bem7J-nE1QkWx_99Z-Wcm9K9oAeXiR0XhN99hkfb9JS2bMv6zVjycfcHjoc4HiX_7dQpK688LTLhjpTHhvGlKNY-l07oZwqsi-Vx4Us6ipnN5gRsUddy1ociHoeEU52i0ozYyWODzaGzZRJckEnCQ7y',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBv2ISmp1rl1oqIQzfiBBaIE-C2tgw0gXUlJ1Hcnph4LLnr0x-N_3OzMEQEgdAuIog3HNsyAZQYLpNLJCtY1-RaU8Xmct9vVfjW5JRvtF76xIrQsrArFkp3FGmodkMJOr6yuT5IVc9E4P8sItJYNTsB29xG8hg4KyxCR73-QGFeHqs1L4GRlzrje2JmqKlud11-tGJyDFvATVt-0H6X_O5_um-qKFs65GZ0Hs3FgQ5ZyEBYrZc66QKsXtAL8Do0DI8XfZM00zMO4Ywu'
    ],
    colors: [
      { name: 'Hijau Pinus', hex: '#2D6A4F' },
      { name: 'Abu Muda', hex: '#94A3B8' }
    ],
    sizes: ['2-3 Thn', '4-5 Thn', '6-7 Thn'],
    ageGroup: 'anak-kecil',
    rating: 4.8,
    reviewsCount: 68,
    isFavorite: true,
    stock: 12
  },
  {
    id: '6',
    name: 'Setelan Jogger Petualang',
    category: 'laki-laki',
    price: 169000,
    description: 'Setelan hoodie hijau sage dan celana jogger lembut dengan saku fungsional untuk si kecil yang aktif.',
    story: 'Pilihan harian terbaik untuk anak yang gemar bergerak. Pinggang bertali elastis dan manset kaki rib menjaga celana tidak tersangkut saat bersepeda atau berlari.',
    materialsCare: [
      'Katun baby terry premium',
      'Karet pinggang elastis berkualitas tinggi',
      'Bisa dicuci mesin sehari-hari'
    ],
    features: [
      { icon: 'directions_run', title: 'Maksimal bergerak', desc: 'Bahan lentur mengikuti setiap lompatan anak.' },
      { icon: 'pocket', title: 'Saku fungsional', desc: 'Tempat menyimpan mainan kecil favorit.' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDtWPRbrxETnTCRP54r7ME5snP1MLmRMqvs46syeLjWPWF3oUGd_i2eCHtdMIlBuupSI5apIuT-SNPWEnuQCWuRIUggnnlTp2IMSoAjZ4aqYekxOkAgYwZlcnb_vR7ikWUry-xzulxo1StA47ifxWwEzfRYmorA538CGOJJWVMqBDtD3lu1rJnBzA_M1gIb4Akz_QyfvJkMwJ-CFJGjTpHoOWMBmZpcnG6GlRZm51xd_EKyDnAZbCkCWUuVMYWSLQF7jO3URU2jcVWi'
    ],
    colors: [
      { name: 'Hijau Teal & Krem', hex: '#3B6E6C' },
      { name: 'Abu Misty', hex: '#94A3B8' }
    ],
    sizes: ['3 Thn', '4 Thn', '5 Thn', '6 Thn', '8-9 Thn'],
    ageGroup: 'anak-besar',
    rating: 4.8,
    reviewsCount: 77,
    stock: 22
  },
  {
    id: '7',
    name: 'Topi Jerami Anyam Pelindung',
    category: 'bayi',
    price: 89000,
    description: 'Topi anyaman serat jerami alami yang ringan dan sejuk, melindungi wajah si kecil dari terik matahari.',
    story: 'Perlindungan manis saat bermain di pantai atau taman. Dibuat dengan anyaman berventilasi udara agar kepala anak tetap sejuk sepanjang aktivitas luar ruangan.',
    materialsCare: [
      '100% Serat jerami alami ramah lingkungan',
      'Bersihkan dengan kain lembap, jangan direndam'
    ],
    features: [
      { icon: 'wb_sunny', title: 'Perlindungan UV', desc: 'Melindungi wajah dan leher dari sinar terik matahari.' },
      { icon: 'air', title: 'Berventilasi', desc: 'Kepala anak tetap sejuk tanpa keringat berlebih.' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBlH6KMO6AQFWOxHRFf7ZRj_DJXRXrpP2-GZaIJ0eiXR4skN0zslmipw8ooxjqwrsZhpa7jPWVsjZ7HmcHK3_dl2COj_LkGHTNZTp4Jei2fIYIt4kTs5q84TYNiAZqHtHV886c1XH5FqH1-NDuymIHwy_3Rd7ak5dBg4WKMHILkS3FpVY4hmc3LEdzvtoKwj5fH102-ynSzt0buRb68qUZtHLp2fNmv9lia3RbJzGs4D_MGmgvDUDqnTNYGydy1yaywPcoqrUq3EBG4'
    ],
    colors: [
      { name: 'Krem Alami', hex: '#E6D3A7' }
    ],
    sizes: ['1-3 Thn', '4-7 Thn'],
    ageGroup: 'batita',
    rating: 4.9,
    reviewsCount: 42,
    stock: 30
  },
  {
    id: '8',
    name: 'Setelan Linen Lipat Mint',
    category: 'bayi',
    price: 155000,
    description: 'Setelan kemeja & celana katun linen berwarna mint lembut yang ekstra sejuk untuk keseharian anak.',
    story: 'Dibuat dengan proses pewarnaan alami bernuansa hijau mint yang menenangkan. Tekstur linen yang lembut semakin nyaman setiap kali dicuci.',
    materialsCare: [
      'Katun linen organik lembut',
      'Pewarna aman bebas bahan kimia keras',
      'Cuci mesin suhu normal'
    ],
    features: [
      { icon: 'eco', title: 'Ramah kulit sensitif', desc: 'Bebas iritasi dan menyerap keringat.' },
      { icon: 'thumb_up', title: 'Mudah dipadukan', desc: 'Warna netral yang manis untuk laki-laki dan perempuan.' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuADC0OGglbIR4V3si3zFaWC_8R-Du7YFg_BPljFUZzyWxaYqMIAHv7n9o-3SRqH_RyTP0YIG0QQDM2HSBrG3c1UisBr6mujZpbpm3C7OOTV_qacVNGwcqq19ijLL2t34S3d8wfU37coZG02DjZIgpeGK4lHH8pEfEqaaTtSuZ6q0aX14j9Qvu2leJObkA6b1do5fhgSIDmGJHnWDGVruGraTh_ZE1tQEAqhcgtE7_CEvAzvhRSHwZt8XoooCE1gXi-7RYPGYH4wUJoe'
    ],
    colors: [
      { name: 'Hijau Mint', hex: '#A7F3D0' },
      { name: 'Putih Susu', hex: '#F8FAFC' }
    ],
    sizes: ['2 Thn', '3 Thn', '4 Thn', '5 Thn'],
    ageGroup: 'batita',
    rating: 4.9,
    reviewsCount: 53,
    stock: 14
  }
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(currentId: string, limit = 4): Product[] {
  return PRODUCTS.filter((p) => p.id !== currentId).slice(0, limit);
}
