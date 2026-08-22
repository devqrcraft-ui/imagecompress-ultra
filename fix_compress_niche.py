import os
countries = ["China", "India", "Vietnam", "Thailand", "USA", "Canada", "Schengen", "Turkey", "Egypt", "Brazil", "Japan", "Korea"]
platforms = ["Shopify", "Etsy", "Amazon", "eBay", "Canva", "Discord", "WhatsApp", "Workday"]

def write_page(path, title, desc):
    os.makedirs(path, exist_ok=True)
    content = f'''import React from "react";
import {{ Metadata }} from "next";
import HomeClient from "../home-client";

export const metadata: Metadata = {{
  title: "{title} | Compress Photo to 20KB Online",
  description: "{desc}",
  alternates: {{ canonical: "https://www.compressto20kb.com/{path.split("/" )[-1]}" }}
}};

export default function Page() {{
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">{title}</h1>
      <p className="mb-8 text-center text-gray-600">
        Optimize and compress your photo for {title.split("for ")[-1]} requirements. 
        Guaranteed to stay under 20KB while maintaining high quality.
      </p>
      <HomeClient />
      <div className="mt-12 prose max-w-none">
        <h2>How to compress photo for {title.split("for ")[-1]}</h2>
        <ul>
          <li>Upload your photo to our secure compressor.</li>
          <li>Our AI automatically adjusts quality to hit the 20KB target.</li>
          <li>Download your optimized image ready for upload.</li>
        </ul>
      </div>
    </div>
  );
}}'''
    with open(f"{path}/page.tsx", 'w', encoding='utf-8') as f:
        f.write(content)

for c in countries:
    write_page(f"src/app/compress-for-{c.lower()}-visa", f"Compress Photo for {c} Visa", f"Fast online tool to compress and resize your {c} visa photo to 20KB.")
for p in platforms:
    write_page(f"src/app/compress-for-{p.lower()}", f"Compress Image for {p}", f"Optimize your images for {p} to improve loading speed and meet requirements.")

