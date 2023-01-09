const PokemonType = ({ type }: { type: { name: string; url: string } }) => {
	return (
		<div
			className={`${type.name === `flying` ? "bg-purple-300" : ""}${
				type.name === `fire` ? "bg-orange-500" : ""
			}${type.name === `normal` ? "bg-neutral-500" : ""}${
				type.name === `water` ? "bg-blue-300" : ""
			}${type.name === `grass` ? "bg-green-600" : ""}${
				type.name === `electric` ? "bg-yellow-400" : ""
			}${type.name === `ice` ? "bg-cyan-300" : ""}${
				type.name === `fighting` ? "bg-red-700" : ""
			}${type.name === `poison` ? "bg-purple-600" : ""}${
				type.name === `ground` ? "bg-amber-700" : ""
			}${type.name === `psychic` ? "bg-pink-500" : ""}${
				type.name === `bug` ? "bg-lime-400" : ""
			}${type.name === `rock` ? "bg-slate-700" : ""}${
				type.name === `ghost` ? "bg-violet-400" : ""
			}${type.name === `dark` ? "bg-gray-500" : ""}${
				type.name === `dragon` ? "bg-purple-800" : ""
			}${type.name === `steel` ? "bg-slate-500" : ""}${
				type.name === `fairy` ? "bg-pink-300" : ""
			} uppercase font-bold text-lg rounded-lg text-center p-1 mr-2 mt-5 w-24`}
		>
			<p>{type.name}</p>
		</div>
	);
};

export default PokemonType;
