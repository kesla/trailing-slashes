var url = require('url')

module.exports = function (req, res) {
  var location = url.parse(req.url)

  if (location.pathname !== '/' && location.pathname[location.pathname.length - 1] === '/') {
    location.pathname = location.pathname.slice(0, -1)
    res.setHeader('location', url.format(location))
    res.statusCode = 301
    return true
  }

  return false
}