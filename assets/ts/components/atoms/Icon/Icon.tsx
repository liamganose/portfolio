import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export interface IconProps {
    icon:
        | "github"
        | "linkedin"
        | "spotify";
}

const Icon: React.FC = ({ icon }: IconProps) => {
    const { resolvedTheme } = useTheme();
    const [iconUrl, setIconUrl] = useState(`/images/${icon}_light.svg`);

    useEffect(() => {
        setIconUrl(`/images/${icon}_${resolvedTheme}.svg`);
	}, [resolvedTheme]); 
    
    return <img src={iconUrl} />;

};

export { Icon };