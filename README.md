# react-redux-sbox 
This is a sandbox React client app with Redux.

```
npm install
```

#### For debugging:

```
npm install -g redux-devtools-extension
```

Also you can install "React Developer Tools" and "Redux DevTools" Chrome extensions for inspect and debug purposes.

#### To test your app locally, use:

```
npm run dev-start
```

#### Usage:

Modify src/config.js according to your needs.
The initial client app will try to reach http://localhost:3007/rest/monitoring/isAlive.
Use a rest-tool generated project to run mockserver with monitoring/isAlive feature to test the client app.

Redux store state:

```Javascript
{
    monitoring: {
        isAlive: true | false, // is the server responded with { response: true } or no response
        lastUpdated: 1489661341000, // date last updated
        updateStatus: true | false // is an update request pending or not
    }
}
```
