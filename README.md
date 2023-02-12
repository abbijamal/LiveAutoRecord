Multi-platform live streaming automatic recording tool

Old Version
3.x
Features
The main changes in this version compared to v3:

For consumers (including module-based developers)
Not only can it be used as a client, but it can also be deployed on the server side, or introduced as a node module.
Support for extending supported live streaming platforms as plugins.
Standardized the design under electron, and some logic was moved from the rendering process to the main process, which will solve some of the previous bugs.
Instead of using SQLite as the storage format for meta / comments, JSON is now used, and comments extracted from JSON are supported to convert to SRT subtitle files.
Support blur configuration of image quality and priority configuration of source/stream.
The FMP4 format is used for recording by default, which will reduce some problems caused by MP4 and FLV format recording.
UI redesign.
Development level
Refactor completely and use ts whenever possible
Monorepo based on Lerna + Yarn
Web based on TS + Vue3 + Vuetify + Tailwindcss
Road Map
Improve the UI of the barrage player
Improve error handling
Work with TODO items in some code
Provide documentation
Add tests
Simplify server-side deployment
i18n
Electron Dev / Build Setup
# install dependencies
yarn

# build client dep packages
cd packages/shared && yarn build
cd packages/manager && yarn build

# dev electron
yarn app:dev

# build electron application for production
yarn app:build
Server Dev / Deployment Setup
# install dependencies
yarn

# build client dep packages
cd packages/shared && yarn build
cd packages/manager && yarn build

# dev server
cd packages/http-server && yarn start:dev
cd packages/web && yarn dev

# deployment for production
cd packages/http-server && yarn build && yarn start # Or start using another method, such as nodemon
cd packages/web && yarn build # Start a web service using a tool such as nginx
