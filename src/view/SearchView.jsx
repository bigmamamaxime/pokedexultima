import React, { useState } from "react"
import PokemonService from "../shared/api/service/PokemonService"
import "./SearchView.css"


export const SearchView = () => {
    const [data, setData] = useState()
    const [search, setSearch] = useState()
    
    const fetchDataFromExternalAPI = () => {
        
        PokemonService.searchForPokemon(search.toLowerCase())
        .then((response) => setData(response.data)+console.log(response.data))
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
                <h3>Stats</h3>
                <h3>Attack: {data.stats[1].base_stat}</h3>
                <h3>Defense: {data.stats[2].base_stat}</h3>
                <h3>Sp. Attack: {data.stats[3].base_stat}</h3>
                <h3>Sp. Defense: {data.stats[4].base_stat}</h3>
                <h3>Speed: {data.stats[5].base_stat}</h3>
            </div>
        }
        if(data) {
            return <div id="container" style="width:400px; height:400px;"></div>
        }
    }
    return (
        <div>
            <h1>{search}</h1>
            <span className="infotext">SEARCH FOR POKÉMON: </span>
            < br />
            <input className="inputspace" onChange={(event) => setSearch(event.target.value)} />

            <br />
            <button className="searchbutton" onClick={() => fetchDataFromExternalAPI()}>I CHOOSE YOU!</button>
            {displayData()}
        </div>        
    )
}