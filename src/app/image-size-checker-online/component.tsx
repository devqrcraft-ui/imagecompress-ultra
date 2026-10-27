'use client'
import React from 'react'
import { useState, useCallback } from 'react'
import AuthorBox from '@/app/components/AuthorBox'

export default function ImageSizeCheckerTool() {
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


  return (
    <>
      <div style={{minHeight:'100vh',background:'linear-gradient(135deg,#0f172a,#1e1b4b)',color:'#c8d0e7',fontFamily:'system-ui,sans-serif',padding:'40px 20px'}}>
        <div style={{maxWidth:780,margin:'0 auto'}}>
          <nav style={{fontSize:13,color:'rgba(255,255,255,0.68)',marginBottom:24}}>
            <a href="/" style={{color:'rgba(255,255,255,0.68)',textDecoration:'none'}}>Home</a> › Image Size Checker
          </nav>
          <h1 style={{fontSize:'clamp(24px,4vw,36px)',fontWeight:900,color:'#fff',marginBottom:8}}>
            Image Size Checker Online — Free
          </h1>
          <div style={{fontSize:12,color:'rgba(255,255,255,0.68)',marginBottom:16}}>
            Last updated: October 2026 · No upload · 100% browser-based
          </div>
          <div style={{background:'rgba(129,140,248,0.08)',border:'1px solid rgba(129,140,248,0.25)',borderRadius:8,padding:'16px 20px',marginBottom:24}}>
            <div style={{fontWeight:800,color:'#818cf8',marginBottom:10,fontSize:13}}>⚡ KEY TAKEAWAYS</div>
            <ul style={{margin:0,padding:'0 0 0 18px',fontSize:14,lineHeight:1.9,color:'rgba(255,255,255,0.85)'}}>
              <li>Check image width, height and file size instantly — no upload needed</li>
              <li>Supports JPEG, PNG, WebP, GIF, AVIF formats</li>
              <li>All processing runs in your browser — private</li>
              <li>Check many images in one go with drag and drop</li>
            </ul>
          </div>
          <div
            onDrop={onDrop}
            onDragOver={(e)=>{e.preventDefault();setDragging(true)}}
            onDragLeave={()=>setDragging(false)}
            onClick={()=>(document.getElementById('file-input') as HTMLInputElement)?.click()}
            style={{border:`2px dashed ${dragging?'#818cf8':'rgba(129,140,248,0.3)'}`,borderRadius:12,padding:'48px 24px',textAlign:'center',cursor:'pointer',background:dragging?'rgba(129,140,248,0.08)':'transparent',transition:'all 0.2s',marginBottom:24}}
          >
            <div style={{fontSize:40,marginBottom:12}}>🖼️</div>
            <div style={{fontSize:16,fontWeight:700,color:'#818cf8',marginBottom:8}}>Drop images here or click to upload</div>
            <div style={{fontSize:13,color:'rgba(255,255,255,0.68)'}}>JPEG, PNG, WebP, GIF, AVIF · as many files as you like</div>
            <input id="file-input" type="file" multiple accept="image/*" style={{display:'none'}} onChange={e=>e.target.files && processFiles(e.target.files)} />
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
                      <td style={{padding:'10px 14px',textAlign:'center',color:parseFloat(r.size)>200?'#f87171':'#4ade80'}}>{r.size} KB</td>
                      <td style={{padding:'10px 14px',textAlign:'center',color:'rgba(255,255,255,0.68)',fontSize:12}}>{r.type.split('/')[1].toUpperCase()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
