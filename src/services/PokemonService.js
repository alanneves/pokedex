import axios from 'axios';

export default class PokemonService {
  static async all() {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=2000');

    return data.results;
  }
}
