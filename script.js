let poke = document.getElementById("pokemon")
    function pokemonData() {
        fetch('https://pokeapi.co/api/v2/pokemon/' + poke.value)
            .then(response => response.json())
            .then(data => {
                const name = data.name;
                const imageUrl = data.sprites.front_default;
                const type = data.types.type;
                const height = data.height;
                const weight = data.weight;
                const bio = data.effect_entries.effect;
                
                document.getElementById("pokemonName").textContent = name;
                document.getElementById("pokemonPic").src = imageUrl;
                document.getElementById("pokemonType").textContent = type;
                document.getElementById("pokemonHeight").textContent = height;
                document.getElementById("pokemonWeight").textContent = weight;
                document.getElementById("pokemonBio").textContent = bio
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }