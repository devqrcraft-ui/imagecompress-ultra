
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are the photo requirements for a visa application?","acceptedAnswer":{"@type":"Answer","text":"Most visa applications require a JPEG photo under 240KB, 2x2 inches (600x600px minimum), white background, taken within 6 months. Exact requirements vary by country — check the official embassy website for your destination."}},{"@type":"Question","name":"How do I compress a photo for a visa application?","acceptedAnswer":{"@type":"Answer","text":"Upload your photo, select the target size (usually under 200KB or 240KB), and download the compressed JPEG. Our tool compresses without uploading to any server — your photo stays private on your device."}},{"@type":"Question","name":"What file size is required for visa photos?","acceptedAnswer":{"@type":"Answer","text":"Most countries require visa photos under 200-240KB. The US visa requires under 240KB, Schengen visa under 2MB, UK visa under 6MB. Use our visa photo compressor to hit the exact size required."}}]};
import type { Metadata } from 'next';
import { VISA_SLUG_MAP } from '@/lib/visaCountries';
import VisaClientPage from '../compress-for-[country]/client';

const SLUG = 'uk-visa';

export const metadata: Metadata = (() => {
  const vc = VISA_SLUG_MAP[SLUG];
  if (!vc) return { title: 'Visa Photo Compressor' };
  return {
    title: `Compress Photo for ${vc.name} — ${vc.maxKB >= 1024 ? Math.round(vc.maxKB/1024)+'MB' : vc.maxKB+'KB'} Max — Free`,
    description: `Compress photo for ${vc.name} online. Requirements: ${vc.widthPx}×${vc.heightPx}px, ${vc.background} background, under ${vc.maxKB >= 1024 ? Math.round(vc.maxKB/1024)+'MB' : vc.maxKB+'KB'}. Free, no upload, 100% private.`,
    alternates: { canonical: `/compress-for-${SLUG}` },
    keywords: `compress photo for ${vc.name.toLowerCase()}, ${vc.name.toLowerCase()} photo requirements, ${vc.name.toLowerCase()} visa photo size`,
  };
})();

export default function Page() {
  const vc = VISA_SLUG_MAP[SLUG];
  if (!vc) return <div style={{ color: 'white', padding: '40px' }}>Country not found</div>;
  return <VisaClientPage country={vc} />;
}
