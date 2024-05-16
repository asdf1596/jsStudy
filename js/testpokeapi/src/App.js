import React, { useState } from "react";

function App() {
    const [pokemons, setPokemons] = useState([]);

    const poke = async () => {
        const newPokemons = [];
        for (let a = 1; a < 152; a++) {
            try {
                const response = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${a}`
                );
                const speciesResponse = await fetch(
                    `https://pokeapi.co/api/v2/pokemon-species/${a}`
                );

                const data = await response.json();
                const speciesData = await speciesResponse.json();

                const koreanNameEntry = speciesData.names.find(
                    (name) => name.language.name === "ko"
                );
                const koreanName = koreanNameEntry
                    ? koreanNameEntry.name
                    : data.name;

                newPokemons.push({ id: data.id, name: koreanName });
            } catch (error) {
                console.error("Error:", error);
            }
        }
        setPokemons(newPokemons);
    };

    return (
        <div className="App">
            <button onClick={poke}>Fetch Pokemon</button>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.id}>
                        {pokemon.id}: {pokemon.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
