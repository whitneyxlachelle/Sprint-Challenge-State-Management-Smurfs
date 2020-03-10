1. What problem does the context API help solve?

Context API keeps state clean. With context api we can pass and store data down a component tree without having to rewrite at every level.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads of info that send data from our app to our store. When a reducer recieves an action it will update the state.

Reducers specify how the app's state will change in response to the actions sent to store.

Store holds the whole state tree of our app. 

Store as the SSoT is a technique where any part of the master state changes will automatically update props of child components and those changes will flow down in one direction.  <-- I'm citing (http://www.hackingwithreact.com/)

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state is local. If we have data that will change fequently in our app we should probably use component state. For apps where data may persist for a period of time it would probably be best to use application state

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk is a function returned by another function. It allows us to write action creators that return a function instead of an action. Thunk can be used to delay the dispatch of an action or dispatch only if a certain condition is met.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

As of now my favorite state management is Context API. I have a better understanding of Context API flow because I can visually see what's going on. I'm still not comfortable with Redux.

