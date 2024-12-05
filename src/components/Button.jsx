const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
	return (
		<button
			id={id}
			className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black hover:opacity-85 transition-all ${containerClass}`}
		>
			{leftIcon}
			<span className="relative inline-flex overflow-hidden font-geenral uppercase text-xs">
				<div>
					{title}
				</div>
			</span>
			{rightIcon}
		</button>
	);
};

export default Button;
