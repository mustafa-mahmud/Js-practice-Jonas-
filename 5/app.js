/* function getReciepe() {
	setTimeout(() => {
		const recipeID = [523, 883, 432, 974];
		console.log(recipeID);

		setTimeout(
			(id) => {
				const recipe = {
					title: 'title-1',
					publisher: 'mithu'
				};
				console.log(`ID: ${id}, Title: ${recipe.title}, Publisher: ${recipe.publisher}`);

				setTimeout(publisher => {
					const recipe2 = {
						title: 'Pizza',
						publisher: 'Jonas'
					};
					console.log(recipe2);

				}, 1500, recipe.publisher);

			}, 1500, recipeID[2]);

	}, 1500);
}

getReciepe(); */

//Promise
/* 
const getIDs = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve([523, 883, 432, 974]);
	}, 1500);
});

const getRecipe = recID => {
	return new Promise((resolve, reject) => {
		setTimeout(ID => {
			const recipe = {
				title: 'title-1',
				publisher: 'mithu'
			};
			resolve(`ID: ${ID}, Title: ${recipe.title}, Publisher: ${recipe.publisher}`);
		}, 1500, recID);
	});
}

const getRelated = publisher => {
	return new Promise((resolve, reject) => {
		setTimeout((pub) => {
			const recipe2 = {
				title: 'Pizza',
				publisher: 'Jonas'
			};
			resolve(`${pub} ${recipe2.title}`);
		}, 1500, publisher);
	});
}
 */
/* getIDs
	.then(IDs => {
		console.log(IDs);
		return getRecipe(IDs[2]);
	})
	.then(recipe => {
		console.log(recipe);
		return getRelated('Jonas');
	})
	.then(recipe => {
		console.log(recipe);

	})
	.catch(error => {
		console.log(error);

	});

console.log(getIDs); */
/* 
async function getReciepeAW() {
	const IDs = await getIDs;
	console.log(IDs);
	const recipe = await getRecipe(IDs[2]);
	console.log(recipe);
	const related = await getRelated('Jonas');
	console.log(related);

	return recipe;
}

getReciepeAW().then(res => {
	console.log(`Result is ${res}`);

}); */
/* 
function getWeather(id) {
	fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`)
		.then(result => {
			return result.json();
		})
		.then(data => {
			const today = data.consolidated_weather[0];
			const city = data.title;
			console.log(`City: ${city}, Min-Temp: ${today.min_temp}, Max-Temp: ${today.max_temp}`);

		})
		.catch(error => {
			console.log(error);
		});

}

getWeather(2487956);
getWeather(44418);
 */

async function getWeather(id) {
	try {
		const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`);
		const data = await result.json();

		const today = data.consolidated_weather[1];
		const city = data.title;
		console.log(`City: ${city}, Min-Temp: ${today.min_temp}, Max-Temp: ${today.max_temp}`);

		return data;

	} catch (error) {
		console.log(error);

	}

}

getWeather(2487956);
let dataLondon;
getWeather(44418)
	.then(data => {
		dataLondon = data;
		console.log(dataLondon);
	});