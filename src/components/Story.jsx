import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

const Story = () => {
	const frameRef = useRef("null");

	const handleMouseLeave = (e) => {
		const element = frameRef.current;

		gsap.to(element, {
			duration: 0.6,
			rotateX: 0,
			rotateY: 0,
			ease: "power2.inOut",
		});
	};

	const handleMouseMove = (e) => {
		const { clientX, clientY } = e;
		const element = frameRef.current;

		if (!element) {
			return;
		}

		const elementProperties = element.getBoundingClientRect();
		const x = clientX - elementProperties.left;
		const y = clientY - elementProperties.top;

		const centerX = elementProperties.width / 2;
		const centerY = elementProperties.height / 2;

		const rotateX = ((y - centerY) / centerY) * 20;
		const rotateY = ((x - centerX) / centerX) * 20;

		gsap.to(element, {
			duration: 0.4,
			rotateX: rotateX,
			rotateY: rotateY,
		});
	};

	return (
		<section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
			<div className="flex size-full flex-col items-center py-10 pb-24">
				<p className="font-genral text-sm uppercase md:text-[10px]">
					This is a text
				</p>

				<div className="relative size-full">
					<AnimatedTitle
						title="The st<b>o</b>ry of<br /> a hid<b>d</b>en realm"
						sectionId="#story"
						containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
					/>

					<div className="story-img-container">
						<div className="story-img-mask">
							<div className="story-img-content">
								<img
									src="img/entrance.webp"
									alt="enterance"
									className="object-contain"
									ref={frameRef}
									onMouseLeave={handleMouseLeave}
									onMouseUp={handleMouseLeave}
									onMouseEnter={handleMouseLeave}
									onMouseMove={handleMouseMove}
								/>
							</div>
						</div>
						<RoundedCorners />
					</div>
				</div>
				<div className="-mt-80 flex w-full justify-center md:-mt-64 md:em-44 md:justify-end">
					<div className="flex h-full w-fit flex-col items-center md:items-start">
						<p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
							This is another text explaining more about the website.
						</p>
						<Button id="" title="discover" containerClass="mt-5"/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Story;
