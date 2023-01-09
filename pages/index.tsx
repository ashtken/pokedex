import { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";
import ListViewButton from "../components/ListViewButton";
import ListPokemonCard from "../components/ListPokemonCard";
import SinglePokemonCard from "../components/SinglePokemonCard";
import SingleViewButton from "../components/SingleViewButton";
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
	const [view, setView] = useState(false);
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
			<main className="font-mono max-w-screen-2xl flex flex-col justify-center m-auto">
				<div className="flex justify-end mr-4 sm:mr-14 mt-8">
					{view ? (
						<button
							onClick={() => setView(!view)}
							className="stroke-white hover:stroke-blue-500 transition ease-in-out delay-75"
						>
							<SingleViewButton />
						</button>
					) : (
						<button
							onClick={() => setView(!view)}
							className="stroke-white hover:stroke-blue-500 transition ease-in-out delay-75"
						>
							<ListViewButton />
						</button>
					)}
				</div>

				{view ? (
					<div className="flex flex-wrap justify-center mt-10">
						{pokemon.results.map((eachPokemon, index) => (
							<div key={eachPokemon.name} className="m-3">
								<ListPokemonCard {...eachPokemon} index={index} />
							</div>
						))}
					</div>
				) : (
					<div>
						<div className="flex justify-center align-middle my-10 sm:mb-52">
							<SinglePokemonCard {...pokemon} />
						</div>
						<hr className="h-0.5 bg-white border-0 rounded-xl mx-4 my-20 sm:hidden" />
						<div className="flex flex-wrap justify-center mt-10">
							{pokemon.results.map((eachPokemon, index) => (
								<div key={eachPokemon.name} className="m-3">
									<ListPokemonCard {...eachPokemon} index={index} />
								</div>
							))}
						</div>
					</div>
				)}
			</main>
		</>
	);
};

export default Home;
