import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch.jsx";
import usePokemonsContext from "../hooks/usePokemonsContext";

export default function Pagination() {
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

  function onLeftClick() {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  }
  function onRightClick() {
    if (page >= totalPages) {
      return;
    }
    setPage(page + 1);
  }
  async function getPokemons(signal) {
    // setLoading(true);
    try {
      const response = await useFetch(page, limit, "all", signal);
      setPokemons(response.pokemons);
    } catch (error) {
      console.error(error);
    } finally {
      // setLoading(false);
    }
  }
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    getPokemons(signal);

    return () => {
      controller.abort();
    };
  }, [page]);
  return (
    <div className="w-full flex justify-center">
      {pokemons && !query ? (
        <div className="flex gap-3 text-slate-200 border-neutral-100 p-1 rounded text-xl w-60 justify-center items-center">
          <button
            onClick={onLeftClick}
            className="items-center rounded-md border border-gray-300 px-3 py-1 text-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            ◀
          </button>
          <div className="flex-1 text-center">
            {page} of {totalPages}
          </div>
          <button
            onClick={onRightClick}
            className="items-center rounded-md border border-gray-300 px-3 py-1 text-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            ▶
          </button>
        </div>
      ) : null}
    </div>
  );
}
