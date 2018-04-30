'use strict'

const cssnano = require('cssnano')

const preset = (
  (process.env.NODE_ENV === 'production')
    ? require('cssnano-preset-advanced')
    : null
)

module.exports = preset({
  plugins: [
    cssnano({
      preset: [(
        (process.env.NODE_ENV === 'production')
          ? 'advanced'
          : 'default'
      ), {
        autoprefixer: {
          plugins: [{
            cascade: (
              (process.env.NODE_ENV === 'production')
                ? false
                : true
            ),
            grid: (
              (process.env.NODE_ENV === 'production')
                ? true
                : false
            )
          }]
        }
      }]
    })
  ]
})
