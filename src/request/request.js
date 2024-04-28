// const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
// const pokeUrl = `https://pokeapi.co/api/v2/pokemon/`

const URL = "https://us-east-2.aws.neurelo.com/rest/products"
const APIKEY = "neurelo_9wKFBp874Z5xFw6ZCfvhXfFXS+qEk0CNKigOZhTvsKrXiEJK9aDujgjK5TMVNC7B5beDFKhDF9bEKuCXeuAb/ulD3z4HN1DUVy0ygEdwfRsCe3g+pHL+XmJDQD8JOWa3jw0ALUJzEWYCoEJDzJj1LeNElodKD2lCqSgMx0Prbxw5mTcnDqMuxp02o6K2hJUY_lLfGmru/o7M5NSDdc/jQh0pijzEY3VG9J30d+wam0j8="


export  const getAllProducts = async () => {
    const url = URL;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': APIKEY,
        },
        // body: JSON.stringify({
        //     name: 'cake',
        //     tags: 'keto;dairy-free',
        //     includeIngredients: 'egg;butter',
        //     excludeIngredients: 'cinnamon',
        //     maxPrepareTime: 10,
        //     maxCookTime: 20,
        //     maxCalories: 500,
        //     maxNetCarbs: 5,
        //     maxSugar: 3,
        //     maxAddedSugar: 0,
        //     limit: 10
        // })
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.data
    } catch (error) {
        console.error(error);
    }
}
// const getApiData = async () => {
//     const arr = [];

//     const fetchData = async (i) => {
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
//         const result = await response.json();
//         arr.push(result);
//     };

//     // Create an array of promises for each fetchData call
//     const promises = [];
//     for (let i = 1; i <= 1000; i++) {
//         promises.push(fetchData(i));
//     }

//     // Wait for all promises to resolve using Promise.all
//     await Promise.all(promises);

//     return arr;
// };

export default getAllProducts;

