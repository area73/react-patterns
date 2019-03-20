# REACT KITCHENSINK 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
and `yarn eject`  This command will remove the single build dependency from your project.

It copies all the configuration files and the transitive dependencies (Webpack, Babel, ESLint,
 etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

<hr>

## Available Scripts

In the project directory, you can run:

### `yarn storybook`

Builds the  storybook and lauch  the server on port 6006.<br>
Open [http://localhost:6006](http://localhost:6006) to view it on the browser

### `yarn json-server`

This will run a json REST server with fake data simulating github API.<br>
Open [http://localhost:7007](http://localhost:7007)

**Note:** You need to have json-server installed globally (npm install -g json-server)

### `yarn start`

**Not in use please use storybook**

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive **watch mode**.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Other Scripts
    "validate": "npm-run-all --parallel eslint test-no-watch",
    "precommit": "npm run eslint",
    "prepush": "npm run validate",
    "test-no-watch": "node scripts/test.js --no-watch",
    "eslint": "eslint \"src/**/*.js\"",
    "format": "prettier-eslint \"src/**/*.js\" \"src/**/*.scss\" --write",
    "build-storybook": "build-storybook"

<hr>

## Goodies

Things that I have been included in this repo and that I think are important:

  * eslint (linting)
  * pretier (formating)
  * husky (prehooks)
  * storybook (demos & doc)
  * editorconfig (IDE)
  * scss / ITCSS / CSS modules (styling)  
