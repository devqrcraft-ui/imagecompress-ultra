
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are the photo requirements for a visa application?","acceptedAnswer":{"@type":"Answer","text":"Most visa applications require a JPEG photo under 240KB, at least 600x600px, with a plain white or off-white background, taken within the last 6 months. Always check the official embassy or consulate website for exact requirements for your destination country."}},{"@type":"Question","name":"How do I compress a visa photo to the required size?","acceptedAnswer":{"@type":"Answer","text":"Upload your photo, switch to Exact KB Mode, type your target size (e.g. 200 for 200KB), select JPEG format, and click Compress. All processing runs in your browser — your photo is never uploaded to any server, keeping it safe and private."}},{"@type":"Question","name":"What file size is required for visa application photos?","acceptedAnswer":{"@type":"Answer","text":"File size requirements vary by country. The US visa (DS-160) requires under 240KB. The UK visa requires under 6MB. Schengen visa applications typically require under 2MB. Use Exact KB Mode to hit any specific target precisely."}},{"@type":"Question","name":"Is it safe to compress passport and visa photos online?","acceptedAnswer":{"@type":"Answer","text":"Yes — with this tool. All compression runs locally in your browser using WebAssembly. Your photo never leaves your device. Other tools like 11zon, TinyPNG, and Cloudinary upload files to their servers, which is a privacy risk for identity documents."}},{"@type":"Question","name":"Can I compress multiple visa photos at once?","acceptedAnswer":{"@type":"Answer","text":"Yes — upload up to 50 images at once, set your target size in Exact KB Mode, and compress all at once. Download individually or as a ZIP. Everything runs in your browser — free, no signup required."}}]};
import type { Metadata } from 'next';
import { VISA_SLUG_MAP } from '@/lib/visaCountries';
import VisaClientPage from '../compress-for-[country]/client';

const SLUG = 'czech-visa';

export const metadata: Metadata = (() => {
  const vc = VISA_SLUG_MAP[SLUG];
  if (!vc) return { title: 'Visa Photo Compressor' };
  return {
    title: `Compress Photo for ${vc.name} – ${vc.maxKB >= 1024 ? Math.round(vc.maxKB/1024)+'MB' : vc.maxKB+'KB'} Max — Free`,
    description: `Compress ${vc.name} visa photo online. Requirements: ${vc.widthPx}x${vc.heightPx}px, ${vc.background} background, under ${vc.maxKB >= 1024 ? Math.round(vc.maxKB/1024)+'MB' : vc.maxKB+'KB'}. Free, no upload, 100% private.`,
    alternates: { canonical: `https://www.compressto20kb.com/compress-for-${SLUG}` },
    keywords: `compress photo for ${vc.name.toLowerCase()}, ${vc.name.toLowerCase()} photo requirements, ${vc.name.toLowerCase()} visa photo size`,
  };
})();

export default function Page() {
  const vc = VISA_SLUG_MAP[SLUG];
  if (!vc) return <div style={{ color: 'white', padding: '40px' }}>Country not found</div>;
  return <VisaClientPage country={vc} />;
}
