'use strict'

module.exports = {
  plugins: {
    'posthtml-doctype': {
      doctype: 'HTML 5'
    },
    // 'posthtml-include': {},
    'posthtml-bem': {
      elemPrefix: '__',
      modPrefix: '--',
      modDlmtr: '--'
    },
    'posthtml-attrs-sorter': {
      'order': [
        'class', 'id', 'name',
        'data-.+', 'ng-.+', 'src',
        'for', 'type', 'href',
        'values', 'title', 'alt',
        'role', 'aria-.+',
        '$unknown$'
      ]
    },
    'posthtml-beautify': {
      rules: {
        indent: 2
      },
      mini: {
        removeAttribute: (
          (process.env.NODE_ENV === 'production')
            ? true
            : false
        )
      }
    }
  }
}
