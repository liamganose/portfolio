import { useEffect, useState } from 'react';

//import { BurgerIcon } from 'Atoms/BurgerIcon';
//import { MobileMenu } from 'Molecules/MobileMenu';
//import { NavigationItem } from 'Atoms/NavigationItem';
//import { ThemeToggle } from 'Atoms/ThemeToggle';

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
					<a href="/">
						<a className="group relative transition whitespace-nowrap hover:transition duration-300 text-2xl font-bold">
							<span className="transition duration-300 opacity-100 group-hover:opacity-0">
								@liamganose
							</span>
							<span className="absolute transition duration-300 left-0	 opacity-0 group-hover:opacity-100 text-transparent bg-clip-text hover:bg-gradient-to-r from-blue-start to-blue-stop dark:from-purple-start dark:to-purple-stop">
								Liam Ganose
							</span>
						</a>
					</a>
                    <!---
					<nav className="hidden md:block">
						<ul className="flex gap-8 text-lg">
							<NavigationItem href="/about" title="About" />
						    <NavigationItem href="/work" title="Work" />
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
						<ThemeToggle />
					</div>
                    --->
				</div>
			</header>
			<!---<MobileMenu isOpen={isOpen} />--->
		</>
	);
};

export { Header };