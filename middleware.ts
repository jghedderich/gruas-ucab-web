import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  adminLinks,
  orderLinks,
  providerLinks,
} from './components/navigation/links';
import { UserType } from './types';

const allLinks = [...orderLinks, ...providerLinks, ...adminLinks];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuth = request.cookies.get('auth')?.value;
  const userType = request.cookies.get('userType')?.value;

  const isAuthPage = pathname.startsWith('/login/');

  if (isAuthPage) {
    if (isAuth) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    return NextResponse.next();
  }

  if (!isAuth) {
    return NextResponse.redirect(new URL('/login/administrator', request.url));
  }

  const currentLink = allLinks.find((link) => pathname.startsWith(link.href));
  if (currentLink && !currentLink.roles.includes(userType as UserType)) {
    return NextResponse.redirect(new URL('/403', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
