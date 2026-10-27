const faq: [string, string][] = [
  ['How can I contact CompressTo20KB?', 'By email, straight from this page: the Email Us button opens a message to the address below. Use it for questions, feedback, or a feature request. Include what you were trying to do and what happened instead - that is the difference between a reply that helps and a guess. This is a small project, so we read everything but cannot promise a fixed turnaround.'],
  ['How do I report a bug with the image compressor?', 'Send your browser and version, your operating system, the input format (JPG, PNG, WebP, AVIF or HEIC), the target size you typed, and what the tool produced. A screenshot of the result helps. Describe the file rather than attaching it: nothing about your images reaches us, because the tool never uploads them.'],
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — CompressTo20KB",
  description: "Get in touch with CompressTo20KB about the browser-based image compressor: questions, feedback, feature requests and bug reports.",
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Contact","item":"https://www.compressto20kb.com/contact"}]}' }} />
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p style={{color:"rgba(255,255,255,0.9)"}}>Have a question, bug report, or feature request? Email us from this page — there is no signup and no ticket queue.</p>

      <div style={{background:"rgba(129,140,248,0.08)",border:"1px solid rgba(129,140,248,0.2)",borderRadius:"12px",padding:"24px",textAlign:"center" as const}}>
        <p style={{color:"#c7d2fe",fontSize:"16px",marginBottom:"16px"}}>Have a question, bug report, or feature request?</p>
        <a
          href="mailto:kalkulator018@gmail.com?subject=CompressTo20KB%20Feedback"
          style={{display:"inline-block",background:"#818cf8",color:"#fff",padding:"12px 32px",borderRadius:"8px",fontWeight:700,textDecoration:"none",fontSize:"15px"}}
        >
          Email Us →
        </a>
        <p style={{color:"rgba(255,255,255,0.4)",fontSize:"12px",marginTop:"12px"}}>kalkulator018@gmail.com</p>
      </div>

      <div style={{background:"rgba(129,140,248,0.06)",border:"1px solid rgba(129,140,248,0.15)",borderRadius:"12px",padding:"24px",marginTop:"48px",fontSize:"14px",color:"rgba(255,255,255,0.9)"}}>
        <p className="mb-2"><strong>Reply time:</strong> we answer as fast as we can; there is no guaranteed turnaround on a free tool.</p>
        <p className="mb-2"><strong>Bug reports:</strong> please include your browser, OS, input format and target KB, plus what went wrong.</p>
        <p><strong>Privacy:</strong> we do not share your contact information with third parties. Your images never reach us in the first place — compression runs in your browser.</p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faq.map(([q, a], i) => (
            <details key={i} className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-4">
              <summary className="font-semibold text-white cursor-pointer">{q}</summary>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
