# React/Express Starter

I've wanted to quickly spin up quick PoC apps several times and wanted a starter that provided an Express API with a React frontend, all running in Docker. So... here it is!

## Project Setup

The project pretty much contains two smaller projects, one for the backend and one for the frontend, allowing codebases to stay separate and I don't have to figure out how to keep them separated.

Since the backend and frontend are running as separate containers, a small [Traefik](https://traefik.io/) proxy is configured to give the appearance they are available through a single endpoint. When the final Docker image is created, the codebases are merged into a single file, removing the need for Traefik.

### React App

The React frontend is a basic [`create-react-app`](https://www.npmjs.com/package/create-react-app) application in which I added the following:

- [`react-redux`](https://www.npmjs.com/package/react-redux) (and `redux`)
- [`redux-thunk`](https://www.npmjs.com/package/react-thunk)

The app has already been setup with the React Store provider and an empty collection of reducers and middleware. So, should be easy to just plug in new items and get to work!

Support for the [Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension) is already enabled too!



## Development

Everything runs in containers! To make it simpler, there's a separate container for the frontend and the backend. To launch them, simply run:

```
docker-compose up -d
```

Then open your browser to http://localhost/. That's it!


## Building

While in development, the projects are separate containers. But, at build time, they are combined into a single, final image.

```
docker build -t my-app .
```

By default, the image will use the `node:8.7-alpine` image for both the intermediate build stages and the final target stage. However, these can be adjusted by using the `node` and `target` build-args (allowing for other architecture builds)!
