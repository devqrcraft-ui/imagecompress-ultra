import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'Compress Images for WooCommerce — Free, No Upload, Faster Store',
  description: 'Compress WooCommerce product images to WebP or JPEG. Faster store load, better Core Web Vitals, higher Google ranking. Free, browser-based, no plugin needed.',
  keywords: 'compress images for woocommerce, woocommerce product image size, woocommerce image optimization free, resize images for woocommerce, woocommerce webp images',
  alternates: { canonical: '/compress-for-woocommerce' },
};
export default function Page() { return <ClientPage />; }
