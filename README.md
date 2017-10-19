# React Router  3 Transition

Forked from React Router Transition
Painless transitions for React Router, powered by React Motion. [Example site](http://maisano.github.io/react-router-transition/).

- v3 first

### Example Usage
```jsx
import React from "react";
import RouteTransition from 'react-router-3-transition';

const opts = { stiffness: 150, damping: 15 };
const fade = { atEnter: { opacity: 0 }, atActive: { opacity: 1 }, atLeave: { opacity: 0 }};

const App => ({ children, location: { pathname }}) => (
  <div>
    <RouteTransition {...{ pathname, opts, ...fade }}>
      { children }
    </RouteTransition>
  </div>
);

export default App;
```

- no staggering or sequencing of animations
- no durations or timing functions

These are features, not bugs.
