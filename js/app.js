// Define some components
const AboutUs = { template: "<h1>A short story...</h1>" }

// Create some routes
const routes = [
  { path: '/about', component: AboutUs }
]

// create a router
const router = new VueRouter({
  routes: routes
})

// Make vue use the route and start the app
const app = new Vue({router}).$mount('#app')
