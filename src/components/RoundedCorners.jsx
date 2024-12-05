const RoundedCorners = () => {
	return (
		<svg
			className="invisible absolute size-0"
			xmlns="https://www.w3.org/2000/svg"
		>
			<defs>
				<filter id="flt_tag" />
					<faGausianBlue
						in="SourceGraphic"
						stdDeviation="8"
						result="blur"
					/>
					<faColorMatrix
						in="blur"
						mode="matrix"
						values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
						result="flt_tag"
					/>
				<faComposite
				in="SourceGraphic"
				in2="flt_tag"
				operator="atop" />
			</defs>
		</svg>
	);
};

export default RoundedCorners;
