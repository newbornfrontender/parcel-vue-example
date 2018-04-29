import Vue from 'vue/dist/vue'
import './styles.css'

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <h1>Hello Parcel 📦 🚀</h1>
    </div>
  `
})

new Vue({
  el: '#cite',
  template: `
    <div id="cite">
      <blockquote>
        “So many books, so little time.” ― Frank Zappa
      </blockquote>
    </div>
  `
})

module.hot && module.hot.accept()
