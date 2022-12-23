import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch.jsx";
import usePokemonsContext from "../hooks/usePokemonsContext.jsx";
import Card from "./Card.jsx";
import SearchBar from "./Searchbar.jsx";

export default function Pokedex({ setType }) {
  const [
    pokemons,
    setPokemons,
    page,
    setPage,
    totalPages,
    limit,
    setLimit,
    query,
    setQuery,
    loading,
    setLoading,
  ] = usePokemonsContext();

  async function searchPokemons() {
    try {
      setLoading(true);
      if (query) {
        const response = await useFetch(1, 151, "all");
        setPokemons(response.pokemons);
        return;
      }
      const response = await useFetch(1, 20, "all");
      setPokemons(response.pokemons);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    searchPokemons();
  }, [query, limit]);
  return (
    <>
      {loading ? (
        <img
          src="https://i.gifer.com/VgI.gif"
          alt="loading"
          width="0"
          height="0"
          className="w-40"
        />
      ) : (
        <div className="pokedex grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 font-bold gap-4">
          {pokemons
            .filter((i) => {
              return query === "" ? i : i.name.includes(query);
            })
            .map((item, index) => (
              <Card setType={setType} item={item} key={index} />
            ))}
        </div>
      )}
    </>
  );
}
