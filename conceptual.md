### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

        The purpose of React Router is to enable client-side routing in React applications, allowing for the creation of single-page applications with multiple views and seamless navigation.


- What is a single page application?
 
        A single page application (SPA) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the application, providing a smoother and more responsive user experience.


- What are some differences between client side and server side routing?
        Client-side routing handles navigation and rendering of components directly in the browser, reducing server load and enabling faster page transitions, while server-side routing involves the server processing each request and returning a new HTML page, resulting in slower page loads and more server involvement.

- What are two ways of handling redirects with React Router? When would you use each?

        Two ways of handling redirects with React Router are: using the Redirect component to automatically navigate users to a specified route, and using programmatic navigation with the history object to redirect users under specific conditions, such as after a form submission.

- What are two different ways to handle page-not-found user experiences using React Router? 

    Two different ways to handle page-not-found user experiences using React Router are: rendering a custom 404 page when no matching route is found, or using the Switch component with a default route to catch all unmatched routes and display a designated not-found page.

- How do you grab URL parameters from within a component using React Router?

        To grab URL parameters from within a component using React Router, you can access them from the props.match.params object, which contains key-value pairs for each parameter specified in the route path.

- What is context in React? When would you use it?


        Context in React is a feature that allows data to be passed down the component tree without explicitly passing props through each level, making it useful for sharing global state or configuration settings among components.


- Describe some differences between class-based components and function
  components in React.
        
        Class-based components are defined using ES6 classes and can have state and lifecycle methods, while function components are defined as JavaScript functions and primarily used for rendering UI based on props, hooks, and functional programming patterns.

- What are some of the problems that hooks were designed to solve?

    Hooks were designed to solve problems related to stateful logic reuse, complex component hierarchies, and the use of lifecycle methods in functional components, making it easier to manage state and side effects in React applications