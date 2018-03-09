// Beautiful code

// Define some components
let Home = "";
let AboutUs = "";
let Contact = "";

// DO STUFF
const fetchComponents = async () => {
  Home = {template: await (await fetch("views/index.html")).text()};
  AboutUs = {template: await (await fetch("views/about.html")).text()};
  Contact = {template: await (await fetch("views/contact.html")).text()};
}

fetchComponents().then(() => {
  // Create some routes
  const routes = [
    {path: '/', component: Home},
    {path: '/about', component: AboutUs},
    {path: '/contact', component: Contact}
  ]

  // create a router
  const router = new VueRouter({routes: routes})

  // Make vue use the route and start the app
  const app = new Vue({router}).$mount('#app');
});
