
const _faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How can I contact CompressTo20KB?","acceptedAnswer":{"@type":"Answer","text":"Use the contact form on this page for questions, feedback, or bug reports. We respond within 1-2 business days."}},{"@type":"Question","name":"How do I report a bug with the image compressor?","acceptedAnswer":{"@type":"Answer","text":"Use the contact form and describe: your browser, operating system, image format, and what happened. Screenshots are helpful. We fix reported bugs as quickly as possible."}}]};
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ImageCompress Pro",
  description: "Get in touch with the ImageCompress Pro team. We respond to all inquiries within 24 hours.",
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(_faqSchema) }} />
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-10">Have a question, bug report, or feature request? Fill in the form below — we respond within 24 hours.</p>

      <form action="/api/contact" method="POST" className="space-y-6">
        {/* Honeypot — hidden from real users, bots fill it */}
        <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }} aria-hidden="true">
          <label htmlFor="website">Website (leave blank)</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
          <select
            id="subject"
            name="subject"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="general">General question</option>
            <option value="bug">Bug report</option>
            <option value="feature">Feature request</option>
            <option value="api">API inquiry</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your question or issue in detail..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Send Message →
        </button>
      </form>

      <div className="mt-12 p-6 bg-gray-50 rounded-2xl text-sm text-gray-500">
        <p className="mb-2"><strong>Response time:</strong> within 24 hours on business days</p>
        <p className="mb-2"><strong>Bug reports:</strong> please include your browser, OS, and image format</p>
        <p><strong>Privacy:</strong> we do not share your contact information with third parties</p>
      </div>
    </main>
  );
}
