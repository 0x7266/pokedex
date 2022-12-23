import usePokemonsContext from "../hooks/usePokemonsContext";

export default function SearchBar({ setType }) {
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

  async function onChangeHandler(e) {
    e.preventDefault();
    if (e.target.value.length === 0) {
      await setQuery(undefined);
      await setType("");
    }
    await setQuery(e.target.value);
  }

  return (
    <div>
      <form className="w-96 sm:w-full flex gap-3 items-center relative">
        <input
          value={query}
          onChange={onChangeHandler}
          type="text"
          placeholder="Search pokémon by name"
          className="border border-gray-400 hover:border-gray-500 sm:px-4 py-2 px-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline w-96 text-2xl"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="#aaa"
          className="bi bi-search absolute right-3"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        {/* <button className="bg-slate-600 rounded p-3 text-gray-100">
          Search
        </button> */}
      </form>
    </div>
  );
}
