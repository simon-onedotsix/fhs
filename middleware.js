import { NextRequest, NextResponse } from 'next/server'
import { geolocation } from '@vercel/functions'

export function middleware (NextRequest) {

	// Use the helper instead of req.geo
	const { country } = geolocation(request)
	
	console.log('@vercel:', country)

	const response = NextResponse.next()
	response.cookies.set('user-country', country || 'US')
	
	return response
}