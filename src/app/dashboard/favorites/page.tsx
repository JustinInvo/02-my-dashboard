import { FavoritePokemons } from "@/pokemons"

export const metadata = {
  title: 'Favoritos Pokémons',
  description: 'Listado de los primeros 151 pokémons',
}

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokémons Favoritos 
        <small className="text-blue-500"> Gobal State</small>
      </span>
      <FavoritePokemons/>
    </div>
  )
}