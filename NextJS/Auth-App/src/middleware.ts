import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest){
    const path = request.nextUrl.pathname;

    const isPublicPath = path === "/login" || path === "/signup" || path === "/verifyemail" || path === "/resetPass";
    const isProtectedPublicPath = path === "/login" || path === "/signup" || path === "/resetPass";

    const token = request.cookies.get("token")?.value || '';

    if(isProtectedPublicPath && token){
        return NextResponse.redirect(new URL("/profile", request.nextUrl));
    }

    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL("/login", request.nextUrl));
    }

    // Allow the request to continue
    return NextResponse.next();
}

// Matching Paths
export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup',
        '/verifyemail',
        '/resetPass',
    ]
}

