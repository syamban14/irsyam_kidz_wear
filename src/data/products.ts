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
    description: 'Gaun musim panas cantik dengan motif bunga tropis yang dilukis tangan dari bahan katun organik bernapas.',
    story: 'Motif bunga tropis yang dilukis dengan penuh kasih berpadu dengan kain katun organik pilihan, menjadikan gaun ini pilihan paling nyaman untuk si buah hati. Potongan longgar dengan aksen pita di bagian belakang memberikan kebebasan bergerak sepenuhnya saat bermain di rumah maupun berlibur di akhir pekan.',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOHBrTFCK7COQg2JiVu0dxZF7-9JMZZlzKQ-v6bAe77sdZonz5yrjKtYiRjaRuKbRlzal4BKae4ukbaDyzlA4TbsA1hQ7jiqGiGZ2qGdzTbeb1pb44rze_fEqFvuhdHjiPCb6U5WHNMvtlJSD_3RDUdOX-iQbATxLMFRM4Izg6BsT9K_34uJsLmi59JGK5K3-uX16CeA4geKMi5_qa9v2fZEVApy8Rzoak1bLjdLmB-Ph9gPFeTHr9lZoe3WszTTEQDHeqOhhbgDVP',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBB-ogN5zMhi6h-nwS53Fgoq-GyxHsXPpXhApDstZYqPLMfcLQ4EBlWvt-b1uIaz1Gxmz2VEY2xvdM5bU6bI_KwkO4GAKRlmFIjRJskaJGTJFO98KSlefU9ZkpZbZAEgyQZKzoX_UTwMukIGQzsgsohQcCuRjyu7FRXvHvHr7nLH5VZ3q-xpIsH1dZbLfK57bz-KgSbbYW2JN05MLbwKJCHD9e9cSdNePnxyK1aJ8SObEOZrPSNyA1OvdYlbmBRfqOei3YTUZ7OTnz7',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBur2NW3d-IEjAYl4cRRT2_qctOaEjMjK9tiUWgMe5ArsRLUIiv_IovZcbpk_e1jdMZsbqW35yoEf9QPD0lEbHPmkeUf6cCXfT5j6HMl6xD79T_XallybhroWH98H-tz3ARkOwZ85B4hs7FEbkVsRTpdOJNMdtd6h-LQPxCqrix-aogdz6OttQF2fBPwqv26TH9oipygszbnkc8RxJsNNslsschrd4anwtNpRK4RrrtWg5RlNIY-Md4p20gVhg9bN-UJ6Gha1emEtUY',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvH3mnPcJ_rHibVOZshnhOTE3FhC-9FgOtn5KHJegVy6qdxuMYwKo4XSpvTLBHv8S1tXCjVqUcHfF9ms9-7g4x_ST_lLeUH5spmrnDu-ZjmNxRNQ2vGBHGNrORLKFXFJ4by_j9EOdHg3sCYlOKxY98zAICLYeFZdITxtoNkxjg8eY6-ts5qKIEBrzGzIcfPLKQYeTiDKRuo4Wp9SaX57VVtJ8EYNd5m8D-V_IO9PkzGsKq-T96GDGNu0TJkjNtCwL7H4ChSPZkWDgx'
    ],
    colors: [
      { name: 'Kelopak Pagi', hex: '#FFD1DC' },
      { name: 'Hijau Mint', hex: '#E0F2F1' },
      { name: 'Kuning Mentari', hex: '#FFF9C4' }
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
    category: 'perempuan',
    price: 149000,
    originalPrice: 175000,
    description: 'Romper bayi dan batita dengan kancing snap memudahkan penggantian popok, motif bunga manis.',
    story: 'Didesain khusus untuk kulit bayi yang sensitif, romper bunga ini memakai 100% serat katun organik murni tanpa pestisida berbahaya. Dilengkapi kancing bebas nikel di bagian bawah untuk kemudahan pemakaian.',
    materialsCare: [
      '100% Katun organik combed murni',
      'Kancing jepret bebas nikel (hypoallergenic)',
      'Cuci dengan deterjen khusus pakaian bayi'
    ],
    features: [
      { icon: 'baby_changing_station', title: 'Kancing praktis', desc: 'Memudahkan penggantian popok saat bepergian.' },
      { icon: 'favorite', title: 'Hypoallergenic', desc: 'Aman untuk kulit bayi yang sangat sensitif.' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgaYxxBqNlCSZsjz502zG8VeSNkLoFyN8Zf4Ft27ARTogwG0A1xt3G9ZwdQCAGcNSVKAVYwQQkMsBA7JfgOk2iuy30BJMLC0QEgJI0IzoQMKxvRThbct-dbs0-mj4L0xkaaU4UxZq2xXhgdA2eYbGLCj0HvX2mQWa01KsXlYE3X1R_HxluVftDcx-7SWhXelxRN6tn8UqyXEgpEcNDMNW3D7bUrQMw9xfs7KHYBBzS9DwdVMRwazs8uKckddExaj3aFH1t_-Zj2pLY',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBnQYxOAEoutqefdusVbTVr621KT2j094i4oE7jKehB9ZMbWL-NOSa3aaku_CbPZ7id42moT7qKN25Fl5wLWZcz2ea7pf2A7Z2KFYhwG-VuPTyFh4EzYfzq8bLlB9MlupKn7AfNPaD9vGl4cTLos-SD60hD-dTMZYc4jDqwg1xP_kzu8cnPz2MNu-LTQEmGiexrz_ZqVb5rz7Uj33PO2OOOAYQVXNzziK4XN7lsqapTXUTbZWKddHN0K0t-Nf2jdoOBO_ctXY_M7sL'
    ],
    colors: [
      { name: 'Krem Bunga', hex: '#FFF3E0' },
      { name: 'Dusty Pink', hex: '#F8BBD0' }
    ],
    sizes: ['3-6 Bulan', '6-12 Bulan', '1-2 Thn', '2-3 Thn'],
    ageGroup: 'batita',
    rating: 4.8,
    reviewsCount: 94,
    isNew: true,
    isFavorite: true,
    stock: 18
  },
  {
    id: '3',
    name: 'Setelan Linen Mint',
    category: 'laki-laki',
    price: 169000,
    originalPrice: 199000,
    description: 'Setelan kemeja lengan pendek dan celana pendek berbahan linen alami sejuk buatan lokal.',
    story: 'Kombinasi linen alami dan katun menghadirkan tekstur mewah yang tetap santai untuk anak laki-laki. Pinggang celana elastis memastikan kenyamanan maksimal saat berlari dan melompat.',
    materialsCare: [
      'Campuran 60% Linen alami & 40% Katun',
      'Kancing kayu kelapa ramah lingkungan',
      'Setrika suhu sedang untuk menjaga tekstur serat'
    ],
    features: [
      { icon: 'air', title: 'Sirkulasi udara baik', desc: 'Tidak gerah saat dipakai di cuaca panas.' },
      { icon: 'nature', title: 'Serat alami ramah bumi', desc: 'Ditenun secara etis oleh pengrajin lokal.' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuADC0OGglbIR4V3si3zFaWC_8R-Du7YFg_BPljFUZzyWxaYqMIAHv7n9o-3SRqH_RyTP0YIG0QQDM2HSBrG3c1UisBr6mujZpbpm3C7OOTV_qacVNGwcqq19ijLL2t34S3d8wfU37coZG02DjZIgpeGK4lHH8pEfEqaaTtSuZ6q0aX14j9Qvu2leJObkA6b1do5fhgSIDmGJHnWDGVruGraTh_ZE1tQEAqhcgtE7_CEvAzvhRSHwZt8XoooCE1gXi-7RYPGYH4wUJoe',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAzVvulwHKkE67lXd_jkIZ-vx8s8jqdyN5iYt7sWCvDQIM15DgvUpCqsaN6wB0l2m2GOsfCtyQnYoeJ1gnBeyANY6y_nJAfYOvRbm87MdV36VlhOt4zK_nB0PPzrM-BXvhrS-OE1cpN3khJ7ISliEVdYY3_7DdgqbqQ67-dDcqIjSF8m_Dimru0Q2BfjE9CYIavzAaxCi6C1Oz_Rd2zYlbeI8SRy15uneFe6ukUcbcbu3-nrdrIXSh3dDgTPk85bVRUIuN-odIAScxl'
    ],
    colors: [
      { name: 'Hijau Sage', hex: '#C8E6C9' },
      { name: 'Biru Samudra', hex: '#BBDEFB' },
      { name: 'Pasir Alami', hex: '#D7CCC8' }
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
    description: 'Overal denim anak klasik yang kuat dan tahan banting untuk arena bermain luar ruangan.',
    story: 'Dibuat untuk anak-anak petualang! Bahan denim premium dengan sentuhan stretch lembut memungkinkan si kecil memanjat dan bereksplorasi tanpa rasa sempit atau kaku.',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDCpziAKALNYDE4lZRd2BKxeKGcI9kHcmC_YLuUwxA9CGL1ogG3zkStqZPszhv77ahlG8czpxCs6kU7XylmNV2FtF1zRah36HSi1CkLx91rZG69Y8xMsxJJqZSs_4o82hrxHQ_SzxvJTbqmsDDg_1aLnb_wO53fiUHjkKFhYOjsuo51MWpRNk6sa1pqwytfOPK4zTy4hmuNUz7J3wi6rpfUEX1Y3pA_tr3YPhKNtMQwz-SiNk8tv9OGM8CfA08ifAMVnVNiSkrh7YxN',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBrOh_xsbFZVcicMP8gXX6pZTp8qBAzKq_v3ic9bPtDMR5aZSpFP5tvSP57xOfEgvnc227knPKj0oUxIA-ySb4VRAKC4OBLOPw4Ge9ygJrPG2R75BH1FnA8Zkt4-XnwsGTtEsSU3uIs5XTgymuc4Cau0zWfWnnUZD8X0dJZoip59rQmFHGWQJl1ccwK8_WgUedJ3bxCFbUZGCitL--ZeHmLyCpM5I0veXl6wfx3bq1G18e_fPyg11Osv2flTEffsawBt-Pu43ey9ftW'
    ],
    colors: [
      { name: 'Biru Denim Klasik', hex: '#1E3A8A' },
      { name: 'Denim Terang', hex: '#60A5FA' }
    ],
    sizes: ['2 Thn', '3 Thn', '4 Thn', '5 Thn', '6 Thn', '7-8 Thn'],
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
    description: 'Kardigan rajutan wol katun lembut dengan kancing kayu, ideal untuk udara sejuk atau ruangan ber-AC.',
    story: 'Rajutan hangat yang dibuat dari benang katun combed pilihan sehingga tidak menimbulkan rasa gatal di leher anak. Pas dipadukan di atas gaun manis atau kaos harian.',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBv2ISmp1rl1oqIQzfiBBaIE-C2tgw0gXUlJ1Hcnph4LLnr0x-N_3OzMEQEgdAuIog3HNsyAZQYLpNLJCtY1-RaU8Xmct9vVfjW5JRvtF76xIrQsrArFkp3FGmodkMJOr6yuT5IVc9E4P8sItJYNTsB29xG8hg4KyxCR73-QGFeHqs1L4GRlzrje2JmqKlud11-tGJyDFvATVt-0H6X_O5_um-qKFs65GZ0Hs3FgQ5ZyEBYrZc66QKsXtAL8Do0DI8XfZM00zMO4Ywu',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzrU4E-BC9azf_bBES-PlaPYCnZKnfQDgafVVsTZBn5jjT2Xv9dbMOSS2eflN7Vl2cYPvaRxAdlW4McFK8AY1gH8EuiTVjLjNWiYe4TtkGXsKvb1pE2qBd-bem7J-nE1QkWx_99Z-Wcm9K9oAeXiR0XhN99hkfb9JS2bMv6zVjycfcHjoc4HiX_7dQpK688LTLhjpTHhvGlKNY-l07oZwqsi-Vx4Us6ipnN5gRsUddy1ociHoeEU52i0ozYyWODzaGzZRJckEnCQ7y'
    ],
    colors: [
      { name: 'Kuning Mustard', hex: '#FBBF24' },
      { name: 'Dusty Rose', hex: '#F472B6' },
      { name: 'Hijau Lumut', hex: '#047857' }
    ],
    sizes: ['2-3 Thn', '4-5 Thn', '6-7 Thn'],
    ageGroup: 'anak-kecil',
    rating: 4.7,
    reviewsCount: 68,
    isFavorite: true,
    stock: 12
  },
  {
    id: '6',
    name: 'Setelan Jogger Petualang',
    category: 'laki-laki',
    price: 169000,
    description: 'Setelan kaos dan celana jogger katun fleece lembut dengan saku fungsional untuk si kecil yang aktif.',
    story: 'Pilihan harian terbaik untuk anak laki-laki yang gemar bergerak. Pinggang bertali elastis dan manset kaki rib menjaga celana tidak tersangkut saat bersepeda atau berlari.',
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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDtWPRbrxETnTCRP54r7ME5snP1MLmRMqvs46syeLjWPWF3oUGd_i2eCHtdMIlBuupSI5apIuT-SNPWEnuQCWuRIUggnnlTp2IMSoAjZ4aqYekxOkAgYwZlcnb_vR7ikWUry-xzulxo1StA47ifxWwEzfRYmorA538CGOJJWVMqBDtD3lu1rJnBzA_M1gIb4Akz_QyfvJkMwJ-CFJGjTpHoOWMBmZpcnG6GlRZm51xd_EKyDnAZbCkCWUuVMYWSLQF7jO3URU2jcVWi',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAyKk8DRx_fa-FYrRKXFhqP6KA99D9kO6K1oa4D_UMcdt9slaNyggQ6iwR7QEBNgSQI60WBe2FhOnUMUa9Ld67llHIXqgBR_uOkQq1WJ8cU89Ib7BFsHxpUsZOq9P34oIE69uEurAZ1pwWBB4MiMolYX5xbO8ALLRF4hRc49BYKc6Fp8eUO4V0ha31IsVHpdxzCTE0YGftpJaY1W5INGPfb-469kFnnxl9mD0k7Nv5i5idZoiiJQeCaPaxSHPA_v5_L5L8USwn7wAQO'
    ],
    colors: [
      { name: 'Biru Midnight', hex: '#1E293B' },
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
    description: 'Topi anyaman serat jerami alami dengan pita katun lembut, melindungi kepala si kecil dari sengatan matahari.',
    story: 'Perlindungan manis saat bermain di pantai atau taman. Dibuat dengan anyaman berventilasi udara dan tali dagu elastis agar topi tidak mudah tertiup angin.',
    materialsCare: [
      '100% Serat jerami alami ramah lingkungan',
      'Bersihkan dengan kain lembap, jangan direndam'
    ],
    features: [
      { icon: 'wb_sunny', title: 'Perlindungan UV', desc: 'Melindungi wajah dan leher dari sinar terik matahari.' },
      { icon: 'air', title: 'Berventilasi', desc: 'Kepala anak tetap sejuk tanpa keringat berlebih.' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBlH6KMO6AQFWOxHRFf7ZRj_DJXRXrpP2-GZaIJ0eiXR4skN0zslmipw8ooxjqwrsZhpa7jPWVsjZ7HmcHK3_dl2COj_LkGHTNZTp4Jei2fIYIt4kTs5q84TYNiAZqHtHV886c1XH5FqH1-NDuymIHwy_3Rd7ak5dBg4WKMHILkS3FpVY4hmc3LEdzvtoKwj5fH102-ynSzt0buRb68qUZtHLp2fNmv9lia3RbJzGs4D_MGmgvDUDqnTNYGydy1yaywPcoqrUq3EBG4',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbkFvg0k07AJrr6Wy2ow9es0nOS0geV_4ushQiEgCfnTlL1zpqRsi15Q6d0-pC2QIyM62oFueOjeX0RESlcul7ajUQghfPEtBX6AmJZpTbhq1VX7O2Vxy433K5BKJbPVpKubMkrHF5IL4uJnPBC60t6MdOnzsLlNlYpvfu2PfPDXV-vvB1pYNfF0Oms0vV10G4C-PO0ynK0lTOTTi-eEFI8IZ54Gmgqn5OB6lCjtZQpsdtj5altbVkfHJNirBb1yptDRHKABCeaVJJ'
    ],
    colors: [
      { name: 'Krem Alami', hex: '#FDE68A' }
    ],
    sizes: ['1-3 Thn', '4-7 Thn'],
    ageGroup: 'batita',
    rating: 4.9,
    reviewsCount: 42,
    stock: 30
  },
  {
    id: '8',
    name: 'Sandal Kulit Anak Lembut',
    category: 'bayi',
    price: 165000,
    description: 'Sandal kulit buatan tangan dengan sol karet antiselip untuk keamanan langkah pertama si kecil.',
    story: 'Dirancang mengikuti anatomi kaki anak yang sedang berkembang. Kulit sapi lembut lentur tanpa sudut tajam, menjaga kaki tetap nyaman tanpa lecet.',
    materialsCare: [
      'Kulit sapi asli nabati (vegetable-tanned)',
      'Sol karet antiselip lentur',
      'Bersihkan dengan semir kulit atau kain lap khusus'
    ],
    features: [
      { icon: 'pets', title: 'Sol antiselip', desc: 'Aman untuk lantai licin dan belajar berjalan.' },
      { icon: 'thumb_up', title: 'Ergonomis', desc: 'Mendukung pertumbuhan lengkung kaki alami anak.' }
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALP__AvpSzOIXMLYRNEuXfZFXEAAayXp4jtzA2T4aON7YYkRlgiB8JX0xDxHHQ-40THr67rhv_BA8-ae6Ri9qeqX-C55pvropbe3UyOEjWDeSWXVJtG9efQ71j8uqNVKSnneO93Pg04zNakNK1NB5TOzZRY7HIQkeAyfpyil3kATUe-MqPjG6_8WXMPR2kc8OchQPqgAQGqiMXicBU3-2PURp_5oRuvGxaRQgc6_pAWyg2ESr_4IpodwVeqPeCYxHtvguElQBpABbd'
    ],
    colors: [
      { name: 'Cokelat Tan', hex: '#B45309' },
      { name: 'Krem Karamel', hex: '#D97706' }
    ],
    sizes: ['Ukuran 20', 'Ukuran 22', 'Ukuran 24', 'Ukuran 26'],
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
