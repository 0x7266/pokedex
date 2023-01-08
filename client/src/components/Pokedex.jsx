import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch.jsx";
import { motion } from "framer-motion";
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
      // setLoading(true);
      if (query) {
        const response = await useFetch(1, 251, "all");
        setPokemons(response.pokemons);
        return;
      }
      const response = await useFetch(1, 20, "all");
      setPokemons(response.pokemons);
    } catch (error) {
      console.error(error);
    } finally {
      // setLoading(false);
    }
  }

  useEffect(() => {
    searchPokemons();
    console.log("render");
  }, [query, limit]);

  // const variants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1 },
  // };

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
        <motion.div
          // variants={variants}
          key={page}
          initial="hidden"
          animate={pokemons.length > 0 && "visible"}
          // viewport={{ once: true }}
          transition={{ staggerChildren: 1 }}
          className="pokedex grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 font-bold gap-5 place-items-center w-full sm:w-fit"
        >
          {pokemons
            .filter((i) => {
              return query === "" ? i : i.name.includes(query);
            })
            .map((item, index) => (
              <Card setType={setType} item={item} key={index} index={index} />
            ))}
        </motion.div>
      )}
    </>
  );
}
