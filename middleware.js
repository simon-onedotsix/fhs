import { NextRequest, NextResponse } from 'next/server'
import { geolocation } from '@vercel/functions'

export function middleware (NextRequest) {

	// Directly access the header instead of req.geo
  const country = request.headers.get('x-vercel-ip-country') ?? 'US';
  
  const response = NextResponse.next();
  response.cookies.set('user-country', country, {
    httpOnly: true,
    path: '/',
    maxAge: 86400,
  });
  
  return response;
}

export const config = {
	runtime: "edge",
	matcher: '/:path*',
};