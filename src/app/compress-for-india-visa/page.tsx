
import type { Metadata } from 'next';
import { VISA_SLUG_MAP } from '@/lib/visaCountries';
import VisaClientPage from '../compress-for-[country]/client';

const SLUG = 'india-visa';

export const metadata: Metadata = (() => {
  const vc = VISA_SLUG_MAP[SLUG];
  if (!vc) return { title: 'Visa Photo Compressor' };
  return {
    title: `Compress Photo for ${vc.name} — ${vc.maxKB >= 1024 ? Math.round(vc.maxKB/1024)+'MB' : vc.maxKB+'KB'} Max — Free`,
    description: `Compress photo for ${vc.name} online. Requirements: ${vc.widthPx}×${vc.heightPx}px, ${vc.background} background, under ${vc.maxKB >= 1024 ? Math.round(vc.maxKB/1024)+'MB' : vc.maxKB+'KB'}. Free, no upload, 100% private.`,
    alternates: { canonical: `https://www.compressto20kb.com/compress-for-${SLUG}` },
    keywords: `compress photo for ${vc.name.toLowerCase()}, ${vc.name.toLowerCase()} photo requirements, ${vc.name.toLowerCase()} visa photo size`,
  };
})();

export default function Page() {
  const vc = VISA_SLUG_MAP[SLUG];
  if (!vc) return <div style={{ color: 'white', padding: '40px' }}>Country not found</div>;
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Visa Photo Compressor","item":"https://www.compressto20kb.com/compress-for-india-visa"}]}' }} /><VisaClientPage country={vc} /></>;
}
