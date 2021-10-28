// Context is designed to share data that can be considered “global”
// for a tree of React components,
//  such as the current authenticated user, theme, or preferred language.

// Using the context in React requires 3 simple steps:
// creating the context, providing the context, and consuming the context.

// A. Creating the context
// The built-in factory function createContext(default) creates a context instance:

// const Context = createContext('Default Value');

// B. Providing the context
// Context.Provider component available on the context instance
// is used to provide the context to its child components, no matter how deep they are.

// To set the value of context use the value prop available on the
// <Context.Provider value={value} />:

// C. Consuming the context
// Consuming the context can be performed in 2 ways.

// 1. useContext Hook
// function MyComponent() {
//     const value = useContext(Context);
//     return <span>{value}</span>;
//   }

// The hook returns the value of the context: value = useContext(Context).
//  The hook also makes sure to re-render the component when the context value changes.

// 2.Using a render function supplied as a child to Context.
// Consumer special component available on the context instance:

// function MyComponent() {
//     return (
//       <Context.Consumer>
//         {value => <span>{value}</span>}
//       </Context.Consumer>
//     );
//   }
