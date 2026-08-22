import os
countries = ["China", "India", "Vietnam", "Thailand", "USA", "Canada", "Schengen", "Turkey", "Egypt", "Brazil", "Japan", "Korea"]
platforms = ["Shopify", "Etsy", "Amazon", "eBay", "Canva", "Discord", "WhatsApp", "Workday"]
for c in countries:
    path = f"src/app/compress-for-{c.lower()}-visa"
    os.makedirs(path, exist_ok=True)
    with open(f"{path}/page.tsx", 'w') as f:
        f.write(f'import React from "react";\nexport default function Page() {{ return <div>Compress photo for {c} Visa</div>; }}')

for p in platforms:
    path = f"src/app/compress-for-{p.lower()}"
    os.makedirs(path, exist_ok=True)
    with open(f"{path}/page.tsx", 'w') as f:
        f.write(f'import React from "react";\nexport default function Page() {{ return <div>Compress photo for {p}</div>; }}')
