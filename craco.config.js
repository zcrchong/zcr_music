const path = require('path')
const resolve = (dir) => {
  return path.resolve(__dirname, dir)
}

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
