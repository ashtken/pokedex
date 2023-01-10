import { Pokemon } from "../types";
import PokemonType from "./PokemonType";

const PokemonStats = (pokemon: Pokemon) => {
	return (
		<div className="text-white text-lg font-semibold p-4 capitalize border-2 border-yellow-400 rounded-lg overflow-hidden bg-blue-600">
			<div className="flex flex-wrap">
				<div className="mr-6 mb-6">
					<h2 className="text-3xl mb-2">Stats:</h2>
					<ul>
						<li>Height: {pokemon.height}</li>
						<li>Weight: {pokemon.weight}</li>
						{pokemon.stats.map((stat, i) => (
							<li key={i}>
								{stat.stat.name}: {stat.base_stat}
							</li>
						))}
					</ul>
				</div>
				<div className="mb-6">
					<h2 className="text-3xl mb-2">Abilities:</h2>
					<ul>
						{pokemon.abilities.map((ability, i) => (
							<li key={i}>{ability.ability.name}</li>
						))}
					</ul>
				</div>
			</div>
			<div>
				<h2 className="text-3xl">Types:</h2>
				<div className="flex">
					{pokemon.types.map((type, i) => (
						<PokemonType {...type} key={i} />
					))}
				</div>
			</div>
		</div>
	);
};

export default PokemonStats;
