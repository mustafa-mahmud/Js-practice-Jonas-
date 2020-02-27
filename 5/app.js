function getReciepe() {
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

getReciepe();