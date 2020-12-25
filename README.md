

# Star Wars Database

<h1 align="center">
	<a href="https://starwars-database.vercel.app/" target="_blank">
		<img src="https://github.com/swilcox21/starwars-database/blob/master/src/img/star-wars-blog.gif?raw=true" width="500"> 
	</a>
</h1>

<h4 align="center">A Starwars Blog</h4>

&nbsp; &nbsp; &nbsp; A Star Wars database containing in depth details on the various characters and planets from the popular Star Wars Franchise. A fully interactive front end web application, pulling information using API integration to display various information on multiple Star Wars characters and planets from a popular starwars API.

##### Languages:
&nbsp; &nbsp; &nbsp; React.js, javascript, RestAPIs, HTML, css, bootstrap, Github, Flux, API integration

<h3>
	Check it out!
	<a href="https://starwars-database.vercel.app/" target="_blank">
	<br>
	&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img src="https://github.com/swilcox21/GIFs/blob/main/triple-down-arrows.gif?raw=true" height="50">
	<br>
	https://clean-earth-society.vercel.app/
	</a>
</h3>

# Demo
### Favorite
<h1>
	<a href="https://starwars-database.vercel.app/" target="_blank">
		<img src="https://github.com/swilcox21/starwars-database/blob/master/src/img/star-wars-blog-favorites.gif?raw=true" width="500"> 
	</a>
</h1>

### Learn More
##### (shows details about the chosen character or planet)
<h1>
	<img src="https://github.com/swilcox21/starwars-database/blob/master/src/img/star-wars-blog-learnmore.gif?raw=true" width="500"> 
</h1>


# WebApp boilerplate with React JS
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/4GeeksAcademy/react-hello-webapp.git)

<p align="center">
<a href="https://www.loom.com/share/f37c6838b3f1496c95111e515e83dd9b"><img src="https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/img/how-to.png?raw=true" /></a>
</p>


### Requirements:
- Make sure you are using node version 10

1. Install the packages:
```
$ npm install
```
2. Create a .env file:
```
$ cp .env.example .env
```
3. Start coding! and the webpack dev server with live reload, for windows, mac, linux or Gitpod:

```bash
$ npm run start
```

### Styles
You can update the `styles/index.scss` or create new `.scss` files inside `styles/` and import them into your current scss or js files depending on your needs.

### Components
Add more files into your `./src/js/components` or styles folder as you need them and import them into your current files as needed.

**Note (New changes)**: Components have been converted into functions to support the use of hooks:
* Instead of a class component, we're using a `const` function.
* Class `constructor` and `state` have been replaced by `useState()` hooks.
* `componentDidMount()` was replaced by `useEffect({}, [])` - It runs at mount thanks to the second parameter (`[]`).
* `Actions` and `Store` still work the same way.

```jsx
// Previous "Class Oriented"
export class Demo extends React.Component {
	constructor(props) {
		super(props);

		this.state = getState('code here');
	}
}

// New "Functional Oriented"
export const Demo = () => (
	const [state, setState] = getState('code here'); //using the state (if needed)
  const { store, actions } = useContext(Context); // using the context (if needed)

);
```

💡Note: There is an example using the Context API inside `views/demo.js`;

### Views (Components)
Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context
This boilerplate comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)
BreathCode Lesson [view](https://content.breatheco.de/lesson/react-hooks-explained)

The `Provider` is already set. You can consume from any component using the useContext hook to get the `store` and `actions` from the Context. Check `/views/demo.js` to see a demo.

```jsx
import { Context } from "../store/appContext";
const MyComponentSuper = () => {
  //here you use useContext to get store and actions
  const { store, actions } = useContext(Context);
  return <div>{/* you can use your actions or store inside the html */}</div>
}
```

## Publish your website!

1. **ZEIT:** The FREE recomended hosting provider is [http://zeit.co/](http://zeit.co/), you can deploy in 1 minutes by typing the following command:
```sh
$ npm i now -g && now
```
✎ Note: If you get asked for credentials you have to type `$ now` after login in.

![Zeit example procedure to deploy](https://ucarecdn.com/4041f971-8dd9-4dc2-84fb-4645ab42c856/)

2. **Github Pages:** This boilerplate is 100% compatible with the free github pages hosting.
To publish your website you need to push your code to your github repository and run the following command after:
```sh
$ npm run deploy
```
Note: You will need to [configure github pages for the branch gh-pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages)
