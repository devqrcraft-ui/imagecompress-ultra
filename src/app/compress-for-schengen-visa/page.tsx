import React from "react";
import { Metadata } from "next";
import HomeClient from "../home-client";

export const metadata: Metadata = {
  title: "Compress Photo for Schengen Visa | Compress Photo to 20KB Online",
  description: "Fast online tool to compress and resize your Schengen visa photo to 20KB.",
  alternates: { canonical: "https://www.compressto20kb.com/compress-for-schengen-visa" }
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Compress Photo for Schengen Visa</h1>
      <p className="mb-8 text-center text-gray-600">
        Optimize and compress your photo for Schengen Visa requirements. 
        Guaranteed to stay under 20KB while maintaining high quality.
      </p>
      <HomeClient />
      <div className="mt-12 prose max-w-none">
        <h2>How to compress photo for Schengen Visa</h2>
        <ul>
          <li>Upload your photo to our secure compressor.</li>
          <li>Our AI automatically adjusts quality to hit the 20KB target.</li>
          <li>Download your optimized image ready for upload.</li>
        </ul>
      </div>
    </div>
  );
}