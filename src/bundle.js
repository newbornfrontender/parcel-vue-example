import Vue from 'vue/dist/vue'
import './styles.css'

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <h1><span>Hello Parcel</span> 📦 🚀</h1>
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

console.log(`Parcel running in ${process.env.NODE_ENV} mode`)

module.hot && module.hot.accept()
