# FCL Harness App

A simple app to illustrate basic features of the Flow Client Library (FCL).
These include:

- User authentication and authorization
- Querying and mutating the Flow Blockchain
- User signing of messages (with onchain verification)

## Learn More

- [FCL Authentication](https://docs.onflow.org/fcl/reference/authentication/)
- [Flow App Quickstart](https://docs.onflow.org/fcl/tutorials/flow-app-quickstart)
- [Flow Client Library (FCL) API Quick Reference](https://docs.onflow.org/fcl/reference/api/)

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Run `yarn install` to install FCL and its dependencies

## Configuration

FCL has a mechanism that lets you configure various aspects of FCL.
`./config.js` contains basic configuration information for FCL, such as what Access Node and wallet discovery endpoint to use (e.g. testnet or a local emulator).Configuration is
imported in `./root.js` (it's recommended you do as early in the life cycle as possible), and made available via the `useConfig` hook.

### Required config values

- accessNode.api -- Api URL for the Flow Blockchain Access Node you want to be communicating with.
- discovery.wallet -- Points FCL at the Wallet or Wallet Discovery mechanism.

📣 Tip: It's recommend to replace these values with environment variables for easy deployments across different environments like development/production or Testnet/Mainnet.

Learn more about configuration values [here](https://docs.onflow.org/fcl/reference/configure-fcl/)

## Hooks

- useConfig
- useCurrentUser

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).