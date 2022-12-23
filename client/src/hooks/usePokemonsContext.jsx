import { useContext } from 'react';
import { PokemonsContext } from '../contexts/PokemonsContext';

export default function usePokemonsContext() {
  const context = useContext(PokemonsContext);

  if (!context) {
    throw Error('PokemonsContext must be user within PokemonsContextProvider');
    return;
  }

  return context;
}
