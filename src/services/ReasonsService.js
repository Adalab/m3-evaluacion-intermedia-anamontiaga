const getDataFromServer = () => {
  return (
    fetch("./data.json")
      // la ruta la busca en public, de la raiz, que es dónde se va a ejecutar
      .then(response => response.json())
      .then(pokemons => {
        return pokemons.map(pokemon => {
          // Formateo los datos
          return {
            name: pokemon.name,
            url: pokemon.url,
            types: pokemon.types
          };
        });
      })
  );
};

export default getDataFromServer;
