import { NextResponse } from 'next/server';

// IndexNow API route - call this after deployments to notify search engines
// POST /api/indexnow
export async function POST() {
  const key = 'ce10382d2da53b03780603e0323f585a';
  const host = 'www.virtualmediainnovations.com';
  const urls = [
    'https://www.virtualmediainnovations.com',
    'https://www.virtualmediainnovations.com/',
  ];

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host,
        key,
        keyLocation: `https://${host}/${key}.txt`,
        urlList: urls,
      }),
    });

    return NextResponse.json({
      success: true,
      status: response.status,
      statusText: response.statusText,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

// GET handler for easy browser testing
export async function GET() {
  return POST();
}
