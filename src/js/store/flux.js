const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			fetchPeople: async () => {
				// Promesa con Async await, funcionan de la mano
				const URL = "https://swapi.dev/api/people/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const res = await fetch(URL, CONFIG); //Variable donde se almacena la promesa
				const json = await res.json(); // Transformar res a formato json

				console.log(">>DATA>>", json);
				setStore({ people: json.results }); //Función que me permite cambiar el store "Guardar en el store"
			},

			fetchPlanet: async () => {
				const URL = "https://swapi.dev/api/planets/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const res = await fetch(URL, CONFIG);
				const json = await res.json();

				console.log(">>DATA>>", json);
				setStore({ planets: json.results });
			},

			fetchVehicle: async () => {
				const URL = "https://swapi.dev/api/vehicles/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				console.log(">>DATA>>", json);
				setStore({ vehicles: json.results });
			},

			setFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			},

			deleteFavorite: indice => {
				let store = getStore().favorites;
				setStore({ favorites: [...store.slice(0, indice), ...store.slice(indice + 1)] });
			}
		}
	};
};

export default getState;
