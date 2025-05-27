[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/EPRBRWM3)
# React JS - Redux Exercise

**Goal:** Implement a simple global state management using Redux Toolkit and TypeScript.

## Instructions 📖

1. Create a new React app by running `npm create vite@latest redux-exercise`.
2. Run `npm install --save react-redux @reduxjs/toolkit` to install *Redux Toolkit*.
3. Create a slice called `UserSlice.ts` and a component called `User.tsx`.
4. Inside the slice file, create 3 states: `firstname`, `lastname`, and `age`. You can decide what the default values are.
5. Create a reducer method that increments the age by one called `incrementAge`.
6. Create two reducer methods to update the firstname and the lastname called `setFirstname` and `setLastname`.
7. Create a `store.ts` and setup your Redux store.
8. Wrap your app with the created Redux store provider.
9. On your `User.tsx` component, output the firstname, lastname, and age from the Redux store using `useSelector`.
10. Create an **Increment Age** button inside the same component. Clicking this button will send a dispatch to trigger the `incrementAge` reducer method.
11. Create two input fields, one for firstname and one for lastname. Add an `onChange` attribute for each that triggers a dispatch for `setFirstname` and `setLastname`.
12. Commit and push your changes.

Good luck! 🎉🎉🎉
