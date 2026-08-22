import os
# 1. Caching
with open('vercel.json', 'w') as f:
    f.write('{"headers":[{"source":"/(.*)","headers":[{"key":"X-Content-Type-Options","value":"nosniff"}]},{"source":"/_next/static/(.*)","headers":[{"key":"Cache-Control","value":"public, max-age=31536000, immutable"}]}]}')
# 2. Interlinking
path = 'src/components/Footer.tsx'
if os.path.exists(path):
    with open(path, 'r', encoding='utf-8') as f: c = f.read()
    if 'Tax Tools' not in c:
        interlink = '\n        <div style={{marginTop:20,fontSize:13}}>\n          <b style={{color:"#3b82f6"}}>★ PARTNERS:</b>\n          <a href="https://www.gigwisetax.com" style={{marginLeft:15,color:"#666"}}>GigWiseTax ➔</a>\n          <a href="https://www.privatepaycheck.com" style={{marginLeft:15,color:"#666"}}>PrivatePaycheck ➔</a>\n        </div>'
        c = c.replace('</footer>', interlink + '\n      </footer>' )
        with open(path, 'w', encoding='utf-8') as f: f.write(c)
