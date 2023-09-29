// Import necessary modules from Vue.js and Vue Router
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import 'tailwindcss/tailwind.css';

// Create a new Vue application instance
const app = createApp(App);

// Create a router instance with browser history mode
const router = createRouter({
  history: createWebHistory(), // Use browser history mode for routing
  routes: [
    {
      path: '/', // Define a route for the root URL ('/')
      component: () => import('./views/HomePage.vue'), // Lazy-load the Home Page component
    },
    // You can add more routes here as needed for your application
  ],
});

// Use the router instance in the Vue application
app.use(router);

// Mount the Vue application to the DOM element with the ID 'app'
app.mount('#app');
