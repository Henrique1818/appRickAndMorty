export const listarApiRickAndMorty = (nome) => fetch(`https://rickandmortyapi.com/api/character/?name=${nome}`)
  .then((resp) => resp.json())
  .then((data) => data);
