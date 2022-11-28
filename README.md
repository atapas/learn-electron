# learn-electron
An electron project to build a dashboard application. Using this app you can search any public GitHub user account using the user name.

The focus of the app are followings:

- Bootstrap an electron app
- Adding required libraries
- Making the app running with `main.js`
- Understanding preloading
- Build the user interface
- Using API to fetch data
- Basic Styling
- [Integrate Bugfender API](https://bugfender.com/) with the app and start collecting the logs

## Setting it up locally
To set it up locally, first `clone` or `fork` this repository and then install the dependencies:

```shell
yarn # Or, npm install
```

After the sucessfull installation of the dependencies, try this command to run the app.

```shell
yarn start # Or, npm start
```

Now, you should see the application running locally.

> Note: If you are using [Bugfender](https://bugfender.com/) with this app, please make sure you get an API key and replace the `<YOUR_API_KEY>` with the actual key in the `render.js` file.
