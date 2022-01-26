import React from "react";
import { useEffect, useState } from "react";
import { HeaderItem } from "Atoms/HeaderItem";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	return (
		<>
			<header className="relative z-50 backdrop-blur-md px-4 lg:px-20 py-8">
				<div className="flex justify-between items-center">
					<a href='/' className="group relative transition whitespace-nowrap hover:transition duration-300 text-2xl font-bold">
						<span className="transition duration-300 opacity-100 group-hover:opacity-0">
							@liamganose
						</span>
						<span className="absolute transition duration-300 left-0 opacity-0 group-hover:opacity-100 text-transparent bg-clip-text hover:bg-gradient-to-r from-blue-start to-blue-stop dark:from-purple-start dark:to-purple-stop">
							Liam Ganose
						</span>
					</a>
                    <nav className="hidden md:block">
						<ul className="flex gap-8 text-lg">
                            <HeaderItem href="/" title="Home" />
                            <HeaderItem href="/about" title="About" />
                            <HeaderItem href="/work" title="Work" />
                        </ul>
                    </nav>
				</div>
			</header>
		</>
	);
};

export { Header };
