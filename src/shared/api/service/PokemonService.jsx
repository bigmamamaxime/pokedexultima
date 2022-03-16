import http from '../PokeAPI'

const searchForPokemon = (userSearch) => {
    return http.get(`/${userSearch}`)
}

export default {
    searchForPokemon
}