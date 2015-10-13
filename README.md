# Workout Calendar

## Install instructions (dev mode):

- `npm install jspm -g`
- `npm install live-server -g`
- `npm install`
- `jspm install`
- `npm start`

## To Run build (minified and ready to go) version:

- open build.html in browser.

### Things to note

The files under `lib` are the ones that contain the logic to handle event creation on the calendar.

### Build yourself

After install instructions run `jspm bundle-sfx --minify src/main`. This will
setup build.js with the transpiled and minified js.
