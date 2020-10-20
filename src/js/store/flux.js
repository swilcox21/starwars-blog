const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			loadPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(resp => {
						if (!resp.ok) {
							throw Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => setStore({ characters: data.results }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			loadPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(resp => {
						if (!resp.ok) {
							throw Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => setStore({ planets: data.results }))
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			addFavorites: name => {
				let tempStore = getStore();
				let newFavorite = { name: name };
				tempStore.favorites.push(newFavorite);
				setStore({ tempStore });
			},

			deleteFromFavorites: e => {
				let { favorites } = getStore();
				setStore({ favorites: favorites.filter(favorite => favorite.name != e.name) });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
