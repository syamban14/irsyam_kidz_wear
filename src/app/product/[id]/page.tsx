import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProductById, getRelatedProducts, PRODUCTS } from '@/data/products';
import ProductDetailClient from './ProductDetailClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: 'Produk Tidak Ditemukan | Irsyam Kidz Wear',
    };
  }

  return {
    title: `${product.name} | Irsyam Kidz Wear`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(id, 4);

  return (
    <>
      <Navbar />
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
      <Footer />
    </>
  );
}
