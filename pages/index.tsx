import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
				<div>
					{pokemon.results.map((eachPokemon, i) => (
						<Link href={`/${eachPokemon.name}`} key={eachPokemon.name}>
							<div>
								<h1>{eachPokemon.name}</h1>
								<h1>{eachPokemon.url}</h1>
								<Image
									src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
										i + 1
									}.svg`}
									width={150}
									height={150}
									alt={"Image of the Pokemon " + eachPokemon.name}
								/>
							</div>
						</Link>
					))}
				</div>
			</main>
		</>
	);
};

export default Home;
