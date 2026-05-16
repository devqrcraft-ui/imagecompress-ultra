'use client'
import React from 'react'
import { useState, useCallback } from 'react'
import AuthorBox from '@/app/components/AuthorBox'

export default function ImageSizeChecker() {
  const [results, setResults] = useState<{name:string,size:string,w:number,h:number,type:string}[]>([])
  const [dragging, setDragging] = useState(false)

  const processFiles = useCallback((files: FileList | File[]) => {
    const arr: {name:string,size:string,w:number,h:number,type:string}[] = []
    for (const file of files) {
      if (!file.type.startsWith('image/')) continue
      const url = URL.createObjectURL(file)
      const img = new Image()
      img.onload = () => {
        arr.push({ name: file.name, size: (file.size/1024).toFixed(1), w: img.width, h: img.height, type: file.type })
        setResults([...arr])
        URL.revokeObjectURL(url)
      }
      img.src = url
    }
  }, [])

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); setDragging(false)
    processFiles(e.dataTransfer.files)
  }, [processFiles])

  const bc = '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://compressto20kb.com"},{"@type":"ListItem","position":2,"name":"Image Size Checker","item":"https://compressto20kb.com/image-size-checker-online"}]}'
  const faq = '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I check image dimensions online?","acceptedAnswer":{"@type":"Answer","text":"Upload your image to this free tool. It instantly shows width, height, file size in KB, and image format. No upload to server — all processing runs in your browser."}},{"@type":"Question","name":"What is the ideal image size for websites?","acceptedAnswer":{"@type":"Answer","text":"For web use: JPEG under 200KB, width 1200-1920px for hero images, 400-800px for thumbnails. For mobile: under 100KB. Use WebP format for best compression."}},{"@type":"Question","name":"How do I check image file size in KB?","acceptedAnswer":{"@type":"Answer","text":"Drop your image into this checker. The tool shows exact file size in KB instantly. No account needed, no upload — 100% private browser-based processing."}}]}'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: bc }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faq }} />
      <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f172a,#1e1b4b)',color:'#c8d0e7',fontFamily:'system-ui,sans-serif',padding:'40px 20px'}}>
        <div style={{maxWidth:780,margin:'0 auto'}}>
          <nav style={{fontSize:13,color:'rgba(255,255,255,0.4)',marginBottom:24}}>
            <a href="/" style={{color:'rgba(255,255,255,0.4)',textDecoration:'none'}}>Home</a> › Image Size Checker
          </nav>
          <h1 style={{fontSize:'clamp(24px,4vw,36px)',fontWeight:900,color:'#fff',marginBottom:8}}>
            Image Size Checker Online — Free
          </h1>
          <div style={{fontSize:12,color:'rgba(255,255,255,0.4)',marginBottom:16}}>
            Last updated: May 2026 · No upload · 100% browser-based
          </div>
          <div style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:24}}>
            <div style={{fontWeight:800,color:'#818cf8',marginBottom:10,fontSize:13}}>⚡ KEY TAKEAWAYS</div>
            <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
              <li>Check image width, height and file size instantly — no upload needed</li>
              <li>Supports JPEG, PNG, WebP, GIF, AVIF formats</li>
              <li>All processing runs in your browser — 100% private</li>
              <li>Check up to 20 images at once with drag and drop</li>
            </ul>
          </div>
          <div
            onDrop={onDrop}
            onDragOver={(e)=>{e.preventDefault();setDragging(true)}}
            onDragLeave={()=>setDragging(false)}
            onClick={()=>document.getElementById('file-input').click()}
            style={{border:`2px dashed ${dragging?'#818cf8':'rgba(129,140,248,0.3)'}`,borderRadius:12,padding:'48px 24px',textAlign:'center',cursor:'pointer',background:dragging?'rgba(129,140,248,0.08)':'transparent',transition:'all 0.2s',marginBottom:24}}
          >
            <div style={{fontSize:40,marginBottom:12}}>🖼️</div>
            <div style={{fontSize:16,fontWeight:700,color:'#818cf8',marginBottom:8}}>Drop images here or click to upload</div>
            <div style={{fontSize:13,color:'rgba(255,255,255,0.4)'}}>JPEG, PNG, WebP, GIF, AVIF · Up to 20 files</div>
            <input id="file-input" type="file" multiple accept="image/*" style={{display:'none'}} onChange={e=>processFiles(e.target.files)} />
          </div>
          {results.length > 0 && (
            <div style={{overflowX:'auto'}}>
              <table style={{width:'100%',borderCollapse:'collapse',fontSize:14}}>
                <thead>
                  <tr style={{background:'rgba(129,140,248,0.15)'}}>
                    <th style={{padding:'10px 14px',textAlign:'left',color:'#818cf8',fontWeight:700}}>File</th>
                    <th style={{padding:'10px 14px',textAlign:'center',color:'#818cf8',fontWeight:700}}>Width</th>
                    <th style={{padding:'10px 14px',textAlign:'center',color:'#818cf8',fontWeight:700}}>Height</th>
                    <th style={{padding:'10px 14px',textAlign:'center',color:'#818cf8',fontWeight:700}}>Size (KB)</th>
                    <th style={{padding:'10px 14px',textAlign:'center',color:'#818cf8',fontWeight:700}}>Format</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r,i)=>(
                    <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.07)'}}>
                      <td style={{padding:'10px 14px',color:'rgba(255,255,255,0.85)',maxWidth:200,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{r.name}</td>
                      <td style={{padding:'10px 14px',textAlign:'center',color:'#c8d0e7'}}>{r.w}px</td>
                      <td style={{padding:'10px 14px',textAlign:'center',color:'#c8d0e7'}}>{r.h}px</td>
                      <td style={{padding:'10px 14px',textAlign:'center',color:r.size>200?'#f87171':'#4ade80'}}>{r.size} KB</td>
                      <td style={{padding:'10px 14px',textAlign:'center',color:'rgba(255,255,255,0.5)',fontSize:12}}>{r.type.split('/')[1].toUpperCase()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div style={{marginTop:40,padding:'24px',background:'rgba(255,255,255,0.03)',borderRadius:8,border:'1px solid rgba(255,255,255,0.07)'}}>
            <h2 style={{fontSize:20,fontWeight:800,color:'#818cf8',marginBottom:16}}>What Image Dimensions Should I Use?</h2>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:13}}>
              <thead>
                <tr style={{background:'rgba(129,140,248,0.1)'}}>
                  <th style={{padding:'8px 12px',textAlign:'left',color:'#818cf8'}}>Use Case</th>
                  <th style={{padding:'8px 12px',textAlign:'center',color:'#818cf8'}}>Width</th>
                  <th style={{padding:'8px 12px',textAlign:'center',color:'#818cf8'}}>Max Size</th>
                </tr>
              </thead>
              <tbody>
                {[['Website hero','1200-1920px','200KB'],['Blog thumbnail','800px','100KB'],['Profile photo','400x400px','50KB'],['Visa/passport photo','600x600px','240KB'],['WhatsApp profile','640x640px','5MB'],['LinkedIn banner','1584x396px','8MB']].map(([u,w,s],i)=>(
                  <tr key={i} style={{borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
                    <td style={{padding:'8px 12px',color:'rgba(255,255,255,0.8)'}}>{u}</td>
                    <td style={{padding:'8px 12px',textAlign:'center',color:'#c8d0e7'}}>{w}</td>
                    <td style={{padding:'8px 12px',textAlign:'center',color:'#4ade80'}}>{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{marginTop:32}}>
            <h2 style={{fontSize:18,fontWeight:800,color:'#fff',marginBottom:16}}>Frequently Asked Questions</h2>
            {[['How do I check image dimensions online?','Drop your image into the checker above. It instantly shows width, height in pixels, file size in KB, and format. No account, no upload — runs in your browser.'],['What is the ideal image size for a website?','Keep JPEG hero images under 200KB at 1200-1920px wide. Thumbnails: under 100KB at 400-800px. Use WebP for 25-35% better compression than JPEG.'],['How do I reduce image file size?','Use our free image compressor to reduce file size without losing quality. Set a target KB, and the tool compresses in your browser instantly.']].map(([q,a],i)=>(
              <div key={i} style={{marginBottom:16,padding:'16px',background:'rgba(255,255,255,0.03)',borderRadius:8,border:'1px solid rgba(255,255,255,0.07)'}}>
                <div style={{fontWeight:700,color:'#818cf8',marginBottom:8,fontSize:15}}>{q}</div>
                <div style={{fontSize:14,color:'rgba(255,255,255,0.7)',lineHeight:1.7}}>{a}</div>
              </div>
            ))}
          </div>
          <div style={{marginTop:32,padding:'20px',background:'rgba(129,140,248,0.06)',borderRadius:8,border:'1px solid rgba(129,140,248,0.2)'}}>
            <div style={{fontSize:13,fontWeight:700,color:'#818cf8',marginBottom:12}}>🔗 Related Tools</div>
            <div style={{display:'flex',flexDirection:'column',gap:8}}>
              <a href="/compress-to-200kb" style={{color:'#c8d0e7',fontSize:14,textDecoration:'none'}}>→ Compress Image to 200KB</a>
              <a href="/compress-to-100kb" style={{color:'#c8d0e7',fontSize:14,textDecoration:'none'}}>→ Compress Image to 100KB</a>
              <a href="/compress-for-linkedin" style={{color:'#c8d0e7',fontSize:14,textDecoration:'none'}}>→ Compress for LinkedIn</a>
            </div>
          </div>
          <AuthorBox />
        </div>
      </div>
    </>
  )
}
