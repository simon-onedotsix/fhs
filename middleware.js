import { NextRequest, NextResponse } from 'next/server'

export function middleware (NextRequest) {

	// Access geolocation data provided by Vercel
	const country = request.geo?.country ?? 'US'; // Fallback to 'US' if undefined
	const city = request.geo?.city;
	const region = request.geo?.region;
	
	// Example: Log the data (visible in Vercel Function logs)
	console.log(`Visitor from ${city}, ${country}`);

	// Example: Set a cookie for client-side access
	const response = NextResponse.next();
	response.cookies.set('x-user-country', country, {
		httpOnly: true,
		path: '/',
		maxAge: 60 * 60 * 24, // 1 day
	});

	return response;
}