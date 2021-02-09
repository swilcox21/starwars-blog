const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			characters: [],
			planets: [],
			img: {
				"0": "https://i.pinimg.com/originals/9c/5d/08/9c5d08a88b7986777a9d883493254d5b.gif",
				"1": "https://31.media.tumblr.com/a68749b75641373554f13f28c14cda04/tumblr_mscspsoHyV1sezoa7o1_250.gif",
				"2": "https://media3.giphy.com/media/DgphnkWIDqCEo/giphy.gif",
				"3": "https://media2.giphy.com/media/xT9DPpf0zTqRASyzTi/200.gif",
				"4": "https://data.whicdn.com/images/255625205/original.gif",
				"5": "https://pbs.twimg.com/profile_images/378800000212665351/b0f0e4834e23b9d91467690fc548b990.jpeg",
				"6": "https://i.pinimg.com/originals/2b/79/e9/2b79e93257be79e0518c5c843d538f70.jpg",
				"7": "https://images-na.ssl-images-amazon.com/images/I/51LhTH-U%2BhL.jpg",
				"8": "https://i.pinimg.com/474x/32/7c/f3/327cf3ca0d577c28be87a30e6e362b53.jpg",
				"9": "http://pa1.narvii.com/6425/5b8237a93ffcbfa3d8498daac23c2d16e84e966a_00.gif"
			},
			imgP: {
				"0": "https://nerdist.com/wp-content/uploads/2019/02/Tatooine.jpg",
				"1": "https://images.propstore.com/157012.jpg",
				"2": "https://pbs.twimg.com/media/D8ygJJ0X4AA8n9d.jpg",
				"3": "https://angrystaffofficer.files.wordpress.com/2016/01/at-at_89d0105f.jpeg?w=768&h=433&crop=1",
				"4": "https://lumiere-a.akamaihd.net/v1/images/dagobah_1ab566e6.jpeg?region=38%2C0%2C598%2C299",
				"5":
					"https://store-images.s-microsoft.com/image/apps.38115.64993847348793706.285c595c-7f53-4e78-84c5-7665c418e816.be64e2dd-6cc1-4eef-8557-0d189eecaf16?mode=scale&q=90&h=1080&w=1920&format=jpg",
				"6": "https://www.endorexpress.net/wp-content/uploads/2017/11/Endor-Poster.jpg",
				"7": "https://i1.wp.com/overmental.com/wp-content/uploads/2015/07/Naboo-TPM.jpg?fit=1920%2C816&ssl=1",
				"8":
					"https://images.squarespace-cdn.com/content/v1/586166c56b8f5b1c08df822c/1525484526323-BGA5QQD1QWY0BJ0R1O70/ke17ZwdGBToddI8pDm48kDu-OvKe9-yMBj32JSWknrt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZNNUmsixw3l8iPy3vgDTPMwfMBbaTJA8uE3oWp8JUwqzkQXHaRS3Yhvu0vV6Jt1AA/Fantasy_Future_city_026812_.jpg",
				"9": "https://i.redd.it/1vz116xs11zz.jpg"
			}
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
