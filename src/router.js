import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Blog from './components/Blog.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }, {
      path: '/blog',
      name: 'blog',
      component: Blog
    }
  ]
})
