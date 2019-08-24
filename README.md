Project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Notes

### React

- Fast and Responsive
- Simple model to compose components
- Use Virtual DOM to render

  - Updating DOM is expensive, hence react update the DOM when state changes.
  - Isomorphic i.e. enables client as well as server side rendering with React Native.

- Unidirection data flow
- It uses `HTML in JavaScript` whereas Angular uses `JavaScript in HTML`
- Embeded Javascript and style i.e. JSX

  - HTML with JavaScript
  - Strict compile time checking
  - Babel Transpile it to JavaScript
  - className instead of class
  - supports inline style with camel-case properties.

- 4 Ways to create React Component

  - Create Class
  - ES Class
  - Function
  - Arrow Function

- Benefits of Functional Components

  - Easy to Understand
  - Avoid `this` Keyword
  - Less transpiled keyword
  - Enhance code compilation & IntelliSense
  - Easy to Use and Better Performance

- React Fragments or `<></>`: This can be used to wrap a react component without rendering anything.

#### Prop and State

- Prop
  - Data passed from parent component
  - Looks like HTML attributes
  - immutable, to change need to use a callback method of parent
  - [React PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
- State
  - mutable i.e. data changes
  - use setState to set value in state

#### Lifecycle methods

- [React class lifecycle methods](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

### React [Hooks](https://reactjs.org/docs/hooks-intro.html)

- Use functional component for everything
- Support lifecycle methods expect ComponentDidCatch
- UseState for local State
- useReducer
- useEffect- side effect (can be used as componentDidMount, componentDidUpdate and componentDidUnmount)
  - use Second parameter to stop the control when to execute the effect
- useContext - access data in context
- Can't declare a hook in if statement or loop it should be declared at top level

### React Router

- Simple easy way to route in client side

### Flux

- Unidirection data flow

## Learn More

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

[React documentation](https://reactjs.org/).

[Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

[Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

[Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

[Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

[Deployment](https://facebook.github.io/create-react-app/docs/deployment)

[`npm run build` fails to minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
