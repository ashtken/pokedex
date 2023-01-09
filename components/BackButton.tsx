import Link from "next/link";

const BackButton = () => {
	return (
		<Link
			href="/"
			className="flex items-center p-2 text-lg font-semibold text-white stroke-white   rounded-lg overflow-hidden  hover:bg-blue-700 hover:border-blue-700 transition ease-in-out delay-75"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="3"
				stroke="#ffffff"
				className="w-5 h-5 mr-1 stroke-inherit"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M15.75 19.5L8.25 12l7.5-7.5"
				/>
			</svg>
			All Pokemon
		</Link>
	);
};

export default BackButton;
