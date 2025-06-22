# TanStack Query / React Query (server-state library)

## Overview

TanStack Query (formerly React Query) is a powerful library for managing server state in web applications. It simplifies fetching, caching, synchronizing, and updating server data across multiple UI frameworks including React, Vue, Solid, and Svelte.

> TanStack Query is often described as the missing data-fetching library for web applications, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your web applications a breeze.

## Features

- **Simplified Server State Management**: Specifically designed to handle server state, eliminating the need to manually implement caching, synchronization, or error handling
- **Smart Caching**: Automatically caches data and updates it only when necessary
- **Automatic Data Updates**: Includes built-in refetching and background synchronization to keep data fresh
- **Server-Side Rendering (SSR) Support**: Provides solutions for preloading data on the server for frameworks like Next.js
- **Intuitive API**: Offers a declarative API that makes code easier to write and maintain

## Comparison with Other Libraries

TanStack Query stands out from libraries like SWR or Axios due to its comprehensive feature set, including:
- Built-in cache management
- Optimistic updates
- Automatic data synchronization

### TanStack Query vs. State Managers

TanStack Query is a server-state library focused on managing asynchronous operations between server and client. While it can replace Redux, MobX, or Zustand for managing async data, it works best alongside traditional state managers for applications with significant client-only state.


# 🧠 Quick Revision on **TanStack Query**

---

## ✅ What is TanStack Query?

TanStack Query is a **data-fetching and state management library** for React (and other frameworks).  
It handles:

- Fetching  
- Caching  
- Syncing  
- Updating server state in your UI  

---

## 🚀 Why Use It?

- ✅ Built-in **caching** and **background refetching**  
- ✅ **Auto retries** and **pagination**  
- ✅ No boilerplate like Redux  
- ✅ Great with tools like **tRPC**, **REST APIs**, and **GraphQL**

---

## 🧠 Core Concepts

### 1. `useQuery`

Fetches data:

```ts
import { useQuery } from '@tanstack/react-query';

const { data, isLoading, error } = useQuery({
  queryKey: ['todos'],
  queryFn: () => fetch('/api/todos').then(res => res.json())
});
```

### 2. `useMutation`

For POST/PUT/DELETE operations:

```ts
const mutation = useMutation({
  mutationFn: (newTodo) =>
    fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
    }),
});
```

### 3. Query Keys

Used to uniquely identify cached data:

```ts
queryKey: ['todo', todoId]
```

### 4. Query Invalidation

Refresh specific data after a mutation:

```ts
const queryClient = useQueryClient();

mutation.mutate(data, {
  onSuccess: () => queryClient.invalidateQueries(['todos']),
});
```

### 5. QueryClientProvider

Wrap your React app:

```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>
```

---

## 💡 Key Features

- 🔁 Automatic **background refetching**  
- 💾 Smart **caching** and **garbage collection**  
- 🛠️ **Devtools** for inspection  
- 🔄 Built-in **pagination** and **infinite scrolling**  
- 🤝 Works with **tRPC**, **REST**, **GraphQL**, etc.

---

## 🧰 Devtools (Optional but Helpful)

```ts
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

<QueryClientProvider client={queryClient}>
  <App />
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>
```


## Best Practices

1. **Separation of Concerns**
   - Use TanStack Query for all API-related operations
   - Use Redux/Recoil for UI state and application logic

2. **Avoid Duplication**
   - Don't store the same data in both TanStack Query cache and Redux/Recoil
   - Only sync data when necessary for global access

3. **Performance**
   - Leverage TanStack Query's built-in caching and stale-while-revalidate pattern
   - Use proper selectors and memoization in Redux/Recoil

## Conclusion

TanStack Query simplifies server state management in modern web applications, offering smart caching, automatic refetching, and TypeScript support to enhance performance and developer experience.