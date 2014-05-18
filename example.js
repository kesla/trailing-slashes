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