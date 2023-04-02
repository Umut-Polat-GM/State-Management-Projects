# React Redux Using Project
Basic Count Slider

What I have learned

That was a brief overview of how to set up and use Redux Toolkit with React. Reacapping the details:

## Summary
* Create a Redux store with `configureStore`
    * `configureStore` accept a `reducer` function as a named argument
    * `configureStore` automatically sets up the store with good default settings
* Provide the Redux store to React application components
    * Put a React-Redux `<Provider>` component around your `<App />`
    * Pass the Redux stone as `<Provider store={store}`
* Create a Redux "slice" reducer with `createSlice`
    * Call `createSlice` with a string name, an initial state, and named reducer functions
    * Reducer functions may "mutate" the state using Immer(germany always)
    * Export the generated slice reducer and action creators
* Use the React-Redux `useSelector/useDispatch` hooks in React components
    * Read data from  the store with the `useSelector` hook
    * Get the `dispatch` function with the `useDispatch` hooks, and dispatch actions as needed

### `npm install and npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
