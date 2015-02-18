
# jsonp

A simple JSONP implementation.

## Installation

Install for node.js or browserify using `npm`:

``` bash
$ npm install jsonp
```

Install for component(1) using `component`:

``` bash
$ component install LearnBoost/jsonp
```

## API

### jsonp(url, opts, fn)

- `url` (`String`) url to fetch
- `opts` (`Object`), optional
  - `param` (`String`) name of the query string parameter to specify
    the callback (defaults to `callback`)
  - `timeout` (`Number`) how long after a timeout error is emitted. `0` to
    disable (defaults to `60000`)
  - `prefix` (`String`) prefix for the global callback functions that
    handle jsonp responses (defaults to `__jp`)
- `fn` callback

The callback is called with `err, data` parameters.

If it times out, the `err` will be an `Error` object whose `message` is
`Timeout`.

Returns a function that, when called, will cancel the in-progress jsonp request
(`fn` won't be called).

## License

MIT
