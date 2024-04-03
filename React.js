// How do you create a new React component?

// To create a new React component, 
// you define it either as a class component by extending React.Component 
// or as a functional component using a function that returns JSX. 
// Then, export the component for use in other parts of the application.


// What is JSX and how does it differ from HTML?

// JSX stands for JavaScript XML. 
// It's a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. 
// JSX makes it easier to write and understand the structure of React components. 
// It differs from HTML in that it allows embedding JavaScript expressions 
// within curly braces {} directly within the markup, 
// enabling dynamic content rendering and logic within components.

// How do you render a React component?

// To render a React component, 
// you use the ReactDOM.render() method, 
// passing the component you want to render as the first argument and the DOM element 
// where you want to render it as the second argument. For example:

import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent'; // assuming MyComponent is your component

ReactDOM.render(<MyComponent />, document.getElementById('root'));

// What is the purpose of state in React?

// The purpose of state in React is to manage and store data that can change over time within a component.
//  State allows components to maintain their own internal state and update their UI in response to changes in the data. 
// It enables dynamic and interactive user interfaces by allowing components to re-render with updated data.

// How do you update state in React?

// In React, you update state using the setState() method provided by React's Component class. 
// You call setState() with an object containing the updated state properties, 
// and React will merge the new state with the existing state and re-render the component. 
// Alternatively, you can also use the functional form of setState() when the new state depends on the previous state.


// What is props in React and how do you use them?

// In React, props (short for properties) are a mechanism for passing data from parent to child components. 
// Props are read-only and provide a way to configure and customize child components. 
// You use props by passing them as attributes to a component when it's being used, 
// and then accessing them within the component using this.props in class components 
// or directly as an argument in functional components.


// What is the difference between state and props?

// The main difference between state and props in React is that 
// state is managed internally by a component and can be updated by the component itself using setState(), 
// while props are passed to a component from its parent and remain immutable within the component. 
// State is used for managing internal component data that can change over time,
//  while props are used for configuring and customizing a component based on data passed from its parent component.


// How do you handle user input in React?

// In React, you can handle user input by using event handlers such as onChange, 
// onClick, onSubmit, etc. You attach these event handlers to specific elements like input fields, 
// buttons, or forms. When the user interacts with these elements, 
// the corresponding event is triggered, and you can update the component's state or perform other actions based on the user input.


// What are controlled components in React?

// Controlled components in React are components where form data is controlled by React state. 
// This means that React handles the value of the form elements and updates it based on user input using state and event handlers.
//  Controlled components ensure that the React state always reflects the user input, 
//  making it the single source of truth for the component's data. 
// This allows for more predictable behavior and enables features like validation and dynamic updates.


// What are uncontrolled components in React?

// Uncontrolled components in React are components where form data is not controlled by React state. 
// Instead, the form elements maintain their own state internally. When using uncontrolled components, 
// the form data is typically accessed using references (ref) after the form is submitted or at specific points in time. 
// Uncontrolled components are useful when you want to integrate with non-React libraries 
// or when you want to work with form data imperatively rather than declaratively.











