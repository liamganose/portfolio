import classNames from 'classnames';
import React from "react";

export interface BurgerIconProps {
	isOpen: boolean;
}

const BurgerIcon: React.FC = ({ isOpen }: BurgerIconProps) => {
	return (
		<div
			className={classNames('burger-icon', {
				open: isOpen,
			})}
		>
			<span />
			<span />
			<span />
			<span />
		</div>
	);
};

export { BurgerIcon };
