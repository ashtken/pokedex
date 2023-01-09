import { Pokemon } from "../types";

const PokemonMoves = (pokemon: Pokemon) => {
	return (
		<div className="w- text-white text-lg font-semibold p-4 capitalize border-2 border-yellow-400 rounded-lg overflow-hidden bg-blue-500">
			<h2 className="text-3xl mb-6">Moves:</h2>
			<ul className="flex flex-wrap flex-col">
				{pokemon.moves.map((move, i) => (
					<li key={i} className="mr-2 capitalize">
						{i + 1 + ". "}
						{move.move.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PokemonMoves;
