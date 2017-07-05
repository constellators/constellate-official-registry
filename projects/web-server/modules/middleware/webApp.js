const ConstellateUtils = require('constellate-utils')

const webAppManifest = ConstellateUtils.getWebProjectManifest('@registry/web-app')

const stylesheet = url => `<link rel="stylesheet" href="${url}" />`
const script = url => `<script type="text/javascript" src="${url}"></script>`
const html = () => `
    <!DOCTYPE html>
    <html>
      <head>
        ${webAppManifest && webAppManifest.httpPaths.css
          ? stylesheet(webAppManifest.httpPaths.css)
          : ''}
      </head>
      <body>
        <div id="web-app" />

        ${webAppManifest && webAppManifest.httpPaths.js ? script(webAppManifest.httpPaths.js) : ''}
      </body>
    </html>
  `

module.exports = function webAppMiddleware(req, resp) {
  resp.send(html())
}
