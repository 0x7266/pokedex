export async function useFetch(page, limit, type, signal) {
  let response;
  if (signal) {
    response = await fetch(
      `https://api-pokedex.onrender.com/api/pokemon?page=${page}&limit=${limit}&type=${type}`,
      // `http://localhost:3333/api/pokemon/?page=${page}&limit=${limit}&type=${type}`,
      { signal, cache: "no-cache" }
    );
  }
  response = await fetch(
    `https://api-pokedex.onrender.com/api/pokemon?page=${page}&limit=${limit}&type=${type}`
    // `http://localhost:3333/api/pokemon/?page=${page}&limit=${limit}&type=${type}`
  );
  return await response.json();
}

// export async function getPokemons(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

export async function searchPokemon(id) {
  try {
    const response = await fetch(
      `https://api-pokedex.onrender.com/api/pokemon/${id}`
      // `http://localhost:3333/api/pokemon/${id}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
}
