import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

export const posts: Record<string, { title: string; desc: string; date: string; tag: string; content: string }> = {
  'ds160-photo-requirements': {
    title: 'DS-160 Photo Requirements 2026: Complete Guide',
    desc: 'Everything you need to know about DS-160 photo requirements. Size, format, common mistakes and how to fix them.',
    date: 'February 2026',
    tag: 'US Visa',
    content: `
## What Are the DS-160 Photo Requirements?

The DS-160 (Online Nonimmigrant Visa Application) has strict photo requirements set by the US State Department:

- **Format:** JPEG only (not PNG, not HEIC, not WebP)
- **File size:** Under 240KB
- **Dimensions:** 600×600px to 1200×1200px (square)
- **Background:** Plain white or off-white
- **Color space:** sRGB (Display P3 is rejected)
- **Head size:** Must fill 50-69% of the frame
- **Taken within:** 6 months
- **No glasses** (banned since 2016)

## Why Do DS-160 Photo Uploads Fail?

The most common failure reason is **file size over 240KB**. The CEAC system rejects oversized files silently — the application simply won't proceed with no clear error message.

Other common reasons:
- iPhone HEIC format instead of JPEG
- Display P3 color space (all recent iPhones)
- Photo dimensions not square
- Background with shadows or patterns
- Glasses in the photo

## How to Fix iPhone Photos for DS-160

iPhone photos fail DS-160 for two reasons:
1. **HEIC format** — DS-160 only accepts JPEG
2. **Display P3 color space** — DS-160 requires sRGB

Our free tool converts HEIC to JPEG and fixes the color space automatically.

## Step-by-Step: Compress Photo for DS-160

1. Click [Open DS-160 Compressor](/compress-for-ds160)
2. Upload your photo (JPEG, PNG, HEIC, WebP all accepted)
3. Select **Target KB Mode** and enter **240** as target
4. Download your compressed JPEG
5. Upload to DS-160 at ceac.state.gov

## What the US State Department Actually Specifies

The published digital image rule is the same one DS-160 uses: a JPEG whose longest side is between 600 and 1200 pixels, square, and **less than or equal to 240 kilobytes** (travel.state.gov, checked October 2026). Other US document uploads ask for different things, so treat 240KB as the figure for the systems that name it rather than a universal American limit — read the instruction next to the upload button and aim at that number.

## Frequently Asked Questions

**Can I use a selfie for DS-160?** Yes, if it meets all requirements: white background, correct dimensions, no glasses, proper lighting.

**What happens if my DS-160 photo is rejected?** The system won't let you proceed. You must compress the photo correctly and re-upload.

**Do I need glasses in my DS-160 photo if I always wear them?** No. The US State Department banned glasses in all visa photos since November 2016.
    `,
  },
  'compress-photo-for-visa': {
    title: 'How to Compress Photo for Visa Application (Any Country)',
    desc: 'Step-by-step guide to compress visa photos to meet exact KB and pixel requirements for any country.',
    date: 'February 2026',
    tag: 'Visa',
    content: `
## Why Visa Photos Get Rejected for File Size

Every country publishes its own photo rules, and they change between notifications. The rejection rate is dominated by file size and format, because a modern phone camera hands you a several-megabyte image while the upload field often wants a few hundred kilobytes.

Three figures we have checked against the issuing authority itself (all October 2026):

- **US visa / DS-160 (travel.state.gov):** JPEG, square, 600-1200 px on the longest side, **240 KB or less**.
- **UK visa (gov.uk):** JPG or JPEG, vertically oriented, at least 600 px wide and 750 px tall, **at least 50 KB and no more than 6 MB**.
- **India e-Visa (indianvisaonline.gov.in):** JPEG, equal height and width, **between 10 KB and 300 KB**.

Notice that a file can be *too small* as well as too large — a heavily compressed 8 KB photo can be rejected on its own. Aim for the window your form states, then look at the preview before uploading.

## How to Compress Visa Photo in 3 Steps

1. **Open our free compressor** at compressto20kb.com
2. **Upload your photo** — JPEG, PNG, HEIC, WebP supported
3. **Select Target KB Mode** — enter the target KB for your visa type

No signup, no upload to server, works on iPhone, Android, Mac, Windows.

## Country-Specific Visa Photo Guides

- [UK Visa Photo](/compress-for-uk-visa) — 50 KB to 6 MB, at least 600×750 px (gov.uk, checked October 2026)
- [India e-Visa Photo](/compress-for-india-visa) — 10 KB to 300 KB, square JPEG (indianvisaonline.gov.in, checked October 2026)
- [Schengen Visa Photo](/compress-for-schengen-visa) — biometric format; the accepted file size is set by the country you apply to
- [Japan Visa Photo](/compress-for-japan-visa) — check the consulate page for your jurisdiction before uploading
- [China Visa Photo](/compress-for-china-visa) — the visa centre page states the current digital limits

## iPhone Tips for Visa Photos

iPhone photos are usually HEIC rather than JPEG, which is the format most visa upload fields reject. Compressing through this tool writes the result as a standard JPEG, WebP, AVIF or PNG, so the container problem is solved as part of the run — provided your browser can read HEIC in the first place. Safari can; several other browsers cannot, and the tool then sees an unreadable file rather than silently producing something odd. If that happens, export the photo as JPEG in the Photos app first and compress the copy here.
    `,
  },
  'iphone-photo-ds160': {
    title: 'iPhone Photo for DS-160: HEIC, Display P3 & How to Fix',
    desc: 'Why iPhone photos fail DS-160 upload and how to convert HEIC to JPEG and fix Display P3 color space.',
    date: 'February 2026',
    tag: 'iPhone',
    content: `
## Why iPhone Photos Fail DS-160 Upload

If you're using an iPhone to take your DS-160 visa photo, you'll likely run into two problems:

### Problem 1: HEIC Format
iPhones save photos in HEIC format by default. The DS-160 system **only accepts JPEG**. Uploading a HEIC file will either fail silently or show a format error.

### Problem 2: Display P3 Color Space
iPhone cameras capture photos in Display P3 color space. The DS-160 system requires **sRGB color space**. Photos with Display P3 may pass the automated check but get rejected manually.

### Problem 3: File Size
A photo straight off a phone is usually several megabytes, while the US digital image rule is **240 KB or less** (travel.state.gov, checked October 2026). That is the gap this tool exists for: type 240 as the target and it searches encoding quality until the file fits.

## How to Fix iPhone Photos for DS-160

**The fastest fix:**
1. Go to [compress-to-240kb](/compress-to-240kb)
2. Upload your iPhone photo (HEIC is accepted)
3. Our tool re-encodes it as a standard JPEG and compresses it to under 240KB
4. Download and upload to DS-160

**Manual fix (Settings method):**
1. Go to iPhone Settings → Camera → Formats
2. Change from "High Efficiency" to "Most Compatible"
3. Retake the photo — it will now save as JPEG
4. Still compress to under 240KB before uploading

## Does Display P3 Colour Cause DS-160 Rejection?

Sometimes, sometimes not — it depends on how the upload validator reads the embedded profile, and the State Department page does not describe a colour-space test in the terms most people expect. What we can say honestly is that this tool re-encodes the picture through your browser, which usually drops the wide-gamut profile as a side effect, but it is not a colour-management utility and we have not verified its output against the DS-160 validator. If a rejection points at colour, convert to sRGB in an image editor first and then compress the result here.

## Step by Step: DS-160 Photo from iPhone

1. Take photo in good lighting, white background, no glasses
2. Upload to [our free compressor](/compress-for-ds160)
3. Tool re-encodes HEIC → JPEG and compresses to under 240KB
4. Download the file
5. Upload to DS-160 at ceac.state.gov/genniv
    `,
  },
  'dv-lottery-photo-guide': {
    title: 'DV Lottery Photo Requirements 2026/2027: Full Guide',
    desc: 'Complete DV Lottery photo requirements with common rejection reasons and free compression tool.',
    date: 'February 2026',
    tag: 'DV Lottery',
    content: `
## DV Lottery Photo Requirements 2026/2027

The Diversity Visa (DV) Lottery run by the US State Department has strict photo requirements identical to DS-160:

- **Format:** JPEG
- **File size:** 240KB or smaller
- **Dimensions:** 600×600 to 1200×1200 pixels
- **Background:** plain white or off-white
- **No glasses**
- **Taken within:** the last 6 months

Those are the figures we checked against official guidance in October 2026. The rest of the rules - head size, expression, lighting, and whether your camera's wide-gamut colour profile survives the upload - are in the State Department's own instructions. Read them before you submit; this list is not a substitute for the source.

## Why DV Lottery Photos Get Rejected

The most common reasons for DV Lottery photo rejection:

1. **File over 240KB** — a phone photo is typically several megabytes, an order of magnitude over the limit
2. **HEIC format** — iPhone default, not accepted
3. **Non-white background** — colored walls, shadows, patterns
4. **Glasses** — no longer allowed since 2016
5. **Head too small** — must fill 50-69% of frame

Any of these errors will disqualify your DV Lottery entry.

## How to Prepare DV Lottery Photo

1. Take photo in front of plain white wall or sheet
2. No glasses, neutral expression, face centered
3. Good lighting — no shadows on face or background
4. Upload to [our free tool](/compress-for-dv-lottery)
5. Compress to under 240KB — download JPEG
6. Submit at dvprogram.state.gov

## Can I Use the Same Photo for DV Lottery and DS-160?

Yes! If the photo meets requirements for both (under 240KB, JPEG, white background, correct dimensions), you can use the same compressed file for both DV Lottery entry and later DS-160 application.

## DV Lottery Entry Window

The DV Lottery entry window is typically open for 30 days in October-November each year. For DV-2027 lottery, entries open in October 2025. Make sure your photo is ready before the window opens.
    `,
  },
  'compress-photo-under-50kb': {
    title: 'How to Compress Photo Under 50KB for SSC, NEET & Indian Exams',
    desc: 'Guide for Indian exam applicants: compress photo to 50KB, 100KB, 200KB for SSC, NEET, UPSC online forms.',
    date: 'February 2026',
    tag: 'India Exams',
    content: `
## Indian Exam Photo Requirements by Exam

Different Indian exams have different photo size requirements:

Sites that quote a single "max size" per exam get it wrong in both directions, because most of these forms publish a **band** - a floor as well as a ceiling - and a file below the floor is rejected just like one above it.

| Form | Published range for the photograph | Source |
|------|-------------------------------------|--------|
| NEET-UG (NTA) | 10 KB to 200 KB, scanned passport-size photo | nta.ac.in public notice |
| NEET-UG (NTA) | 50 KB to 300 KB, postcard size 4"×6" | nta.ac.in public notice |
| UPSC online application | 20 KB to 300 KB | upsconline.gov.in candidate FAQ |

Anything not in that table we have not verified, so we do not state it. SSC in particular now captures the photograph live through its own app or webcam for many posts, which means there is nothing to upload - and no compressor can help you there.

Two things a compressor cannot do, whatever the exam: it cannot make a file **bigger** to reach a minimum, and it cannot resize to an exact pixel box or crop to a required ratio. Those are camera, editor or scanner settings, decided before the file gets here.

## Why Exam Photos Get Rejected

The most common reasons for Indian exam photo rejection:
- File size outside the published band (a phone photo is typically several megabytes)
- Wrong dimensions
- Non-white background
- File not JPEG format

## How to Compress Photo to 50KB for SSC/RRB

1. Open [our free compressor](/)
2. Upload your photo
3. Click **Target KB Mode**
4. Enter **50** as target size
5. Download — ready to upload to SSC/RRB portal

Works for any size: 20KB, 30KB, 50KB, 100KB, 200KB, 300KB.

## NEET Photo Requirements 2026

What NTA's own notice states for the photograph file: JPEG, between 10 KB and 200 KB, colour with a plain background, taken recently. The exact pixel/mm box changes between notification cycles, so read the PDF for the year you are applying - a figure copied from a blog post, including this one, is a common way a compliant photo gets rejected.

Use [our NEET compressor](/compress-for-neet-exam) to resize and compress in one step.

## Tips for Indian Exam Photos

- Use plain white or light background
- Take in natural light, avoid flash shadows
- No spectacles in photo
- Full face visible, no hair covering forehead
- Recent photo (within 6 months)
- Save as JPEG, not PNG
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: 'Blog' };
  return {
    title: `${post.title} — CompressTo20KB Blog`,
    description: post.desc,
    alternates: { canonical: `https://www.compressto20kb.com/blog/${slug}` },
  };
}

function renderContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('## ')) {
      elements.push(<h2 key={i} style={{ fontSize: '22px', fontWeight: 800, margin: '36px 0 12px', color: '#818cf8' }}>{line.replace('## ', '')}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} style={{ fontSize: '17px', fontWeight: 700, margin: '24px 0 8px', color: '#c4b5fd' }}>{line.replace('### ', '')}</h3>);
    } else if (line.startsWith('- ')) {
      elements.push(<li key={i} style={{ fontSize: '14px', opacity: 0.92, marginBottom: '6px', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong style="color:white">$1</strong>') }} />);
    } else if (line.startsWith('|')) {
      // skip table lines for simplicity
    } else if (line.startsWith('1. ') || line.match(/^\d+\. /)) {
      elements.push(<li key={i} style={{ fontSize: '14px', opacity: 0.92, marginBottom: '6px', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: line.replace(/^\d+\. /, '').replace(/\*\*(.*?)\*\*/g, '<strong style="color:white">$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#818cf8">$1</a>') }} />);
    } else if (line.trim() === '') {
      elements.push(<br key={i} />);
    } else {
      elements.push(<p key={i} style={{ fontSize: '15px', lineHeight: 1.8, opacity: 0.92, marginBottom: '12px' }} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong style="color:white">$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#818cf8">$1</a>') }} />);
    }
    i++;
  }
  return elements;
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', color: 'white', fontFamily: 'system-ui,sans-serif' }}>
<div style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize:'15px', opacity: 1, marginBottom: '12px' }}>
          <Link href="/" style={{ color: '#c7d2fe', textDecoration: 'none' }}>Home</Link> {'→'}{' '}
          <Link href="/blog" style={{ color: '#c7d2fe', textDecoration: 'none' }}>Blog</Link> {'→'} {post.tag}
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ background: 'rgba(129,140,248,0.2)', color: '#818cf8', fontSize: '13px', fontWeight: 700, padding: '3px 10px', borderRadius: '100px' }}>{post.tag}</span>
          <span style={{ fontSize: '13px', opacity: 0.62 }}>{post.date}</span>
        </div>
        <h1 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 900, lineHeight: 1.25, marginBottom: '24px' }}>{post.title}</h1>
        <div style={{ marginBottom: '40px' }}>
          {renderContent(post.content)}
        </div>
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Try Our Free Photo Compressor</div>
          <a href="/?mode=exactkb&target=240" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#4f46e5,#6d28d9)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
            ⚡ Compress Photo Now — Free
          </a>
        </div>
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>More Guides</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {[
            { href: '/compress-to-240kb', label: '📦 Compress to 240KB' },
            { href: '/compress-for-ds160', label: '🏛️ DS-160 Photo' },
            { href: '/compress-for-dv-lottery', label: '🎰 DV Lottery Photo' },
            { href: '/visa-photo-compressor', label: '🌍 Visa Photo Tools' },
            { href: '/blog', label: '📝 All Blog Posts' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '8px 14px', color: 'white', textDecoration: 'none', fontSize:'15px', fontWeight: 600 }}>{label}</Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}
