# NextAuth.js Authentication Guide

## What is NextAuth?
Complete authentication solution for Next.js that handles login, sessions, and security automatically.

## Why JWT + localStorage is BAD ❌
- **Security vulnerability**: Tokens can be stolen via XSS attacks
- **Loses SSR benefits**: Can't access localStorage on server-side
- **No automatic protection**: Manual security implementation required
- **Session management**: No built-in refresh or expiration handling

## NextAuth Providers
Multiple login options: Google, GitHub, Email/Password, Magic Links, or custom authentication.

## Catch-All Routes [...nextauth]
Single file handles all auth endpoints: sign-in, sign-out, callbacks, and session management.

## useSession() - Client-Side
React hook that provides current user status and data in components.

## getServerSession() - Server-Side  
Gets user session on server for protected pages and API routes.

## Key Benefits
✅ **Secure by default**  
✅ **SSR compatible**  
✅ **Multiple providers**  
✅ **Automatic CSRF protection**