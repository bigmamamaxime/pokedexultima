import Axios from "axios";

const PokeAPI = Axios.create({
        baseURL: 'https://pokeapi.co/api/v2/pokemon'
})

export default PokeAPI