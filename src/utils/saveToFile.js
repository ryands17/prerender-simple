const fsPath = require('fs-path')
const path = require('path')

exports.saveToFile = ({
  html = '',
  pathName = '/',
  output = path.resolve(process.cwd(), 'build'),
}) => {
  const path =
    pathName === '/' ? `${output}/index.html` : `${output}${pathName}.html`

  fsPath.writeFile(path, html, err => {
    if (err) {
      throw err
    }
  })
}
