# Workout Calendar

This is a very simple drag'n'drop activity calendar example using
fullcalendar.js and some sprinkles of es6 with react.js.

It was devised to test out the feasibility of using jspm react and fullcalendar
for a more ambitious daytime project.

## Install instructions (dev mode):

- `npm install jspm -g`
- `npm install live-server -g`
- `npm install`
- `jspm install` **Note:** It may prompt you to verify your github credentials so jspm can
    install system.js directly from github by using `jspm registry config
    github'.
- `npm start`

## To Run build (minified and ready to go) version:

- open build.html in browser.

### Things to note

The files under `lib` are the ones that contain the logic to handle event creation on the calendar.

### Build yourself

After install instructions run `jspm bundle-sfx --minify src/main`. This will
setup build.js with the transpiled and minified js.
