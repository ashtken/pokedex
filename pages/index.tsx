import { GetStaticProps } from "next";
import Head from "next/head";
import PokemonCard from "../components/PokemonCard";
import { PokemonList } from "../types";

export const getStaticProps: GetStaticProps = async () => {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
	const pokemon: PokemonList = await res.json();
	return {
		props: {
			pokemon,
		},
	};
};

const Home = ({ pokemon }: { pokemon: PokemonList }) => {
	return (
		<>
			<Head>
				<title>Pokedex</title>
				<meta name="description" content="Pokedex of the first 150 Pokemon" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					rel="icon"
					href={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg`}
				/>
			</Head>
			<main>
				<div className="flex flex-wrap justify-center mt-10">
					{pokemon.results.map((eachPokemon, index) => (
						<div key={eachPokemon.name} className="m-3">
							<PokemonCard {...eachPokemon} index={index} />
						</div>
					))}
				</div>
			</main>
		</>
	);
};

export default Home;
