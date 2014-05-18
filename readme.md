# trailing-slashes

Trailing slash redirect thingy

[![NPM](https://nodei.co/npm/trailing-slashes.png?downloads&stars)](https://nodei.co/npm/trailing-slashes/)

[![NPM](https://nodei.co/npm-dl/trailing-slashes.png)](https://nodei.co/npm/trailing-slashes/)

## Installation

```
npm install trailing-slashes
```

## Example

### Input

```javascript
var trailing = require('./trailing-slashes')
  , server = require('http').createServer(function (req, res) {
      var redirected = trailing(req, res)

      if (redirected) return res.end()

      res.end('beep boop')
    }).listen(8080)

require('http').get('http://localhost:8080/hello/world/?foo=bar', function (res) {
  console.log('redirecting to', res.headers.location)
  process.exit()
})
```

### Output

```
redirecting to /hello/world?foo=bar
```

## Licence

Copyright (c) 2014 David Björklund

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

