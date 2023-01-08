import { createContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch.jsx";

export const PokemonsContext = createContext();

export function PokemonsContextProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(20);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  async function fetchPokemons() {
    setLoading(true);
    try {
      let data;
      if (query !== "") {
        data = await useFetch(1, 20, "all");
      }
      if (query === "") {
        data = await useFetch(page, limit);
      }
      setPokemons(data.pokemons);
      setTotalPages(Math.ceil(data.count / limit));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <PokemonsContext.Provider
      value={[
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
      ]}
    >
      {children}
    </PokemonsContext.Provider>
  );
}
