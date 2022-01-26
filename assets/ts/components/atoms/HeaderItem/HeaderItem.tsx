import React from "react";
import classNames from "classnames";
import { useLocation, Link } from "react-router-dom";

export interface HeaderItemProps {
    href: string;
    title: string;
}

const HeaderItem: React.FC = ({ href, title }: HeaderItemProps) => {
    const location = useLocation();
    const isActive = location.pathname === href;
    
    return (
        <Link to={href} className={classNames(isActive
                                    ? 'font-bold text-off-black dark:text-off-white'
                                    : 'font-medium text-grey-700 md:text-grey-500 hover:text-off-black dark:hover:text-off-white',
					'md:underlined transition relative block whitespace-nowrap text-2xl md:text-lg')}>
            {title}
        </Link>
    );
};

export { HeaderItem };
