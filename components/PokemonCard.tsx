import Image from "next/image";
import Link from "next/link";

type PokeCard = {
	name: string;
	index: number;
	url: string;
};

const PokemonCard = (eachPokemon: PokeCard, { index }: { index: number }) => {
	return (
		<Link href={`/${eachPokemon.name}`}>
			<div className="flex flex-col w-60 border-2 border-yellow-400 rounded-lg overflow-hidden bg-blue-500">
				<Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
						eachPokemon.index + 1
					}.svg`}
					width={52}
					height={52}
					alt={"Image of the Pokemon " + eachPokemon.name}
					className="w-52 h-52 p-1"
				/>
				<div className="flex justify-between text-xl font-bold capitalize text-white p-2">
					<h1>{eachPokemon.name}</h1>
					<h1>#{eachPokemon.index + 1}</h1>
				</div>
			</div>
		</Link>
	);
};

export default PokemonCard;
