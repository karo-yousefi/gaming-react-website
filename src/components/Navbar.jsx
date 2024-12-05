import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = [
	{
		id: 0,
		title: "Home",
		link: "#home",
	},
	{
		id: 1,
		title: "About",
		link: "#about",
	},
	{
		id: 2,
		title: "Services",
		link: "#services",
	},
	{
		id: 3,
		title: "Contact",
		link: "#contact",
	},
	{
		id: 4,
		title: "Info",
		link: "#info",
	},
];

const Navbar = () => {
	const navContainerRef = useRef(null);

	const { y: currentScrollY } = useWindowScroll();

	const [ lastSCrollY, setLastScrollY ] = useState(0);
	const [ isNavVisible, setIsNavVisible ] = useState(true);

	useEffect(() => {
		if (currentScrollY === 0) {
			setIsNavVisible(true);
			navContainerRef.current.classList.remove("floating-nav");
		}
		else if (currentScrollY > lastSCrollY) {
			setIsNavVisible(false);
			navContainerRef.current.classList.add("floating-nav");
		}
		else if (currentScrollY < lastSCrollY) {
			setIsNavVisible(true);
			navContainerRef.current.classList.add("floating-nav");
		}

		setLastScrollY(currentScrollY);

	}, [currentScrollY]);


	useEffect(() => {
		gsap.to(navContainerRef.current, {
			y: isNavVisible ? 0 : -100,
			opacity: isNavVisible ? 1 : 0,
			scale: isNavVisible ? 1 : 0.8,
			duration: 0.2,
		});
	}, [isNavVisible])

	return (
		<div
			ref={navContainerRef}
			className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
		>
			<header className="absolute top-1/2 w-full -translate-y-1/2">
				<nav className="flex size-full items-center justify-center p-4">
					<div className="flex items-center gap-7">
						<img src="/img/logo.png" alt="logo" className="w-10" />
						<Button
							id="products-button"
							title="products"
							rightIcon={<TiLocationArrow />}
							containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
						/>
					</div>
					<div className="flex h-full items-center">
						<div className="hidden md:block">
							{navItems.map((item) => {
								return (
									<a key={item.id} href={item.link} className="nav-hover-btn">
										{item.title}
									</a>
								);
							})}
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
