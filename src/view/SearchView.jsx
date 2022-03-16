import React, { useState } from "react"
import PokemonService from "../shared/api/service/PokemonService"
import "./SearchView.css"


export const SearchView = () => {
    const [data, setData] = useState()
    const [search, setSearch] = useState()
    
    const fetchDataFromExternalAPI = () => {
        
        PokemonService.searchForPokemon(search.toLowerCase())
        .then((response) => setData(response.data))
        .catch((error) => console.log(error))
    }

    const makeFirstCharUpperCase = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    const displayData = () => {
        if(data) {
            return <div>
                <h3>id: {data.id}</h3>
                <img className="pkmimg" src={data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default} alt="Error..." />
                <h3>Name: {makeFirstCharUpperCase(data.name)}</h3>
                <h3>Ability: {makeFirstCharUpperCase(data.abilities[0].ability.name)}</h3>
            </div>
        }
        if(data) {
            return <div id="container" style="width:400px; height:400px;"></div>
        }
    }
    return (
        <div>
            <h1>{search}</h1>
            <span>Search for Pokémon: </span>
            <input onChange={(event) => setSearch(event.target.value)} />

            <br />
            <button className="searchbutton" onClick={() => fetchDataFromExternalAPI()}>I CHOOSE YOU!</button>
            {displayData()}
        </div>        
    )
}