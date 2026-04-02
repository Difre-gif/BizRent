import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('bizrent_token')?.value;
  const role = request.cookies.get('bizrent_role')?.value;

  const isAuthPage = request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/register');
  const isLandlordPath = ['/dashboard', '/properties', '/units', '/payments', '/tenancies', '/reports', '/settings', '/billing'].some(path => request.nextUrl.pathname.startsWith(path));
  const isTenantPath = ['/home', '/invoices', '/receipts', '/profile'].some(path => request.nextUrl.pathname.startsWith(path));

  // Not logged in but trying to access protected routes
  if (!token && (isLandlordPath || isTenantPath)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Logged in but visiting auth pages
  if (token && isAuthPage) {
    if (role === 'TENANT') {
      return NextResponse.redirect(new URL('/home', request.url));
    }
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Role based access control
  if (token && role === 'TENANT' && isLandlordPath) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  if (token && role !== 'TENANT' && isTenantPath) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
