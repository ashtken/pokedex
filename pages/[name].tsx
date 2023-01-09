import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import BackButton from "../components/BackButton";
import PokemonMoves from "../components/PokemonMoves";
import PokemonStats from "../components/PokemonStats";
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
			<main className="font-mono max-w-screen-2xl flex flex-col justify-center m-auto my-11 ">
				<>
					<header className="flex flex-wrap text-center flex-col md:flex-row md:justify-between md:px-28 mb-12 md:mb-24">
						<h1 className="text-4xl sm:text-6xl font-semibold text-center text-white capitalize">
							{pokemon.name}
						</h1>
						<h1 className="sm:text-6xl font-semibold text-center text-white capitalize">
							{pokemon.id}/151
						</h1>
					</header>
					<div className="flex flex-wrap justify-center items-center flex-col lg:flex-row">
						<section className="lg:mr-11 mb-16 lg:mb-0">
							<Image
								src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
								width={96}
								height={96}
								alt={"Image of the Pokemon " + pokemon.id}
								className="w-64 h-64 sm:w-96 sm:h-96 drop-shadow-2xl"
							/>
						</section>
						<section className="lg:ml-11 mx-2 lg:mx-0">
							<PokemonStats {...pokemon} />
						</section>
					</div>
					<div className=" mb-14 mt-28 md:flex justify-center m-auto">
						<BackButton />
					</div>
				</>
			</main>
		</>
	);
};

export default SinglePokemon;
