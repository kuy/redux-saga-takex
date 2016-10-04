[![NPM Package][npm_img]][npm_site]
[![Dependency Status][david_img]][david_site]

# redux-saga-takex

A powerful [`take` effect](https://yelouafi.github.io/redux-saga/docs/api/index.html#takepattern) accepting RegExp instead of listing action types.


## tl; dr

### Before

```
const action = yield take(['SUCCESS_LOGIN', 'SUCCESS_LOGOUT', 'SUCCESS_GET_HOGE', 'SUCCESS_PUT_HOGE', ...]);
```

### After

```
const action = yield takex(/^SUCCESS_/);
```


## Usage

Install package from npm

```
npm install --save redux-saga-takex
```

Then import and use it in your saga.

```
import takex from 'redux-saga-takex';

// ...


function* mySaga() {
  const { payload } = yield takex(/^SUCCESS_/);

  // ...
}
```


## Example

Please check [example]() directory on [Github](https://github.com/kuy/redux-saga-takex).


## Development

### Setup & Build

```
npm install
npm run build
```

### Start example

```
npm start
```

And open `http://localhost:8080/`.


## Changelog

See the [Releases](https://github.com/kuy/redux-saga-takex/releases) page on GitHub.

## License

MIT

## Author

Yuki Kodama / [@kuy](https://twitter.com/kuy)

[npm_img]: https://img.shields.io/npm/v/redux-saga-takex.svg
[npm_site]: https://www.npmjs.org/package/redux-saga-takex
[david_img]: https://img.shields.io/david/kuy/redux-saga-takex.svg
[david_site]: https://david-dm.org/kuy/redux-saga-takex
