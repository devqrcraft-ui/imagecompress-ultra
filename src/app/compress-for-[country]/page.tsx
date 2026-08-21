import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { VISA_COUNTRIES } from '@/lib/visaCountries';
import CountryClient from './client';

interface Props { params: { country: string }; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const country = VISA_COUNTRIES.find((c) => c.slug === params.country);
  if (!country) return {};
  return {
    title: `Compress ${country.name} Visa Photo to 20KB — Online Free`,
    description: `Need ${country.name} visa photo under 20KB? Use our private compressor. No upload required, files stay on your device. Fast, free, and secure.`,
    alternates: { canonical: `https://www.compressto20kb.com/compress-for-${country.slug}` },
  };
}

export default function Page({ params }: Props ) {
  const country = VISA_COUNTRIES.find((c) => c.slug === params.country);
  if (!country) notFound();

  const steps = [
    "Select your photo from your device.",
    "Choose the required size (e.g., 20KB or 50KB).",
    "Wait 1 second for instant browser-based compression.",
    "Download your optimized visa photo."
  ];

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to compress ${country.name} visa photo`,
    "step": steps.map((s, i ) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "text": s
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <CountryClient country={country} />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-10 rounded-r-lg">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Key Benefits for ${country.name} Applicants:</h2>
          <ul className="list-disc list-inside text-blue-800 space-y-1">
            <li><strong>100% Private:</strong> Your visa photo never leaves your phone or computer.</li>
            <li><strong>Exact Size:</strong> Guaranteed to hit the 20KB/50KB limit.</li>
            <li><strong>No Watermark:</strong> High-quality results ready for official submission.</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mb-6">How to use ${country.name} Visa Photo Compressor</h2>
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {steps.map((s, i) => (
            <li key={i} className="bg-white border p-4 rounded-lg shadow-sm flex items-start">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">{i+1}</span>
              <span className="text-gray-700">{s}</span>
            </li>
          ))}
        </ol>

        <section className="border-t pt-10">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">What is the photo size for ${country.name} visa?</h3>
              <p className="text-gray-600">Most digital visa photos must be under 20KB or 50KB. Our tool handles both presets automatically.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Do I need to upload my photo to a server?</h3>
              <p className="text-gray-600">No. Unlike other tools, we use client-side technology. Your photo stays on your device, making it the most secure option for identity documents.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
