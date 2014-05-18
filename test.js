var http = require('http')

  , test = require('tape')

  , trailing = require('./trailing-slashes')
  , server = http.createServer(function (req, res) {
      var redirected = trailing(req, res)

      if (redirected) return res.end()

      res.end('beep boop')
    })

server.listen(0, function () {
  var port = server.address().port

  test('/ should not redirect', function (t) {
    http.get('http://localhost:' + port, function (res) {
      res.resume()
      t.equal(res.statusCode, 200)
      t.end()
    })
  })

  test('?foo=bar should not redirect', function (t) {
    http.get('http://localhost:' + port + '?foo=bar', function (res) {
      res.resume()
      t.equal(res.statusCode, 200)
      t.end()
    })
  })

  test('/hello/world/ should redirect', function (t) {
    http.get('http://localhost:' + port + '/hello/world/', function (res) {
      res.resume()
      t.equal(res.statusCode, 301)
      t.equal(res.headers.location, '/hello/world')
      t.end()
    })
  })

  test('/hello/world should not redirect', function (t) {
    http.get('http://localhost:' + port + '/hello/world', function (res) {
      res.resume()
      t.equal(res.statusCode, 200)
      t.end()
    })
  })

  server.unref()
})