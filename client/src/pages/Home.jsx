import { useState } from "react";
import Pagination from "../components/Pagination";
import Pokedex from "../components/Pokedex";
import SearchBar from "../components/Searchbar";
import usePokemonsContext from "../hooks/usePokemonsContext";

export default function Home() {
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
  ] = usePokemonsContext();
  const [type, setType] = useState();

  return (
    <>
      {loading ? null : !pokemons ? null : (
        <div className="flex flex-col items-center gap-3 w-full overflow-hidden">
          <SearchBar setType={setType} />
          {!type ? <Pagination /> : null}
          <Pokedex setType={setType} />
          {!type ? <Pagination /> : null}
        </div>
      )}
    </>
  );
}
