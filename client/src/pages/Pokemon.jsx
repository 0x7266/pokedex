import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchPokemon } from '../hooks/useFetch.jsx';

export default function Pokemon() {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getPokemon() {
    // if (pokemons) {
    //   console.log(pokemons);
    //   const filtered = pokemons.filter((p) => p.id === params.id);
    //   console.log(filtered);
    //   setPokemon(filtered);
    // }
    try {
      setLoading(true);
      const data = await searchPokemon(params.id);
      setPokemon(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="container p-5 flex justify-center">
      {loading ? (
        <img
          src="https://i.gifer.com/VgI.gif"
          alt="loading"
          width="0"
          height="0"
          className="w-40"
        />
      ) : (
        <div className="flex flex-col items-center sm:flex-row gap-5">
          <div className="image">
            <img
              className="w-80 sm:w-96"
              src={pokemon.image}
            />
          </div>
          <div className="info text-gray-100 h-full flex flex-col justify-between">
            <div className="flex justify-between gap-5">
              <div className="text-5xl sm:text-4xl uppercase">
                {pokemon.name}
              </div>
              <div className="text-5xl sm:text-4xl uppercase">
                #{pokemon.id}
              </div>
            </div>
            <div className="flex flex-col justify-between gap-5">
              <div className="text-5xl sm:text-4xl uppercase">
                {pokemon.types.map((item, index) => (
                  <div key={index}>{item.type_name}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
