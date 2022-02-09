import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { BurgerIcon } from "Atoms/BurgerIcon";
import { HeaderItem } from "Atoms/HeaderItem";
import { ThemeButton } from "Atoms/ThemeButton";
import { MobileMenu } from 'Molecules/MobileMenu';

const headerItems: {href: string; title: string;}[] = [
    {"href": "/about", "title": "About"},
    {"href": "/work", "title": "Work"},
    {"href": "/projects", "title": "Projects"}
];

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
    let location = useLocation();

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

    useEffect(() => {
		setIsOpen(false);
	}, [location]);

	return (
		<>
			<header className="relative z-50 backdrop-blur-md px-4 lg:px-20 py-8">
				<div className="flex justify-between items-center">
					<Link to='/' className="group relative transition whitespace-nowrap hover:transition duration-300 text-2xl font-bold">
						<span className="transition duration-300 opacity-100 group-hover:opacity-0">
							@liamganose
						</span>
						<span className="absolute transition duration-300 left-0 opacity-0 group-hover:opacity-100 text-transparent bg-clip-text hover:bg-gradient-to-r from-blue-start to-blue-stop dark:from-purple-start dark:to-purple-stop">
							Liam Ganose
						</span>
					</Link>
                    <nav className="hidden md:block">
						<ul className="flex gap-8 text-lg">
                            {headerItems.map(({ href, title }, i) => (
                                <HeaderItem href={href} title={title} key={i}/>
                            ))}
                        </ul>
                    </nav>
                    <button
						className="absolute z-50 top-8 right-4 md:hidden"
						onClick={() => setIsOpen((prev) => !prev)}
						aria-label="Menu"
					>
						<BurgerIcon isOpen={isOpen} />
					</button>
                    <div className="hidden md:block">
						<ThemeButton />
					</div>
				</div>
			</header>
            <MobileMenu isOpen={isOpen} />
		</>
	);
};

export { Header, headerItems };
