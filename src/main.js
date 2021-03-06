import React from 'react';
import CalendarComponent from './calendar-component';

// to compile for prod, run:
// jspm bundle-sfx --minify src/main
//
// this will build a file called build.js, then our index, just change
// the scripts to load jpm_packages/traceour(or6to5)-runtime.js
// and build.js

React.render(<CalendarComponent />, document.getElementById('main'));
