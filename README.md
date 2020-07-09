Mock-up page of the resulting Google Search Page, which can be accessed at https://ivailotsvetkov.github.io/GoogleSearchMockReact/. Use Google Chrome.
### Type in "google search result page" and press Enter
# JS Questions
1. postMessage - The window.postMessage() method safely enables cross-origin communication between Window objects; e.g., between a page and a pop-up that it spawned, or between a page and an iframe embedded within it. I didn't use it because I didn't create an initial search page. If I did I would use it to communicate between the two pages.
2. Hooks - They let you use state and other React features without writing a class. Hooks are backwards-compatible. A Hook is a special function that lets you “hook into” React features. For example, useState is a Hook that lets you add React state to function components. When would I use a Hook? If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.
3. HOC - A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature. Concretely, a higher-order component is a function that takes a component and returns a new component. Whereas a component transforms props into UI, a higher-order component transforms a component into another component. HOCs are common in third-party React libraries, such as Redux’s connect and Relay’s createFragmentContainer.Mutating HOCs are a leaky abstraction—the consumer must know how they are implemented in order to avoid conflicts with other HOCs. Instead of mutation, HOCs should use composition, by wrapping the input component in a container component.
4. Immutable - Immutability is a concept out of Functional Programming, which encourages expected behaviour. We can’t modify existing variables, and this really helps to maintain state throughout the runtime of a program. Once we create a variable and set its value, we can have full confidence knowing that the value of that variable will never change.

4.1 Applications:
* It is used in mathematical computations.
* It is needed where concurrency or parallelism is required.

4.2 Advantages:

* Pure functions are easier to understand because they don’t change any states and depend only on the input given to them. Whatever output they produce is the return value they give. Their function signature gives all the information about them i.e. their return type and their arguments.
* The ability of functional programming languages to treat functions as values and pass them to functions as parameters make the code more readable and easily understandable.
* Testing and debugging is easier. Since pure functions take only arguments and produce output, they don’t produce any changes don’t take input or produce some hidden output. They use immutable values, so it becomes easier to check some problems in programs written uses pure functions.
* It is used to implement concurrency/parallelism because pure functions don’t change variables or any other data outside of it.
* It adopts lazy evaluation which avoids repeated evaluation because the value is evaluated and stored only when it is needed.
## Bonus
2. If you start from scratch, what tools/frameworks/library will you choose?
* React - Simplicity

ReactJS is just simpler to grasp right away. The component-based approach, well-defined lifecycle, and use of just plain JavaScript make React very simple to learn, build a professional web (and mobile applications), and support it. React uses a special syntax called JSX which allows you to mix HTML with JavaScript. This is not a requirement; Developer can still write in plain JavaScript but JSX is much easier to use.

Data Binding
 
React uses one-way data binding and an application architecture called Flux controls the flow of data to components through one control point – the dispatcher. It's easier to debug self-contained components of large ReactJS apps especially when used in a combination with Hooks.

Performance
 
React does not offer any concept of a built-in container for dependency. You can use Browserify, Require JS, EcmaScript 6 modules which we can use via Babel, ReactJS-di to inject dependencies automatically.

Testability
 
ReactJS applications are super easy to test. React views can be treated as functions of the state, so we can manipulate with the state we pass to the ReactJS view and take a look at the output and triggered actions, events, functions, etc.

* Material-UI - Creating a clean-looking UX which is both easy to use and looks good.
