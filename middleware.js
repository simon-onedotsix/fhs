import { NextRequest, NextResponse } from 'next/server'

export function middleware (request) {

	console.log('middleware running')

	if (request.nextUrl.pathname.startsWith('/egypt')) {
		return NextResponse.rewrite(new URL('/sa', request.url))
	}
}