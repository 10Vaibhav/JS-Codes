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

## Installation

```bash
npm install @tanstack/react-query
```

## Basic Usage

### Setting Up QueryClient

```jsx
// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

## DevTools

TanStack Query provides powerful debugging tools to monitor and troubleshoot your application.

### Installation

```bash
npm install @tanstack/react-query-devtools
```

### Integration

```jsx
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  return (
    <>
      {/* Your application components */}
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
```

### DevTools Features

- **Active Queries Panel**: View all active queries, states, and cached data
- **Refetch Button**: Manually trigger refetches for debugging
- **Detailed Query Information**: Inspect query keys, status, and timing
- **Mutation Tracking**: Monitor ongoing mutations

## Debugging Tips

- Use DevTools to identify network failures from server or client
- Check cached data to verify query updates
- Track mutations progress and status

# TanStack Query with Redux/Recoil Integration

A simple guide to effectively combine TanStack Query with Redux and/or Recoil in React applications.

## Overview

This integration leverages the strengths of both types of state management:
- **TanStack Query**: Handles server state (data fetching, caching, synchronization)
- **Redux/Recoil**: Manages client state (UI state, application logic)


## Basic Setup

```jsx
// src/index.js
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';
import store from './store';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Provider>
  </QueryClientProvider>,
  document.getElementById('root')
);
```

## Usage Examples

### With Redux

```jsx
function ProductList() {
  // Server state with TanStack Query
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  // Client state with Redux
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {products?.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
```

### With Recoil

```jsx
// atoms.js
import { atom } from 'recoil';

export const cartState = atom({
  key: 'cartState',
  default: []
});

// ProductList.jsx
function ProductList() {
  // Server state with TanStack Query
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  // Client state with Recoil
  const [cart, setCart] = useRecoilState(cartState);
  
  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {products?.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
```

## Advanced Integration

### Syncing Query Data to Redux/Recoil

```jsx
function UserProfileSync() {
  const { data: userData } = useQuery({
    queryKey: ['userData'],
    queryFn: fetchUserData
  });
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (userData) {
      dispatch({ type: 'SET_USER_DATA', payload: userData });
    }
  }, [userData, dispatch]);
  
  return null; // This component doesn't render anything
}

// Add this component where appropriate in your app
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