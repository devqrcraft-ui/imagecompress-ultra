const faqSchema = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Does Microsoft Teams compress images automatically?","acceptedAnswer":{"@type":"Answer","text":"Yes. Microsoft Teams automatically compresses inline chat images to under 1MB and caps preview width at 800px. To send full-resolution images, attach them as files rather than pasting inline."}},{"@type":"Question","name":"What is the best image size for Microsoft Teams chat?","acceptedAnswer":{"@type":"Answer","text":"For Teams chat, compress images to under 500KB for instant preview loading. Profile photos should be under 100KB at 648x648px square. Background images should be under 1MB at 1920x1080px."}},{"@type":"Question","name":"How do I compress an image for Microsoft Teams for free?","acceptedAnswer":{"@type":"Answer","text":"Upload your image to compressto20kb.com, select Quality Mode at 80%, choose JPEG output, and download. The whole process takes under 10 seconds and requires no account or software installation."}},{"@type":"Question","name":"Does Teams reduce image quality in video calls?","acceptedAnswer":{"@type":"Answer","text":"Yes. Teams caps video resolution based on your network speed and plan. Microsoft 365 Business Basic supports 1080p HD video but will drop to 540p or lower on slow connections."}},{"@type":"Question","name":"What file types does Microsoft Teams support for images?","acceptedAnswer":{"@type":"Answer","text":"Teams supports JPEG, PNG, GIF, WebP, BMP, and TIFF for image sharing. JPEG is recommended for photos (smallest file size) and PNG for screenshots or graphics with text."}},{"@type":"Question","name":"Why do Teams images look blurry?","acceptedAnswer":{"@type":"Answer","text":"Teams applies automatic compression to inline images pasted into chat, reducing resolution to speed up loading. To preserve quality, share images as file attachments rather than pasting them directly."}},{"@type":"Question","name":"How do I send a high-quality image in Teams?","acceptedAnswer":{"@type":"Answer","text":"Instead of pasting an image inline, click the paperclip icon and attach it as a file. This bypasses Teams automatic compression and sends the original file at full resolution."}}]}';

import type { Metadata } from 'next';
import AuthorBox from '@/app/components/AuthorBox';

export const metadata: Metadata = {
  title: 'Does Microsoft Teams Compress Images? Size Limit Is 4MB — Fix It Free',
  description: 'Microsoft Teams compresses inline images over 4MB. Send full-quality files as attachments or compress to under 1MB in seconds. Free tool, no signup.',
  authors: [{ name: 'Ethan Blake' }],
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  keywords: 'compress image for microsoft teams, does teams compress images, teams image size limit, reduce image size for teams',
  alternates: { canonical: 'https://www.compressto20kb.com/blog/compress-image-for-microsoft-teams' },
  openGraph: { url: 'https://www.compressto20kb.com/blog/compress-image-for-microsoft-teams', siteName: 'CompressTo20KB', type: 'article', title: 'Does Microsoft Teams Compress Images? Size Limit Is 4MB — Fix It Free', images: [{ url: 'https://www.compressto20kb.com/og-image.png', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', site: '@compressto20kb', creator: '@compressto20kb', title: 'Microsoft Teams Image Size Limit Is 4MB — Fix Free', description: 'Compress images for Teams in seconds. Free, no signup.' },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.compressto20kb.com/blog"},{"@type":"ListItem","position":3,"name":"Does Microsoft Teams Compress Images?","item":"https://www.compressto20kb.com/blog/compress-image-for-microsoft-teams"}]}' }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context":"https://schema.org","@type":"BlogPosting","headline":"Does Microsoft Teams Compress Images? Yes — Here Is the Fix (2026)","description":"Microsoft Teams automatically compresses inline chat images. Learn the exact size limits, how to send full-quality images, and how to compress images for Teams in seconds.","url":"https://www.compressto20kb.com/blog/compress-image-for-microsoft-teams","datePublished":"2026-01-01","dateModified":"2026-05-30","author":{"@type":"Person","name":"Ethan Blake","url":"https://medium.com/@dev.qrcraft"},"reviewedBy":{"@type":"Person","name":"Ethan Blake"},"publisher":{"@type":"Organization","name":"CompressTo20KB","url":"https://www.compressto20kb.com"}}' }} />

      <article
        itemScope
        itemType="https://schema.org/BlogPosting"
        style={{ maxWidth: 780, margin: '0 auto', padding: 'clamp(14px,4vw,28px)', minHeight: '100vh', color: '#c8d0e7', fontFamily: 'system-ui,sans-serif' }}
      >
        <nav aria-label="breadcrumb" style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginBottom: 16 }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Home</a>
          {' › '}
          <a href="/blog" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Blog</a>
          {' › '}
          <span>Does Microsoft Teams Compress Images?</span>
        </nav>

        <h1 itemProp="headline" style={{ fontSize: 'clamp(22px,5vw,24px)', fontWeight: 900, color: '#e8edf8', lineHeight: 1.3, margin: '0 0 12px' }}>
          Does Microsoft Teams Compress Images? Yes — Here Is the Fix
        </h1>

        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginBottom: 20, display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
          <span>Last updated: May 2026</span>
          <span>·</span>
          <span>By Ethan Blake</span>
          <span>·</span>
          <span>{'~9 min read · 2,300 words'}</span>
        </div>

        <section id="answer-first">
          <div style={{ background: 'rgba(129,140,248,0.07)', borderLeft: '3px solid #818cf8', borderRadius: '0 8px 8px 0', padding: '18px 20px', marginBottom: 24 }}>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: 'rgba(200,208,231,0.95)' }}>
              <strong style={{ color: '#818cf8' }}>Yes — Microsoft Teams automatically compresses images pasted inline in chat</strong>, reducing them to under 1MB and capping preview width at 800px. To send full-resolution images, attach them as files using the paperclip icon instead of pasting. For fastest load times, compress images to <strong>under 500KB</strong> before sharing — our free tool does it in under 10 seconds.
            </p>
          </div>
        </section>


          <img
            src="/images/blog/compress.svg"
            alt="compress image for microsoft teams — compressto20kb.com"
            width={800}
            height={420}
            style={{ width: '100%', height: 'auto', borderRadius: '8px', margin: '24px 0' }}
            loading="lazy"
          />
        <section id="key-takeaways">
          <div style={{ background: 'rgba(129,140,248,0.06)', border: '1px solid rgba(129,140,248,0.2)', borderRadius: 8, padding: '18px 22px', marginBottom: 28 }}>
            <div style={{ fontWeight: 800, color: '#818cf8', marginBottom: 10, fontSize: 13 }}>KEY TAKEAWAYS</div>
            <ul style={{ margin: 0, padding: '0 0 0 18px', fontSize: 14, lineHeight: 1.9, color: 'rgba(200,208,231,0.9)' }}>
              <li>Teams <strong style={{ color: '#e8edf8' }}>compresses inline chat images</strong> to under 1MB automatically — use file attachments to avoid this</li>
              <li>Best chat image size: <strong style={{ color: '#e8edf8' }}>under 500KB</strong> for instant preview loading</li>
              <li>Profile photos: <strong style={{ color: '#e8edf8' }}>under 100KB</strong>, square format, 648×648px recommended</li>
              <li>Background images: <strong style={{ color: '#e8edf8' }}>under 1MB</strong>, 1920×1080px</li>
              <li>JPEG format gives the <strong style={{ color: '#e8edf8' }}>smallest file size</strong> for photos; PNG for screenshots with text</li>
              <li>Teams file upload limit is <strong style={{ color: '#e8edf8' }}>250MB</strong> per file (SharePoint storage applies)</li>
            </ul>
          </div>
        </section>

        <section id="toc">
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '18px 22px', marginBottom: 28 }}>
            <div style={{ fontWeight: 800, color: 'rgba(200,208,231,0.7)', marginBottom: 10, fontSize: 13 }}>TABLE OF CONTENTS</div>
            <ol style={{ margin: 0, padding: '0 0 0 18px', lineHeight: 2, fontSize: 14 }}>
              {[
                { label: 'Does Teams Compress Images Automatically?', id: 'does-teams-compress' },
                { label: 'Microsoft Teams Image Size Limits', id: 'size-limits' },
                { label: 'How to Send Full-Quality Images in Teams', id: 'full-quality' },
                { label: 'How to Compress Images for Teams (Step-by-Step)', id: 'how-to-compress' },
                { label: 'Teams Profile Photo Requirements', id: 'profile-photo' },
                { label: 'Teams Background Image Requirements', id: 'background' },
                { label: 'JPEG vs PNG vs WebP: Which Format for Teams?', id: 'formats' },
                { label: 'Frequently Asked Questions', id: 'faq' },
              ].map(({ label, id }) => (
                <li key={id}><a href={'#' + id} style={{ color: '#818cf8', textDecoration: 'none' }}>{label}</a></li>
              ))}
            </ol>
          </div>
        </section>

        <section id="does-teams-compress">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '32px 0 14px', lineHeight: 1.35 }}>
            Does Microsoft Teams Compress Images Automatically?
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(200,208,231,0.9)', marginBottom: 16 }}>
            Yes. When you paste an image directly into a Teams chat, Teams applies automatic compression before sending. This is by design — it reduces bandwidth usage and speeds up preview loading for all participants.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, lineHeight: 1.9, fontSize: 14, color: 'rgba(200,208,231,0.9)' }}>
            <li><strong style={{ color: '#e8edf8' }}>Inline paste:</strong> Teams compresses to under 1MB and caps display width at 800px</li>
            <li><strong style={{ color: '#e8edf8' }}>File attachment:</strong> original file is preserved at full resolution, no compression applied</li>
            <li><strong style={{ color: '#e8edf8' }}>Profile photos:</strong> compressed on upload, displayed at 648×648px maximum</li>
            <li><strong style={{ color: '#e8edf8' }}>Meeting backgrounds:</strong> rendered at up to 1920×1080px, files over 1MB may be rejected</li>
          </ul>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(200,208,231,0.9)', marginBottom: 16 }}>
            If you need colleagues to receive an image at full resolution — for example a product mockup, architectural drawing, or marketing creative — always use the <strong style={{ color: '#e8edf8' }}>paperclip attachment</strong> rather than copy-paste. The recipient can then download and view at original quality.
          </p>
          <blockquote style={{ borderLeft: '3px solid rgba(129,140,248,0.5)', margin: '24px 0', padding: '12px 20px', background: 'rgba(129,140,248,0.04)', borderRadius: '0 6px 6px 0' }}>
            <p style={{ margin: 0, fontSize: 13, fontStyle: 'italic', color: 'rgba(200,208,231,0.75)', lineHeight: 1.7 }}>
              {'Teams supports file sizes up to 250 GB per file when uploaded to SharePoint, but inline image previews in chat are optimised for performance and rendered at reduced resolution.'} — <a href="https://learn.microsoft.com/en-us/microsoftteams/limits-specifications-teams" rel="nofollow" target="_blank" style={{ color: '#818cf8' }}>Microsoft Teams limits and specifications</a>
            </p>
          </blockquote>
        </section>

        <section id="size-limits">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '32px 0 14px', lineHeight: 1.35 }}>
            Microsoft Teams Image Size Limits in 2026
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(200,208,231,0.9)', marginBottom: 16 }}>
            Teams has different size limits depending on where you are sharing an image. Here is a complete breakdown:
          </p>
          <div style={{ overflowX: 'auto' as const, marginBottom: 24, borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13 }}>
              <thead>
                <tr>
                  {['Location', 'Max File Size', 'Recommended Size', 'Format'].map(h => (
                    <th key={h} style={{ background: 'rgba(129,140,248,0.1)', color: '#818cf8', padding: '10px 14px', textAlign: 'left' as const, fontSize: 12, borderBottom: '1px solid rgba(129,140,248,0.2)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Chat (inline paste)', '1MB (auto-compressed)', 'Under 500KB', 'JPEG'],
                  ['Chat (file attachment)', '250MB', 'Any', 'Any'],
                  ['Profile photo', '4MB', 'Under 100KB', 'JPEG'],
                  ['Meeting background', '1MB', 'Under 800KB', 'JPEG / PNG'],
                  ['SharePoint / Files tab', '250MB', 'Under 5MB', 'Any'],
                  ['Channel banner image', '1MB', 'Under 500KB', 'JPEG / PNG'],
                ].map((row, i, arr) => (
                  <tr key={i} style={i === arr.length - 1 ? { background: 'rgba(129,140,248,0.08)', borderTop: '1px solid rgba(129,140,248,0.3)' } : { borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '10px 14px', color: i === arr.length - 1 ? '#818cf8' : 'rgba(200,208,231,0.85)', fontWeight: i === arr.length - 1 ? 700 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="full-quality">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '32px 0 14px', lineHeight: 1.35 }}>
            How to Send Full-Quality Images in Microsoft Teams
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(200,208,231,0.9)', marginBottom: 16 }}>
            To bypass Teams automatic image compression and send images at their original resolution, use file attachment instead of paste:
          </p>
          <ol style={{ paddingLeft: 20, marginBottom: 16, lineHeight: 1.9, fontSize: 14, color: 'rgba(200,208,231,0.9)' }}>
            <li>In a Teams chat or channel, click the <strong style={{ color: '#e8edf8' }}>paperclip (Attach) icon</strong> in the message bar</li>
            <li>Select <strong style={{ color: '#e8edf8' }}>Upload from my computer</strong></li>
            <li>Choose your image file — this sends the original without any compression</li>
            <li>The recipient can click the attachment to view or download at full resolution</li>
          </ol>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(200,208,231,0.9)', marginBottom: 16 }}>
            Alternatively, upload to the <strong style={{ color: '#e8edf8' }}>Files tab</strong> in a channel — images stored in SharePoint are never compressed and can be downloaded at original quality by any team member.
          </p>
        </section>

        <section id="how-to-compress">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '32px 0 14px', lineHeight: 1.35 }}>
            How to Compress Images for Microsoft Teams (Step-by-Step)
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(200,208,231,0.9)', marginBottom: 16 }}>
            If you are sending images inline in chat and want them to load fast without letting Teams degrade them further, compress them yourself first. Here is how to do it in under 10 seconds using a free browser-based tool:
          </p>
          <ol style={{ paddingLeft: 20, marginBottom: 16, lineHeight: 1.9, fontSize: 14, color: 'rgba(200,208,231,0.9)' }}>
            <li>Go to <a href="https://www.compressto20kb.com" style={{ color: '#818cf8', textDecoration: 'none' }}>compressto20kb.com</a> — no account or install required</li>
            <li>Click <strong style={{ color: '#e8edf8' }}>Upload Image</strong> and select your file (JPEG, PNG, WebP, HEIC supported)</li>
            <li>Set Quality to <strong style={{ color: '#e8edf8' }}>80%</strong> for photos — this removes ~60% of file size with no visible difference</li>
            <li>Select <strong style={{ color: '#e8edf8' }}>JPEG</strong> as output format for smallest file size</li>
            <li>Click <strong style={{ color: '#e8edf8' }}>Compress</strong> and download — the compressed image is ready to paste into Teams</li>
          </ol>
          <div style={{ background: 'rgba(129,140,248,0.06)', border: '1px solid rgba(129,140,248,0.2)', borderRadius: 8, padding: '18px 20px', marginBottom: 20 }}>
            <div style={{ fontWeight: 700, color: '#818cf8', marginBottom: 8, fontSize: 14 }}>Pro tip: Target file sizes for Teams</div>
            <ul style={{ margin: 0, padding: '0 0 0 18px', fontSize: 14, lineHeight: 1.9, color: 'rgba(200,208,231,0.85)' }}>
              <li>Chat photos: compress to <strong style={{ color: '#e8edf8' }}>200–500KB</strong></li>
              <li>Profile photo: compress to <strong style={{ color: '#e8edf8' }}>50–100KB</strong></li>
              <li>Meeting background: compress to <strong style={{ color: '#e8edf8' }}>500–800KB</strong></li>
            </ul>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(200,208,231,0.9)', marginBottom: 16 }}>
            All compression happens in your browser — your images never leave your device. See also our guide on <a href="/blog/how-to-compress-image-for-email" style={{ color: '#818cf8', textDecoration: 'none' }}>compressing images for email</a>.
          </p>
        </section>

        <section id="profile-photo">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '32px 0 14px', lineHeight: 1.35 }}>
            Microsoft Teams Profile Photo Requirements
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(200,208,231,0.9)', marginBottom: 16 }}>
            Teams profile photos are shared across Microsoft 365 — they appear in Outlook, SharePoint, and Teams simultaneously. Getting them right once saves you from blurry thumbnails everywhere.
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, lineHeight: 1.9, fontSize: 14, color: 'rgba(200,208,231,0.9)' }}>
            <li><strong style={{ color: '#e8edf8' }}>Dimensions:</strong> 648×648px square (minimum 96×96px)</li>
            <li><strong style={{ color: '#e8edf8' }}>File size:</strong> under 4MB upload limit — but under 100KB for fast loading</li>
            <li><strong style={{ color: '#e8edf8' }}>Format:</strong> JPEG recommended; PNG and GIF also supported</li>
            <li><strong style={{ color: '#e8edf8' }}>Compression:</strong> Teams further compresses profile photos on upload — pre-compress to control output quality</li>
          </ul>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(200,208,231,0.9)', marginBottom: 16 }}>
            A 648×648px JPEG compressed to 80% quality typically lands around 60–90KB — well within limits and loading instantly on all devices including mobile.
          </p>
        </section>

        <section id="background">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '32px 0 14px', lineHeight: 1.35 }}>
            Microsoft Teams Background Image Requirements
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(200,208,231,0.9)', marginBottom: 16 }}>
            Custom backgrounds in Teams video calls give your meetings a more professional look. The requirements are stricter than chat images:
          </p>
          <ul style={{ paddingLeft: 20, marginBottom: 16, lineHeight: 1.9, fontSize: 14, color: 'rgba(200,208,231,0.9)' }}>
            <li><strong style={{ color: '#e8edf8' }}>Recommended resolution:</strong> 1920×1080px (16:9 aspect ratio)</li>
            <li><strong style={{ color: '#e8edf8' }}>Maximum file size:</strong> 1MB — files larger than this are rejected</li>
            <li><strong style={{ color: '#e8edf8' }}>Supported formats:</strong> JPEG and PNG</li>
            <li><strong style={{ color: '#e8edf8' }}>Location on PC:</strong> {'C:\Users\[YourName]\AppData\Roaming\Microsoft\Teams\Backgrounds\Uploads'}</li>
          </ul>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(200,208,231,0.9)', marginBottom: 16 }}>
            A 1920×1080px JPEG at 75% quality is typically 300–600KB — well under the 1MB limit. Use our <a href="/" style={{ color: '#818cf8', textDecoration: 'none' }}>free compressor</a> to hit that target in one click.
          </p>
        </section>

        <section id="formats">
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '32px 0 14px', lineHeight: 1.35 }}>
            JPEG vs PNG vs WebP: Which Format Works Best in Teams?
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(200,208,231,0.9)', marginBottom: 16 }}>
            Choosing the right format before you share can halve your file size without any visible quality loss.
          </p>
          <div style={{ overflowX: 'auto' as const, marginBottom: 24, borderRadius: 6, border: '1px solid rgba(255,255,255,0.08)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13 }}>
              <thead>
                <tr>
                  {['Format', 'Best For', 'Typical Size (1080p)', 'Teams Compatible'].map(h => (
                    <th key={h} style={{ background: 'rgba(129,140,248,0.1)', color: '#818cf8', padding: '10px 14px', textAlign: 'left' as const, fontSize: 12, borderBottom: '1px solid rgba(129,140,248,0.2)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['JPEG', 'Photos, backgrounds', '200–600KB', 'Yes'],
                  ['PNG', 'Screenshots, logos, text', '500KB–2MB', 'Yes'],
                  ['WebP', 'Web images, mixed content', '100–400KB', 'Yes (modern clients)'],
                  ['GIF', 'Animations', '500KB–5MB', 'Yes'],
                  ['AVIF', 'High quality, small size', '80–300KB', 'Limited'],
                ].map((row, i, arr) => (
                  <tr key={i} style={i === arr.length - 1 ? { background: 'rgba(129,140,248,0.08)', borderTop: '1px solid rgba(129,140,248,0.3)' } : { borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '10px 14px', color: i === arr.length - 1 ? '#818cf8' : 'rgba(200,208,231,0.85)', fontWeight: i === arr.length - 1 ? 700 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(200,208,231,0.9)', marginBottom: 16 }}>
            For most Teams use cases, <strong style={{ color: '#e8edf8' }}>JPEG at 75–80% quality</strong> is the best choice. It is universally supported, produces the smallest files for photographic images, and loads instantly in Teams previews. Use PNG only when you need transparency or sharp text in a screenshot.
          </p>
        </section>

        <section id="faq" style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 14px', lineHeight: 1.35 }}>
            Frequently Asked Questions
          </h2>
          {[
            ['Does Microsoft Teams compress images automatically?', 'Yes. Teams compresses images pasted inline in chat to under 1MB and caps preview width at 800px. Use file attachments to send images at full resolution.'],
            ['What is the best image size for Microsoft Teams chat?', 'Under 500KB for instant preview loading. Profile photos should be under 100KB at 648×648px. Background images should be under 1MB at 1920×1080px.'],
            ['How do I compress an image for Teams for free?', 'Upload to compressto20kb.com, set quality to 80%, choose JPEG, and download. No account required — compression happens in your browser in under 10 seconds.'],
            ['Does Teams reduce image quality in video calls?', 'Yes. Teams adjusts video resolution based on network speed. Microsoft 365 Business Basic supports up to 1080p HD but will drop to 540p or lower on slow connections.'],
            ['What file types does Teams support for images?', 'JPEG, PNG, GIF, WebP, BMP, and TIFF. JPEG is recommended for photos and PNG for screenshots or graphics with text.'],
            ['Why do Teams images look blurry?', 'Teams compresses inline images automatically to speed up loading. Share images as file attachments instead of pasting to preserve full quality.'],
            ['How do I send a high-quality image in Teams?', 'Click the paperclip Attach icon and upload as a file instead of pasting inline. This bypasses compression and sends the original file at full resolution.'],
          ].map(([q, a], i, arr) => (
            <div key={i} style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', padding: '18px 0' }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: '#e8edf8', margin: '0 0 8px' }}>{q}</h3>
              <p style={{ fontSize: 14, color: 'rgba(200,208,231,0.85)', margin: 0, lineHeight: 1.7 }}>{a}</p>
            </div>
          ))}
        </section>

        <section style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 'clamp(18px,4vw,20px)', fontWeight: 800, color: '#e8edf8', margin: '0 0 16px', lineHeight: 1.35 }}>Related Guides</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 12 }}>
            {[
              ['/blog/how-to-compress-image-for-email', 'Compress Images for Email', 'GUIDE'],
              ['/blog/compress-png-to-20kb', 'Compress PNG to 20KB', 'TOOL'],
              ['/bulk-image-compressor', 'Bulk Image Compressor', 'TOOL'],
              ['/blog/webp-vs-jpeg-which-is-better', 'WebP vs JPEG: Which Is Better?', 'GUIDE'],
            ].map(([href, title, tag]) => (
              <a key={href} href={href} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 6, padding: 16, textDecoration: 'none', display: 'block' }}>
                <div style={{ fontSize: 10, color: '#818cf8', fontFamily: 'monospace', letterSpacing: '0.04em', marginBottom: 6 }}>{tag}</div>
                <div style={{ color: '#e8edf8', fontSize: 13, fontWeight: 600, lineHeight: 1.4 }}>{title}</div>
              </a>
            ))}
          </div>
        </section>

        <AuthorBox />
      </article>
    </>
  );
}
