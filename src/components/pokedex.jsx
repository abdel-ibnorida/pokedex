import React, { useState, useEffect } from 'react';
import Card from './card';
import './pokedex.css';
const Pokedex = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const [pokemonsDetails, setPokemonsDetails] = useState(null);
    const [pokemons, setPokemons] = useState([]);
    const [nextApi, setNextApi] = useState();
    const [btnLoadmore, setBtnLoadMore] = useState(true);
    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Errore nella richiesta API');
            }
            const data = await response.json();
            if ( pokemons.length > 119) {
                setNextApi('https://pokeapi.co/api/v2/pokemon/?offset=140&limit=11');
                if(pokemons.length > 130){setBtnLoadMore(false)}
            }
            else {
                setNextApi(data.next)
            }
            setPokemonData(data);
        } catch (error) {
            console.error('Errore durante il recupero dei dati:', error);
        }
    }

    const fetchPokemonsDetails = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Errore nella richiesta API');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Errore durante la richiesta..')
        }
    }

    const fetchDetails = async () => {
        const details = await Promise.all(
            pokemonData.results.map(async (pokemon) => {
                const detail = await fetchPokemonsDetails(pokemon.url);
                return detail;
            })
        );
        setPokemonsDetails(details);
    };

    const mixData = () => {
        if (pokemonData && pokemonsDetails && pokemonsDetails.length > 0) {
            const updatedPokemons = pokemonData.results.map((pokemon, index) => ({
                name: pokemon.name,
                image: pokemonsDetails[index].sprites.other.dream_world.front_default,
                id: pokemonsDetails[index].id,
                types: pokemonsDetails[index].types.map(el => el.type.name)
            }));
            setPokemons(prevPokemons => prevPokemons.concat(updatedPokemons));
        }
    }

    useEffect(() => {
        fetchData('https://pokeapi.co/api/v2/pokemon/');
    }, [])

    useEffect(() => {
        if (pokemonData && pokemonData.results) {
            fetchDetails();
        }
    }, [pokemonData])
    useEffect(() => {
        if (pokemonsDetails && pokemonsDetails.length > 0) {
            mixData();
        }
    }, [pokemonsDetails]);

    const LoadMore = async () => {
        fetchData(nextApi);
    };

    return (
        <div className='container'>
        <div className='cards_container'>
            {pokemons && pokemons.map(element => (
                <Card key={element.id} image={element.image} title={element.name} description={element.types} >

                </Card>
            ))}
        </div>
        {btnLoadmore && (<button onClick={() => LoadMore()}>load more</button>)}
        </div>
    );
};

export default Pokedex;
