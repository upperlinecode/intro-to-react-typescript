# Intro to TypeScript

## Animal University Election Dashboard

## Objectives

- Add type annotations to variables.
- Add state to a component with the `useState` hook.
- Fetch data with the `useEffect` hook and the `fetch` API.
- Resolve promises using either `.then()` or `async / await`.
- Modify component state with custom functions.
- Render multiple components by mapping over a JavaScript array.
- Pass props that adhere to a TypeScript interface to a component.

## Why?

If you ask 10 React developers about the best way to build a React application, you'll likely get 11 different answers - There are so many libraries, packages, and build philosophies out there that it'd be a full-time job to master all of them.

The purpose of this lab therefore isn't to show you the BEST way to write a React app, but rather to give you a chance to see some of the specific practices that are most common starting points when writing an app that uses React Hooks and TypeScript.

## Directions

This lab has been tested in VSCode. You're welcome to run it elsewhere if you like, but the instructions are written with the assumption that you're operating on your code in the VSCode IDE. Since VSCode and TypeScript are both maintained by Microsoft, it is the recommended configuration.

Getting Started:

1. Clone this repository down to your local environment and navigate to the root directory.
2. Install all the required dependencies with `npm install`.
3. In this intro to React, we'll be using development settings to test our app, so you can use the command `npm run dev`. it includes a flag for hot reloading, so most changes you make should update automatically, but you'll need to restart the app if you alter any configuration files. As always, this lab can also be run with our standard lab command alias: `npm run play`.

Once that's done, you're ready to try to complete the exercises listed below.

This lab does not include tests - you'll need to run the app and confirm that each feature you add works as you add it. We'll layer in additional tests in future labs.

## Framing

> In this workshop, we're refactoring a React application to make significantly better use of TypeScript, and then layer in the `useState` and `useEffect` hooks.

Animal University is exactly what it sounds like, and it's time to elect a student body president. Will it be Olive the dog? Gizela the bird? or will it be the underdog Laughton the Lizard?

The web application we're building is designed for the individual poll workers working the student government election. Each time someone tells you who they voted for, you can click the button next to that candidate to register that vote.

The school administrators have also asked for a feature to freeze voting for an individual candidate - this is an ongoing weekly grade requirement. If a candidate falls below that requirement, they shouldn't be allowed to receive votes, but they don't lose their existing votes, and they can be unfrozen once they've brought their grades up.

For now we're just building the front end - we'll worry about layering in some authorization and connect it to a database later.

## Exercises

### 1. Add types to existing variables.

Add `string` and `number` type annotations to the two existing variables (`name` and `voteCount`) in `AnimalCard.tsx`. Be sure that there are no remaining `any` types when you've finished this step.

### 2. Add a `voteCount` state.

Add in an instance of `useState` called `voteCount` to govern the state of the `AnimalCard` component - this will replace the existing `voteCount` constant. Use the tooltips to determine whether TypeScript has inferred the types correctly - be sure to add an explicit type if not.

Then wire up the button with the `setVoteCount` function returned by `useState` so that a click of the button increments that animal's vote count.

### 3. Enable vote freezing.

Add in a second instance of useState called `isFrozen` and reconfigure the `AnimalCard` so that all the following are true:

- The `isFrozen` value can toggle between true and false when the corresponding button is pressed.
- There is some visual indication that a card is frozen - you can be a bit creative here.
- An animal's `voteCount` cannot be incremented when they are frozen.

### 4. Add the Animals.

Add a `useEffect()` to your `App.tsx`. You have three options for how authentic you want your practice with an API to be with this lab:

- Option 1 (Mild): Just import over
- Option 2 (Medium): Use the simulated API call `fetchAnimals()` from the utils folder and resolve the promise with the `.then()` or with an `async / await` function to access the array of animals - store those animals in a state variable.
- Option 3 (Authentic): Access the endpoint `https://api.jsonbin.io/v3/b/62fa38735c146d63ca6f76b7` to get the list of animals and resolve the promise with the `.then()` or with an `async / await` function to access the array of animals - store those animals in a state variable. You'll want to use lots of console.log statements to make sure you're understanding the shape of the data at each point along thw way.

### 5. Render a card per animal.

Map over the animals in the state variable to render out a card for each animal.

### 6. Add an interface for props.

Create an interface for the props to be sent to an individual `AnimalCard`. You'll have to make some decisions about how narrowly to type each property in the interface. You may want to take advantage of the already-defined `AnimalData` interface defined in `types.ts`.

### 7. Pass in the props.

Send props to each AnimalCard so that the animal's information is accessed correctly. The API response data for this lab should be relatively clean, but you may need to add in some helper functions to make sure that the props conform to the interface you created or used in step 6.

### 8. Add any finishing touches.

At this point, you'll notice several small adjustments you'll need to make. For example, what should happen if someone has two majors? What about if someone doesn't have any minors?

## Final Thoughts

There are lots of things about this app, even when you're finished building it, that may be making you itch a little bit. Here are some examples:

- Namespaced CSS requires pretty long selectors in order to control the cascade well. That means that a small refactoring of the component would require some somewhat irritating refactoring of the corresponding CSS. This lab didn't ask you to write any CSS, so you may not have even opened those files, but if you did and felt frustrated, don't worry! We'll address this and a few other CSS-related concerns when we move on to styled components.

- Writing large amounts of code without tests feels bad. We'll start examining how TypeScript will eventually help us write some really incredible "tests" later on when we get to Storybook.

- Seeing individual pet cards with different vote counts on each of them makes it feel really important that we have a more centralized state to do things like sorting the cards in order of the number of votes. We'll address that concern when we start to implement Redux.

For now, notice and even relish these inefficiencies/shortcomings - it will make learning the tools that address them feel a lot more powerful.
