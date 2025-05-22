# Next.js Routing Patterns

A quick reference guide to Next.js App Router file-based routing patterns.

## Quick Comparison

| Pattern | Example | Matches | Parameters |
|---------|---------|---------|------------|
| `()` | `(auth)` | Organization only | None |
| `[id]` | `[userId]` | `/123` | `{ userId: '123' }` |
| `[...slug]` | `[...path]` | `/a/b/c` | `{ path: ['a','b','c'] }` |
| `[[...slug]]` | `[[...path]]` | `/` or `/a/b` | `{}` or `{ path: ['a','b'] }` |

## Tips

- Route groups `()` don't appear in URLs
- Dynamic routes require exact segment matches
- Catch-all routes are greedy and match everything after
- Optional catch-all routes can handle both parent and nested routes
- Parameters are always strings in `params` object

