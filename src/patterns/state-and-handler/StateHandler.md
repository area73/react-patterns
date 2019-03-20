# State and Handler component

`<StageHandler/>` is a HOC that will pass to his child
`<Hamburger>` 2 properties:
  * state (name of the current state view)
  * onClick (action to perform wen user clicks)

`<Hamburger>` will be encapsulated and it is a presentational component
that accepts properties from his parent (state and onClick), but doesn't do anything
with them but exposing to the user
