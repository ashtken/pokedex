import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { Pokemon } from "../types";
import { PokemonList } from "../types";

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
	const pokemon: PokemonList = await res.json();
	const paths = pokemon.results.map((pokemon) => ({
		params: { name: pokemon.name },
	}));
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (paths) => {
	const name = paths.params?.name;
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
	const pokemon: Pokemon = await res.json();
	return {
		props: {
			pokemon,
		},
	};
};

const SinglePokemon = ({ pokemon }: { pokemon: Pokemon }) => {
	return (
		<>
			<Head>
				<title>{pokemon.name}</title>
				<meta
					name="description"
					content={`Information for the Pokemon ${pokemon.name}`}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					rel="icon"
					href={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
				/>
			</Head>
			<main>
				<>
					<h1>Pokemon: {pokemon.name}</h1>
				</>
			</main>
		</>
	);
};

export default SinglePokemon;
