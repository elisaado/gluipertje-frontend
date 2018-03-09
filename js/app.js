// Define some components
const Index = { template: "<h1>aAAAAaAAaAAa</h1>" }
const AboutUs = { template: "<h1>A short story...</h1>" }
const Contact = { template: "<h1>BBbbbBBbbBbbbBbb</h1>" }

// Create some routes
const routes = [
  { path: '/', component: Index },
  { path: '/about', component: AboutUs },
  { path: '/contact', component: Contact}
]

// create a router
const router = new VueRouter({
  routes: routes
})

// Make vue use the route and start the app
const app = new Vue({router}).$mount('#app')
