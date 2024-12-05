import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

const links = [
	{
		id: 0,
		link: "https://instagram.com/",
		icon: <FaInstagram />,
	},
	{
		id: 0,
		link: "https://t.me/",
		icon: <FaTelegram />,
	},
	{
		id: 0,
		link: "https://x.com/",
		icon: <FaTwitter />,
	},
];

const Footer = () => {
	return (
		<footer className="w-screen bg-violet-300 py-4 text-black">
			<div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
				<p className="text-center text-sm font-normal md:text-left">
					&copy; 2024. All rights reserved.
				</p>
				<div className="flex justify-center gap-4 md:justify-start">
					{links.map((item) => {
						return (
							<a
								key={item.id}
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className="text-black transition-colors duration-500 ease-in-out hover:text-white text-xl"
							>
								{item.icon}
							</a>
						);
					})}
				</div>
				<a href="" className="text-center text-sm hover:underline md:text-right">Privacy and Policy</a>
			</div>
		</footer>
	);
};

export default Footer;
