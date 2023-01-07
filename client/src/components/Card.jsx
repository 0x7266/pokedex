import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.jsx";
import usePokemonsContext from "../hooks/usePokemonsContext";
import Tilt from "react-parallax-tilt";

export default function Card({ item, setType }) {
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

  async function handleStatusFilter(e, t) {
    e.preventDefault();
    await setType(t);
    const response = await useFetch(1, 151, t);
    setPokemons(response.pokemons);
  }

  return (
    <Tilt glareEnable={true} glarePosition={"all"} glareMaxOpacity={"0.1"}>
      <Link to={`pokemon/${item.id}`}>
        <div className="card rounded-lg h-fit w-72">
          <div className="card-content text-gray-100 h-[300] bg-yellow-300 bg-opacity-30 border-4 border-red-400 rounded-lg flex flex-col items-center shadow">
            <div className="name-id flex justify-between w-full p-2 bg-red-400 rounded-t-sm">
              <div className="name text-2xl font-extrabold">
                {item.name.toUpperCase()}
              </div>
              <div className="name self-center">#{item.id}</div>
            </div>
            <div className="img w-11/12 my-3 rounded-md flex justify-center items-end bg-cover min-h-fit h-48">
              <img
                src={
                  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${item.id}.gif` ||
                  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${item.id}.gif`
                }
                alt={item.name}
                width="0"
                height="0"
                className="w-20 pb-3"
              />
            </div>
            <div className="info grid grid-cols-3 cols items-center w-full">
              <div className="types flex px-3 gap-1 col-span-2">
                {item.types.map((types, index) => (
                  <div
                    key={index}
                    onClick={(e) => handleStatusFilter(e, types.type_name)}
                    className={`py-1 rounded-xl text-sm w-20 text-center cursor-pointer ${
                      types.type_name === "fire"
                        ? "bg-red-600"
                        : "" || types.type_name === "grass"
                        ? "bg-green-600"
                        : "" || types.type_name === "water"
                        ? "bg-blue-600"
                        : "" || types.type_name === "poison"
                        ? "bg-violet-600"
                        : "" || types.type_name === "bug"
                        ? "bg-white text-green-600"
                        : "" || types.type_name === "flying"
                        ? "bg-slate-400"
                        : "" || types.type_name === "normal"
                        ? "bg-gray-700"
                        : "" || types.type_name === "ground"
                        ? "bg-amber-900"
                        : "" || types.type_name === "electric"
                        ? "bg-orange-600"
                        : "" || types.type_name === "fighting"
                        ? "bg-orange-800"
                        : "" || types.type_name === "psychic"
                        ? "bg-violet-800"
                        : "" || types.type_name === "ghost"
                        ? "bg-white text-slate-600"
                        : "" || types.type_name === "fairy"
                        ? "bg-purple-300"
                        : "" || types.type_name === "rock"
                        ? "bg-stone-500 text-amber-900"
                        : "" || types.type_name === "ice"
                        ? "bg-slate-300 text-slate-800"
                        : "" || types.type_name === "dragon"
                        ? "bg-rose-600"
                        : "" || types.type_name === "dark"
                        ? "bg-slate-800 text-slate-200"
                        : "" || types.type_name === "steel"
                        ? "bg-neutral-400 text-slate-700"
                        : ""
                    }`}
                  >
                    {types.type.name.toUpperCase()}
                  </div>
                ))}
              </div>
              <div className="height-weight px-3 py-1 flex flex-col text-center w-24 justify-self-end gap-1">
                <span className="bg-yellow-500 rounded-xl p-1 text-sm">
                  H: {item.height}
                </span>
                <span className="bg-yellow-500 rounded-xl p-1 text-sm">
                  W: {item.weight}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Tilt>
  );
}
