import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PokemonList } from "../types";

const SinglePokemonCard = (pokemon: PokemonList) => {
	const [count, setCount] = useState(1);
	const range = (num: number) => {
		if (num > 151) {
			setCount(1);
		} else if (num < 1) {
			setCount(151);
		} else {
			setCount(num);
		}
	};
	return (
		<div className="flex">
			<button onClick={() => range(count - 1)} className="mr-11">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="3"
					stroke="#ffffff"
					className="w-20 h-20"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 19.5L8.25 12l7.5-7.5"
					/>
				</svg>
			</button>
			<Link href={`/${pokemon.results[count - 1].name}`}>
				<div className="flex flex-col w-80">
					<Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${count}.svg`}
						width={80}
						height={80}
						alt={"Image of the Pokemon " + pokemon.results[count - 1].name}
						className="w-80 h-80 p-1 mb-10 drop-shadow-2xl"
					/>
					<div className="flex justify-between text-4xl font-semibold capitalize text-white p-5  border-2 border-yellow-400 rounded-lg overflow-hidden bg-blue-500">
						<h1>{pokemon.results[count - 1].name}</h1>
						<h1>#{count}</h1>
					</div>
				</div>
			</Link>
			<button onClick={() => range(count + 1)} className="ml-11">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="3"
					stroke="#ffffff"
					className="w-20 h-20"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M8.25 4.5l7.5 7.5-7.5 7.5"
					/>
				</svg>
			</button>
		</div>
	);
};

export default SinglePokemonCard;
