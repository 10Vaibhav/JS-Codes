import { clerkClient, clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(['/','/api/webhook/register','/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware(async (auth, req) => {
  // Handle unauth users trying to access protected routes
  if (!isPublicRoute(req)) {
    await auth.protect();
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Check if user is authenticated
  if ((auth as any).userId) {
    try {
      const clerk = await clerkClient();
      const user = await clerk.users.getUser((auth as any).userId);
      const role = user.publicMetadata.role as string | undefined;

      // Admin role redirection logic
      if (role === "admin" && req.nextUrl.pathname === "/dashboard") {
        return NextResponse.redirect(new URL("/admin/dashboard", req.url));
      }

      // Prevent non-admin users from accessing admin routes
      if (role !== "admin" && req.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }

      // Redirect authenticated users trying to access public routes
      if (isPublicRoute(req)) {
        return NextResponse.redirect(
          new URL(
            role === "admin" ? "/admin/dashboard" : "/dashboard",
            req.url
          )
        );
      }

    } catch (error) {
      console.error("Error fetching user data from Clerk:", error);
      return NextResponse.redirect(new URL("/error", req.url));
    }
  }

  // For unauthenticated users on public routes, just continue
  return NextResponse.next();
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
