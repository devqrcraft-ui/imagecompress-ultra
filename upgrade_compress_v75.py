import os
path = 'src/components/Footer.tsx'
with open(path, 'r', encoding='utf-8') as f: content = f.read()

interlink = """<div>
          <h3 style={{color:'#fff',fontSize:'13px',fontWeight:700,marginBottom:'12px',textTransform:'uppercase'}}>Tax Tools ➔</h3>
          <a href="https://www.gigwisetax.com" style={{display:'block',color:'#818cf8',fontSize:'15px',marginBottom:'10px',fontWeight:700}}>GigWiseTax ➔</a>
          <a href="https://www.ukgigtax.com" style={{display:'block',color:'#818cf8',fontSize:'15px',marginBottom:'10px',fontWeight:700}}>UK Gig Tax ➔</a>
        </div>"""
if 'Tax Tools' not in content:
    content = content.replace('<div>\n          <h3 style={{color:\'#fff\',fontSize:\'13px\',fontWeight:700,marginBottom:\'12px\',textTransform:\'uppercase\'}}>Tools</h3>', interlink )

with open(path, 'w', encoding='utf-8') as f: f.write(content)
