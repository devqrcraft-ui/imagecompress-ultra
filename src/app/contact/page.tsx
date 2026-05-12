
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How can I contact CompressTo20KB?","acceptedAnswer":{"@type":"Answer","text":"Use the contact form on this page for questions, feedback, or bug reports. We respond within 1-2 business days."}},{"@type":"Question","name":"How do I report a bug with the image compressor?","acceptedAnswer":{"@type":"Answer","text":"Use the contact form and describe: your browser, operating system, image format, and what happened. Screenshots are helpful. We fix reported bugs as quickly as possible."}}]};
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — CompressTo20KB",
  description: "Get in touch with the CompressTo20KB team. We respond to all inquiries within 24 hours.",
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Contact","item":"https://compressto20kb.com/contact"}]}' }} />
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p style={{color:"rgba(255,255,255,0.9)"}}>Have a question, bug report, or feature request? Fill in the form below — we respond within 24 hours.</p>

      <div style={{background:"rgba(129,140,248,0.08)",border:"1px solid rgba(129,140,248,0.2)",borderRadius:"12px",padding:"24px",textAlign:"center" as const}}>
        <p style={{color:"#c7d2fe",fontSize:"16px",marginBottom:"16px"}}>Have a question, bug report, or feature request?</p>
        <a
          href="mailto:kalkulator018@gmail.com?subject=CompressTo20KB%20Feedback"
          style={{display:"inline-block",background:"#818cf8",color:"#fff",padding:"12px 32px",borderRadius:"8px",fontWeight:700,textDecoration:"none",fontSize:"15px"}}
        >
          Email Us →
        </a>
        <p style={{color:"rgba(255,255,255,0.4)",fontSize:"12px",marginTop:"12px"}}>kalkulator018@gmail.com · We respond within 24 hours</p>
      </div>

      <div style={{background:"rgba(129,140,248,0.06)",border:"1px solid rgba(129,140,248,0.15)",borderRadius:"12px",padding:"24px",marginTop:"48px",fontSize:"14px",color:"rgba(255,255,255,0.9)"}}>
        <p className="mb-2"><strong>Response time:</strong> within 24 hours on business days</p>
        <p className="mb-2"><strong>Bug reports:</strong> please include your browser, OS, and image format</p>
        <p><strong>Privacy:</strong> we do not share your contact information with third parties</p>
      </div>
    </main>
  );
}
