import type { Metadata } from 'next';
import { VISA_COUNTRIES, VISA_SLUG_MAP } from '@/lib/visaCountries';
import VisaClientPage from './client';

export const dynamicParams = false;

export function generateStaticParams() {
  return VISA_COUNTRIES.map(c => ({ country: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const vc = VISA_SLUG_MAP[country];
  if (!vc) return { title: 'Visa Photo Compressor' };
  return {
    title: `Compress Photo for ${vc.name} — ${vc.maxKB >= 1024 ? Math.round(vc.maxKB/1024)+'MB' : vc.maxKB+'KB'} Max — Free`,
    description: `Compress photo for ${vc.name} online. Requirements: ${vc.widthPx}×${vc.heightPx}px, ${vc.background} background, under ${vc.maxKB >= 1024 ? Math.round(vc.maxKB/1024)+'MB' : vc.maxKB+'KB'}. Free, no upload, 100% private.`,
    alternates: { canonical: `/compress-for-${country}` },
    keywords: `compress photo for ${vc.name.toLowerCase()}, ${vc.name.toLowerCase()} photo requirements, ${vc.name.toLowerCase()} visa photo size, compress image for ${vc.name.toLowerCase()} application`,
  };
}

export default async function VisaCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const vc = VISA_SLUG_MAP[country];
  if (!vc) return <div style={{ color: 'white', padding: '40px' }}>Country not found</div>;
  return <VisaClientPage country={vc} />;
}
