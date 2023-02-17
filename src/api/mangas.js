export const fetchMangas = async () => {
  try {
    const response = await fetch("https://api.myanimelist.net/v2", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "jikan1.p.rapidapi.com",
        "x-rapidapi-key": "ee18625619msh0ba176413fde27dp1203aajsndbd7e291b535"
      }
    });

    if (!response.ok) {
      throw new Error('An error occurred while fetching manga.');
    }
    console.log(response.json())

    return await response.json();
  } catch (e) {
    console.error(e);
  }
}