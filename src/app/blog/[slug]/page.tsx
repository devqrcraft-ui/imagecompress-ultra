import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamicParams = false;

const posts: Record<string, { title: string; desc: string; date: string; tag: string; content: string }> = {
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
3. Select **Exact KB Mode** and enter **240** as target
4. Download your compressed JPEG
5. Upload to DS-160 at ceac.state.gov

## DS-160 vs Passport Photo — What's the Difference?

| | DS-160 Digital | US Passport |
|---|---|---|
| File size | Under 240KB | Under 10MB |
| Dimensions | 600-1200px square | 600-1200px square |
| Format | JPEG only | JPEG |

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

Every country has strict photo requirements for visa applications. The most common rejection reason is file size — modern phone cameras produce photos of 3-10MB, while most visa systems require under 300KB or even 50KB.

Common limits by country:
- **US DS-160:** Under 240KB
- **UK Visa:** Under 6MB (but 600×750px exact)
- **India e-Visa:** Under 300KB
- **China Visa:** Under 120KB
- **Pakistan e-Visa:** Under 50KB

## How to Compress Visa Photo in 3 Steps

1. **Open our free compressor** at compressto20kb.com
2. **Upload your photo** — JPEG, PNG, HEIC, WebP supported
3. **Select Exact KB Mode** — enter the target KB for your visa type

No signup, no upload to server, works on iPhone, Android, Mac, Windows.

## Country-Specific Visa Photo Guides

- [UK Visa Photo](/compress-for-uk-visa) — 6MB max, 600×750px
- [India e-Visa Photo](/compress-for-india-visa) — 300KB max, 350×350px
- [Schengen Visa Photo](/compress-for-schengen-visa) — 500KB max
- [Japan Visa Photo](/compress-for-japan-visa) — 240KB max
- [China Visa Photo](/compress-for-china-visa) — 120KB max

## iPhone Tips for Visa Photos

iPhone photos are in HEIC format and Display P3 color space — both incompatible with most visa systems. Our tool automatically converts both when you compress your photo.
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
iPhone photos are typically 3-8MB. DS-160 requires **under 240KB** — that's 10-30x smaller than a typical iPhone photo.

## How to Fix iPhone Photos for DS-160

**The fastest fix:**
1. Go to [compress-to-240kb](/compress-to-240kb)
2. Upload your iPhone photo (HEIC is accepted)
3. Our tool converts to JPEG + fixes color space + compresses to under 240KB
4. Download and upload to DS-160

**Manual fix (Settings method):**
1. Go to iPhone Settings → Camera → Formats
2. Change from "High Efficiency" to "Most Compatible"
3. Retake the photo — it will now save as JPEG
4. Still compress to under 240KB before uploading

## Does Display P3 Always Cause DS-160 Rejection?

Not always — it depends on the consular officer reviewing your application. However, the US State Department specifies sRGB as the required color space. To be safe, always convert to sRGB before submitting.

## Step by Step: DS-160 Photo from iPhone

1. Take photo in good lighting, white background, no glasses
2. Upload to [our free compressor](/compress-for-ds160)
3. Tool converts HEIC → JPEG, Display P3 → sRGB, compresses to under 240KB
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

- **Format:** JPEG only
- **File size:** Under 240KB
- **Dimensions:** 600×600px to 1200×1200px
- **Background:** White or off-white only
- **Color:** sRGB (not Display P3)
- **No glasses** (since 2016)
- **Taken within:** 6 months of entry submission

## Why DV Lottery Photos Get Rejected

The most common reasons for DV Lottery photo rejection:

1. **File over 240KB** — most phone photos are 3-8MB
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

| Exam | Max Size | Dimensions |
|------|----------|------------|
| SSC CGL/CHSL | 50KB | 100×120px |
| NEET UG | 200KB | 200×230px |
| UPSC Civil Services | 300KB | 350×350px |
| RRB (Railways) | 50KB | 100×120px |
| IBPS Bank Exams | 50KB | 200×230px |
| JEE Main | 30KB | 100×130px |

## Why Exam Photos Get Rejected

The most common reasons for Indian exam photo rejection:
- File size over limit (phone photos are 3-8MB)
- Wrong dimensions
- Non-white background
- File not JPEG format

## How to Compress Photo to 50KB for SSC/RRB

1. Open [our free compressor](/)
2. Upload your photo
3. Click **Exact KB Mode**
4. Enter **50** as target size
5. Download — ready to upload to SSC/RRB portal

Works for any size: 20KB, 30KB, 50KB, 100KB, 200KB, 300KB.

## NEET Photo Requirements 2025

NEET photo: JPEG format, 200×230px, under 200KB, white background, taken within 6 months, not scanned from printed photo.

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
      elements.push(<h2 key={i} style={{ fontSize: '22px', fontWeight: 800, margin: '36px 0 12px', color: '#a5b4fc' }}>{line.replace('## ', '')}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={i} style={{ fontSize: '17px', fontWeight: 700, margin: '24px 0 8px', color: '#c4b5fd' }}>{line.replace('### ', '')}</h3>);
    } else if (line.startsWith('- ')) {
      elements.push(<li key={i} style={{ fontSize: '14px', opacity: 0.8, marginBottom: '6px', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: line.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong style="color:white">$1</strong>') }} />);
    } else if (line.startsWith('|')) {
      // skip table lines for simplicity
    } else if (line.startsWith('1. ') || line.match(/^\d+\. /)) {
      elements.push(<li key={i} style={{ fontSize: '14px', opacity: 0.8, marginBottom: '6px', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: line.replace(/^\d+\. /, '').replace(/\*\*(.*?)\*\*/g, '<strong style="color:white">$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#a5b4fc">$1</a>') }} />);
    } else if (line.trim() === '') {
      elements.push(<br key={i} />);
    } else {
      elements.push(<p key={i} style={{ fontSize: '15px', lineHeight: 1.8, opacity: 0.8, marginBottom: '12px' }} dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong style="color:white">$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:#a5b4fc">$1</a>') }} />);
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
      <nav style={{ padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.3)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontWeight: 800, fontSize: '18px', color: 'white', textDecoration: 'none' }}>🗜️ Compress20KB</Link>
        <Link href="/blog" style={{ color: 'white', textDecoration: 'none', fontSize:'15px', opacity: 0.75 }}>← Blog</Link>
      </nav>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '48px 16px 24px' }}>
        <div style={{ fontSize:'15px', opacity: 0.5, marginBottom: '12px' }}>
          <Link href="/" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Home</Link> {'→'}{' '}
          <Link href="/blog" style={{ color: '#a5b4fc', textDecoration: 'none' }}>Blog</Link> {'→'} {post.tag}
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ background: 'rgba(129,140,248,0.2)', color: '#a5b4fc', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '100px' }}>{post.tag}</span>
          <span style={{ fontSize: '12px', opacity: 0.4 }}>{post.date}</span>
        </div>
        <h1 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 900, lineHeight: 1.25, marginBottom: '24px' }}>{post.title}</h1>
        <div style={{ marginBottom: '40px' }}>
          {renderContent(post.content)}
        </div>
        <div style={{ background: 'rgba(129,140,248,0.12)', border: '1px solid rgba(129,140,248,0.35)', borderRadius: '14px', padding: '24px', marginBottom: '40px', textAlign: 'center' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>🎯 Try Our Free Photo Compressor</div>
          <a href="/?mode=exactkb&target=240" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: 'white', padding: '12px 28px', borderRadius: '100px', fontWeight: 800, fontSize: '14px', textDecoration: 'none' }}>
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
