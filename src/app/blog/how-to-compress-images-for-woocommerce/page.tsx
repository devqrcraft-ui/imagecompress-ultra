import type { Metadata } from 'next';
import ClientPage from './client';
export const metadata: Metadata = {
  title: 'How to Compress Images for WooCommerce — Speed Up Your Store 2025',
  description: 'Learn how to compress product images for WooCommerce to improve page speed, SEO rankings, and conversions. Free tool included.',
  keywords: 'compress images for woocommerce, woocommerce product image size, optimize woocommerce images, woocommerce image compression, speed up woocommerce',
  alternates: { canonical: '/blog/how-to-compress-images-for-woocommerce' },
};
export default function Page() { return <ClientPage />; }
