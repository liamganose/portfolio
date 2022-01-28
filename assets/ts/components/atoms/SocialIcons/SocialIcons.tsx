import React from "react";

import { Icon, IconProps } from "Atoms/Icon";

export interface SocialIconsProps {
    profiles: Array<{
        name: string,
        url: string,
        icon: IconProps['icon']
    }>;
}

const SocialIcons: React.FC<SocialIconProps> = ({ profiles }: SocialIconProps) => {
    return (
        <ul className="flex gap-6">
			{profiles.map(({ url, name, icon }) => (
				<li
					className="w-6 h-6 opacity-70 hover:opacity-100 transition"
					key={name}
				>
					<a href={url} target="_blank" title={name}>
						<Icon icon={icon} />
					</a>
				</li>
			))}
		</ul>
    );
};

export { SocialIcons };
