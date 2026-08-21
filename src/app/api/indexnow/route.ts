import { NextResponse } from 'next/server';

export async function GET() {
  const KEY = 'e8b84b268d242c1b2c4c3b9b4c4c3b9';
  const HOST = 'www.compressto20kb.com';
  
  const urlList = [
    `https://${HOST}/`,
    `https://${HOST}/blog`,
    `https://${HOST}/privacy-policy`,
    `https://${HOST}/compress-for-visa-china`,
    `https://${HOST}/compress-for-visa-usa`
  ];

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `https://${HOST}/${KEY}.txt`,
        urlList: urlList
      } ),
    });
    return NextResponse.json({ success: response.ok, total: urlList.length });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
