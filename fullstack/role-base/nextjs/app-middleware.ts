import {NextRequest, NextResponse} from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

export default async function middleware(req: NextRequest) {
  const token = req.headers.get('Authorization');
  const userRole = token ? verifyTokenAndGetRole(token) : 'guest';
  if (
    req.nextUrl.pathname.startsWith('/dashboard/admin') &&
    userRole !== 'admin'
  ) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  if (
    req.nextUrl.pathname.startsWith('/dashboard/support') &&
    userRole !== 'support'
  ) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}

function verifyTokenAndGetRole(token: string): string {
  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), SECRET_KEY) as {
      role?: string;
    };
    if (decoded && decoded.role) {
      return decoded.role;
    }
  } catch (error) {
    console.error('Invalid token: ', error);
    return 'guest';
  }
}
