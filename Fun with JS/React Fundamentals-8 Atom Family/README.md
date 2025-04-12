# Recoil.js State Management Guide

## Overview

This guide explains when to use Recoil's different state management primitives: `atom`, `selector`, `atomFamily`, and `selectorFamily`.

## Basic Primitives

### atom

An `atom` represents a piece of state in your Recoil application. It's the source of truth for a particular piece of data.

### selector

A `selector` represents a derived state - a piece of state that depends on other atoms or selectors.

## When to use atom and selector

Use `atom` and `selector` when you need:

1. **Single instances of state** - For global state that exists once in your application
2. **Shared state** - When multiple components need to access and modify the same state
3. **Derived state** - When you need to compute values based on other atoms (using selectors)

```javascript
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

// Create an atom to store the count
const counterState = atom({
  key: 'counterState',
  default: 0
});

// Create a selector that derives from the count
const doubledCounterState = selector({
  key: 'doubledCounterState',
  get: ({get}) => {
    return get(counterState) * 2;
  }
});

// In a component
function Counter() {
  const [count, setCount] = useRecoilState(counterState);
  const doubledCount = useRecoilValue(doubledCounterState);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled: {doubledCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## Family Primitives

### atomFamily

An `atomFamily` is a function that returns an atom based on the parameter you provide. It creates unique atom instances for each parameter value.

### selectorFamily

A `selectorFamily` is a function that returns a selector based on the parameter you provide, enabling parameter-based derived state.

## When to use atomFamily and selectorFamily

Use `atomFamily` and `selectorFamily` when you need:

1. **Multiple instances of similar state** - Creating unique atom instances based on parameters
2. **Dynamic state creation** - When you don't know how many instances you'll need in advance
3. **Parameter-based state** - When state depends on a specific ID, index, or other parameter

```javascript
import { atomFamily, selectorFamily, useRecoilState, useRecoilValue } from 'recoil';

// Create an atomFamily for todo items
const todoItemState = atomFamily({
  key: 'todoItemState',
  default: (id) => ({
    id,
    text: '',
    completed: false
  })
});

// Create a selectorFamily for accessing just the text
const todoItemTextState = selectorFamily({
  key: 'todoItemTextState',
  get: (id) => ({get}) => {
    return get(todoItemState(id)).text;
  },
  set: (id) => ({get, set}, newText) => {
    const currentTodo = get(todoItemState(id));
    set(todoItemState(id), {...currentTodo, text: newText});
  }
});

// In a component
function TodoItem({ id }) {
  const [todo, setTodo] = useRecoilState(todoItemState(id));
  const [text, setText] = useRecoilState(todoItemTextState(id));

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => setTodo({...todo, completed: !todo.completed})} 
      />
    </div>
  );
}
```

## Comparison

| Feature | atom/selector | atomFamily/selectorFamily |
|---------|---------------|---------------------------|
| Purpose | Global, single-instance state | Parameter-based, multiple instances of state |
| Use case | App-wide settings, themes, user data | Lists, collections, items with IDs |
| Creation | At definition time | On-demand when parameter is provided |
| Memory | One instance per atom/selector | One instance per unique parameter |
| Parameters | Not parameterized | Generated based on provided parameter |

## Best Practices

1. **Use atoms for global state** that needs to be accessed by multiple components.
2. **Use selectors for derived state** to avoid redundant calculations.
3. **Use atomFamily when managing collections** of similar items (users, posts, todos).
4. **Use selectorFamily when you need derived state for each item** in a collection.
5. **Choose appropriate parameter types** - IDs, indices, or compound objects work well.

## Example Use Cases

- **User preferences**: Use regular `atom` for app-wide settings
- **Todo list items**: Use `atomFamily` with todo IDs as parameters
- **User data by ID**: Use `atomFamily` with user IDs as parameters
- **Filtered/sorted views of collections**: Use `selectorFamily` with filter criteria as parameters
