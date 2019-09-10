# Starter Kit for Building Applications in React and Redux

## Get Started

1. **Install [Node 8](https://nodejs.org)** or newer. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)(https://github.com/coryhouse/pluralsight-redux-starter/archive/master.zip)
2. **Navigate to this project's root directory on the command line.**
3. **Install Node Packages.** - `npm install`
4. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.
5. Having issues? See below.

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll get an error when you try to start the app later.
2. Don't run the project from a symbolic link. It will cause issues with file watches.
3. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the course.
4. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
5. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
6. Nothing above work? Delete your node_modules folder and re-run npm install.

### Production Dependencies

| **Dependency**   | **Use**                                              |
| ---------------- | ---------------------------------------------------- |
| bootstrap        | CSS Framework                                        |
| immer            | Helper for working with immutable data               |
| prop-types       | Declare types for props passed into React components |
| react            | React library                                        |
| react-dom        | React library for DOM rendering                      |
| react-redux      | Connects React components to Redux                   |
| react-router-dom | React library for routing                            |
| react-toastify   | Display messages to the user                         |
| redux            | Library for unidirectional data flows                |
| redux-thunk      | Async redux library                                  |
| reselect         | Memoize selectors for performance                    |

### Development Dependencies

| **Dependency**                  | **Use**                                                          |
| ------------------------------- | ---------------------------------------------------------------- |
| @babel/core                     | Transpiles modern JavaScript so it runs cross-browser            |
| babel-eslint                    | Lint modern JavaScript via ESLint                                |
| babel-loader                    | Add Babel support to Webpack                                     |
| babel-preset-react-app          | Babel preset for working in React. Used by create-react-app too. |
| css-loader                      | Read CSS files via Webpack                                       |
| cssnano                         | Minify CSS                                                       |
| enzyme                          | Simplified JavaScript Testing utilities for React                |
| enzyme-adapter-react-16         | Configure Enzyme to work with React 16                           |
| eslint                          | Lints JavaScript                                                 |
| eslint-loader                   | Run ESLint via Webpack                                           |
| eslint-plugin-import            | Advanced linting of ES6 imports                                  |
| eslint-plugin-react             | Adds additional React-related rules to ESLint                    |
| fetch-mock                      | Mock fetch calls                                                 |
| html-webpack-plugin             | Generate HTML file via webpack                                   |
| http-server                     | Lightweight HTTP server to serve the production build locally    |
| jest                            | Automated testing framework                                      |
| json-server                     | Quickly create mock API that simulates create, update, delete    |
| mini-css-extract-plugin         | Extract imported CSS to a separate file via Webpack              |
| node-fetch                      | Make HTTP calls via fetch using Node - Used by fetch-mock        |
| npm-run-all                     | Display results of multiple commands on single command line      |
| postcss-loader                  | Post-process CSS via Webpack                                     |
| react-test-renderer             | Render React components for testing                              |
| react-testing-library           | Test React components                                            |
| redux-immutable-state-invariant | Warn when Redux state is mutated                                 |
| redux-mock-store                | Mock Redux store for testing                                     |
| rimraf                          | Delete files and folders                                         |
| style-loader                    | Insert imported CSS into app via Webpack                         |
| webpack                         | Bundler with plugin ecosystem and integrated dev server          |
| webpack-bundle-analyzer         | Generate report of what's in the app's production bundle         |
| webpack-cli                     | Run Webpack via the command line                                 |
| webpack-dev-server              | Serve app via Webpack                                            |


## Notes

### Redux
 - one store
 - reduced boiler plate code
 - Isomorphic / Universal friendly
 - Immutable store
 - Hot reloading
 - Time-travel debugging
 - small package

#### why redux is helpful?
 - complex data flow.
 - Inter-component communication
 - Non-hierarchical data.
 - Many actions
 - Same data used in many places

#### 3 core redux principles
 - One immutable store
    - dispatch(action)
    - subscribe(listener)
    - getState()
    - replaceReducer(nextReducer) 
 - Actions triggers changes
 - Reducers return update states

#### Flux VS Redux
 - Uni-directional data flow, actions and stores
 - Flux has multiple store which are flat and disconnected but redux has single store with hierarchical reducers

#### Immutability
 - Number, String, Boolean, Undefined and Null are Immutable
 - Objects, Arrays and Functions are Mutable
 - Immutable methods for copying objects {...myObj}, map, filter, reduce
 - Spread operator i.e. {...} is shallow copy and didn't clone the nested object e.g. 
    ```
     const person = {name : 'sourabh', address :{ street: 12, state: 'CA' }}
     const copyPerson =  { ...person }; It don't clone the nested address object! i.e. address is still same object
     const copyPersonDeep = { ...person, address: {...person.address}};
    ```
  - Deep cloning is expensive, Is expensive as all data is not changed, and react causes full render in deep cloning
  - Arrays push, pop and reverse makes the array mutable so clone before doing these operations
  - Arrays map, reduce, filter, concat and spread are safe and doesn't create a mutable instance
  - Immutability brings clarity to know which component updated states
  - Immutability brings performance update, as states updated and injected as props
  - Immutability warning by redux-immutable-state-invariant in devDependencies or libs like Immer, Immutable.js etc.

#### Reducer
  - Takes a state and action and returns and new state
  - Reducer should be pure function i.e. never mutate arguments, no api call or side effects and no non-pure method call(e.g. Date.now(), Math.random())
  - Reducers should handle its own slice of data.

### Connecting React to Redux

| **Container Component**    | **Presentational Component**      |
| ---------------------------| ----------------------------------|
| Focus on how thing works   | Focus on how thing looks          |
| Aware of Redux             | Unaware of Redux                  |
| Subscribe to redux state   | Read data from props              |
| Dispatch Redux action      | Invoke callback on props          |

 - React-redux is used to connect react with redux
  ```
    <Provider store={this.props.state}>
      <App />
    </Provider>
  ```
  - connect method connects React to Redux state
  - connect method Benefits compare to Flux
    - No manual unsubscribe
    - declare the subset of state needed
    - Enhanced performance
   ```
    const mapStateToProps = state => {
      return {
        user: state.user
      };
    }
    const mapDispatchToProps = {
      getUser: getUser
    }
    export default connect(mapStateToProps, mapDispatchToProps)(ComponentName)
   ```

   - Data flow in React Redux
  
     React :arrow_right: Action :arrow_right: Reducer :arrow_right: Store :arrow_right: React-Redux :arrow_down:

     :arrow_up: :arrow_left: :arrow_left: :arrow_left: :arrow_left: :arrow_left: :arrow_left: :arrow_left: :arrow_left: :arrow_left: :arrow_left: :arrow_left: :arrow_left: :arrow_left:
  

### Development Enviroment Setup

#### Webpack 
 - bundles all the files
 - configure output files
 - configure dev-server or web-server
 - configure entry and devTools
 - plugins to load icons, html and modules.
 - modules to load htmlloader, style-loader, babel etc
 - generating index.html
 - automatic loading changes on save or hot reloading

#### Babel
 - Transpile react jsx to js

#### ES Lint
 - eslintConfig to set-up es-lint in package.json
 - extends helps in validate our code
 - validates the code as per browser and have display warning and errors
 - can be set-up in the webpack


## Learn More