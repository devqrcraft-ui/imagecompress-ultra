import React from "react";
import { Metadata } from "next";
import HomeClient from "../home-client";

export const metadata: Metadata = {
  title: "Compress Image for Shopify | Compress Photo to 20KB Online",
  description: "Optimize your images for Shopify to improve loading speed and meet requirements.",
  alternates: { canonical: "https://www.compressto20kb.com/compress-for-shopify" }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Compress Image for Shopify</h1>
      <p className="mb-8 text-center text-gray-600">
        Optimize and compress your photo for Shopify requirements. 
        Guaranteed to stay under 20KB while maintaining high quality.
      </p>
      <HomeClient />
      <div className="mt-12 prose max-w-none">
        <h2>How to compress photo for Shopify</h2>
        <ul>
          <li>Upload your photo to our secure compressor.</li>
          <li>Our AI automatically adjusts quality to hit the 20KB target.</li>
          <li>Download your optimized image ready for upload.</li>
        </ul>
      </div>
    </div>
  );
}